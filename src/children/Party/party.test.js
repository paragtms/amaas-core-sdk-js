import Party from './'

describe('Party class', () => {
  describe('constructor', () => {
    it('it should set partyId correctly', () => {
        const value = 'QRMIC22D'
        const party = new Party({ partyId: value })
        expect(party.partyId).toEqual(value)
      })
  })
})
