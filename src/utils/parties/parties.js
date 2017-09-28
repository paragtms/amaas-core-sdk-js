import {
  retrieveData,
  insertData,
  patchData,
  putData,
  deleteData,
  searchData
} from '../network'
import * as PartyClasses from '../../parties'

import Address from '../../parties/Children/address.js'
import Email from '../../parties/Children/email.js'

/**
 * Retrieve Party data for specified AMId and partyId
 * @function retrieve
 * @memberof module:api.Parties
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - Asset Manager ID of the Party
 * @param {string} [params.partyId] - Party ID of the Party. Omitting this will return all Parties associated with the supplied AMId
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is an array of Parties or a single Party instance. Omit to return Promise
 * @returns {Promise|null} - If no callback supplied, returns a Promise that resolves with an array of Parties or a single Party instance
 */
export function retrieve({ AMId, resourceId }, callback) {
  const params = {
    AMaaSClass: 'parties',
    AMId,
    resourceId
  }
  let promise = retrieveData(params).then(result => {
    if (Array.isArray(result)) {
      result = result.map(party => _parseParty(party))
    } else {
      result = _parseParty(result)
    }
    if (typeof callback === 'function') {
      callback(null, result)
    }
    return result
  })
  if (typeof callback !== 'function') {
    // return promise if callback is not provided
    return promise
  }
  promise.catch(error => callback(error))
}

/**
 * Insert a new Party into the database
 * @function insert
 * @memberof module:api.Parties
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - Asset Manager ID to whom the Party will belong
 * @param {Party} params.party - Party instance to insert
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is the inserted Party instance. Omit to return Promise.
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with the inserted Party instance
 */
export function insert({ AMId, party }, callback) {
  let stringified, data
  if (party) {
    stringified = JSON.stringify(party)
    data = JSON.parse(stringified)
  }
  const params = {
    AMaaSClass: 'parties',
    AMId,
    data
  }
  let promise = insertData(params).then(result => {
    result = _parseParty(result)
    if (typeof callback === 'function') {
      callback(null, result)
    }
    return result
  })
  if (typeof callback !== 'function') {
    // return promise if callback is not provided
    return promise
  }
  promise.catch(error => callback(error))
}

/**
 * Amend an existing Party. WARNING: This makes a HTTP PUT request and will replace the existing Party with the one passed in
 * @function amend
 * @memberof module:api.Parties
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - AMId of the Party to amend
 * @param {Party} params.party - Amended Party instance to PUT
 * @param {string} params.resourceId - Party ID of the Party to amend
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is the amended Party instance. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with the amended Party instance
 */
export function amend({ AMId, party, resourceId }, callback) {
  let stringified, data
  if (party) {
    stringified = JSON.stringify(party)
    data = JSON.parse(stringified)
  }
  const params = {
    AMaaSClass: 'parties',
    AMId,
    resourceId,
    data
  }
  let promise = putData(params).then(result => {
    result = _parseParty(result)
    if (typeof callback === 'function') {
      callback(null, result)
    }
    return result
  })
  if (typeof callback !== 'function') {
    // return promise if callback is not provided
    return promise
  }
  promise.catch(error => callback(error))
}

/**
 * Partially amend an existing Party.
 * @function partialAmend
 * @memberof module:api.Parties
 * @static
 * @param {object} params - object of parameters:
 * @param {string} params.AMId - AMId of the Party to be partially amended
 * @param {object} params.changes - Object of changes to the Party
 * @param {string} params.resourceId - Party ID of the Party to be partially amended
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is the amended Party instance. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with the amended Party instance
 */
export function partialAmend({ AMId, changes, resourceId }, callback) {
  const params = {
    AMaaSClass: 'parties',
    AMId,
    resourceId,
    data: changes
  }
  let promise = patchData(params).then(result => {
    result = _parseParty(result)
    if (typeof callback === 'function') {
      callback(null, result)
    }
    return result
  })
  if (typeof callback !== 'function') {
    // return promise if callback is not provided
    return promise
  }
  promise.catch(error => callback(error))
}

/**
 * Search for Parties
 * @function search
 * @memberof module:api.Parties
 * @static
 * @param {object} params - object of parameters:
 * @param {number} [params.AMId] - Asset Manager of the Parties to search over. If omitted you must pass assetManagerIds in the query
 * @param {object} params.query - Search parameters of the form: { `key`: `value` | `[values]` }<br />
 * Available keys are:
 * <li>assetManagerIds (required if AMId param is omitted)</li>
 * <li>clientIds</li>
 * <li>partyStatuses</li>
 * <li>partyIds</li>
 * <li>partyClasses</li>
 * <li>partyTypes</li>
 * e.g. `{ assetManagerIds: 1, partyTypes: ['Individual', 'Fund'] }`
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is an array of Parties or a single Party instance. Omit to return promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with an array of Parties or a single Party instance
 */
