import { retrieveData, insertData, patchData, putData, deleteData, searchData } from '../network'

import Position from '../../transactions/Positions/position.js'

/**
 * Retrieve a Position from the database
 * @function retrieve
 * @memberof module:api.Positions
 * @static
 * @param {object} params - object of parameters
 * @param {number} params.AMId - Asset Manager ID of the the Positions
 * @param {function} [callback] - Called with two arugments (error, result) on completion. `result` is an array of Positions. Omit to return Promise
 * @returns {Promise|null} If no callback is supplied, returns promise that resolves with an array of Positions
 */
export function retrieve({ AMId }, callback) {
  const params = {
    AMaaSClass: 'positions',
    AMId
  }
  let promise = retrieveData(params).then(result => {
    if (Array.isArray(result)) {
      result = result.map(pos => (
        _parsePos(pos)
      ))
    } else {
      result = _parsePos(result)
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
 * Search for Positions in the database
 * @function search
 * @memberof module:api.Positions
 * @static
 * @param {object} params - object of parameters
 * @param {number} params.AMId - Asset Manager ID of the Asset Manager owning the Postions
 * @param {object} params.query - Search parameters of the form: { `key`: `[values]` }<br />
 * Available keys are:
 * <li>assetManagerIds (Required if AMId param is omitted)</li>
 * <li>bookIds</li>
 * <li>assetIds</li>
 * <li>clientIds</li>
 * <li>accountIds</li>
 * <li>accountingTypes</li>
 * <li>positionDate</li>
 * e.g. `{ assetManagerIds: [1], bookIds: ['LAXJ98', 'OXYW09', 'COSY45'] }`
 * @param {function} [callback] - Called with two arguments (error, result) on completion. Omit to return Promise
 * @returns {Promise|null} If no callback is supplied, returns promise that resolves with array of Positions
 */
export function search({ AMId, query }, callback) {
  const params = {
    AMaaSClass: 'positions',
    AMId,
    query
  }
  let promise = searchData(params).then(result => {
    if (Array.isArray(result)) {
      result = result.map(pos => {
        return _parsePos(pos)
      })
    } else {
      result = _parsePos(result)
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
 * Search for Position with specified fields
 * @function fieldsSearch
 * @memberof module:api.Positions
 * @static
 * @param {object} params - object of parameters:
 * @param {number} [params.AMId] - Asset Manager ID of the Assets to search over. If omitted, you must send assetManagerIds in the search query with at least one value
 * @param {number} [params.assetId] -Asset ID of the asset
 * @param {string} [params.field] -Fields should be returned 
 * Available keys are:
 * <li>assetManagerIds (Required if AMId param is omitted)</li>
 * <li>bookIds</li>
 * <li>assetIds</li>
 * <li>quantity</li>
 * <li>validFrom</li>
 * <li>internalId</li>
 * <li>validTo</li>
 * <li>clientIds</li>
 * <li>accountIds</li>
 * <li>accountingTypes</li>
 * <li>createdBy</li>
 * <li>updatedBy</li>
 * <li>createdTime</li>
 * <li>updatedTime</li>
 * <li>version</li>
 * e.g. `{ AMIds: [1], assetIds: [1, 2], fields: [assetManagerIds, assetIds] }`
 * @param {function} callback - Called with two arguments (error, result) on completion. `result` is an array of Assets or a single Asset instance
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with an array of Assets or a single Asset instance
 */
export function fieldsSearch({ AMIds, assetIds, fields }, callback) {
  const params = {
    AMaaSClass: 'positions',
    AMIds,
    assetIds,
    fields
  }

  let promise = searchData (params).then(result => {
    if (Array.isArray(result)) {
      result = result.map(pos => {
        return _parsePos(pos)
      })
    } else {
      result = _parsePos(result)
    }
    if(typeof callback === 'function'){
       callback(null, result)
    }
    return result
  })
  if (typeof callback !== 'function') {
    return promise
  }
  promise.catch(error => callback(error))
}

export function _parsePos(pos) {
  return new Position(pos)
}
