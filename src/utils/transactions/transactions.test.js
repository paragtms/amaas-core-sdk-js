import { retrieve, insert, amend, partialAmend, search, fieldsSearch, cancel } from './transactions'
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

const mockTransaction = {
  settlementDate: "2017-03-17",
  transactionDate: "2017-03-15",
  assetManagerId: 1,
  counterpartyBookId: "G95EIYQA6I",
  assetId: 846,
  settlementCurrency: "SGD",
  transactionType: "Block",
  transactionAction: "Remove",
  price: 352,
  netSettlement: 35269,
  transactionCurrency: "SGD",
  executionTime: "2017-03-15T05:02:18.928148+00:00",
  clientId: 1,
  grossSettlement: 35269,
  transactionId: "testTransactionID",
  assetBookId: "JWXWNSBABR",
  quantity: 100
}

describe('retrieve', () => {
  beforeAll(() => {
    network.retrieveData.mockImplementation(() => Promise.resolve(mockTransaction))
  })
  test('with promise', () => {
    let promise = retrieve({})
    expect(promise).toBeInstanceOf(Promise)
  })
  it('calls retrieveData with correct params', done => {
    retrieve({ AMId: 1, resourceId: 'testID', query: { version: 8 } }, (error, result) => {
      expect(network.retrieveData).toHaveBeenCalledWith({ AMaaSClass: 'transactions', AMId: 1, resourceId: 'testID', query: { version: 8 } })
      done()
    })
  })
})

describe('insert', () => {
  beforeAll(() => {
    network.insertData.mockImplementation(() => Promise.resolve(mockTransaction))
  })
  test('with promise', () => {
    let promise = insert({})
    expect(promise).toBeInstanceOf(Promise)
  })
  it('calls insertData with correct params', done => {
    insert({ AMId: 1, transaction: mockTransaction }, (error, result) => {
      expect(network.insertData).toHaveBeenCalledWith({ AMaaSClass: 'transactions', AMId: 1, data: JSON.parse(JSON.stringify(mockTransaction)) })
      done()
    })
  })
})

describe('amend', () => {
  beforeAll(() => {
    network.putData.mockImplementation(() => Promise.resolve(mockTransaction))
  })
  test('with promise', () => {
    let promise = amend({})
    expect(promise).toBeInstanceOf(Promise)
  })
  it('calls putData with correct params', done => {
    amend({ AMId: 1, resourceId: 'testID', transaction: mockTransaction }, (error, result) => {
      expect(network.putData).toHaveBeenCalledWith({ AMaaSClass: 'transactions', AMId: 1, resourceId: 'testID', data: JSON.parse(JSON.stringify(mockTransaction)) })
      done()
    })
  })
})

describe('partialAmend', () => {
  beforeAll(() => {
    network.patchData.mockImplementation(() => Promise.resolve(mockTransaction))
  })
  test('with promise', () => {
    let promise = partialAmend({})
    expect(promise).toBeInstanceOf(Promise)
  })
  it('calls patchData with correct params', done => {
    partialAmend({ AMId: 1, resourceId: 'testID', changes: { changed: 'changed' } }, (error, result) => {
      expect(network.patchData).toHaveBeenCalledWith({ AMaaSClass: 'transactions', AMId: 1, resourceId: 'testID', data: { changed: 'changed' } })
      done()
    })
  })
})

describe('search', () => {
  beforeAll(() => {
    network.searchData.mockImplementation(() => Promise.resolve(mockTransaction))
  })
  test('with promise', () => {
    let promise = search({})
    expect(promise).toBeInstanceOf(Promise)
  })
  it('calls retrieveData with correct params', done => {
    search({ AMId: 1, query: { queryKey: ['queryValues'] } }, (error, result) => {
      expect(network.searchData).toHaveBeenCalledWith({ AMaaSClass: 'transactions', AMId: 1, query: { queryKey: ['queryValues'] } })
      done()
    })
  })
})

describe ('fieldsSearch', () => {
    beforeAll(() => {
      network.searchData.mockImplementation(() => Promise.resolve(mockTransaction))
    })
    test('with promise', () => {
      let promise = search({})
      expect(promise).toBeInstanceOf(Promise)
    })
    it('throws if missing assetManagerIds', () => {
      const willThrow = () => {
        fieldsSearch({ fields: ['comments'] })
      }
      expect(willThrow).toThrowError(new Error('You must specify at least one Asset Manager ID'))
    })
    it('calls searchData with the correct params', done => {
      fieldsSearch({ assetManagerIds: [1, 2], fields: ["description", "comments", "settlementCurrency"] }, (error, result) => {
        expect(network.searchData).toHaveBeenCalledWith({ AMaaSClass: "transactions", query: { assetManagerIds: [1, 2], fields: ["description", "comments", "settlementCurrency"]} })
        done()
      })
    })
})

describe('cancel', () => {
  beforeAll(() => {
    network.deleteData.mockImplementation(() => Promise.resolve(mockTransaction))
  })
  test('with promise', () => {
    let promise = cancel({})
    expect(promise).toBeInstanceOf(Promise)
  })
  it('calls deleteData with correct params', done => {
    cancel({ AMId: 1, resourceId: 'testID' }, (error, result) => {
      expect(network.deleteData).toHaveBeenCalledWith({ AMaaSClass: 'transactions', AMId: 1, resourceId: 'testID' })
      done()
    })
  })
})