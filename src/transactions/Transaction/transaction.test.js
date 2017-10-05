import Transaction from './transaction.js'
import { Charge, Code, Comment, Party, Rate, Reference } from '../../children'
import TransactionLink from '../../children/Link/TransactionLink'

const Decimal = require('decimal.js')

describe('Transaction class', () => {
  describe('serialization', () => {
    it('should serialize properly', () => {
      const test = new Transaction({ transactionType: 'Trade' })
      expect(JSON.parse(JSON.stringify(test)).transactionType).toBeDefined()
      expect(JSON.parse(JSON.stringify(test)).transactionType).toEqual('Trade')
    })
  })
  describe('constructor', () => {
    let testTrans
    const data = {
      quantity: 2.54,
      price: 45.77,
      transactionId: 'testId'
    }
    beforeEach(() => {
      testTrans = new Transaction(data)
    })

    it('should set References correctly', () => {
      const references = {
        INT: { referenceValue: 'Internal1', referencePrimary: 1 },
        EXT: new Reference({ referenceValue: 'External1' })
      }
      testTrans.references = references
      expect(testTrans.references.INT).toBeDefined()
      expect(testTrans.references.INT.referenceValue).toEqual('Internal1')
      expect(testTrans.references.INT.referencePrimary).toBeTruthy()
      expect(testTrans.references.EXT).toBeDefined()
      expect(testTrans.references.EXT.referenceValue).toEqual('External1')
      expect(testTrans.references.EXT.referencePrimary).toBeFalsy()
    })

    it('should throw if setting invalid number of primary references', () => {
      const params = {
        references: {
          Primary: { referenceValue: '1', referencePrimary: true },
          anotherPrimary: { referenceValue: '2', referencePrimary: true }
        }
      }
      const willThrow = () => {
        const trans = new Transaction(params)
      }
      expect(willThrow).toThrowError(
        'Exactly 1 primary Reference must be supplied - found: 2'
      )
    })

    it('should set Charges correctly', () => {
      const charges = {
        TAX: { chargeValue: 10 },
        COMMISSION: new Charge({ chargeValue: 5 })
      }
      testTrans.charges = charges
      expect(testTrans.charges.TAX).toBeInstanceOf(Charge)
      expect(testTrans.charges.COMMISSION).toBeInstanceOf(Charge)
    })

    it('should set Codes correctly', () => {
      const codes = {
        INT: { codeValue: 'Internal1' },
        EXT: new Code({ codeValue: 'External1' })
      }
      testTrans.codes = codes
      expect(testTrans.codes.INT).toBeInstanceOf(Code)
      expect(testTrans.codes.INT.codeValue).toEqual('Internal1')
      expect(testTrans.codes.EXT).toBeInstanceOf(Code)
      expect(testTrans.codes.EXT.codeValue).toEqual('External1')
    })

    it('should set Comments correctly', () => {
      const comments = {
        TRADER: { commentValue: 'Strategy1' },
        BACKEND: new Comment({ commentValue: 'Reconciled' })
      }
      testTrans.comments = comments
      expect(testTrans.comments.TRADER).toBeInstanceOf(Comment)
      expect(testTrans.comments.TRADER.commentValue).toEqual('Strategy1')
      expect(testTrans.comments.BACKEND).toBeInstanceOf(Comment)
      expect(testTrans.comments.BACKEND.commentValue).toEqual('Reconciled')
    })

    it('should set Links correclty', () => {
      const links = {
        SINGLE: [{ linkedTransactionId: 'single1' }],
        MULTIPLE: [
          { linkedTransactionId: 'multi1' },
          new TransactionLink({ linkedTransactionId: 'multi2' })
        ]
      }
      testTrans.links = links
      expect(testTrans.links.SINGLE[0]).toBeDefined()
      expect(testTrans.links.SINGLE[0].linkedTransactionId).toEqual('single1')
      expect(testTrans.links.MULTIPLE[0]).toBeDefined()
      expect(testTrans.links.MULTIPLE[0].linkedTransactionId).toEqual('multi1')
      expect(testTrans.links.MULTIPLE[1]).toBeDefined()
      expect(testTrans.links.MULTIPLE[1].linkedTransactionId).toEqual('multi2')
    })

    it('should set Parties correctly', () => {
      const parties = {
        COUNTERPARTY: { partyId: 'testId' },
        LEGAL: new Party({ partyId: 'legalId' })
      }
      testTrans.parties = parties
      expect(testTrans.parties.COUNTERPARTY).toBeDefined()
      expect(testTrans.parties.COUNTERPARTY.partyId).toEqual('testId')
      expect(testTrans.parties.LEGAL).toBeDefined()
      expect(testTrans.parties.LEGAL.partyId).toEqual('legalId')
    })

    it('should set Rates correctly', () => {
      const rates = {
        TAX: { rateValue: 10 },
        COMMISSION: new Rate({ rateValue: 5 })
      }
      testTrans.rates = rates
      expect(testTrans.rates.TAX).toBeInstanceOf(Rate)
      expect(testTrans.rates.COMMISSION).toBeInstanceOf(Rate)
    })

    it('should set transactionType to Trade if undefined', () => {
      expect(testTrans.transactionType).toEqual('Trade')
    })

    it('should set transactionStatus to New if undefined', () => {
      expect(testTrans.transactionStatus).toEqual('New')
    })

    it('grossSettlement should return price * quantity if undefined', () => {
      const quantity = new Decimal(data.quantity)
      const price = new Decimal(data.price)
      expect(testTrans.grossSettlement).toEqual(quantity.times(price))
    })

    it('netSettlement should return netSettlement if it is set and not do any calculations', () => {
      const testTransNet = new Transaction({
        netSettlement: '60001',
        grossSettlement: '4'
      })
      expect(testTransNet.netSettlement).toEqual(new Decimal(60001))
    })

    it('netSettlement should return grossSettlement - chargesNetEffect() if not defined', () => {
      const quantity = new Decimal(data.quantity)
      const price = new Decimal(data.price)
      expect(testTrans.netSettlement).toEqual(quantity.times(price))
      testTrans.charges = {
        TAX: new Charge({ chargeValue: 10, netAffecting: true })
      }
      expect(testTrans.netSettlement).toEqual(
        quantity.times(price).minus(new Decimal(10))
      )
    })

    it('should set quantity to a Decimal', () => {
      expect(testTrans.quantity).toEqual(new Decimal(2.54))
    })

    it('should set price to a Decimal', () => {
      expect(testTrans.price).toEqual(new Decimal(45.77))
    })

    it('should throw if attempting to set invalid transactionAction', () => {
      function construct() {
        testTrans.transactionAction = 'notAType'
      }
      expect(construct).toThrowError('Invalid Transaction Action: notAType')
    })

    it('should throw if attempting to set invalid transactionStatus', () => {
      function construct() {
        testTrans.transactionStatus = 'notAType'
      }
      expect(construct).toThrowError('Invalid Transaction Status: notAType')
    })

    it('should throw if attempting to set invalid transactionType', () => {
      function construct() {
        testTrans.transactionType = 'notAType'
      }
      expect(construct).toThrowError('Invalid Transaction Type: notAType')
    })
  })

  describe('class methods', () => {
    let trans
    const data = {
      price: 45.66,
      charges: {
        TAX: new Charge({
          chargeValue: 10,
          currency: 'SGD',
          netAffecting: true
        }),
        COMMISSION: new Charge({
          chargeValue: 20,
          currency: 'SGD',
          netAffecting: true
        })
      },
      codes: {
        INT: new Code({ codeValue: 'InternalCode1' })
      },
      links: {
        Single1: [
          new TransactionLink({
            linkedTransactionId: 'singleLinkedTransactionId1'
          })
        ],
        Multiple1: [
          new TransactionLink({
            linkedTransactionId: 'multiLinkedTransactionId1'
          }),
          new TransactionLink({
            linkedTransactionId: 'multiLinkedTransactionId2'
          })
        ]
      }
    }
    beforeEach(() => {
      trans = new Transaction(data)
    })
    it('chargesNetEffect should return all netAffecting charges', () => {
      trans.chargesNetEffect()
      expect(trans.chargesNetEffect()).toEqual(new Decimal(30))
    })
    it('upsertCode should upsert new Code', () => {
      trans.upsertCode('EXT', { codeValue: 'ExternalCode1' })
      expect(Object.keys(trans.codes).length).toEqual(2)
      expect(trans.codes.EXT.codeValue).toEqual('ExternalCode1')
    })
    it('upsertLinkSet should upsert a Link set (array)', () => {
      trans.upsertLinkSet('Single2', [
        { linkedTransactionId: 'singleLinkedTransactionId2' }
      ])
      expect(trans.links.Single2).toBeDefined()
      expect(trans.links.Single2[0].linkedTransactionId).toEqual(
        'singleLinkedTransactionId2'
      )
      trans.upsertLinkSet('Multiple2', [
        new TransactionLink({
          linkedTransactionId: 'multiLinkedTransactionId3'
        }),
        new TransactionLink({
          linkedTransactionId: 'multiLinkedTransactionId4'
        })
      ])
      expect(trans.links.Multiple2).toBeDefined()
      expect(trans.links.Multiple2[0].linkedTransactionId).toEqual(
        'multiLinkedTransactionId3'
      )
    })
    it('addLinks should add a Link', () => {
      trans.addLink('Multiple1', {
        linkedTransactionId: 'multiLinkedTransactionId3'
      })
      expect(trans.links.Multiple1[2]).toBeDefined()
      expect(trans.links.Multiple1[2].linkedTransactionId).toEqual(
        'multiLinkedTransactionId3'
      )
      trans.addLink(
        'Multiple1',
        new TransactionLink({
          linkedTransactionId: 'multiLinkedTransactionId4'
        })
      )
      expect(trans.links.Multiple1[3]).toBeDefined()
      expect(trans.links.Multiple1[3].linkedTransactionId).toEqual(
        'multiLinkedTransactionId4'
      )
    })
    it('removeLink should throw if attempting to remove non-existent Link', () => {
      function removeKey() {
        trans.removeLink('notAKey', 'test')
      }
      expect(removeKey).toThrowError('Link Key Not Found: notAKey')
      function remove() {
        trans.removeLink('Single1', 'notALink')
      }
      expect(remove).toThrowError('Linked Transaction ID Not Found: notALink')
    })
    it('removeLink should remove a Link', () => {
      const linkCount = trans.links.Multiple1.length
      trans.removeLink('Multiple1', 'multiLinkedTransactionId2')
      expect(trans.links.Multiple1.length).toEqual(linkCount - 1)
      const filteredLinks = trans.links.Multiple1.filter(
        link => link.linkedTransactionId === 'multiLinkedTransactionId2'
      )
      expect(filteredLinks.length).toEqual(0)
    })
  })
})
