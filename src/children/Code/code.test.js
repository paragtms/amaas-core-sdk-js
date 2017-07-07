import Code from './'

describe('Code class', () => {
  describe('constructor', () => {
    it('it should set codeValue correctly', () => {
        const value = 'EFWDSH0L'
        const code = new Code({ codeValue: value })
        expect(code.codeValue).toEqual(value)
      })
  })
})
