import uuid from 'uuid'
import { retrieve, _parseParty, insert, partialAmend, amend, search, deactivate, reactivate } from './parties.js'
import Party from '../../parties/Party/party.js'
import Individual from '../../parties/Individual/individual'
import Broker from '../../parties/Broker/broker.js'
import Address from '../../parties/Children/address.js'
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

const mockParty = {
  assetManagerId: 1,
  partyType: 'Individual'
}

describe('retrieve', () => {
  beforeAll(() => {
    network.retrieveData.mockImplementation(() => Promise.resolve(mockParty))
  })
  test('with promise', () => {
    let promise = retrieve({ AMId: 1 })
    expect(promise).toBeInstanceOf(Promise)
  })
  it('calls retrieveData with the correct params', done => {
    retrieve({ AMId: 1, resourceId: 'testID' }, (error, result) => {
      expect(network.retrieveData).toHaveBeenCalledWith({ AMaaSClass: 'parties', AMId: 1, resourceId: 'testID' })
      done()
    })
  })
})

describe('insert', () => {
  beforeAll(() => {
    network.insertData.mockImplementation(() => Promise.resolve(mockParty))
  })
  test('with promise', () => {
    let promise = insert({ AMId: 1, party: mockParty })
    expect(promise).toBeInstanceOf(Promise)
  })
  it('calls insertData with the correct params', done => {
    insert({ AMId: 1, party: mockParty }, (error, result) => {
      expect(network.insertData).toHaveBeenCalledWith({ AMaaSClass: 'parties', AMId: 1, data: JSON.parse(JSON.stringify(mockParty)) })
      done()
    })
  })
})

describe('amend', () => {
  beforeAll(() => {
    network.putData.mockImplementation(() => Promise.resolve(mockParty))
  })
  test('with promise', () => {
    let promise = amend({ AMId: 1 })
    expect(promise).toBeInstanceOf(Promise)
  })
  it('calls putData with the correct params', done => {
    amend({ AMId: 1, party: mockParty, resourceId: 'testID' }, (error, result) => {
      expect(network.putData).toHaveBeenCalledWith({ AMaaSClass: 'parties', AMId: 1, resourceId: 'testID', data: JSON.parse(JSON.stringify(mockParty)) })
      done()
    })
  })
})

describe('partial', () => {
  beforeAll(() => {
    network.patchData.mockImplementation(() => Promise.resolve(mockParty))
  })
  test('with promise', () => {
    let promise = partialAmend({ AMId: 1 })
    expect(promise).toBeInstanceOf(Promise)
  })
  it('calls patchData with the correct params', done => {
    partialAmend({ AMId: 1, resourceId: 'testID', changes: { changed: 'changed' } }, (error, result) => {
      expect(network.patchData).toHaveBeenCalledWith({ AMaaSClass: 'parties', AMId: 1, resourceId: 'testID', data: { changed: 'changed' } })
      done()
    })
  })
})

describe('search', () => {
  beforeAll(() => {
    network.searchData.mockImplementation(() => Promise.resolve(mockParty))
  })
  test('with promise', () => {
    let promise = search({ AMId: 1 })
    expect(promise).toBeInstanceOf(Promise)
  })
  it('calls searchData with the correct params', done => {
    search({ AMId: 1, query: { queryKey: ['queryValues'] } }, (error, result) => {
      expect(network.searchData).toHaveBeenCalledWith({ AMaaSClass: 'parties', AMId: 1, query: { queryKey: ['queryValues'] } })
      done()
    })
  })
})

describe('deactivate', () => {
  beforeAll(() => {
    network.patchData.mockImplementation(() => Promise.resolve(mockParty))
  })
  test('with promise', () => {
    let promise = deactivate({ AMId: 1 })
    expect(promise).toBeInstanceOf(Promise)
  })
  it('calls patchData with the correct params', done => {
    deactivate({ AMId: 1, resourceId: 'testID' }, (error, result) => {
      expect(network.patchData).toHaveBeenCalledWith({ AMaaSClass: 'parties', AMId: 1, resourceId: 'testID', data: { partyStatus: 'Inactive' } })
      done()
    })
  })
})

describe('reactivate', () => {
  beforeAll(() => {
    network.patchData.mockImplementation(() => Promise.resolve(mockParty))
  })
  test('with promise', () => {
    let promise = reactivate({ AMId: 1 })
    expect(promise).toBeInstanceOf(Promise)
  })
  it('calls patchData with the correct params', done => {
    reactivate({ AMId: 1, resourceId: 'testID' }, (error, result) => {
      expect(network.patchData).toHaveBeenCalledWith({ AMaaSClass: 'parties', AMId: 1, resourceId: 'testID', data: { partyStatus: 'Active' } })
      done()
    })
  })
})