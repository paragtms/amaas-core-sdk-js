import uuid from 'uuid'

import { retrieve, insert, amend, search, cancel, reopen } from './corporateActions'
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

const mockCorpAct = {
  assetManagerId: 338,
  corporateActionId: uuid().substr(0, 10),
  clientId: 1,
  declaredDate: '2017-04-27',
  settlementDate: '2017-04-28',
  recordDate: '2017-04-28',
  assetId: 'TEST',
  partyId: '12',
  corporateActionType: 'CorporateAction'
}

describe('retrieve', () => {
  beforeAll(() => {
    network.retrieveData.mockImplementation(() => Promise.resolve(mockCorpAct))
  })
  test('with promise', () => {
    let promise = retrieve({})
    expect(promise).toBeInstanceOf(Promise)
  })
  it('calls retrieveData with correct params', done => {
    retrieve({ AMId: 1, resourceId: 'testID' }, (error, result) => {
      expect(network.retrieveData).toHaveBeenCalledWith({ AMaaSClass: 'corporateActions', AMId: 1, resourceId: 'testID' })
      done()
    })
  })
})

describe('insert', () => {
  beforeAll(() => {
    network.insertData.mockImplementation(() => Promise.resolve(mockCorpAct))
  })
  test('with promise', () => {
    let promise = insert({ AMId: 1, corporateAction: mockCorpAct })
    expect(promise).toBeInstanceOf(Promise)
  })
  it('calls insertData with correct params', done => {
    insert({ AMId: 1, corporateAction: mockCorpAct }, (error, result) => {
      expect(network.insertData).toHaveBeenCalledWith({ AMaaSClass: 'corporateActions', AMId: 1, data: JSON.parse(JSON.stringify(mockCorpAct)) })
      done()
    })
  })
})

describe('amend', () => {
  beforeAll(() => {
    network.putData.mockImplementation(() => Promise.resolve(mockCorpAct))
  })
  test('with promise', () => {
    let promise = amend({ AMId: 1, resourceId: 'testID', corporateAction: mockCorpAct })
    expect(promise).toBeInstanceOf(Promise)
  })
  it('calls putData with correct parasm', done => {
    amend({ AMId: 1, resourceId: 'testID', corporateAction: mockCorpAct }, (error, result) => {
      expect(network.putData).toHaveBeenCalledWith({ AMaaSClass: 'corporateActions', AMId: 1, resourceId: 'testID', data: JSON.parse(JSON.stringify(mockCorpAct)) })
      done()
    })
  })
})

describe('search', () => {
  beforeAll(() => {
    network.searchData.mockImplementation(() => Promise.resolve(mockCorpAct))
  })
  test('with promise', () => {
    let promise = search({ AMId: 1, query: {} })
    expect(promise).toBeInstanceOf(Promise)
  })
  it('calls searchData with correct params', done => {
    search({ AMId: 1, query: { queryKey: ['queryValues'] } }, (error, result) => {
      expect(network.searchData).toHaveBeenCalledWith({ AMaaSClass: 'corporateActions', AMId: 1, query: { queryKey: ['queryValues'] } })
      done()
    })
  })
})

describe('cancel', () => {
  beforeAll(() => {
    network.patchData.mockImplementation(() => Promise.resolve(mockCorpAct))
  })
  test('with promise', () => {
    let promise = cancel({ AMId: 1, resourceId: 'test' })
    expect(promise).toBeInstanceOf(Promise)
  })
  it('calls patchData with correct params', done => {
    cancel({ AMId: 1, resourceId: 'test' }, (error, result) => {
      expect(network.patchData).toHaveBeenCalledWith({ AMaaSClass: 'corporateActions', AMId: 1, resourceId: 'test', data: { corporateActionStatus: 'Cancelled' } })
      done()
    })
  })
})

describe('reopen', () => {
  beforeAll(() => {
    network.patchData.mockImplementation(() => Promise.resolve(mockCorpAct))
  })
  test('with promise', () => {
    let promise = reopen({})
    expect(promise).toBeInstanceOf(Promise)
  })
  it('calls patchData with correct params', done => {
    reopen({ AMId: 1, resourceId: 'testID' }, (error, result) => {
      expect(network.patchData).toHaveBeenCalledWith({ AMaaSClass: 'corporateActions', AMId: 1, resourceId: 'testID', data: { corporateActionStatus: 'Open' } })
      done()
    })
  })
})