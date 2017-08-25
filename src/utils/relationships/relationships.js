import { retrieveData, putData, insertData } from '../network'
import { Relationship } from '../../relationships'

/**
 * Retrieve Relationships for specified Asset Manager
 * @function retrieve
 * @memberof module:api.Relationships
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - Asset Manager ID of the Relationships
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is an array of Relationships or a Relationship instance. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns a promise that resolves with an array of Relationships or a Relationship instance
 */
export function retrieve({ AMId }, callback) {
  const params = {
    AMaaSClass: 'relationships',
    AMId
  }
  let promise = retrieveData(params).then(result => {
    let relationships
    if (!Array.isArray(result)) {
      relationships = _parseRelationship(result)
    } else {
      relationships = result.map(rel => {
        return _parseRelationship(rel)
      })
    }
    if (typeof callback === 'function') {
      callback(null, relationships)
    }
    return relationships
  })
  if (typeof callback !== 'function') {
    return promise
  }
  promise.catch(error => callback(error))
}

/**
 * Request a new Relationship
 * @function requestRelationship
 * @memberof module:api.Relationships
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - Asset Manager ID of the AM you are requesting a relationship to (Not the caller's AMID!)
 * @param {object} params.params - Object of relationshipType and relationshipId.
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is the inserted Relationship instance. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with the inserted Relationship instance.
 */
export function requestRelationship({ AMId, options }, callback) {
  const params = {
    AMaaSClass: 'relationshipRequest',
    AMId,
    data: options
  }
  let promise = insertData(params).then(result => {
    result = _parseRelationship(result)
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
 * Get a list of relationships where the passed AMID is the relatedId
 * @function getRelatedAMID
 * @memberof module:api.Relationships
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - Asset Manager ID of the AM that you want to see the parent Relationships for
 * @param {object} params.options - `{ includeInactive: [true], relationshipType: ['Employee', 'External] }`
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is the Relationship instance or list of Relationships. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with the Relationship instance or list of Relationships.
 */
export function getRelatedAMID({ AMId, options }, callback) {
  const params = {
    AMaaSClass: 'relatedAssetManagerID',
    AMId,
    query: options
  }
  let promise = retrieveData(params).then(result => {
    if (Array.isArray(result)) {
      result = result.map(rel => _parseRelationship(rel))
    } else {
      result = _parseRelationship(result) 
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
* Insert a new Relationship
* @function insert
* @memberof module:api.Relationships
* @static
* @param {object} params - object of parameters:
* @param {number} params.AMId - Asset Manager for whom the Relationship will belong
* @param {Relationship} params.relationship - Relationship instance to insert
* @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is the inserted Relationship instance. Omit to return Promise
* @returns {Promise|null} If no callback supplied, returns a Promise that resolves with the inserted Relationship instance
*/
export function insert({ AMId, relationship }, callback) {
  let data
  if (relationship) {
    data = JSON.parse(JSON.stringify(relationship))
  }
  const params = {
    AMaaSClass: 'relationships',
    AMId,
    data
  }
  let promise = insertData(params).then(result => {
    result = _parseRelationship(result)
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
  * Amend an existing Relationship
  * @function amend
  * @memberof module:api.Relationships
  * @static
  * @param {object} params - object of parameters:
  * @param {number} params.AMId - Asset Manager ID who owns the Relationship to amend
  * @param {Relationship} params.relationship - Amended Relationship instance
  * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is the amended Relationship instance. Omit to return Promise
  * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with the amended Relationship instance
  */
export function amend({ AMId, relationship }, callback) {
  let data
  if (relationship) {
    data = JSON.parse(JSON.stringify(relationship))
  }
  const params = {
    AMaaSClass: 'relationships',
    AMId,
    data
  }
  let promise = putData(params).then(result => {
    result = _parseRelationship(result)
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
 * Send invitation to join
 * @function sendInvitation
 * @memberof module:api.Relationships
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - AMID of company to join
 * @param {string} params.toEmail - Email address to send to
 * @param {string} params.fromEmail - Email address sent from
 * @param {string} params.companyName - Company to Join
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is `true`.
 * @returns {Promise|null} If no callback supplied, returns a promise that resolves with `true`.
 */
export function sendInvitation({ AMId, toEmail, fromEmail, companyName }, callback) {
  const params = {
    AMaaSClass: 'relationships',
    AMId,
    resourceId: 'invitations',
    data: {
      userEmail: toEmail,
      adminEmail: fromEmail,
      companyName
    }
  }
  let promise = putData(params).then(result => {
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

 function _parseRelationship(rel) {
   return new Relationship(rel)
 }
