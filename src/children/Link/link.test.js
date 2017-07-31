import Link from './Link'

describe('Link class', () => {
  describe('constructor', () => {
    it('it should set active property correctly', () => {
        const value = false
        const link = new Link({ active: value })
        expect(link.active).toBeFalsy()
      })
  })
})
