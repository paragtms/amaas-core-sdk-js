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
  //if code is not specified, retun all countries 
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

    let code=""
    if(Array.isArray(codes)){
      for(var i = 0; i < codes.length;i++) {
            code+=codes[i]+","
       } 
     code = code.substring(0, code.length - 1);
   }else{
    code=codes
   }
   
   let invalidDate=""
   if(invalidDates){
    if(Array.isArray(invalidDates)){
      for(var i = 0; i < invalidDates.length;i++) {
            invalidDate+=invalidDates[i]+","
       } 
     invalidDate = invalidDate.substring(0,invalidDate.length - 1);
    }else{
      invalidDate=invalidDates
    }
   }
    
   let params 
   if(!invalidDates){
          params = {
          AMaaSClass: 'fundamentalBusinessDate',
          query: {stratDate: [date], countryCode: [code], offset: [offset]}
          }
   }else{
         params = {
          AMaaSClass: 'fundamentalBusinessDate',
          query: {stratDate: [date], countryCode: [code], offset: [offset], invalidDate: [invalidDate]}
          }
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

export function processDateInfo ({date, codes}, callback)
{
    let code=""
    if(Array.isArray(codes)){
      for(var i = 0; i < codes.length;i++) {
            code+=codes[i]+","
       } 
     code = code.substring(0, code.length - 1);
   }else{
    code=codes
   }

    const params = {
          AMaaSClass: 'fundamentalDateInfo',
          query: {stratDate: [date], countryCode: [code]}
    }
   let promise = searchData(params).then(result => {
    if (typeof callback === 'function') {
      callback(null, result)
    } //should retun true
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

export function holidays ({codes, years}, callback)
{
    if(!codes) {
        return "Currently only country-based holiday calendars are supported"
    }

    let code=""
    if(Array.isArray(codes)){
      for(var i = 0; i < codes.length;i++) {
            code+=codes[i]+","
       } 
     code = code.substring(0, code.length - 1);
   }else{
    code=codes
   }

   let year=""
   if(Array.isArray(years)){
      for(var i = 0; i < years.length;i++) {
            year+=years[i]+","
       } 
     year = year.substring(0, year.length - 1);
   }else{
    year=years
   }

   const params = {
          AMaaSClass: 'fundamentalHoliday',
          query: {countryCode: [code], year: [year]}
    }

    let promise = searchData(params).then(result => {
    if (typeof callback === 'function') {
      callback(null, result)
    } //should retun true
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
