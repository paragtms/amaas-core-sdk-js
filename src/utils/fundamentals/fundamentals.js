import * as utils from '../network/utils'
import { searchData } from '../network'

/**
 * Make request and search data
 * @function countries
 * @param {object} params - object of parameters:
 * @param {string} params.code 
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is a country name returned or country names. Omit to return Promise
 * @returns {Promise|null} 
 */
export function countries({ code }, callback) {
  const params = {
    AMaaSClass: 'fundamentalCountries',
    query: {countryCode: [code]}
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
 * @param {object} params - object of parameters:
 * @param {string} params.codes - A country code string or an array of country codes strings 
 * @param {string} params.date - start date
 * @param {string} params.offset
 * @param {string} params.invalidDates - an invalid date string or an array of invalid dates strings 
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is a country name returned or country names. Omit to return Promise
 * @returns {Promise|null} 
 */
export function calcBusinessDate({date, codes, offset, invalidDates}, callback) //invalid dates
{
    if(!date){
        return "Must specify start_date in querystring"
    }else if(!codes){
        return "Must specify at least one country_code in querystring"
    }else if(!offset){
        return "Must specify offset in querystring"
    }else if(!Number.isInteger(offset)) {
         return "Offset must be an integer"
    }
   
   if(invalidDates){
     if(!Array.isArray(invalidDates)){
       invalidDates = invalidDates.split(',')
     }
   } 
   if(!Array.isArray(codes)){
     codes = codes.split(',')
   }

    const params = {
       AMaaSClass: 'fundamentalBusinessDate',
       query: { startDate: [date], countryCode: codes, offset: [offset], invalidDate: invalidDates ? invalidDates : []  }
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
 * @param {object} params - object of parameters:
 * @param {string} params.codes - A country code string or an array of country codes strings 
 * @param {string} params.date - start date
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is a country name returned or country names. Omit to return Promise
 * @returns {Promise|null} 
 */
export function processDateInfo ({date, codes}, callback)
{
   if(!Array.isArray(codes)){
     codes = codes.split(',')
   }

    const params = {
          AMaaSClass: 'fundamentalDateInfo',
          query: {startDate: [date], countryCode: codes}
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
 * @param {object} params - object of parameters:
 * @param {string} params.codes - A country code string or an array of country codes strings 
 * @param {string} params.years - A year string or an array of 
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is a country name returned or country names. Omit to return Promise
 * @returns {Promise|null} 
 */
export function holidays ({codes, years}, callback)
{
   if(!codes) {
        return "Currently only country-based holiday calendars are supported"
   }

   if(!Array.isArray(codes)){
     codes = codes.split(',')
   }
   if(!Array.isArray(years)){
     years = years.split(',')
   }

   const params = {
          AMaaSClass: 'fundamentalHoliday',
          query: {countryCode: codes, year: years}
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
