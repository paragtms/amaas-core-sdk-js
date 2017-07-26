import * as fundamentals from './fundamentals'
import * as network from '../network'

network.searchData = jest.fn()

let mockCountry = {
    countryCode: 'SG'
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
        it('calls retrieveCountries with the correct parameters', done => {
              fundamentals.countries( {code: 'SG'}, (error, result) => {
              expect(network.searchData).toHaveBeenCalledWith({ AMaaSClass: 'fundamentalCountries', query: { countryCode: [ 'SG' ]} })
              done()
            })
        })
    })
})
