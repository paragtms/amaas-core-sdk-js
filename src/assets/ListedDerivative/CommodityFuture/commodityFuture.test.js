import CommodityFuture from './commodityFuture'
import { Comment, Reference } from '../../../children'
import AssetLink from '../../../children/Link/AssetLink'

describe('CommodityFuture', () => {
  describe('constructor', () => {
    it('should set default issueDate correctly', () => {
      const testCommodityFuture = new CommodityFuture({})
      const issueDate = testCommodityFuture.issueDate
      expect(issueDate).toEqual('0001-01-01')
    })

    it('should set links to empty object if no Links', () => {
      const testCommodityFuture = new CommodityFuture({})
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
      const testCommodityFuture = new CommodityFuture({ links })
      expect(testCommodityFuture.links.Single[0]).toBeInstanceOf(AssetLink)
    })

    it('should set references correctly', () => {
      const references = {
        Office: {
          referencePrimary: true,
          referenceValue: 'testRef1'
        },
        Legal: {
          referenceValue: 'testRef2'
        }
      }
      const testCommodityFuture = new CommodityFuture({
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
      const testCommodityFuture = new CommodityFuture({
        assetId: 'testId',
        issueDate: '2017-08-02'
      })
      expect(JSON.parse(JSON.stringify(testCommodityFuture)).assetId).toEqual(
        'testId'
      )
    })
  })
})
