import {
  retrieveData,
  searchData,
  putData,
  patchData,
  insertData
} from '../network'
import Book from './../../books/Book/book'
import BookPermission from './../../books/BookPermission'

/**
 * Retrieve Book data for specified AMId and bookId
 * @function retrieve
 * @memberof module:api.Books
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - Asset Manager ID of the Asset
 * @param {string} [params.resourceId] - ID of the Book. Omit to return all Books for the supplied AMId
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is an array of Books or a single Book instance. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with an array of Books or a single Book instance
 */
export function retrieve({ AMId, resourceId }, callback) {
  const params = {
    AMaaSClass: 'book',
    AMId,
    resourceId
  }
  let promise = retrieveData(params).then(result => {
    let books
    if (!Array.isArray(result)) {
      books = _parseBook(result)
    } else {
      books = result.map(book => {
        return _parseBook(book)
      })
    }
    if (typeof callback === 'function') {
      callback(null, books)
    }
    return books
  })
  if (typeof callback !== 'function') {
    // return promise if callback is not provided
    return promise
  }
  promise.catch(error => callback(error))
}

/**
 * Search Books for specified AMId and bookId
 * @function search
 * @memberof module:api.Books
 * @static
 * @param {object} params - object of parameters:
 * @param {number} [params.AMId] - Asset Manager ID of the user calling the API. If omitted, you must pass assetManagerIds in the query
 * @param {object} params.query - Search parameters of the form: { `key`: `value` | `[values]` }<br />
 * Available keys are:
 * <li>assetManagerIds (Required if AMId param is omitted)</li>
 * <li>clientIds</li>
 * <li>bookStatuses</li>
 * <li>bookIds</li>
 * <li>ownerIds</li>
 * e.g. `{ assetManagerIds: 1, bookIds: [1, 2, 3] }`
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is an array of Books or a single Book instance. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with an array of Books or a single Book instance
 */
export function search({ AMId, query }, callback) {
  const params = {
    AMaaSClass: 'book',
    AMId,
    query
  }
  let promise = searchData(params).then(result => {
    let books
    if (Array.isArray(result)) {
      books = result.map(book => _parseBook(book))
    } else {
      books = _parseBook(result)
    }
    if (typeof callback === 'function') {
      callback(null, books)
    }
    return books
  })
  if (typeof callback !== 'function') {
    // return promise if callback is not provided
    return promise
  }
  promise.catch(error => callback(error))
}

/**
 * Insert a new Book into the database
 * @function insert
 * @memberof module:api.Books
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - Asset Manager ID of the AM insering the Book
 * @param {Asset} params.book - Book instance to insert
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is the inserted Book instance. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with the inserted Book instance
 */
