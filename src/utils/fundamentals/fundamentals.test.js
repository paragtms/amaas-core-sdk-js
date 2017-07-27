import * as fundamentals from './fundamentals'
import * as network from '../network'

network.searchData = jest.fn()

let mockCountry = {
    countryCode: 'SG'
}
let mockBizDate = {
    date: '2017-6-30',
    code: 'SG',
    offset: 1
}
let mockDateInfo = {
    date: '2017-7-03',
    code: 'SG'
}
let mockHoliday = {
    code: 'SG', 
    year: '2017'
}

describe('utils/fundamentals', () => {
    describe('countries', () => {
        beforeAll(() => {
          network.searchData.mockImplementation(() => Promise.resolve(mockCountry))
        })
        test('with promise', () => {
            let promise = fundamentals.countries({countryCode: 'SG'})
            expect(promise).toBeInstanceOf(Promise)
        })           
        it('calls searchData with the correct parameters', done => {
              fundamentals.countries( {code: 'SG'}, (error, result) => {
              expect(network.searchData).toHaveBeenCalledWith({ AMaaSClass: 'fundamentalCountries', query: { countryCode: [ 'SG' ]} })
              done()
            })
        })
    })

    describe('calcBusinessDate', () => {
        beforeAll(() => {
          network.searchData.mockImplementation(() => Promise.resolve(mockBizDate))
        })
        test('with promise', () => {
            let promise = fundamentals.calcBusinessDate({date: '2017-6-30', code: 'SG', offset: 1})
            expect(promise).toBeInstanceOf(Promise)
        })           
        it('calls searchData with the correct parameters', done => {
              fundamentals.calcBusinessDate( {date: '2017-6-30', code: 'SG', offset: 1}, (error, result) => {
              expect(network.searchData).toHaveBeenCalledWith({ AMaaSClass: 'fundamentalBusinessDate', query: {stratDate: ['2017-6-30'], countryCode: ['SG'], offset: [1]} })
              done()
            })
        })
    })

     describe('getDateInfo', () => {
        beforeAll(() => {
          network.searchData.mockImplementation(() => Promise.resolve(mockDateInfo))
        })
        test('with promise', () => {
            let promise = fundamentals.getDateInfo({date: '2017-7-03', code: 'SG'})
            expect(promise).toBeInstanceOf(Promise)
        })           
        it('calls searchData with the correct parameters', done => {
              fundamentals.getDateInfo( {date: '2017-7-03', code: 'SG'}, (error, result) => {
              expect(network.searchData).toHaveBeenCalledWith({ AMaaSClass: 'fundamentalDateInfo', query: {stratDate: ['2017-7-03'], countryCode: ['SG']} })
              done()
            })
        })
    })

         describe('holidays', () => {
        beforeAll(() => {
          network.searchData.mockImplementation(() => Promise.resolve(mockHoliday))
        })
        test('with promise', () => {
            let promise = fundamentals.holidays({code: 'SG', year: 2017})
            expect(promise).toBeInstanceOf(Promise)
        })           
        it('calls searchData with the correct parameters', done => {
              fundamentals.holidays( {code: 'SG', year: 2017}, (error, result) => {
              expect(network.searchData).toHaveBeenCalledWith({ AMaaSClass: 'fundamentalHoliday', query: {countryCode: ['SG'], year: [2017]} })
              done()
            })
        })
    })
})

