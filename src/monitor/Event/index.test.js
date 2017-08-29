import Event from './'

describe('Event', () => {
  describe('constructor', () => {
    it('sets non-computed properties', () => {
      const newEvent = new Event({ title: 'testEvent', description: 'testEventDescription' })
      expect(newEvent.title).toEqual('testEvent')
      expect(newEvent.description).toEqual('testEventDescription')
    })
    it('sets computed properties', () => {
      const newEvent = new Event({ linkSource: 'Transactions', eventType: 'Internal', eventStatus: 'Open' })
      expect(newEvent.linkSource).toEqual('Transactions')
      expect(newEvent.eventType).toEqual('Internal')
      expect(newEvent.eventStatus).toEqual('Open')
    })
    it('throws on invalid computed property', () => {
      const willThrow = () => {
        const newEvent = new Event({ linkSource: 'Transylvania' })
      }
      expect(willThrow).toThrowError(new Error('Invalid Link Source: Transylvania'))
    })
  })
})