import * as api from './monitor'
import * as network from '../network'
import { Item, Event, Activity } from '../../monitor'

network.retrieveData = jest.fn()
network.insertData = jest.fn()
network.patchData = jest.fn()
network.searchData = jest.fn()
network.deleteData = jest.fn()

const testItem = { assetManagerId: 1 }
const testEvent = { assetManagerId: 1 }
const testActivity = { assetManagerId: 1 }

describe('retrieveItems', () => {
  it('should return a promise if no callback is supplied', () => {
    network.retrieveData.mockImplementation(() =>
      Promise.resolve({ data: testItem })
    )
    let result = api.retrieveItems({ AMId: 1, resourceId: 'testItemID' })
    expect(result).toBeInstanceOf(Promise)
  })

  it('should call callback if supplied', done => {
    network.retrieveData.mockImplementation(() =>
      Promise.resolve({ data: testItem })
    )
    api.retrieveItems(
      { AMId: 1, resourceId: 'testItemID' },
      (error, result) => {
        expect(result).toBeDefined()
        done()
      }
    )
  })

  it('callback error', done => {
    network.retrieveData.mockImplementation(() => Promise.reject('testError'))
    api.retrieveItems(
      { AMId: 1, resourceId: 'testItemID' },
      (error, result) => {
        expect(error).toBeDefined()
        done()
      }
    )
  })

  it('returns an Item instance', () => {
    const expectedResult = new Item({ assetManagerId: 1 })
    network.retrieveData.mockImplementation(() =>
      Promise.resolve({ data: testItem })
    )
    api.retrieveItems({ AMId: 1, resourceId: 'testItemID' }).then(result => {
      expect(result).toEqual(expectedResult)
    })
  })
})

describe('insertNewItem', () => {
  it('returns promise if no callback supplied', () => {
    network.insertData.mockImplementation(() =>
      Promise.resolve({ assetManagerId: 1 })
    )
    let result = api.insertNewItem({ AMId: 1, item: { assetManagerId: 1 } })
    expect(result).toBeInstanceOf(Promise)
  })

  it('should call callback if supplied', done => {
    network.insertData.mockImplementation(() =>
      Promise.resolve({ assetManagerId: 1 })
    )
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
    network.insertData.mockImplementation(() =>
      Promise.resolve({ assetManagerId: 1 })
    )
    api.insertNewItem({ AMId: 1, item: testItem }).then(result => {
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
      api.resubmitItem({ AMId: 1, resourceId: 'testID' }).then(result => {
        expect(result).toEqual(expectedResult)
      })
    })
  })
})

