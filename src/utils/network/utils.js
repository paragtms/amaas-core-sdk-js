import request from 'superagent'
import { endpoint, userPoolId, clientAppId } from '../../config.js'
import fs from 'fs'
import { AuthenticationDetails, CognitoUser, CognitoUserPool } from 'amazon-cognito-identity-js'
import expandTilde from 'expand-tilde'

const userPool = new CognitoUserPool({
  UserPoolId: userPoolId,
  ClientId: clientAppId
})

export function getEndpoint({ stage, apiVersion }) {
  switch (stage) {
    case 'dev':
    case 'staging':
      return `${endpoint.dev}/${apiVersion || 'v1.0'}`
    case 'prod':
      return `${endpoint.prod}/${apiVersion || 'sg1.0'}`
    default:
      console.warn(`Unknown stage variable: ${stage}. Defaulting to dev`)
      return `${endpoint.dev}/${apiVersion || 'v1.0'}`
  }
}

function isNode() {
  try {
    return Object.prototype.toString.call(global.process) === '[object process]'
  } catch(e) {
    return false
  }
}

export function authenticate(credPath) {
  let injectedResolve
  let injectedReject
  return new Promise((resolve, reject) => {
    injectedResolve = resolve
    injectedReject = reject
    let path
    if (credPath) {
      path = credPath
    } else {
      path = `${expandTilde('~')}/amaas.js`
    }
    console.log(`Reading credentials from ${path}`)
    fs.readFile(path, (error, data)=> {
      if (error) {
        return injectedReject(error)
    }
      const Username = JSON.parse(data).username
      const Password = JSON.parse(data).password
      const authenticationDetails = new AuthenticationDetails({
        Username,
        Password
      })
      const cognitoUser = new CognitoUser({
        Username,
        Pool: userPool
      })
      console.log('Starting authentication...')
      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: res => injectedResolve(res.getIdToken().getJwtToken()),
        onFailure: err => injectedReject(err)
      })
    })
  })
}

export function getToken(stage, credPath) {
  // token injection
  // if (token && token.length > 0) {
  //   return Promise.resolve(token)
  // }
  let injectedResolve
  let injectedReject
  return new Promise((resolve, reject) => {
    injectedResolve = resolve
    injectedReject = reject
    switch (stage) {
      case 'staging':
      case 'prod':
        const cognitoUser = userPool.getCurrentUser()
        if (!cognitoUser) {
          if (isNode()) {
            console.warn('No user in storage, attempting to authenticate...')
            authenticate(credPath)
              .then(res => injectedResolve(res))
              .catch(err => injectedReject(err))
          } else {
            injectedReject('Unauthorized, please re-authenticate')
          }
        } else {
          cognitoUser.getSession((err, session) => {
            if (session) {
              console.log('getSession success')
              injectedResolve(session.getIdToken().getJwtToken())
            } else {
              if (isNode()) {
                console.warn('getSession failure, attempting to authenticate')
                  authenticate(credPath)
                  .then(res => injectedResolve(res))
                  .catch(err => injectedReject(err))
              } else {
                injectedReject('Unauthorized, please re-authenticate')
              }
            }
          })
        }
        break
      default:
        injectedReject('Missing Authorization')
    }
  })
}

/***
 * !This is an internal function that should not be called by the end user!

 * Builds a URL for HTTP request
 * @param {object} anonymous: anonyous object with arguments:
 * @param {string} AMaaSClass: class being requested/sent (e.g. Transaction) (required)
 * @param {string} AMId: Asset Manager Id (required)
 * @param {string} resourceId: Id of the resource being requested (e.g. book_id)
*/
export function buildURL({ AMaaSClass, AMId, resourceId, stage, apiVersion }) {
  let baseURL = ''
  switch (AMaaSClass) {
    case 'book':
      baseURL = `${getEndpoint({ stage, apiVersion })}/book/books`
      break
    case 'parties':
      baseURL = `${getEndpoint({ stage, apiVersion })}/party/parties`
      break
    case 'assetManagers':
      baseURL = `${getEndpoint({ stage, apiVersion })}/assetmanager/asset-managers`
      break
    case 'assetManagerDomains':
      baseURL = `${getEndpoint({ stage, apiVersion })}/assetmanager/domains`
      break
    case 'assetManagerEODBooks':
      baseURL = `${getEndpoint({ stage, apiVersion })}/assetmanager/eod-books`
      break
    case 'assets':
      baseURL = `${getEndpoint({ stage, apiVersion })}/asset/assets`
      break
    case 'positions':
      baseURL = `${getEndpoint({ stage, apiVersion })}/transaction/positions`
      break
    case 'allocations':
      baseURL = `${getEndpoint({ stage, apiVersion })}/transaction/allocations`
      break
    case 'monitorItems':
      baseURL = `${getEndpoint({ stage, apiVersion })}/monitor/items`
      break
    case 'monitorEvents':
      baseURL = `${getEndpoint({ stage, apiVersion })}/monitor/events`
      break
    case 'netting':
      baseURL = `${getEndpoint({ stage, apiVersion })}/transaction/netting`
      break
    case 'relationships':
      baseURL = `${getEndpoint({ stage, apiVersion })}/assetmanager/asset-manager-relationships`
      break
    case 'relationshipRequest':
      baseURL = `${getEndpoint({ stage, apiVersion })}/assetmanager/relationship-request`
      break
    case 'assetManagerPubSubCredentials':
      baseURL = `${getEndpoint({ stage, apiVersion })}/assetmanager/credential`
      break
    case 'transactions':
      baseURL = `${getEndpoint({ stage, apiVersion })}/transaction/transactions`
      break
    case 'corporateActions':
      baseURL = `${getEndpoint({ stage, apiVersion })}/corporateaction/corporate-actions`
      break
    case 'fundamentalCountries':
      baseURL = `${getEndpoint({ stage, apiVersion })}/fundamental/countries`
      break
    case 'fundamentalBusinessDate':
      baseURL = `${getEndpoint({ stage, apiVersion })}/fundamental/business-date`
      break
    case 'fundamentalDateInfo':
      baseURL = `${getEndpoint({ stage, apiVersion })}/fundamental/date-info/`
      break
    case 'fundamentalHoliday':
      baseURL = `${getEndpoint({ stage, apiVersion })}/fundamental/holidays`
      break
    default:
      throw new Error(`Invalid class type: ${AMaaSClass}`)
  }
  console.log(baseURL)
  if (!AMId) {
    return `${baseURL}`
  } else if (!resourceId) {
    return `${baseURL}/${AMId}`
  } else {
    return `${baseURL}/${AMId}/${resourceId}`
  }
}

export function setAuthorization(stage) {
  switch (stage) {
    case 'staging':
    case 'prod':
    default:
      return 'Authorization'
  }
}

export function makeRequest({ method, url, data, query, stage, credPath }) {
  return getToken(stage, credPath)
    .then(res => {
      switch (method) {
        case 'GET':
          return request.get(url).set(setAuthorization(stage), res).query(query)
        case 'SEARCH':
          return request.get(url).set(setAuthorization(stage), res).query(data)
        case 'POST':
          return request.post(url).send(data).set(setAuthorization(stage), res).query(query)
        case 'PUT':
          return request.put(url).send(data).set(setAuthorization(stage), res).query({ camelcase: true })
        case 'PATCH':
          return request.patch(url).send(data).set(setAuthorization(stage), res).query({ camelcase: true })
        case 'DELETE':
          return request.delete(url).set(setAuthorization(stage), res).query({ camelcase: true })
        default:
      }
    })
    .catch(err => Promise.reject(err))
}