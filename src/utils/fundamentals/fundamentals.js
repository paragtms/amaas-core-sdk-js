import * as utils from '../network/utils'
import { searchData } from '../network'

/**
 * Retrieve country info for a specific code.
 * @function countries
 * @memberof module:api.Fundamentals
 * @static
 * @param {object} params - object of parameters:
 * @param {string} params.code - Country code.
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is a country object. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, resolves with a country object.
 */
export function countries({ code }, callback) {
  const params = {
    AMaaSClass: 'fundamentalCountries',
    query: code ? { countryCode: [code] }: {}
  }
  //if code is not specified, retun all countries 
  let promise = searchData(params).then(result => {
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
 * Make request and search data
 * @function calcBusinessDate
 * @memberof module:api.Fundamentals
 * @static
 * @param {object} params - object of parameters:
 * @param {string | array} params.codes - A country code string or an array of country code strings 
 * @param {string} params.date - start date
 * @param {string} params.offset - Number of offset days.
 * @param {string | array} params.invalidDates - an invalid date string or an array of invalid dates strings 
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is a country name returned or country names. Omit to return Promise
 * @returns {Promise|null} 
 */
export function calcBusinessDate({ date, codes, offset, invalidDates }, callback) { //invalid dates
  if (!date || !codes || !offset) {
    if (typeof callback === 'function') {
      return callback('Error: missing parameters. Date, codes and offset are required.')
    } else {
      return Promise.reject('Error: missing parameters. Date, codes and offset are required.')
    }
  }
  
  if(invalidDates) {
    if(!Array.isArray(invalidDates)) {
      invalidDates = invalidDates.split(',')
    }
  }
  if(!Array.isArray(codes)) {
    codes = codes.split(',')
  }
  
  const params = {
    AMaaSClass: 'fundamentalBusinessDate',
    query: { startDate: [date], countryCodes: codes, offset: [offset], invalidDates: invalidDates ? invalidDates : [] }
  }
  
  let promise = searchData(params).then(result => {
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
 * Make request and search data
 * @function processDateInfo
 * @memberof module:api.Fundamentals
 * @static
 * @param {object} params - object of parameters:
 * @param {string | array} params.codes - A country code string or an array of country codes strings 
 * @param {string} params.date - start date
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is a country name returned or country names. Omit to return Promise
 * @returns {Promise|null} 
 */
export function processDateInfo({date, codes}, callback) {
  if(!Array.isArray(codes)) {
    codes = codes.split(',')
  }
  
  const params = {
    AMaaSClass: 'fundamentalDateInfo',
    AMId: date,
    query: { countryCodes: codes }
  }
  let promise = searchData(params).then(result => {
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
 * Make request and search data
 * @function holidays
 * @memberof module:api.Fundamentals
 * @static
 * @param {object} params - object of parameters:
 * @param {string | array} params.codes - A country code string or an array of country codes strings 
 * @param {string | array} params.years - A year string or an array of 
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is a country name returned or country names. Omit to return Promise
 * @returns {Promise|null} 
 */
export function holidays ({codes, years}, callback) {
  if(!codes) {
    if (typeof callback === 'function') {
      return callback('Error: Currently only country-based holiday calendars are supported.')
    } else {
      return Promise.reject('Error: Currently only country-based holiday calendars are supported.')
    }
  }
  
  if(!Array.isArray(codes)) {
    codes = codes.split(',')
  }
  if(!Array.isArray(years)) {
    years = years.split(',')
  }
  
  const params = {
    AMaaSClass: 'fundamentalHoliday',
    query: { countryCodes: codes, year: years }
  }
  let promise = searchData(params).then(result => {
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
