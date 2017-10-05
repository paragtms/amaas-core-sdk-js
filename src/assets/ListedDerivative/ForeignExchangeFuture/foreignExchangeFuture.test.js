import ForeignExchangeFuture from './foreignExchangeFuture.js'
import { Comment, Reference } from '../../../children'
import AssetLink from '../../../children/Link/AssetLink'

describe('ForeignExchangeFuture', () => {
  describe('constructor', () => {
    it('should set default issueDate correctly', () => {
      const testCommodityFuture = new ForeignExchangeFuture({})
      const issueDate = testCommodityFuture.issueDate
      expect(issueDate).toEqual('0001-01-01')
    })

    it('should set links to empty object if no Links', () => {
      const testCommodityFuture = new ForeignExchangeFuture({})
      expect(testCommodityFuture.links).toEqual({})
    })

    it('should set links as an object of <string, Link> type', () => {
      const links = {
        Single: [
          {
            linkedAssetId: 'testId1',
            active: true
          }
        ],
        Multiple: [
          {
            linkedAssetId: 'testId2',
            active: true
          },
          {
            linkedAssetId: 'testId3',
            active: false
          }
        ]
      }
      const testCommodityFuture = new ForeignExchangeFuture({ links })
      expect(testCommodityFuture.links.Single[0]).toBeInstanceOf(AssetLink)
    })

    it('should set references correctly', () => {
      const references = {
        Office: {
          referencePrimary: 1,
          referenceValue: 'testRef1'
        },
        Legal: {
          referenceValue: 'testRef2'
        }
      }
      const testCommodityFuture = new ForeignExchangeFuture({
        assetId: 'assetId',
        references
      })
      const testRef = new Reference({ referenceValue: 't' })
      expect(testCommodityFuture.references.Office).toBeInstanceOf(Reference)
      expect(testCommodityFuture.references.Office.referenceValue).toEqual(
        'testRef1'
      )
    })

    it('should stringify correctly', () => {
      const testCommodityFuture = new ForeignExchangeFuture({
        assetId: 'testId',
        issueDate: '2017-08-02'
      })
      expect(JSON.parse(JSON.stringify(testCommodityFuture)).assetId).toEqual(
        'testId'
      )
    })
  })
})
