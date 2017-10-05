import uuid from 'uuid'
import {
  retrieve,
  insert,
  upsert,
  amend,
  partialAmend,
  search,
  fuzzySearch,
  fieldsSearch,
  deactivate,
  reactivate,
  getAssetConfig
} from './assets.js'
import Asset from '../../assets/Asset/asset.js'
import * as api from '../../exports/api'
import * as network from '../network'

network.retrieveData = jest.fn()
network.insertData = jest.fn()
network.patchData = jest.fn()
network.putData = jest.fn()
network.searchData = jest.fn()
network.deleteData = jest.fn()

api.config({
  stage: 'staging'
})

let mockAsset = {
  description: 'testAsset',
  assetType: 'Equity',
  assetManagerId: 1,
  assetId: 'testAssetID'
}

let mockConfig = {
  settlementCycle: {
    SGP: 3
  },
  exchangeSettlementCycleOverrides: {
    MISX: 2
  }
}

let mockFuzzyResult = {
  total: 25650,
  max_score: 1,
  hits: [
    {
      _index: 'assets',
      _type: '10',
      _id: '001114727',
      _score: 1,
      _source: {
        assetType: 'Equity',
        assetId: '001114727',
        description: 'ORD NPV',
        assetClass: 'Equity',
        displayName: 'SAP SE',
        assetManagerId: '10',
        ticker: 'SAP'
      }
    },
    {
      _index: 'assets',
      _type: '10',
      _id: '001114999',
      _score: 1,
      _source: {
        assetType: 'Equity',
        assetId: '001114999',
        description: 'NPV',
        assetClass: 'Equity',
        displayName: 'ARCANDOR AG',
        assetManagerId: '10',
        ticker: 'ARO'
      }
    }
  ]
}