export function search({ AMId, query }, callback) {
  const params = {
    AMaaSClass: 'parties',
    AMId,
    query
  }
  let promise = searchData(params).then(result => {
    if (Array.isArray(result)) {
      result = result.map(party => _parseParty(party))
    } else {
      result = _parseParty(result)
    }
    if (typeof callback === 'function') {
      callback(null, result)
    }
    return result
  })
  if (typeof callback !== 'function') {
    return promise
  }
  promise.catch(error => callback(error))
}

/**
 * Fuzzy Search on parties
 * @function fuzzySearch
 * @memberof module:api.Parties
 * @static
 * @param {object} query - Query object of the form .
 * @param {function} callback - Called with two arguments (error, result) on completion. `result` is object of shape `{ total: <number>, max_score: <number>, hits: <Array> }`. `hits` is an array of objects:<br />
 * 
 * <pre><code>
 * {
 *  partyType: string
 *  legalName: string
 *  description: string
 *  assetManagerId: number
 *  displayName: string
 *  partyId: string
 *  partyClass: string
 *  AMaaS: string
 * }
 * </code></pre>
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with the above object.
 */
export function fuzzySearch({ AMId, query = { fuzzy: true } }, callback) {
  query = { ...query, fuzzy: true }
  const params = {
    AMaaSClass: 'parties',
    AMId: 'search',
    resourceId: AMId,
    query
  }
  let promise = retrieveData(params).then(result => {
    if (typeof callback === 'function') {
      callback(null, result)
    }
    return result
  })
  if (typeof callback !== 'function') {
    return promise
  }
  promise.catch(error => callback(error))
}

/**
 * Search for Parties and return specified fields
 * @function fieldsSearch
 * @memberof module:api.Parties
 * @static
 * @param {object} query - Query object of the form `{ assetManagerIds: number, fields: string[] }`. Any party property may be specified as a field parameter.
 * e.g. `{ query: { assetManagerIds: [1, 2], fields: ['partyId', 'references', 'displayName']} }`
 * @param {function} callback - Called with two arguments (error, result) on completion. `result` is an array of plain objects or a single plain object
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with an array of plain objects or a single plain object
 */
export function fieldsSearch({ AMId, query }, callback) {
  const params = {
    AMaaSClass: 'parties',
    AMId,
    query
  }
  let promise = searchData(params).then(result => {
    if (typeof callback === 'function') {
      callback(null, result)
    }
    return result
  })
  if (typeof callback !== 'function') {
    return promise
  }
  promise.catch(error => callback(error))
}

/**
 * Deactivate an exising Party. This will set the Party status to 'Inactive'
 * @function deactivate
 * @memberof module:api.Parties
 * @static
 * @param {object} params - object of parameters:
 * @param {string} params.AMId - AMId of the Party to be deactivated
 * @param {string} params.resourceId - Party ID of the Party to be deactivated
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is the deactivated Party instance. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with the deactivated Party instance
 */
export function deactivate({ AMId, resourceId }, callback) {
  const params = {
    AMaaSClass: 'parties',
    AMId,
    resourceId,
    data: { partyStatus: 'Inactive' }
  }
  let promise = patchData(params).then(result => {
    result = _parseParty(result)
    if (typeof callback === 'function') {
      callback(null, result)
    }
    return result
  })
  if (typeof callback !== 'function') {
    // return promise if callback is not provided
    return promise
  }
  promise.catch(error => callback(error))
}

/**
 * Reactivate a Party. This will set the Party status to 'Active'
 * @function reactivate
 * @memberof module:api.Parties
 * @static
 * @param {object} params - object of parameters:
 * @param {string} params.AMId - AMId of the Party to be reactivated
 * @param {string} params.resourceId - Party ID of the Party to be reactivated
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is the reactivated Party instance. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with the reactivated Party instance
 */
export function reactivate({ AMId, resourceId }, callback) {
  const params = {
    AMaaSClass: 'parties',
    AMId,
    resourceId,
    data: { partyStatus: 'Active' }
  }
  let promise = patchData(params).then(result => {
    result = _parseParty(result)
    if (typeof callback === 'function') {
      callback(null, result)
    }
    return result
  })
  if (typeof callback !== 'function') {
    // return promise if callback is not provided
    return promise
  }
  promise.catch(error => callback(error))
}

export function _parseParty(object) {
  if (!object.partyType || !PartyClasses[object.partyType]) {
    return new PartyClasses.Party(object)
  }
  return new PartyClasses[object.partyType](object)
}