export function insert({ AMId, book }, callback) {
  let data
  if (book) {
    data = JSON.parse(JSON.stringify(book))
  }
  const params = {
    AMaaSClass: 'book',
    AMId,
    data
  }
  let promise = insertData(params).then(result => {
    result = _parseBook(result)
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
 * Amend an existing Book. WARNING: This makes a HTTP PUT request and will replace the existing Book with the one passed in
 * @function amend
 * @memberof module:api.Books
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - AMId of the Book to amend
 * @param {Asset} params.book - Amended Book instance to PUT
 * @param {string} params.resourceId - Book ID of the Book to amend
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is the amended Book instance. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with the amended Book instance
 */
export function amend({ AMId, book, resourceId }, callback) {
  let data
  if (book) {
    data = JSON.parse(JSON.stringify(book))
  }
  const params = {
    AMaaSClass: 'book',
    AMId,
    resourceId,
    data
  }
  let promise = putData(params).then(result => {
    result = _parseBook(result)
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
 * Retire a Book. This will set the Book status to 'Retired'.
 * @function retire
 * @memberof module:api.Books
 * @static
 * @param {object} params - object of parameters:
 * @param {string} params.AMId - AMId of the Books to be retired
 * @param {string} params.resourceId - Book ID of the Book to be retired
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is the retired Book instance. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with the retired Book instance
 */
export function retire({ AMId, resourceId }, callback) {
  const params = {
    AMaaSClass: 'book',
    AMId,
    resourceId,
    data: { bookStatus: 'Retired' }
  }
  let promise = patchData(params).then(result => {
    result = _parseBook(result)
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
 * Reactivate a Book. This will set the Book status to 'Active'.
 * @function reactivate
 * @memberof module:api.Books
 * @static
 * @param {object} params - object of parameters:
 * @param {string} params.AMId - AMId of the Books to be reactivated
 * @param {string} params.resourceId - Book ID of the Book to be reactivated
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is the reactivated Book instance. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with the reactivated Book instance
 */
export function reactivate({ AMId, resourceId }, callback) {
  const params = {
    AMaaSClass: 'book',
    AMId,
    resourceId,
    data: { bookStatus: 'Active' }
  }
  let promise = patchData(params).then(result => {
    result = _parseBook(result)
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
 * Retrieve Book Permissions for an AMID.
 * @function getPermissions
 * @memberof module:api.Books
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - Asset Manager ID of the Company owning the Book Permission
 * @param {string} [params.bookId] - Specific Book ID to retrieve permissions for. Omit to return all Permissions for the given AMId
 * @param {boolean} params.includeInactive - Whether to show inactive Book Permissions
 * @param {function} [callback] - Called with two values (error, result) on completion. `result` is the inserted Book Permission instance.
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with the inserted Book Permission
 */
export function getPermissions({ AMId, bookId, includeInactive }, callback) {
  const query = { includeInactive: includeInactive || 'false' }
  const params = {
    AMaaSClass: 'bookPermissions',
    AMId,
    resourceId: bookId,
    query
  }
  let promise = retrieveData(params).then(result => {
    if (!Array.isArray(result)) {
      result = _parseBookPermission(result)
    } else {
      result = result.map(bookPerm => {
        return _parseBookPermission(bookPerm)
      })
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
 * Add a Book Permission.
 * @function addPermission
 * @memberof module:api.Books
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - Asset Manager ID of the Company owning the Book
 * @param {BookPermission|object} params.bookPermission - Book permission instance or object
 * @param {function} [callback] - Called with two values (error, result) on completion. `result` is the inserted Book Permission instance.
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with the inserted Book Permission
 */
export function addPermission({ AMId, bookPermission }, callback) {
  const data = { ...bookPermission }
  const params = {
    AMaaSClass: 'bookPermissions',
    AMId,
    resourceId: data.bookId,
    data
  }
  let promise = insertData(params).then(result => {
    result = _parseBookPermission(result)
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
 * Modify a Book Permission to read (this will downgrade an existing write permission)
 * @function readPermission
 * @memberof module:api.Books
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - Asset Manager ID of the Company owning the Book
 * @param {number} params.userAssetManagerId - Asset Manager ID of the user to grant read permission to
 * @param {string} params.bookId - Book ID
 * @param {function} [callback] - Called with two values (error, result) on completion. `result` is the modifed Book Permission instance.
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with the modified Book Permission
 */
export function readPermission({ AMId, userAssetManagerId, bookId }, callback) {
  const data = new BookPermission({
    assetManagerId: AMId,
    userAssetManagerId,
    bookId,
    permissionStatus: 'Active',
    permission: 'read'
  })
  const params = {
    AMaaSClass: 'bookPermissions',
    AMId,
    resourceId: `${data.bookId}/modify`,
    data: { ...data }
  }
  let promise = putData(params).then(result => {
    result = _parseBookPermission(result)
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
 * Modify a Book Permission to write (this will upgrade an existing write permission)
 * @function writePermission
 * @memberof module:api.Books
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - Asset Manager ID of the Company owning the Book
 * @param {number} params.userAssetManagerId - Asset Manager ID of the user to grant read permission to
 * @param {string} params.bookId - Book ID
 * @param {function} [callback] - Called with two values (error, result) on completion. `result` is the modifed Book Permission instance.
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with the modified Book Permission
 */
export function writePermission(
  { AMId, userAssetManagerId, bookId },
  callback
) {
  const data = new BookPermission({
    assetManagerId: AMId,
    userAssetManagerId,
    bookId,
    permissionStatus: 'Active',
    permission: 'write'
  })
  const params = {
    AMaaSClass: 'bookPermissions',
    AMId,
    resourceId: `${data.bookId}/modify`,
    data: { ...data }
  }
  let promise = putData(params).then(result => {
    result = _parseBookPermission(result)
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
 * Deactivate a Book Permission (reactivation requires adding new permission)
 * @function deactivatePermission
 * @memberof module:api.Books
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - Asset Manager ID of the Company owning the Book
 * @param {number} params.userAssetManagerId - Asset Manager ID of the user to grant read permission to
 * @param {string} params.bookId - Book ID
 * @param {function} [callback] - Called with two values (error, result) on completion. `result` is the modifed Book Permission instance.
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with the modified Book Permission
 */
export function deactivatePermission(
  { AMId, userAssetManagerId, bookId },
  callback
) {
  const data = new BookPermission({
    assetManagerId: AMId,
    userAssetManagerId,
    bookId,
    permissionStatus: 'Inactive',
    permission: 'write'
  })
  const params = {
    AMaaSClass: 'bookPermissions',
    AMId,
    resourceId: `${data.bookId}/deactivate`,
    data: { ...data }
  }
  let promise = putData(params).then(result => {
    result = _parseBookPermission(result)
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

export function _parseBookPermission(object) {
  return new BookPermission(object)
}

export function _parseBook(object) {
  return new Book(object)
}
