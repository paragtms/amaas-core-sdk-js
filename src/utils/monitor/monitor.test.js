import * as api from './monitor'
import * as network from '../network'
import { Item } from '../../monitor'

network.retrieveData = jest.fn()
network.insertData = jest.fn()
network.patchData = jest.fn()
network.searchData = jest.fn()
network.deleteData = jest.fn()

const testItem = { assetManagerId: 1 }

describe('retrieveItems', () => {
  it('should return a promise if no callback is supplied', () => {
    network.retrieveData.mockImplementation(() => Promise.resolve({ data: testItem }))
    let result = api.retrieveItems({ AMId: 1, resourceId: 'testItemID' })
    expect(result).toBeInstanceOf(Promise)
  })

  it('should call callback if supplied', done => {
    network.retrieveData.mockImplementation(() => Promise.resolve({ data: testItem }))
    api.retrieveItems({ AMId: 1, resourceId: 'testItemID' }, (error, result) => {
      expect(result).toBeDefined()
      done()
    })
  })

  it('callback error', done => {
    network.retrieveData.mockImplementation(() => Promise.reject('testError'))
    api.retrieveItems({ AMId: 1, resourceId: 'testItemID' }, (error, result) => {
      expect(error).toBeDefined()
      done()
    })
  })

  it('returns an Item instance', () => {
    const expectedResult = new Item({ assetManagerId: 1 })
    network.retrieveData.mockImplementation(() => Promise.resolve({ data: testItem }))
    api.retrieveItems({ AMId: 1, resourceId: 'testItemID' })
      .then(result => {
        expect(result).toEqual(expectedResult)
      })
  })
})

describe('insertNewItem', () => {
  it('returns promise if no callback supplied', () => {
    network.insertData.mockImplementation(() => Promise.resolve({ assetManagerId: 1 }))
    let result = api.insertNewItem({ AMId: 1, item: { assetManagerId: 1 } })
    expect(result).toBeInstanceOf(Promise)
  })

  it('should call callback if supplied', done => {
    network.insertData.mockImplementation(() => Promise.resolve({ assetManagerId: 1 }))
    api.insertNewItem({ AMId: 1, item: testItem }, (error, result) => {
      expect(result).toBeDefined()
      done()
    })
  })

  it('callback error', done => {
    network.insertData.mockImplementation(() => Promise.reject('testError'))
    api.insertNewItem({ AMId: 1, item: testItem }, (error, result) => {
      expect(error).toBeDefined()
      done()
    })
  })

  it('returns an Item instance', () => {
    const expectedResult = new Item(testItem)
    network.insertData.mockImplementation(() => Promise.resolve({ assetManagerId: 1 }))
    api.insertNewItem({ AMId: 1, item: testItem })
      .then(result => {
        expect(result).toEqual(expectedResult)
      })
  })
})

describe('resubsmit Item', () => {
  it('returns a promise if no callback supplied', () => {
    network.patchData.mockImplementation(() => Promise.resolve(testItem))
    let result = api.resubmitItem({ AMID: 1, resourceId: 'testID' })
    expect(result).toBeInstanceOf(Promise)
  })

  it('should call callback if supplied', done => {
    network.patchData.mockImplementation(() => Promise.resolve(testItem))
    api.resubmitItem({ AMId: 1, resourceId: 'testID' }, (error, result) => {
      expect(result).toBeDefined()
      done()
    })
  })

  it('callback error', done => {
    network.patchData.mockImplementation(() => Promise.reject('testError'))
    api.resubmitItem({ AMId: 1, resourceId: 'testId' }, (error, result) => {
      expect(error).toBeDefined()
      expect(error).toEqual('testError')
      done()
    })

    it('returns an item instance', () => {
      const expectedResult = new Item(testItem)
      network.patchData.mockImplementation(() => Promise.resolve(testItem))
      api.resubmitItem({ AMId: 1, resourceId: 'testID' })
        .then(result => {
          expect(result).toEqual(expectedResult)
        })
    })
  })
})

describe('searchItems', () => {
  it('returns a promise if no callback is supplied', () => {
    network.searchData.mockImplementation(() => Promise.resolve({ data: testItem }))
    let result = api.searchItems({ AMId: 1, query: {} })
    expect(result).toBeInstanceOf(Promise)
  })

  it('callback if supplied', done => {
    network.searchData.mockImplementation(() => Promise.resolve({ data: testItem }))
    api.searchItems({ AMId: 1, query: {} }, (error, result) => {
      expect(result).toBeDefined()
      done()
    })
  })

  it('callback error', done => {
    network.searchData.mockImplementation(() => Promise.reject('testError'))
    api.searchItems({ AMId: 1, query: {} }, (error, result) => {
      expect(error).toBeDefined()
      expect(error).toEqual('testError')
      done()
    })
  })

  it('returns an array of items if resolved with array', () => {
    const expectedResult = new Item(testItem)
    network.searchData.mockImplementation(() => Promise.resolve({ data: [ testItem, testItem ] }))
    api.searchItems({ AMId: 1, query: {} })
      .then(result => {
        expect(result).toBeInstanceOf(Array)
        expect(result[0]).toEqual(expectedResult)
      })
  })
})

describe('closeItem', () => {
  it('returns a promise if no callback supplied', () => {
    network.deleteData.mockImplementation(() => Promise.resolve(testItem))
    let result = api.closeItem({ AMId: 1, resourceId: 'testID' })
    expect(result).toBeInstanceOf(Promise)
  })

  it('calls back if supplied', done => {
    const expectedResult = new Item(testItem)
    network.deleteData.mockImplementation(() => Promise.resolve(testItem))
    api.closeItem({ AMId: 1, resourceId: 'testID' }, (error, result) => {
      expect(result).toBeDefined()
      expect(result).toEqual(expectedResult)
      done()
    })
  })

  it('callback error', done => {
    network.deleteData.mockImplementation(() => Promise.reject('testError'))
    api.closeItem({ AMID: 1, resourceId: 'testID' }, (error, result) => {
      expect(error).toBeDefined()
      expect(error).toEqual('testError')
      done()
    })
  })

  it('returns an Item instance', () => {
    const expectedResult = new Item(testItem)
    network.deleteData.mockImplementation(() => Promise.resolve(testItem))
    api.closeItem({ AMId: 1, resourceId: 'testID' })
      .then(result => {
        expect(result).toEqual(expectedResult)
      })
  })
})