import AssetManager from './assetManager'

describe('Party AssetManager class', () => {
  describe('constructor', () => {
    it('should set partyClass to Company', () => {
      const am = new AssetManager({})
      expect(am.partyClass).toEqual('Company')
    })

    it('should set partyType to AssetManager', () => {
      const am = new AssetManager({})
      expect(am.partyType).toEqual('AssetManager')
    })

    it('sets fields', () => {
      const params = {
        licenseType: 'testType',
        licenseNumber: 'testNo',
        assetsUnderManagement: '<20m',
        registrationNumber: 'testReg'
      }
      const am = new AssetManager(params)
      expect(am.licenseNumber).toEqual('testNo')
      expect(am.licenseType).toEqual('testType')
      expect(am.assetsUnderManagement).toEqual('<20m')
      expect(am.registrationNumber).toEqual('testReg')
    })
  })
})