describe('searchItems', () => {
  it('returns a promise if no callback is supplied', () => {
    network.searchData.mockImplementation(() =>
      Promise.resolve({ data: testItem })
    )
    let result = api.searchItems({ AMId: 1, query: {} })
    expect(result).toBeInstanceOf(Promise)
  })

  it('callback if supplied', done => {
    network.searchData.mockImplementation(() =>
      Promise.resolve({ data: testItem })
    )
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
    network.searchData.mockImplementation(() =>
      Promise.resolve({ data: [testItem, testItem] })
    )
    api.searchItems({ AMId: 1, query: {} }).then(result => {
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
    api.closeItem({ AMId: 1, resourceId: 'testID' }).then(result => {
      expect(result).toEqual(expectedResult)
    })
  })
})

describe('retrieveEvent', () => {
  it('calls retrieveData with correct params', () => {
    network.retrieveData.mockImplementation(() =>
      Promise.resolve({ data: testEvent })
    )
    let result = api.retrieveEvent({ AMId: 1, resourceId: 'testEventId' })
    expect(network.retrieveData).toHaveBeenCalledWith({
      AMaaSClass: 'monitorEvents',
      AMId: 1,
      resourceId: 'testEventId'
    })
  })

  it('returns a promise if no callback supplied', () => {
    network.retrieveData.mockImplementation(() =>
      Promise.resolve({ data: testEvent })
    )
    let result = api.retrieveEvent({ AMId: 1, resourceId: 'testEventId' })
    expect(result).toBeInstanceOf(Promise)
  })

  it('calls back if supplied', () => {
    const expectedResult = new Event(testEvent)
    network.retrieveData.mockImplementation(() =>
      Promise.resolve({ data: testEvent })
    )
    api.retrieveEvent({ AMId: 1 }, (error, result) => {
      expect(result).toBeDefined()
      expect(result).toEqual(expectedResult)
    })
  })

  it('callback error', () => {
    network.retrieveData.mockImplementation(() => Promise.reject('testError'))
    api.retrieveEvent(
      { AMId: 1, resourceId: 'testEventID' },
      (error, result) => {
        expect(error).toBeDefined()
        expect(error).toEqual('testError')
      }
    )
  })

  it('returns an Event instance', () => {
    const expectedResult = new Event(testEvent)
    network.retrieveData.mockImplementation(() =>
      Promise.resolve({ data: testEvent })
    )
    return api.retrieveEvent({ AMId: 1, resouceId: 'testID' }).then(res => {
      expect(res).toEqual(expectedResult)
    })
  })
})

describe('insertEvent', () => {
  it('calls insertData with correct params', () => {
    network.insertData.mockImplementation(() => Promise.resolve(testEvent))
    let result = api.insertEvent({ AMId: 1, event: testEvent })
    expect(network.insertData).toHaveBeenCalledWith({
      AMaaSClass: 'monitorEvents',
      AMId: 1,
      data: testEvent
    })
  })

  it('returns a promise if no callback supplied', () => {
    network.insertData.mockImplementation(() => Promise.resolve(testEvent))
    let result = api.insertEvent({ AMId: 1 })
    expect(result).toBeInstanceOf(Promise)
  })

  it('calls back if supplied', () => {
    const expectedResult = new Event(testEvent)
    network.insertData.mockImplementation(() => Promise.resolve(testEvent))
    api.insertEvent({ AMId: 1 }, (error, result) => {
      expect(result).toBeDefined()
      expect(result).toEqual(expectedResult)
    })
  })

  it('callback error', () => {
    network.insertData.mockImplementation(() => Promise.reject('testError'))
    api.insertEvent({ AMId: 1 }, (error, result) => {
      expect(error).toBeDefined()
      expect(error).toEqual('testError')
    })
  })

  it('returns an Event instance', () => {
    const expectedResult = new Event(testEvent)
    network.insertData.mockImplementation(() => Promise.resolve(testEvent))
    return api.insertEvent({ AMId: 1 }).then(res => {
      expect(res).toEqual(expectedResult)
    })
  })
})

describe('closeEvent', () => {
  it('calls deleteData with correct params', () => {
    network.deleteData.mockImplementation(() => Promise.resolve(testEvent))
    let result = api.closeEvent({ AMId: 1, resourceId: 'testEventId' })
    expect(network.deleteData).toHaveBeenCalledWith({
      AMaaSClass: 'monitorEvents',
      AMId: 1,
      resourceId: 'testEventId'
    })
  })

  it('returns a promise if no callback supplied', () => {
    network.deleteData.mockImplementation(() => Promise.resolve(testEvent))
    let result = api.closeEvent({ AMId: 1, resourceId: 'testEventId' })
    expect(result).toBeInstanceOf(Promise)
  })

  it('calls back if supplied', () => {
    const expectedResult = new Event(testEvent)
    network.deleteData.mockImplementation(() => Promise.resolve(testEvent))
    api.closeEvent({ AMId: 1 }, (error, result) => {
      expect(result).toBeDefined()
      expect(result).toEqual(expectedResult)
    })
  })

  it('callback error', () => {
    network.deleteData.mockImplementation(() => Promise.reject('testError'))
    api.closeEvent({ AMId: 1, resourceId: 'testEventID' }, (error, result) => {
      expect(error).toBeDefined()
      expect(error).toEqual('testError')
    })
  })

  it('returns an Event instance', () => {
    const expectedResult = new Event(testEvent)
    network.deleteData.mockImplementation(() => Promise.resolve(testEvent))
    return api.closeEvent({ AMId: 1, resouceId: 'testID' }).then(res => {
      expect(res).toEqual(expectedResult)
    })
  })
})

describe('retrieveActivities', () => {
  it('should return a promise if no callback is supplied', () => {
    network.retrieveData.mockImplementation(() =>
      Promise.resolve({ data: testActivity })
    )
    let result = api.retrieveActivities({ AMId: 1 })
    expect(result).toBeInstanceOf(Promise)
  })

  it('should call callback if supplied', done => {
    network.retrieveData.mockImplementation(() =>
      Promise.resolve({ data: testActivity })
    )
    api.retrieveActivities({ AMId: 1 }, (error, result) => {
      expect(result).toBeDefined()
      done()
    })
  })

  it('callback error', done => {
    network.retrieveData.mockImplementation(() => Promise.reject('testError'))
    api.retrieveActivities({ AMId: 1 }, (error, result) => {
      expect(error).toBeDefined()
      done()
    })
  })

  it('returns an Activity instance', () => {
    const expectedResult = new Activity({ assetManagerId: 1 })
    network.retrieveData.mockImplementation(() =>
      Promise.resolve({ data: testActivity })
    )
    api.retrieveActivities({ AMId: 1 }).then(result => {
      expect(result).toEqual(expectedResult)
    })
  })
})
