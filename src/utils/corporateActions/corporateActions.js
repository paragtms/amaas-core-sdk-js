import { retrieveData, insertData, putData, patchData, searchData } from '../network'
import * as CAClass from '../../corporateActions'

/**
 * Retrieve a Corporate Action
 * @function retrieve
 * @memberof module:api.CorporateActions
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - AMId of the Asset Manager that owns the Corporate Action
 * @param {string} [params.resourceId] - ID of the Corporate Action to retrieve. Omit to return all Corporate Actions for supplied AMId
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is an array of Corporate Actions or a single CorporateAction instance. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with an array of Corporate Actions or a single CorporateAction instance
 */
export function retrieve({ AMId, resourceId }, callback) {
  const params = {
    AMaaSClass: 'corporateActions',
    AMId,
    resourceId
  }
  let promise = retrieveData(params).then(result => {
    if (Array.isArray(result)) {
      result = result.map(ca => _parseCA(ca))
    } else {
      result = _parseCA(result)
    }
    if (typeof callback === 'function') {
      calback(null, result)
    }
    return result
  })
  if (typeof callback !== 'function') {
    return promise
  }
  promise.catch(error => callback(error))
}

/**
 * Insert a Corporate Action
 * @function insert
 * @memberof module:api.CorporateActions
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - AMId of the Asset Manager that owns the Corporate Action
 * @param {string} params.corporateAction - CorporateAction instance to insert
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is the inserted CorporateAction instance. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with the inserted CorporateAction instance
 */
export function insert({ AMId, corporateAction }, callback) {
  let data
  if (corporateAction) {
    data = JSON.parse(JSON.stringify(corporateAction))
  } else {
    throw new Error('Missing Corporate Action data')
  }
  const params = {
    AMaaSClass: 'corporateActions',
    AMId,
    data
  }
  let promise = insertData(params).then(result => {
    result = _parseCA(result)
    if (typeof callback === 'function') {
      callback (null, result)
    }
    return result
  })
  if (typeof callback !== 'function') {
    return promise
  }
  promise.catch(error => callback(error))
}

/**
 * Insert a Corporate Action
 * @function amend
 * @memberof module:api.CorporateActions
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - AMId of the Asset Manager that owns the Corporate Action
 * @param {string} params.resourceId - ID of the Corporate Action to amend
 * @param {string} params.corporateAction - Amended CorporateAction instance
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is the amended CorporateAction instance. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with the amended CorporateAction instance
 */
export function amend({ AMId, resourceId, corporateAction }, callback) {
  let data
  if (!corporateAction) {
    throw new Error('Missing Corporate Action data')
  }
  data = JSON.parse(JSON.stringify(corporateAction))
  const params = {
    AMaaSClass: 'corporateActions',
    AMId,
    resourceId,
    data
  }
  let promise = putData(params).then(result => {
    result = _parseCA(result)
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
 * Search for Corporate Actions
 * @function search
 * @memberof module:api.CorporateActions
 * @static
 * @param {object} params - object of parameters:
 * @param {number} [params.AMId] - AMId of the Asset Manager that owns the Corporate Action. If omitted you must pass assetManagerIds in the query
 * @param {object} params.query - Search parameters of the form { `key`: `value` | `[values]` }<br />
 * Available keys are:
 * <li>assetManagerIds (Required if AMId param is omitted)</li>
 * <li>clientIds</li>
 * <li>corporateActionIds</li>
 * <li>corporateActionStatuses</li>
 * <li>corporateActionTypes</li>
 * <li>assetIds</li>
 * <li>partyIds</li>
 * <li>recordDateStart</li>
 * <li>recordDateEnd</li>
 * <li>declaredDateStart</li>
 * <li>declaredDateEnd</li>
 * <li>referenceTypes</li>
 * <li>referenceValues</li>
 * e.g. `{ assetManagerIds: 1, assetIds: ['ASKJ18', 'LKHB98'] }`
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is an array of Corporate Actions or a single CorporateAction instance. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with an array of Corporate Actions or a single CorporateAction instance
 */
export function search({ AMId, query }, callback) {
  const params = {
    AMaaSClass: 'corporateActions',
    AMId,
    query
  }
  let promise = searchData(params).then(result => {
    if (Array.isArray(result)) {
      result = result.map(ca => _parseCA(ca))
    } else {
      result = _parseCA(result)
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
 * Cancel a Corporate Action
 * @function cancel
 * @memberof module:api.CorporateActions
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - AMId of the Asset Manager that owns the Corporate Action.
 * @param {array} params.resourceId - ID of the Corporate Action to cancel
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is the cancelled CorporateAction instance. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with the cancelled CorporateAction instance
 */
export function cancel({ AMId, resourceId }, callback) {
  const params = {
    AMaaSClass: 'corporateActions',
    AMId,
    resourceId,
    data: { corporateActionStatus: 'Cancelled' }
  }
  let promise = patchData(params).then(result => {
    result = _parseCA(result)
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
 * Reopen a cancelled Corporate Action
 * @function reopen
 * @memberof module:api.CorporateActions
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - AMId of the Asset Manager that owns the Corporate Action.
 * @param {array} params.resourceId - ID of the Corporate Action to reopen
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is the reopened CorporateAction instance. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with the reopened CorporateAction instance
 */
export function reopen({ AMId, resourceId }, callback) {
  const params = {
    AMaaSClass: 'corporateActions',
    AMId,
    resourceId,
    data: { corporateActionStatus: 'Open' }
  }
  let promise = patchData(params).then(result => {
    result = _parseCA(result)
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

export function _parseCA(obj) {
  if (!obj.corporateActionType || !CAClass[obj.corporateActionType]) {
    return new CAClass.CorporateAction(obj)
  }
  return new CAClass[obj.corporateActionType](obj)
}
