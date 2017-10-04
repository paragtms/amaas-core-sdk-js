import * as utils from './utils'

let stage = 'staging'
let apiVersion = 'v1.0'
let token
let credPath

export function configureStage(config) {
  if (config.stage) {
    stage = config.stage
  }
  if (config.credentialsPath) {
    credPath = config.credentialsPath
  }
  if (config.apiVersion) {
    apiVersion = config.apiVersion
  }
  return
}

export function configureAuth(config) {
  if (config.token) {
    token = config.token
  }
  return
}

/***
 * !This is an internal function that should not be called by the end user!
 * !Wrapper functions are exposed for the individual asset classes for consumption!

 * Base function for retrieval of data from the database (GET request)
 * @param {object} anonymous: anonymous object with arguments:
 * @param {string} AMaaSClass: class being requested/sent (e.g. Transaction) (required)
 * @param {string} AMId: Asset Manager Id (required)
 * @param {string} [resourceId]: Id of the resource being requested (e.g. book_id)
 * @param {object} [query] - Additional query parameters
*/
export function retrieveData(
  { AMaaSClass, AMId, resourceId, query },
  callback
) {
  let url
  let data = {}
  // If resourceId is supplied, append to url. Otherwise, return all data for AMId
  try {
    url = utils.buildURL({ AMaaSClass, AMId, resourceId, stage, apiVersion })
  } catch (e) {
    if (typeof callback !== 'function') {
      return Promise.reject(e)
    }
    callback(e)
    return
  }
  let queryParams = {}
  if (typeof query === 'object' && Object.keys(query).length > 0) {
    queryParams = parseQueryParams(query)
  }
  let promise = utils.makeRequest({
    method: 'GET',
    url,
    query: queryParams,
    stage
  })
  if (typeof callback !== 'function') {
    // return promise if callback is not provided
    return promise.then(response => response.body)
  }
  promise
    .then((response, error) => {
      if (!error && response.status == 200) {
        callback(null, response.body)
      } else {
        const statusCode = response ? response.status : ''
        const requestError = { statusCode, error }
        if (typeof callback === 'function') {
          callback(requestError)
        }
      }
    })
    .catch(err => {
      if (typeof callback === 'function') {
        return callback(err)
      }
    })
}

/***
 * !This is an internal function that should not be called by the end user!
 * !Wrapper functions are exposed for the individual asset classes for consumption!

 * Base function for insertion of data to the database (POST request)
 * @param {object} anonymous: anonymous object with arguments:
 * @param {string} AMaaSClass: class being requested/sent (e.g. Transaction) (required)
 * @param {string} AMId: Asset Manager Id (required)
 * @param {string} data: data to insert into database
*/
export function insertData(
  { AMaaSClass, AMId, resourceId, data, queryParams },
  callback
) {
  let url
  try {
    url = utils.buildURL({
      AMaaSClass,
      AMId,
      resourceId,
      stage,
      apiVersion
    })
  } catch (e) {
    if (typeof callback !== 'function') {
      return Promise.reject(e)
    }
    callback(e)
    return
  }
  // Data is object with required key value pairs for that class
  const params = {
    url,
    json: data
  }
  let query = {}
  if (typeof queryParams === 'object' && Object.keys(queryParams).length > 0) {
    query = parseQueryParams(queryParams)
  }
  let promise = utils.makeRequest({ method: 'POST', url, data, query, stage })
  if (typeof callback !== 'function') {
    // return promise if callback is not provided
    return promise.then(response => response.body)
  }
  promise
    .then((response, error) => {
      let body
      if (response) body = response.body
      _networkCallback(error, response, body, callback)
    })
    .catch(err => {
      if (typeof callback === 'function') {
        return callback(err)
      }
    })
}

