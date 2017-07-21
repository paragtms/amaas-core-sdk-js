import { _parseAM, getAssetManager } from './assetManagers.js'
import { retrieve, insert, amend, deactivate, reactivate } from './assetManagers.js'
import AssetManager from '../../assetManagers/AssetManager/assetManager.js'
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
jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000

describe('utils/assetManagers', () => {
  describe('_parseAM function', () => {
    it('should return an instance of AssetManager class', () => {
      const json = {
        assetManagerId: '48576',
        clientId: 'testClient',
        defaultTimezone: 'UTC',
        version: 1
      }
      const parsedAM = _parseAM(json)
      const expectedClass = new AssetManager({
        assetManagerId: '48576',
        clientId: 'testClient',
        defaultTimezone: 'UTC',
        version: 1
      })
      expect(parsedAM).toEqual(expectedClass)
    })
  })


  describe('retrieve', () => {
    beforeAll(() => {
      network.retrieveData.mockImplementation(() => Promise.resolve({ assetManagerId: 1 }))
    })
    it('returns promise', () => {
      let promise = retrieve({AMId: 1})
      expect(promise).toBeInstanceOf(Promise)
    })

    it('calls retrieveData with the correct params', done => {
      retrieve({ AMId: 1 }, (error, result) => {
        expect(network.retrieveData).toHaveBeenCalledWith({ AMaaSClass: 'assetManagers', AMId: 1 })
        done()
      })
    })

    describe('it returns the correct result', () => {
      test('with callback', done => {
        retrieve({ AMId: 1 }, (error, result) => {
          expect(result).toEqual(new AssetManager({ assetManagerId: 1 }))
          done()
        })
      })
      test('with promise', async () => {
        let result = await retrieve({ AMId: 1 })
        expect(result).toEqual(new AssetManager({ assetManagerId: 1 }))
      })
    })
  })

  describe('insert', () => {
    let data
    beforeAll(() => {
      data = {
        defaultBookCloseTime: "17:30:00",
        defaultTimezone: "UTC",
        assetManagerType: "Accredited Investor",
        clientId: 1,
        assetManagerStatus: "Active",
        defaultBookOwnerId: 2
      }
      network.insertData.mockImplementation(() => Promise.resolve(data))
    })
    test('with promise', () => {
      let promise = insert({AMId: 1})
      expect(promise).toBeInstanceOf(Promise)
    })

    test('calls insertData with correct params', done => {
      insert({ assetManager: data }, (error, result) => {
        expect(network.insertData).toHaveBeenCalledWith({ AMaaSClass: 'assetManagers', data: JSON.parse(JSON.stringify(data)) })
        done()
      })
    })

    describe('returns correct result', () => {
      test('with callback', done => {
        insert({ assetManager: data }, (error, result) => {
          console.log(error)
          expect(result).toEqual(new AssetManager(data))
          done()
        })
      })
      test('with promise', async () => {
        let result = await insert({ assetManager: data })
        expect(result).toEqual(new AssetManager(data))
      })
    })
  })

  describe('amend', () => {
    let data
    beforeAll(() => {
      data = {
        defaultBookCloseTime: "17:30:00",
        defaultTimezone: "UTC",
        assetManagerType: "Accredited Investor",
        clientId: 1,
        assetManagerStatus: "Active",
        defaultBookOwnerId: 2
      }
      network.putData.mockImplementation(() => Promise.resolve(data))
    })
    test('with promise', () => {
      let promise = amend({AMId: 1})
      expect(promise).toBeInstanceOf(Promise)
    })
    it('calls putData with correct params', done => {
      amend({ AMId: 1, assetManager: data }, (error, result) => {
        expect(network.putData).toHaveBeenCalledWith({ AMaaSClass: 'assetManagers', AMId: 1, data: JSON.parse(JSON.stringify(data)) })
        done()
      })
    })
    describe('returns correct result', () => {
      test('with callback', done => {
        amend({ AMId: 1, assetManager: data }, (error, result) => {
          expect(result).toEqual(new AssetManager(data))
          done()
        })
      })
      test('with promise', async () => {
        let result = await amend({ AMId: 1, assetManager: data })
        expect(result).toEqual(new AssetManager(data))
      })
    })
  })

  describe('deactivate', () => {
    let data
    beforeAll(() => {
      data = {
        defaultBookCloseTime: "17:30:00",
        defaultTimezone: "UTC",
        assetManagerType: "Accredited Investor",
        clientId: 1,
        assetManagerStatus: "Active",
        defaultBookOwnerId: 2
      }
      network.patchData.mockImplementation(() => Promise.resolve(data))
    })
    test('with promise', () => {
      let promise = deactivate({AMId: 1})
      expect(promise).toBeInstanceOf(Promise)
    })
    it('calls patchData with correctResult', done => {
      deactivate({ AMId: 1 }, (error, result) => {
        expect(network.patchData).toHaveBeenCalledWith({ AMaaSClass: 'assetManagers', AMId: 1, data: { assetManagerStatus: 'Inactive' } })
        done()
      })
    })
    describe('returns correct result', () => {
      test('with callback', done => {
        deactivate({ AMId: 1 }, (error, result) => {
          expect(result).toEqual(new AssetManager(data))
          done()
        })
      })
      test('with promise', async () => {
        let result = await deactivate({ AMId: 1 })
        expect(result).toEqual(new AssetManager(data))
      })
    })
  })

  describe('reactivate', () => {
    let data
    beforeAll(() => {
      data = {
        defaultBookCloseTime: "17:30:00",
        defaultTimezone: "UTC",
        assetManagerType: "Accredited Investor",
        clientId: 1,
        assetManagerStatus: "Active",
        defaultBookOwnerId: 2
      }
      network.patchData.mockImplementation(() => Promise.resolve(data))
    })
    test('with promise', () => {
      let promise = reactivate({ AMId: 1 })
      expect(promise).toBeInstanceOf(Promise)
    })
    it('calls patchData with correct params', done => {
      reactivate({ AMId: 1 }, (error, result) => {
        expect(network.patchData).toHaveBeenCalledWith({ AMaaSClass: 'assetManagers', AMId: 1, data: { assetManagerStatus: 'Active' } })
        done()
      })
    })
    describe('returns correct result', () => {
      test('with callback', done => {
        reactivate({ AMId: 1 }, (error, result) => {
          expect(result).toEqual(new AssetManager(data))
          done()
        })
      })
      test('with promise', async () => {
        let result = await reactivate({ AMId: 1 })
        expect(result).toEqual(new AssetManager(data))
      })
    })
  })
})
