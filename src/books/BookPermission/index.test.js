import BookPermission from './'

describe('constructor', () => {
  it('throws if passing invalid permission status', () => {
    const willThrow = () => {
      const testPerm = new BookPermission({ permissionStatus: 'NotAllowed' })
    }
    expect(willThrow).toThrowError(new Error('Invalid permission status: NotAllowed'))
  })

  it('throws if passing invalid permission', () => {
    const willThrow = () => {
      const testPerm = new BookPermission({ permission: 'NotAllowed' })
    }
    expect(willThrow).toThrowError(new Error('Invalid permission: NotAllowed'))
  })

  it('enumerates fields properly', () => {
    const params = {
      assetManagerId: 88,
      bookId: '123',
      userAssetManagerId: 99,
      permissionStatus: 'Active',
      permission: 'write'
    }
    const testPerm = new BookPermission(params)
    expect({ ...testPerm }).toEqual(expect.objectContaining(params))
  })
})