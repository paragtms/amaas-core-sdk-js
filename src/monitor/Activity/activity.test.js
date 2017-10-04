import Activity from './activity.js'

describe('activity item', () => {
  it('parses correctly', () => {
    const expectedResult = {
      assetManagerId: 1,
      clientId: 1,
      activityId: 'testActivityId',
      bookId: 'testBookId',
      entity: 'testEntity',
      activityType: 'testActivityType',
      source: 'testSource',
      message: 'TestMessage',
      referenceId: 'testReferenceId',
      referenceType: 'testReferenceType',
      createdBy: 'testUser',
      createdTime: '18:00:00',
      updatedBy: 'testUser',
      updatedTime: '17:49:40',
      version: 1
    }
    const activity = new Activity(expectedResult)
    expect({ ...activity }).toEqual(expectedResult)
  })
})