describe('utils/assets', () => {
  describe('retrieve', () => {
    beforeAll(() => {
      network.retrieveData.mockImplementation(() => Promise.resolve(mockAsset))
    })
    test('with promise', () => {
      let promise = retrieve({ AMId: 1 })
      expect(promise).toBeInstanceOf(Promise)
    })
    it('calls retrieveData with the correct params', done => {
      retrieve({ AMId: 1 }, (error, result) => {
        expect(network.retrieveData).toHaveBeenCalledWith({
          AMaaSClass: 'assets',
          AMId: 1
        })
        done()
      })
    })
  })

  describe('insert', () => {
    beforeAll(() => {
      network.insertData.mockImplementation(() => Promise.resolve(mockAsset))
    })
    test('with promise', () => {
      let promise = insert({ AMId: 1 })
      expect(promise).toBeInstanceOf(Promise)
    })
    it('should call insertData with correct params', done => {
      insert({ AMId: 1, asset: mockAsset }, (error, result) => {
        expect(network.insertData).toHaveBeenCalledWith({
          AMaaSClass: 'assets',
          AMId: 1,
          data: JSON.parse(JSON.stringify(mockAsset))
        })
        done()
      })
    })
  })

  describe('upsert', () => {
    beforeAll(() => {
      network.insertData.mockImplementation(() => Promise.resolve(mockAsset))
    })
    test('with promise', () => {
      let promise = upsert({ AMId: 1 })
      expect(promise).toBeInstanceOf(Promise)
    })
    it('should call insertData with correct params', done => {
      upsert({ AMId: 1, asset: mockAsset }, (error, result) => {
        expect(network.insertData).toHaveBeenCalledWith({
          AMaaSClass: 'assets',
          AMId: 1,
          data: JSON.parse(JSON.stringify(mockAsset)),
          queryParams: { upsert: true }
        })
        done()
      })
    })
  })

  describe('amend', () => {
    beforeAll(() => {
      network.putData.mockImplementation(() => Promise.resolve(mockAsset))
    })
    test('with promise', () => {
      let promise = amend({ AMId: 1 })
      expect(promise).toBeInstanceOf(Promise)
    })
    it('calls putData with correct params', done => {
      amend(
        { AMId: 1, asset: mockAsset, resourceId: 'testID' },
        (error, result) => {
          expect(network.putData).toHaveBeenCalledWith({
            AMaaSClass: 'assets',
            AMId: 1,
            resourceId: 'testID',
            data: JSON.parse(JSON.stringify(mockAsset))
          })
          done()
        }
      )
    })
  })

  describe('partialAmend', () => {
    beforeAll(() => {
      network.patchData.mockImplementation(() => Promise.resolve(mockAsset))
    })
    test('with promise', () => {
      let promise = partialAmend({})
      expect(promise).toBeInstanceOf(Promise)
    })
    it('calls patchData with correct params', done => {
      partialAmend(
        { AMId: 1, changes: { changed: 'changed' }, resourceId: 'testID' },
        (error, result) => {
          expect(network.patchData).toHaveBeenCalledWith({
            AMaaSClass: 'assets',
            AMId: 1,
            resourceId: 'testID',
            data: { changed: 'changed' }
          })
          done()
        }
      )
    })
  })

  describe('search', () => {
    beforeAll(() => {
      network.searchData.mockImplementation(() => Promise.resolve(mockAsset))
    })
    test('with promise', () => {
      let promise = search({})
      expect(promise).toBeInstanceOf(Promise)
    })
    it('calls searchData with the correct params', done => {
      search(
        { AMId: 1, query: { queryKey: ['queryValue'] } },
        (error, result) => {
          expect(network.searchData).toHaveBeenCalledWith({
            AMaaSClass: 'assets',
            AMId: 1,
            query: { queryKey: ['queryValue'] }
          })
          done()
        }
      )
    })
  })

  describe('fuzzySearch', () => {
    beforeAll(() => {
      network.retrieveData.mockImplementation(() =>
        Promise.resolve(mockFuzzyResult)
      )
    })
    test('with promise', () => {
      let promise = fuzzySearch({})
      expect(promise).toBeInstanceOf(Promise)
    })
    it('calls retrieveData with the correct params', done => {
      const params = {
        AMId: 1,
        query: {
          q: 'AGMI',
          fields: ['ticker', 'asset'],
          includeAdditional: [1, 10]
        }
      }
      fuzzySearch(params, (error, result) => {
        expect(network.retrieveData).toHaveBeenCalledWith({
          AMaaSClass: 'assets',
          AMId: 'search',
          resourceId: 1,
          query: {
            q: 'AGMI',
            fields: ['ticker', 'asset'],
            includeAdditional: [1, 10],
            fuzzy: true
          }
        })
        done()
      })
    })
  })

  describe('fieldsSearch', () => {
    beforeAll(() => {
      network.searchData.mockImplementation(() => Promise.resolve(mockAsset))
    })
    test('with promise', () => {
      let promise = fieldsSearch({ assetManagerIds: 88 })
      expect(promise).toBeInstanceOf(Promise)
    })
    it('calls searchData with the correct params', done => {
      fieldsSearch(
        {
          AMId: 88,
          query: {
            assetIds: [1, 2],
            fields: ['description', 'assetType', 'assetManagerId', 'assetId']
          }
        },
        (error, result) => {
          expect(network.searchData).toHaveBeenCalledWith({
            AMaaSClass: 'assets',
            AMId: 88,
            query: {
              assetIds: [1, 2],
              fields: ['description', 'assetType', 'assetManagerId', 'assetId']
            }
          })
          done()
        }
      )
    })
  })

  describe('deactivate', () => {
    beforeAll(() => {
      network.patchData.mockImplementation(() => Promise.resolve(mockAsset))
    })
    test('with promise', () => {
      let promise = deactivate({})
      expect(promise).toBeInstanceOf(Promise)
    })
    it('calls patchData with correct params', done => {
      deactivate({ AMId: 1, resourceId: 'testID' }, (error, result) => {
        expect(network.patchData).toHaveBeenCalledWith({
          AMaaSClass: 'assets',
          AMId: 1,
          resourceId: 'testID',
          data: { assetStatus: 'Inactive' }
        })
        done()
      })
    })
  })

  describe('reactivate', () => {
    beforeAll(() => {
      network.patchData.mockImplementation(() => Promise.resolve(mockAsset))
    })
    test('with promise', () => {
      let promise = reactivate({})
      expect(promise).toBeInstanceOf(Promise)
    })
    it('calls patchData with correct params', done => {
      reactivate({ AMId: 1, resourceId: 'testID' }, (error, result) => {
        expect(network.patchData).toHaveBeenCalledWith({
          AMaaSClass: 'assets',
          AMId: 1,
          resourceId: 'testID',
          data: { assetStatus: 'Active' }
        })
        done()
      })
    })
  })

  describe('getAssetConfig', () => {
    beforeAll(() => {
      network.retrieveData.mockImplementation(() => Promise.resolve(mockConfig))
    })
    test('with promise', () => {
      let promise = getAssetConfig({})
      expect(promise).toBeInstanceOf(Promise)
    })
    it('calls retrieveData with the correct params', done => {
      getAssetConfig({ assetClass: 'Equity' }, (error, result) => {
        expect(network.retrieveData).toHaveBeenCalledWith({
          AMaaSClass: 'assetConfig',
          AMId: 'Equity'
        })
        done()
      })
    })
  })
})
