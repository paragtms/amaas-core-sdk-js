import Derivative from './derivative'

describe('Derivative', ()  => {
  describe('serialization', () => {
    it('should serialize properly', () => {
      const test = new Derivative({ issueDate: '2017-04-12' })
      expect(JSON.parse(JSON.stringify(test)).issueDate).toBeDefined()
      expect(JSON.parse(JSON.stringify(test)).issueDate).toEqual('2017-04-12')
    })
  })
})
