import { retrieve, search, fieldsSearch } from './positions.js'
import Position from '../../transactions/Positions/position.js'
import * as api from '../../exports/api'
import * as network from '../network'

network.retrieveData = jest.fn()
network.insertData = jest.fn()
network.patchData = jest.fn()
network.putData = jest.fn()
network.searchData = jest.fn()
network.deleteData = jest.fn()

api.config({
  stage: 'staging',
  token: process.env.API_TOKEN
})

const mockPos = {
  assetManagerId: 1,
  bookId: 'testID',
  assetId: 'assetID',
  quantity: 4,
  validFrom: 'date',
  internalId: 'ID',
  validTo: 'date',
  clientId: 3,
  accountingType: 'type',
  accountId: 'account'
}

describe('retrieve', () => {
  beforeAll(() => {
    network.retrieveData.mockImplementation(() => Promise.resolve(mockPos))
  })
  test('with promise', () => {
    let promise = retrieve({})
    expect(promise).toBeInstanceOf(Promise)
  })
  it('calls retrieveData with correct params', done => {
    retrieve({ AMId: 1 }, (error, result) => {
      expect(network.retrieveData).toHaveBeenCalledWith({ AMaaSClass: 'positions', AMId: 1 })
      done()
    })
  })
})

describe('search', () => {
  beforeAll(() => {
    network.searchData.mockImplementation(() => Promise.resolve(mockPos))
  })
  test('with promise', () => {
    let promise = search({})
    expect(promise).toBeInstanceOf(Promise)
  })
  it('calls searchData with correct params', done => {
    search({ AMId: 1, query: { queryKey: ['queryValues'] } }, (error, result) => {
      expect(network.searchData).toHaveBeenCalledWith({ AMaaSClass: 'positions', AMId: 1, query: { queryKey: ['queryValues'] } })
      done()
    })
  })
})

describe ('fieldsSearch', () => {
    beforeAll(() => {
      network.searchData.mockImplementation(() => Promise.resolve(mockPos))
    })
    test('with promise', () => {
      let promise = search({})
      expect(promise).toBeInstanceOf(Promise)
    })
    it('throws if called without assetManagerIds', () => {
      const willThrow = () => {
        fieldsSearch({ fields: ['description'] })
      }
      expect(willThrow).toThrowError(new Error('You must specify at least one Asset Manager ID'))
    })
    it('calls searchData with the correct params', done => {
      fieldsSearch({ assetManagerIds: [1, 2], fields: ["description", "comments", "settlementCurrency"] }, (error, result) => {
        expect(network.searchData).toHaveBeenCalledWith({ AMaaSClass: 'positions', query:{ assetManagerIds:[1, 2], fields: ["description", "comments", "settlementCurrency"]} })
        done()
      })
    })
  })