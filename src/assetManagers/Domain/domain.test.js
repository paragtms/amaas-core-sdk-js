import Domain from './domain'

describe('Domain class', () => {
  it('correctly sets isPrimary', () => {
    let domainFalse = new Domain({ assetManagerId: 1, domain: 'testDomain', isPrimary: false })
    expect(domainFalse.isPrimary).toBeFalsy()
    let domainTrue = new Domain({ assetManagerId: 1, domain: 'testDomain', isPrimary: true })
    expect(domainTrue.isPrimary).toBeTruthy()
  })
})