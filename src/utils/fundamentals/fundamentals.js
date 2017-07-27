import * as utils from '../network/utils'
import { searchData } from '../network'
/**
 * Make request and search data
 * @function countries
 * @param {object} params - object of parameters:
 * @param {string} params.countryCode 
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is a country name returned or country names. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with an string
 */

export function countries({ code }, callback) {
  const params = {
    AMaaSClass: 'fundamentalCountries',
    query: {countryCode: [code]}
  }
  let promise = searchData(params).then(result => {
    if (typeof callback === 'function') {
      callback(null, result)
    }
    return result
   }).catch((err) => {
     console.log(err.message);
  });
  if (typeof callback !== 'function') {
    // return promise if callback is not provided
    return promise
  }
  promise.catch(error => callback(error))
}

export function calcBusinessDate({date, code, offset}, callback) //invalid dates
{
    if(!date)
    {
        return "Must specify start_date in querystring"
    }else if(!code)
    {
        return "Must specify at least one country_code in querystring"
    }else if(!offset)
    {
        return "Must specify offset in querystring"
    }else if(!Number.isInteger(offset))
    {
         return "Offset must be an integer"
    }
    const params = {
          AMaaSClass: 'fundamentalBusinessDate',
          query: {stratDate: [date], countryCode: [code], offset: [offset]}
    }
    let promise = searchData(params).then(result => {
    if (typeof callback === 'function') {
      callback(null, result)
    }
      return result //should return biz date!
    }).catch((err) => {
      console.log(err.message);
    });
   if (typeof callback !== 'function') {
    // return promise if callback is not provided
    return promise
   }
  promise.catch(error => callback(error))
}

export function  getDateInfo ({date, code}, callback)
{
    
}