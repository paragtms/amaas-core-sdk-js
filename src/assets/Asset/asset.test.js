import Asset from './asset.js'
import Comment from '../../children/Comment'
import { Reference } from '../../children'
import AssetLink from '../../children/Link/AssetLink'

describe('Asset', () => {
  describe('constructor', () => {
    it('should set default issueDate correctly', () => {
      const testAsset = new Asset({})
      const issueDate = testAsset.issueDate
      expect(issueDate).toEqual('0001-01-01')
    })

    it('should set comments to empty object if no Comments', () => {
      const testAsset = new Asset({})
      expect(testAsset.comments).toEqual({})
    })

    it('should set comments as an object of <string, Comment> type', () => {
      const comments = {
        Office: {
          commentValue: 'comment 1',
          active: true
        },
        Legal: {
          commentValue: 'comment 2',
          active: false
        }
      }
      const testAsset = new Asset({ comments })
      expect(testAsset.comments.Office).toBeInstanceOf(Comment)
    })

    it('should set links to empty object if no Links', () => {
      const testAsset = new Asset({})
      expect(testAsset.links).toEqual({})
    })

    it('should set links as an object of <string, Link> type', () => {
      const links = {
        Single: [
          {
            linkedAssetId: 'testId',
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
      const testAsset = new Asset({ links })
      expect(testAsset.links.Single[0]).toBeInstanceOf(AssetLink)
    })

    it('should set references correctly', () => {
      const references = {
        Office: {
          referencePrimary: 1,
          referenceValue: 'testRef1'
        },
        Legal: {
          referencePrimary: false,
          referenceValue: 'testRef2'
        }
      }
      const testAsset = new Asset({ assetId: 'assetId', references })
      const testRef = new Reference({ referenceValue: 't' })
      expect(testAsset.references.Office).toBeInstanceOf(Reference)
      expect(testAsset.references.Office.referenceValue).toEqual('testRef1')
      expect(testAsset.references.Office.referencePrimary).toBeTruthy()
    })

    it('should throw if setting invalid number of primary references', () => {
      const params = {
        references: {
          Primary: { referenceValue: '1', referencePrimary: true },
          alsoPrimary: { referenceValue: '1', referencePrimary: true }
        }
      }
      const willThrow = () => {
        const asset = new Asset(params)
      }
      expect(willThrow).toThrowError(
        new Error('Exactly 1 primary Reference must be supplied - found: 2')
      )
    })

    it('should stringify correctly', () => {
      const testAsset = new Asset({
        assetId: 'testId',
        issueDate: '2017-04-17'
      })
      expect(JSON.parse(JSON.stringify(testAsset)).assetId).toEqual('testId')
    })
  })
})
