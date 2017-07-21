import { retrieve, send } from './allocations'
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

const mockLink = {
  assetManagerId: 1,
  linkedTransactionId: 'testId'
}

describe('retrieve', () => {
  beforeAll(() => {
    network.retrieveData.mockImplementation(() => Promise.resolve(mockLink))
  })
  test('with promise', () => {
    let promise = retrieve({ AMId: 1, resourceId: 'testID' })
    expect(promise).toBeInstanceOf(Promise)
  })
  it('calls retrieveData with correct params', done => {
    retrieve({ AMId: 1, resourceId: 'testID' }, (error, result) => {
      expect(network.retrieveData).toHaveBeenCalledWith({ AMaaSClass: 'allocations', AMId: 1, resourceId: 'testID' })
      done()
    })
  })
})

describe('send', () => {
  beforeAll(() => {
    network.insertData.mockImplementation(() => Promise.resolve(mockLink))
  })
  test('with promise', () => {
    let promise = send({ AMId: 1, resourceId: 'testID' })
    expect(promise).toBeInstanceOf(Promise)
  })
  it('calls insertData with correct params', done => {
    send({ AMId: 1, resourceId: 'testID', data: mockLink }, (error, result) => {
      expect(network.insertData).toHaveBeenCalledWith({ AMaaSClass: 'allocations', AMId: 1, resourceId: 'testID', data: JSON.parse(JSON.stringify(mockLink)) })
      done()
    })
  })
})