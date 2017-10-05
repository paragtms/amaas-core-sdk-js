import {
  retrieveData,
  insertData,
  patchData,
  putData,
  deleteData,
  searchData
} from '../network'

import * as AssetClasses from '../../assets'

/**
 * Retrieve Asset data for specified AMId and assetId
 * @function retrieve
 * @memberof module:api.Assets
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - Asset Manager ID of the Asset
 * @param {string} [params.resourceId] - Asset ID of the Asset. Omit to return all Assets for the supplied AMId
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is an array of Assets or a single Asset instance. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with an array of Assets or a single Asset instance
 */
export function retrieve({ AMId, resourceId }, callback) {
  const params = {
    AMaaSClass: 'assets',
    AMId,
    resourceId
  }
  let promise = retrieveData(params).then(result => {
    if (Array.isArray(result)) {
      result = result.map(asset => _parseAsset(asset))
    } else {
      result = _parseAsset(result)
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
 * Insert a new Asset into the database
 * @function insert
 * @memberof module:api.Assets
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - Asset Manager ID of the Asset Manager to whom the inserted Asset belongs
 * @param {Asset} params.asset - Asset instance to insert
 * @param {function} [callback] - Called with two arguments (error, result) on completion. ` result` is the inserted Asset instance. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with the inserted Asset instance
 */
export function insert({ AMId, asset }, callback) {
  let stringified, data
  if (asset) {
    stringified = JSON.stringify(asset)
    data = JSON.parse(stringified)
  }
  const params = {
    AMaaSClass: 'assets',
    AMId,
    data
  }
  let promise = insertData(params).then(result => {
    result = _parseAsset(result)
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
 * Upsert a new Asset into the database
 * @function upsert
 * @memberof module:api.Assets
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - Asset Manager ID of the Asset Manager to whom the inserted Asset belongs
 * @param {Asset} params.asset - Asset instance to insert
 * @param {function} [callback] - Called with two arguments (error, result) on completion. ` result` is the inserted Asset instance. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with the inserted Asset instance
 */
export function upsert({ AMId, asset }, callback) {
  let stringified, data
  if (asset) {
    stringified = JSON.stringify(asset)
    data = JSON.parse(stringified)
  }
  const params = {
    AMaaSClass: 'assets',
    AMId,
    data,
    queryParams: { upsert: true }
  }
  let promise = insertData(params).then(result => {
    result = _parseAsset(result)
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
 * Amend an existing Asset. WARNING: This makes a HTTP PUT request and will replace the existing Asset with the one passed in
 * @function amend
 * @memberof module:api.Assets
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - AMId of the Asset to amend
 * @param {Asset} params.asset - Amended Asset instance to PUT
 * @param {string} params.resourceId - Asset ID of the Asset to amend
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is the amended Asset instance. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with the amended Asset instance
 */
export function amend({ AMId, asset, resourceId }, callback) {
  let stringified, data
  if (asset) {
    stringified = JSON.stringify(asset)
    data = JSON.parse(stringified)
  }
  const params = {
    AMaaSClass: 'assets',
    AMId,
    resourceId,
    data
  }
  let promise = putData(params).then(result => {
    result = _parseAsset(result)
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
 * Partially amend an existing Asset.
 * @function partialAmend
 * @memberof module:api.Assets
 * @static
 * @param {object} params - object of parameters:
 * @param {string} params.AMId - AMId of the Asset to be partially amended
 * @param {object} params.changes - Object of changes to the Asset.
 * @param {string} params.resourceId - Asset ID of the Asset to be partially amended
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is the amended Asset instance. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with the amended Asset instance
 */
export function partialAmend({ AMId, changes, resourceId }, callback) {
  const params = {
    AMaaSClass: 'assets',
    AMId,
    resourceId,
    data: changes
  }
  let promise = patchData(params).then(result => {
    result = _parseAsset(result)
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
 * Search for Assets
 * @function search
 * @memberof module:api.Assets
 * @static
 * @param {object} params - object of parameters:
 * @param {number} [params.AMId] - Asset Manager ID of the Assets to search over. If omitted, you must send assetManagerIds in the search query with at least one value
 * @param {object} params.query - Search parameters of the form { `key`: `[values]` }<br />
 * Available keys are:
 * <li>assetManagerIds (Required if AMId param is omitted)</li>
 * <li>clientIds</li>
 * <li>assetStatuses</li>
 * <li>assetIds</li>
 * <li>referenceTypes</li>
 * <li>referenceValues</li>
 * <li>assetIssuerIds</li>
 * <li>assetClasses</li>
 * <li>assetTypes</li>
 * e.g. `{ assetManagerIds: 1, assetClasses: ['ForeignExchange', 'Equity'] }`
 * @param {function} callback - Called with two arguments (error, result) on completion. `result` is an array of Assets or a single Asset instance
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with an array of Assets or a single Asset instance
 */
export function search({ AMId, query }, callback) {
  const params = {
    AMaaSClass: 'assets',
    AMId,
    query
  }
  let promise = searchData(params).then(result => {
    if (Array.isArray(result)) {
      result = result.map(ass => _parseAsset(ass))
    } else {
      result = _parseAsset(result)
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
 * Fuzzy Search on assets
 * @function fuzzySearch
 * @memberof module:api.Assets
 * @static
 * @param {object} query - Query object of the form .
 * @param {function} callback - Called with two arguments (error, result) on completion. `result` is object of shape `{ total: <number>, max_score: <number>, hits: <Array> }`. `hits` is an array of objects:<br />
 * 
 * <pre><code>
 * {
 *  assetType: string,
 *  assetId: string,
 *  description: string,
 *  assetClass: string,
 *  displayName: string,
 *  assetManagerId: string,
 *  search: string
 * }
 * </code></pre>
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with the above object.
 */
export function fuzzySearch({ AMId, query = { fuzzy: true } }, callback) {
  query = { ...query, fuzzy: true }
  const params = {
    AMaaSClass: 'assets',
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
 * Search for Assets and return specified fields
 * @function fieldsSearch
 * @memberof module:api.Assets
 * @static
 * @param {object} params - Search parameters
 * @param {number} params.AMId - Asset Manager ID to search over.
 * @param {object} params.query - Query object containing a `fields` property.
 * e.g. `{ query: { fields: ['assetId', 'references', 'comments']} }`
 * @param {function} callback - Called with two arguments (error, result) on completion. `result` is an array of objects or a single object
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with an array of objects or a single object
 */
export function fieldsSearch({ AMId, query }, callback) {
  const params = {
    AMaaSClass: 'assets',
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
 * Delete an exising Asset. This will set the Asset status to 'Inactive'.
 * @function deactivate
 * @memberof module:api.Assets
 * @static
 * @param {object} params - object of parameters:
 * @param {string} params.AMId - AMId of the Asset to be deleted
 * @param {string} params.resourceId - Asset ID of the Asset to be deleted
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is the deactivated Asset instance. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with the deactivated Asset instance
 */
export function deactivate({ AMId, resourceId }, callback) {
  const params = {
    AMaaSClass: 'assets',
    AMId,
    resourceId,
    data: { assetStatus: 'Inactive' }
  }
  let promise = patchData(params).then(result => {
    result = _parseAsset(result)
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
 * Reactivate a deactivated Asset. This will set the Asset status to 'Active'.
 * @function reactivate
 * @memberof module:api.Assets
 * @static
 * @param {object} params - object of parameters:
 * @param {string} params.AMId - AMId of the Asset to be deleted
 * @param {string} params.resourceId - Asset ID of the Asset to be deleted
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is the reactivated Asset instance. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with the reactivated Asset instance
 */
export function reactivate({ AMId, resourceId }, callback) {
  const params = {
    AMaaSClass: 'assets',
    AMId,
    resourceId,
    data: { assetStatus: 'Active' }
  }
  let promise = patchData(params).then(result => {
    result = _parseAsset(result)
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
 * Retrieve the asset config (settlement cycle) for a particular asset class.
 * @function getAssetConfig
 * @memberof module:api.Assets
 * @static
 * @param {object} params - object of parameters:
 * @param {string} params.assetClass - Asset class to retrive config for.
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is the config data.
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with the config data.
 */
export function getAssetConfig({ assetClass }, callback) {
  const params = {
    AMaaSClass: 'assetConfig',
    AMId: assetClass
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

export function _parseAsset(object) {
  if (!object.assetType) {
    return new AssetClasses.Asset(object)
  }
  return new AssetClasses[object.assetType](object)
}