export function putData(
  { AMaaSClass, AMId, resourceId, data, query },
  callback
) {
  let url
  try {
    url = utils.buildURL({
      AMaaSClass,
      AMId,
      resourceId,
      stage,
      apiVersion
    })
  } catch (e) {
    if (typeof callback !== 'function') {
      return Promise.reject(e)
    }
    callback(e)
    return
  }
  let promise = utils.makeRequest({ method: 'PUT', url, data, stage, query })
  if (typeof callback !== 'function') {
    // return promise if callback is not provided
    return promise.then(response => response.body)
  }
  promise
    .then((response, error) => {
      let body
      if (response) body = response.body
      _networkCallback(error, response, body, callback)
    })
    .catch(err => {
      if (typeof callback === 'function') {
        return callback(err)
      }
    })
}

export function patchData(
  { AMaaSClass, AMId, resourceId, data, query },
  callback
) {
  let url
  try {
    url = utils.buildURL({
      AMaaSClass,
      AMId,
      resourceId,
      stage,
      apiVersion
    })
  } catch (e) {
    if (typeof callback !== 'function') {
      return Promise.reject(e)
    }
    callback(e)
    return
  }
  const params = {
    url,
    json: data
  }
  let promise = utils.makeRequest({ method: 'PATCH', url, data, stage, query })
  if (typeof callback !== 'function') {
    // return promise if callback is not provided
    return promise.then(response => response.body)
  }
  promise
    .then((response, error) => {
      let body
      if (response) body = response.body
      _networkCallback(error, response, body, callback)
    })
    .catch(err => {
      if (typeof callback === 'function') {
        return callback(err)
      }
    })
}

export function deleteData({ AMaaSClass, AMId, resourceId }, callback) {
  let url
  try {
    url = utils.buildURL({
      AMaaSClass,
      AMId,
      resourceId,
      stage,
      apiVersion
    })
  } catch (e) {
    if (typeof callback !== 'function') {
      return Promise.reject(e)
    }
    callback(e)
    return
  }
  let promise = utils.makeRequest({ method: 'DELETE', url, stage })
  if (typeof callback !== 'function') {
    // return promise if callback is not provided
    return promise.then(response => response.body)
  }
  promise
    .then((response, error) => {
      let body
      if (response) body = response.body
      _networkCallback(error, response, body, callback)
    })
    .catch(err => {
      if (typeof callback === 'function') {
        return callback(err)
      }
    })
}

/*
 * query is an array of objects: { key: <string>, values: <array> }
 * key is the key to search over (depends on the specific service)
 * and values are all the values to search over. E.g.
 * `const queries = { assetIds: ['abc', 'def'], assetClasses: ['Currency', 'Bond'] }`
 */
export function searchData({ AMaaSClass, AMId, query }, callback) {
  let url
  try {
    url = utils.buildURL({
      AMaaSClass,
      AMId,
      stage,
      apiVersion
    })
  } catch (e) {
    if (typeof callback !== 'function') {
      return Promise.reject(e)
    }
    callback(e)
    return
  }
  let data = parseQueryParams(query)
  let promise = utils.makeRequest({ method: 'SEARCH', url, data, stage })
  if (typeof callback !== 'function') {
    // return promise if callback is not provided
    return promise.then(response => response.body)
  }
  promise
    .then((response, error) => {
      let body
      if (response) body = response.body
      _networkCallback(error, response, body, callback)
    })
    .catch(err => {
      if (typeof callback === 'function') {
        return callback(err)
      }
    })
}

function parseQueryParams(query) {
  let data = { camelcase: true }
  for (let q in query) {
    if (query.hasOwnProperty(q)) {
      let param = query[q]
      if (Array.isArray(param)) {
        data[q] = query[q].join()
      } else {
        data[q] = `${query[q]}`
      }
    }
  }
  return data
}

function _networkCallback(error, response, body, callback) {
  if (typeof callback !== 'function') {
    return false
  }
  if (!error && response.status === 200) {
    callback(null, body)
  } else if (error) {
    callback(error)
  } else {
    callback({ response, body })
  }
}
