import { retrieve, insert, amend, partialAmend, deactivate } from './assets.js'
import Asset from '../../assets/Asset/asset.js'

let token = process.env.API_TOKEN

describe('utils/assets', () => {
  describe('retrieve', () => {
    test('with promise', callback => {
      let promise = retrieve({token, AMId: 1})
      expect(promise).toBeInstanceOf(Promise)
      promise.then(assets => {
        expect(Array.isArray(assets)).toBeTruthy()
        expect(assets[0]).toBeInstanceOf(Asset)
        callback()
      })
    })
  })

  describe('insert', () => {
    test('with promise', () => {
      let promise = insert({token}).catch(error => {})
      expect(promise).toBeInstanceOf(Promise)
    })
  })

  describe('amend', () => {
    test('with promise', () => {
      let promise = amend({token}).catch(error => {})
      expect(promise).toBeInstanceOf(Promise)
    })
  })

  describe('partialAmend', () => {
    test('with promise', () => {
      let promise = partialAmend({token}).catch(error => {})
      expect(promise).toBeInstanceOf(Promise)
    })
  })

  describe('deactivate', () => {
    test('with promise', () => {
      let promise = deactivate({token}).catch(error => {})
      expect(promise).toBeInstanceOf(Promise)
    })
  })
})
