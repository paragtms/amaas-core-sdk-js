import Book from './book'
import { Reference } from '../../children'

const mockBookParams = {
  assetManagerId: 88,
  bookId: 'testBookId',
  bookType: 'Management',
  bookStatus: 'Inactive',
  ownerId: 'testOwnerId',
  partyId: 'testPartyId',
  closeTime: '17:30:00',
  timezone: 'Asia/Singapore',
  baseCurrency: 'SGD',
  businessUnit: 'testBusinessUnit',
  description: 'test description',
  references: {
    BROKER: { referenceValue: 'testBrokerReferenceOnBook', referencePrimary: 1 }
  },
  positions: []
}

const mockBookProperties = {
  ...mockBookParams,
  references: {
    BROKER: new Reference({
      referenceValue: 'testBrokerReferenceOnBook',
      referencePrimary: true
    })
  }
}

describe('Book', () => {
  describe('constructor', () => {
    it('should throw if attempting to set invalid book type', () => {
      let book
      function construct() {
        book = new Book({ bookType: 'notAType' })
      }
      expect(construct).toThrowError('Invalid Book Type: notAType')
    })

    it('constructs properly', () => {
      const book = new Book(mockBookParams)
      expect({ ...book }).toEqual(expect.objectContaining(mockBookProperties))
    })

    it('sets defaults', () => {
      const partialParams = {
        ...mockBookParams,
        baseCurrency: undefined,
        bookType: undefined,
        bookStatus: undefined
      }
      const expectedResult = {
        ...mockBookProperties,
        baseCurrency: 'USD',
        bookType: 'Trading',
        bookStatus: 'Active'
      }
      const book = new Book(partialParams)
      expect({ ...book }).toEqual(expect.objectContaining(expectedResult))
    })

    it('sets references', () => {
      const params = {
        references: {
          Primary: {
            referenceValue: 'Primary Reference',
            referencePrimary: true
          },
          NonPrimary: {
            referenceValue: 'Non primary Reference',
            referencePrimary: 0
          }
        }
      }
      const book = new Book(params)
      expect(book.references.Primary.referencePrimary).toBeTruthy()
      expect(book.references.NonPrimary.referencePrimary).toBeFalsy()
    })

    it('throws if setting more than 1 primary account', () => {
      const params = {
        references: {
          Primary: { referenceValue: 'First', referencePrimary: true },
          AnotherPrimary: { referenceValue: 'First', referencePrimary: true }
        }
      }
      const willThrow = () => {
        const book = new Book(params)
      }
      expect(willThrow).toThrowError(
        'Exactly 1 primary Reference must be supplied - found: 2'
      )
    })
  })
})
