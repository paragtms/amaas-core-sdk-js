import * as fundamentals from './fundamentals'
import * as network from '../network'

network.searchData = jest.fn()

let mockCountry = {
  alpha2: 'SG',
  alpha3: 'SGP',
  name: 'Singapore',
  numeric: '702',
  officalName: 'Republic of Singapore'
}

let mockBizDate = {
  business_date: '2017-07-03'
}
let mockDateInfo = {
  SGP: {
    working_day: true
  }
}
let mockHoliday = {
  SGP: {
    calendar: 'WesternCalendar',
    holidays: [['2017-01-01', 'New year']],
    weekends: [5, 6]
  }
}

describe('utils/fundamentals', () => {
  describe('countries', () => {
    beforeAll(() => {
      network.searchData.mockImplementation(() => Promise.resolve(mockCountry))
    })
    test('with promise', () => {
      let promise = fundamentals.countries({ countryCode: 'SG' })
      expect(promise).toBeInstanceOf(Promise)
    })
    it('calls searchData with the correct parameters', done => {
      fundamentals.countries({ code: 'SG' }, (error, result) => {
        expect(network.searchData).toHaveBeenCalledWith({
          AMaaSClass: 'fundamentalCountries',
          query: { countryCode: ['SG'] }
        })
        done()
      })
    })
  })

  describe('calcBusinessDate', () => {
    beforeAll(() => {
      network.searchData.mockImplementation(() => Promise.resolve(mockBizDate))
    })
    test('with promise', () => {
      let promise = fundamentals.calcBusinessDate({
        date: '2017-6-30',
        codes: 'SG',
        offset: 1
      })
      expect(promise).toBeInstanceOf(Promise)
    })
    it('calls searchData with the correct parameters', done => {
      fundamentals.calcBusinessDate(
        { date: '2017-6-30', codes: 'SG', offset: 1 },
        (error, result) => {
          expect(network.searchData).toHaveBeenCalledWith({
            AMaaSClass: 'fundamentalBusinessDate',
            query: {
              startDate: ['2017-6-30'],
              countryCodes: ['SG'],
              offset: [1],
              invalidDates: []
            }
          })
          done()
        }
      )
    })
    it('calls searchData with the correct parameters', done => {
      fundamentals.calcBusinessDate(
        { date: '2017-6-30', codes: ['SG', 'CHN'], offset: 1 },
        (error, result) => {
          expect(network.searchData).toHaveBeenCalledWith({
            AMaaSClass: 'fundamentalBusinessDate',
            query: {
              startDate: ['2017-6-30'],
              countryCodes: ['SG', 'CHN'],
              offset: [1],
              invalidDates: []
            }
          })
          done()
        }
      )
    })
    it('calls searchData with the correct parameters', done => {
      fundamentals.calcBusinessDate(
        {
          date: '2017-6-30',
          codes: 'SG',
          offset: 1,
          invalidDates: '2017-7-01'
        },
        (error, result) => {
          expect(network.searchData).toHaveBeenCalledWith({
            AMaaSClass: 'fundamentalBusinessDate',
            query: {
              startDate: ['2017-6-30'],
              countryCodes: ['SG'],
              offset: [1],
              invalidDates: ['2017-7-01']
            }
          })
          done()
        }
      )
    })

    it('calls searchData with the correct parameters', done => {
      fundamentals.calcBusinessDate(
        {
          date: '2017-6-30',
          codes: 'SG',
          offset: 1,
          invalidDates: ['2017-7-01', '2017-7-02']
        },
        (error, result) => {
          expect(network.searchData).toHaveBeenCalledWith({
            AMaaSClass: 'fundamentalBusinessDate',
            query: {
              startDate: ['2017-6-30'],
              countryCodes: ['SG'],
              offset: [1],
              invalidDates: ['2017-7-01', '2017-7-02']
            }
          })
          done()
        }
      )
    })
  })

  describe('processDateInfo', () => {
    beforeAll(() => {
      network.searchData.mockImplementation(() => Promise.resolve(mockDateInfo))
    })
    test('with promise', () => {
      let promise = fundamentals.processDateInfo({
        date: '2017-7-03',
        codes: 'SG'
      })
      expect(promise).toBeInstanceOf(Promise)
    })

    it('calls searchData with the correct parameters', done => {
      fundamentals.processDateInfo(
        { date: '2017-7-03', codes: 'SG' },
        (error, result) => {
          expect(network.searchData).toHaveBeenCalledWith({
            AMaaSClass: 'fundamentalDateInfo',
            AMId: '2017-7-03',
            query: { countryCodes: ['SG'] }
          })
          done()
        }
      )
    })

    it('calls searchData with the correct parameters', done => {
      fundamentals.processDateInfo(
        { date: '2017-7-03', codes: ['SG', 'CHN'] },
        (error, result) => {
          expect(network.searchData).toHaveBeenCalledWith({
            AMaaSClass: 'fundamentalDateInfo',
            AMId: '2017-7-03',
            query: { countryCodes: ['SG', 'CHN'] }
          })
          done()
        }
      )
    })
  })

  describe('holidays', () => {
    beforeAll(() => {
      network.searchData.mockImplementation(() => Promise.resolve(mockHoliday))
    })

    test('with promise', () => {
      let promise = fundamentals.holidays({ codes: 'SG', years: '2017' })
      expect(promise).toBeInstanceOf(Promise)
    })

    it('calls searchData with the correct parameters', done => {
      fundamentals.holidays({ codes: 'SG', years: '2017' }, (error, result) => {
        expect(network.searchData).toHaveBeenCalledWith({
          AMaaSClass: 'fundamentalHoliday',
          query: { countryCodes: ['SG'], year: ['2017'] }
        })
        done()
      })
    })

    it('calls searchData with the correct parameters', done => {
      fundamentals.holidays(
        { codes: ['SG', 'CHN'], years: '2017' },
        (error, result) => {
          expect(network.searchData).toHaveBeenCalledWith({
            AMaaSClass: 'fundamentalHoliday',
            query: { countryCodes: ['SG', 'CHN'], year: ['2017'] }
          })
          done()
        }
      )
    })

    it('calls searchData with the correct parameters', done => {
      fundamentals.holidays(
        { codes: 'SG', years: ['2017', '2018'] },
        (error, result) => {
          expect(network.searchData).toHaveBeenCalledWith({
            AMaaSClass: 'fundamentalHoliday',
            query: { countryCodes: ['SG'], year: ['2017', '2018'] }
          })
          done()
        }
      )
    })
  })
})
