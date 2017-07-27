import { retrieveData, insertData, putData, patchData, deleteData } from '../network'
import AssetManager from '../../assetManagers/AssetManager/assetManager.js'
import Domain from '../../assetManagers/Domain/domain'
import EODBook from '../../assetManagers/EODBook/eodBook'

/**
 * Retrieve Asset Manager data for specified Asset Manager ID
 * @function retrieve
 * @memberof module:api.AssetManagers
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - Asset Manager ID to retrieve
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is an AssetManager instance. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with an AssetManager instance
 */
export function retrieve({ AMId }, callback) {
  const params = {
    AMaaSClass: 'assetManagers',
    AMId
  }
  let promise = retrieveData(params).then(result => {
    const assetManager = _parseAM(result)
    if (typeof callback === 'function') {
      callback(null, assetManager)
    }
    return assetManager
  })
  if (typeof callback !== 'function') {
    // return promise if callback is not provided
    return promise
  }
  promise.catch(error => callback(error))
}

/**
 * Insert a new Asset Manager into the database
 * @function insert
 * @memberof module:api.AssetManagers
 * @static
 * @param {object} params - object of parameters:
 * @param {AssetManager} params.assetManager - Asset Manager instance to insert
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is the inserted AssetManager instance. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with the inserted AssetManager instance
 */
export function insert({ assetManager }, callback) {
  let stringified, data
  if (assetManager) {
    stringified = JSON.stringify(assetManager)
    data = JSON.parse(stringified)
  }
  const params = {
    AMaaSClass: 'assetManagers',
    data
  }
  let promise = insertData(params).then(result => {
    result = _parseAM(result)
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
 * Amend an Asset Manager (Replaces current Asset Manager with what is passed in)
 * @function amend
 * @memberof module:api.AssetManagers
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - AMID of the Asset Manager to amend
 * @param {AssetManager} params.assetManager - Asset Manager instance to insert
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is the amended AssetManager instance. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with the amended AssetManager instance
 */
export function amend({ AMId, assetManager }, callback) {
  let stringified, data
  if (assetManager) {
    stringified = JSON.stringify(assetManager)
    data = JSON.parse(stringified)
  }
  const params = {
    AMaaSClass: 'assetManagers',
    AMId,
    data
  }
  let promise = putData(params).then(result => {
    result = _parseAM(result)
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

// export function partialAmendAM(changes, AMId, resourceId, callback) {
//   const params = {
//     AMaaSClass: 'assetManagers',
//     AMId,
//     resourceId,
//     data: changes
//   }
//   patchData(params, (error, result) => {
//     _handleCallback(error, result, callback)
//   })
// }

/**
 * Deactivate an Asset Manager
 * @function deactivate
 * @memberof module:api.AssetManagers
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - AMID of the Asset Manager to deactivate
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is the deactivated AssetManager instance. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with the deactivated AssetManager instance
 */
export function deactivate({ AMId }, callback) {
  const params = {
    AMaaSClass: 'assetManagers',
    AMId,
    data: { assetManagerStatus: 'Inactive' }
  }
  let promise = patchData(params).then(result => {
    result = _parseAM(result)
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
 * Reactivate an Asset Manager
 * @function reactivate
 * @memberof module:api.AssetManagers
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - AMID of the Asset Manager to deactivate
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is the reactivated AssetManager instance. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with the reactivated AssetManager instance
 */
export function reactivate({ AMId }, callback) {
  const params = {
    AMaaSClass: 'assetManagers',
    AMId,
    data: { assetManagerStatus: 'Active' }
  }
  let promise = patchData(params).then(result => {
    result = _parseAM(result)
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
 * Check whether a domain has any AMIDs associated with it
 * @function checkDomains
 * @memberof module:api.AssetManagers
 * @static
 * @param {object} params - object of parameters:
 * @param {string} params.domain - domain to retrieve Asset Manager IDs for (not including '@')
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is the Domain instance where the associated AMID is primary, or null. Omit to return promise.
 * @returns {Promise|null} If no callback supplied, returns a promise that resolves with the Domain instance containing an AMID which is primary for this domain, or null.
 */
export function checkDomains({ domain }, callback) {
  const params = {
    AMaaSClass: 'assetManagerDomains',
    query: { domain: [domain] }
  }
  let promise = retrieveData(params).then(result => {
    if (result) {
      result = _parseDomain(result)
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
 * Insert a new Domain for a given AMID
 * @function insertDomain
 * @memberof module:api.AssetManagers
 * @static
 * @param {object} params - object of parameters:
 * @param {Domain} params.domain - Domain instance or object to insert.
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is the inserted Domain instance. Omit to return promise.
 * @returns {Promise|null} If no callback supplied, returns a promise that resolves with the inserted Domain instance.
 */
export function insertDomain({ domain }, callback) {
  let data
  if (domain) {
    data = JSON.parse(JSON.stringify(domain))
  }
  const params = {
    AMaaSClass: 'assetManagerDomains',
    data,
    queryParams: { assetManagerId: [domain.assetManagerId] }
  }
  let promise = insertData(params).then(result => {
    result = _parseDomain(result)
    if (typeof callback === 'function') {
      callback(null, result)
    }
    return result
  })
  if (typeof callback !== 'function') {
    return promise
  }
  promise.catch(e => callback(e))
}

/**
 * Retrieve EOD Books
 * @function retrieveEODBooks
 * @memberof module:api.AssetManagers
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - AMID of caller.
 * @param {string} params.bookID - Book ID to retrieve.
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is an array of EODBooks or a single EODBook instance. Omit to return promise.
 * @returns {Promise|null} If no callback supplied, returns a promise that resolves with an array of EODBooks or a single EODBook instance.
 */
export function retrieveEODBooks({ AMId, bookID }, callback) {
  const params = {
    AMaaSClass: 'assetManagerEODBooks',
    AMId,
    bookID
  }
  let promise = retrieveData(params).then(result => {
    if(Array.isArray(result)) {
      result = result.map(eodBook => _parseEODBook(eodBook))
    } else {
      result= _parseEODBook(result)
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

export function _parseEODBook(object){
  return new EODBook(object)
}

export function _parseDomain(object) {
  return new Domain(object)
}

export function _parseAM(object) {
  return new AssetManager(object)
}
