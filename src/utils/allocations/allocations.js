import { retrieveData, insertData } from '../network'
import TransactionLink from '../../children/Link/TransactionLink'

/**
 * Retrieve Allocations for a specific Transaction
 * @function retrieve
 * @memberof module:api.Allocations
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - Asset Manager ID of Transaction
 * @param {string} [params.resourceId] - Transaction ID. Omit to return all Allocations for the supplied AMId
 * @param {function} [callback] - Function of form (error, result) called on completion. `result` is an array of Link instances or a single Link instance. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with an Array of Link instances or a single Link instance (an Allocation is an instance of the Link class)
 */
export function retrieve({ AMId, resourceId }, callback) {
  if (!AMId || !resourceId) {
    if (typeof callback === 'function') {
      return callback('Asset Manager ID and Transaction ID are required for allocations')
    }
    return Promise.reject('Asset Manager ID and Transaction ID are required for allocations')
  }
  const params = {
    AMaaSClass: 'allocations',
    AMId,
    resourceId
  }
  let promise = retrieveData(params).then(result => {
    let allocations
    if (Array.isArray(result)) {
      allocations = result.map(alloc => new TransactionLink(alloc))
    } else {
      allocations = new TransactionLink(result)
    }
    if (typeof callback === 'function') {
      callback(null, allocations)
    }
    return allocations
  })
  if (typeof callback !== 'function') {
    return promise
  }
  promise.catch(error => callback(error))
}

/**
 * Send Allocations for a specific Transaction
 * @function send
 * @memberof module:api.Allocations
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - Asset Manager ID of Transaction
 * @param {string} params.resourceId - Transaction ID
 * @param {object} params.data - Allocation data for the Transaction of the form [ { book_id: '123', quantity: '50', transaction_id: 'XYZ' }, { book_id: '456', quantity: '50', transaction_id: 'ABC' } ]. If transaction_id is supplied, it is used as the inserted Allocation's transactionId. Otherwise a random ID is generated
 * @param {function} [callback] - Called with two arugments (error, result) on completion. `result` is the inserted Allocations. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with the inserted Allocations
 */
export function send({ AMId, resourceId, data }, callback) {
  if (!AMId || !resourceId) {
    if (typeof callback === 'function') {
      return callback('Asset Manager ID and Transaction ID are required for allocations')
    }
    return Promise.reject('Asset Manager ID and Transaction ID are required for allocations')
  }
  const params = {
    AMaaSClass: 'allocations',
    AMId,
    resourceId,
    data: JSON.parse(JSON.stringify(data || {}))
  }
  let promise = insertData(params).then(result => {
    const allocated = result
    if (typeof callback === 'function') {
      callback(null, allocated)
    }
    return allocated
  })
  if (typeof callback !== 'function') {
    return promise
  }
  promise.catch(error => callback(error))
}
