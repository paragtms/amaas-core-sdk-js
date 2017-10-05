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
  reference: 'testBrokerReferenceOnBook',
  positions: []
}

const mockBookProperties = {
  ...mockBookParams
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

  })
})
