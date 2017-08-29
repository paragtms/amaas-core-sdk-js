import { insertData, patchData, retrieveData, deleteData, searchData } from '../network'
import { Item } from '../../monitor'
import { Event } from '../../monitor'

/**
 * Retrieve a Monitor Item
 * @function retrieveItem
 * @memberof module:api.Monitor
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.assetManagerId - Asset Manager ID of the Item(s) to be retrieved
 * @param {string} [params.resourceId] - itemId of the Item to be retrieved. Omit to return all Items for given AMId
 * @param {function} callback - Called with two arguments (error, result) on completion. `result` is an array of Items or a single Item instance. Omit to return Promise
 * @returns {Promise|null} - If no callback supplied, returns a Promise that resolves with an array of Items or a single Item instance
 */
export function retrieveItems({ AMId, resourceId }, callback) {
  const params = {
    AMaaSClass: 'monitorItems',
    AMId,
    resourceId
  }
  let promise = retrieveData(params).then(result => {
    if (Array.isArray(result.data)) {
      result = result.data.map(item => _parseItem(item))
    } else {
      result = _parseItem(result.data)
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
 * Insert a new Monitor Item
 * @function insertNewItem
 * @memberof module:api.Monitor
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.assetManagerId - Asset Manager ID of the Item
 * @param {Item|object} params.item - Monitor Item
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result ` is the inserted Item instance. Omit to return Promise
 * @returns {Promise|null} - If no callback supplied, returns a Promise that resolves with the inserted Item instance
 */
export function insertNewItem({ AMId, item }, callback) {
  let data
  if(item) {
    data = JSON.parse(JSON.stringify(item))
  }
  const params = {
    AMaaSClass: 'monitorItems',
    AMId,
    data
  }
  let promise = insertData(params).then(result => {
    result = _parseItem(result)
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
 * Resubmit a monitor item
 * @function resubmitItem
 * @memberof module:api.Monitor
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - Asset Manager ID of the Item to be resubmitted
 * @param {string} params.resourceId - itemId of the Item to be resubmitted
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is the resubmitted Item instance. Omit to return promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with the resubmitted Item instance.
 */
export function resubmitItem({ AMId, resourceId }, callback) {
  const params = {
    AMaaSClass: 'monitorItems',
    AMId,
    resourceId,
    data: {}
  }
  let promise = patchData(params).then(result => {
    result = _parseItem(result)
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
 * Search Monitor Items
 * @function searchItems
 * @memberof module:api.Monitor
 * @static
 * @param {object} params - object of parameters:
 * @param {number} [params.assetManagerId] - Asset Manager ID of the Items over which to search. If omitted, you must include `assetManagerIds` in the query
 * @param {object} params.query - Search parameters of the form { `key`: `value` | `[values]` }<br/>
 * Available keys are:
 * <li>assetManagerIds (required if AMId param is omitted)</li>
 * <li>itemIds</li>
 * <li>assetBookIds</li>
 * <li>itemStatuses</li>
 * <li>itemClasses</li>
 * <li>itemTypes</li>
 * <li>itemLevels</li>
 * <li>itemSources</li>
 * <li>transactionIds</li>
 * <li>assetIds</li>
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is an array of Items or a single Item instance.
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with an array of Items or a single Item instance.
 */
export function searchItems({ AMId, query }, callback) {
  const params = {
    AMaaSClass: 'monitorItems',
    AMId,
    query
  }
  let promise = searchData(params).then(result => {
    if (Array.isArray(result.data)) {
      result = result.data.map(item => _parseItem(item))
    } else {
      result = _parseItem(result.data)
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
 * Close a monitor item
 * @function closeItem
 * @memberof module:api.Monitor
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - Asset Manager ID of the Item to close
 * @param {string} params.resourceId - itemId of the Item to close
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is the closed Monitor Item instance. Omit to return promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with the closed Monitor Item instance.
 */
export function closeItem({ AMId, resourceId }, callback) {
  const params = {
    AMaaSClass: 'monitorItems',
    AMId,
    resourceId
  }
  let promise = deleteData(params).then(result => {
    result = _parseItem(result)
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
 * @function retrieveEvent
 * @memberof module:api.Monitor
 * @static
 * @param {object} params - object of parameters
 * @param {number} params.AMId - Asset Manager ID of the Event to retrieve __(required)__
 * @param {string} [params.resourceId] - Event ID. Omit to return all Events for the Asset Manager ID
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is an Event or array of Events. Omit to return promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with an Event or array of Events
 */
export function retrieveEvent({ AMId, resourceId }, callback) {
  const params = {
    AMaaSClass: 'monitorEvents',
    AMId,
    resourceId
  }
  let promise = retrieveData(params).then(result => {
    if (result.data) {
      if (Array.isArray(result.data)) {
        result = result.data.map(event => _parseEvent(event))
      } else {
        result = _parseEvent(result.data)
      }
      if (typeof callback === 'function') {
         callback(null, result)
      }
      return result
    }
  })
  if (typeof callback !== 'function') {
    return promise
  }
  promise.catch(error => callback(error))
}

 /**
 * @function insertEvent
 * @memberof module:api.Monitor
 * @static
 * @param {object} params - object of parameters
 * @param {number} params.AMId - Asset Manager ID to insert to
 * @param {Event} params.event - Event instance or object to insert
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is the inserted Event. Omit to return promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with the newly inserted Event
 */
export function insertEvent({ AMId, event }, callback) {
  let data
  if (event) {
    data = JSON.parse(JSON.stringify(event))
  }
  const params = {
    AMaaSClass: 'monitorEvents',
    AMId,
    data
  }
  let promise = insertData(params).then(result => {
    result = _parseEvent(result)
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
 * @function closeEvent
 * @memberof module:api.Monitor
 * @static
 * @param {object} params - object of parameters
 * @param {number} params.AMId - Asset Manager ID of the Event to close
 * @param {string} params.resourceId - Event ID to close
 * @param {function} callback - Called with two arguments (error, result) on completion. `result` is the closed Event. Omit to return promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with the closed Event
 */
export function closeEvent({ AMId, resourceId }, callback) {
  const params = {
    AMaaSClass: 'monitorEvents',
    AMId,
    resourceId
  }
  let promise = deleteData(params).then(result => {
    result = _parseEvent(result)
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

export function _parseItem(item) {
  return new Item(item)
}

export function _parseEvent(event) {
  return new Event(event)
}