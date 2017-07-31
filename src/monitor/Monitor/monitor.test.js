import Item from './monitor.js'

describe('monitor item', () => {
  it('parses correctly', () => {
    const expectedResult = {
      assetManagerId: 1,
      itemId: 'testID',
      itemClass: 'Exception',
      itemType: 'testType',
      itemLevel: 'Critical',
      itemSource: 'Transactions',
      message: 'testMessage',
      itemStatus: 'Open',
      assetBookId: 'testBookId',
      transactionId: 'testTransID',
      assetId: 'testAssetID',
      itemDate: '999-12-31',
      createdBy: 'testUser',
      createdTime: '18:00:00',
      updatedBy: 'testUser',
      updatedTime: '17:49:40',
      version: 1
    }
    const item = new Item(expectedResult)
    expect({ ...item }).toEqual(expectedResult)
  })
})