import { _parseAM, getAssetManager } from './assetManagers.js'
import { retrieve, insert, amend, deactivate, reactivate, checkDomains, insertDomain, retrieveEODBooks, getCredentialsForPubSub } from './assetManagers.js'
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
      test('with promise', () => {
        retrieve({ AMId: 1 })
          .then(result => {
            expect(result).toEqual(new AssetManager({ assetManagerId: 1 }))
          })
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
          expect(result).toEqual(new AssetManager(data))
          done()
        })
      })
      test('with promise', () => {
        insert({ assetManager: data })
          .then(result => {
            expect(result).toEqual(new AssetManager(data))
          })
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
      test('with promise', () => {
        amend({ AMId: 1, assetManager: data })
          .then(result => {
            expect(result).toEqual(new AssetManager(data))
          })
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
      test('with promise', () => {
        deactivate({ AMId: 1 })
          .then(result => {
            expect(result).toEqual(new AssetManager(data))
          })
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
      test('with promise', () => {
        reactivate({ AMId: 1 })
          .then(result => {
            expect(result).toEqual(new AssetManager(data))
          })
      })
    })
  })

  describe('checkDomains', () => {
    let data
    beforeAll(() => {
      data = {
        assetManagerId: 1,
        domain: 'testDomain.com',
        isPrimary: true
      }
      network.retrieveData.mockImplementation(() => Promise.resolve(data))
    })
    test('with promise', () => {
      let promise = checkDomains({ domain: 'testDomain.com' })
      expect(promise).toBeInstanceOf(Promise)
    })
    it('calls retrieveData with correct params', done => {
      checkDomains({ domain: 'testDomain.com' }, (error, result) => {
        expect(network.retrieveData).toHaveBeenCalledWith({ AMaaSClass: 'assetManagerDomains', query: { domain: ['testDomain.com'] } })
        done()
      })
    })
  })

  describe('insertDomain', () => {
    let data
    beforeAll(() => {
      data = {
        assetManagerId: 1,
        domain: 'testDomain.com',
        isPrimary: true
      }
      network.insertData.mockImplementation(() => Promise.resolve(data))
    })
    test('with promise', () => {
      let promise = insertDomain({ domain: data })
      expect(promise).toBeInstanceOf(Promise)
    })
    it('calls insertData with correct params', done => {
      insertDomain({ domain: data }, (error, result) => {
        expect(network.insertData).toHaveBeenCalledWith({ AMaaSClass: 'assetManagerDomains', data, queryParams: { assetManagerId: [1] } })
        done()
      })
    })
  })

  describe('retrieveEODBooks', () => {
    const mockedEODBook = {
          assetManagerId: 1,
          utcCloseTime: '18:00:00',
          bookId: 'testID',
          eodBookStatus: 'testStatus'
    }
    beforeAll(() => {
      network.retrieveData.mockImplementation(() => Promise.resolve(mockedEODBook))
    })
    it('returns promise', () => {
      let promise=retrieveEODBooks({AMId: 1, bookID: 'ABC'})
      expect(promise).toBeInstanceOf(Promise)
    })
    it('calls retrieveEODBooks with the correct params', done => {
      retrieveEODBooks({AMId: 1, bookID: 'ABC'}, (error, result) => {
        expect(network.retrieveData).toHaveBeenCalledWith({AMaaSClass: 'assetManagerEODBooks', AMId: 1, bookID: 'ABC'})
        done()  
      })
    })
    it('calls retrieveEODBooks with the correct params', done => {
      retrieveEODBooks({AMId: 1}, (error, result) => {
        expect(network.retrieveData).toHaveBeenCalledWith({AMaaSClass: 'assetManagerEODBooks', AMId: 1})
        done()  
      }) 
    })
  })

  describe('getCredentialsForPubSub', () => {
    const mockedCredentials = {
      credentials: {
        AccessKeyId: 'testAcccessKey',
        SecretAccessKey: 'testSecretKey',
        SessionToken: 'testSessionToken'
      },
      topics: ['topic1', 'topic2']
    }
    beforeAll(() => {
      network.retrieveData.mockImplementation(() => Promise.resolve(mockedCredentials))
    })
    it('returns promise', () => {
      let promise = getCredentialsForPubSub({ AMId: 1 })
      expect(promise).toBeInstanceOf(Promise)
    })
    it('calls retrieveData with the correct params', done => {
      getCredentialsForPubSub({ AMId: 1 }, (error, result) => {
        expect(network.retrieveData).toHaveBeenCalledWith({ AMaaSClass: 'assetManagerPubSubCredentials', AMId: 1 })
        done()
      })
    })
  })
})
