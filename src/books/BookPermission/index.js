import { AMaaSModel } from '../../core'
import { PERMISSION_STATUSES, PERMISSIONS } from './enums'

/**
 * Class representing a Book Permission
 * @memberof module:books
 * @extends module:core.AMaaSModel
 */
class BookPermission extends AMaaSModel {
  /**
   * Construct a new Book Permission instance
   * @param {object} params - Book Permission creation options:
   * @param {number} params.assetManagerId - Asset Manager ID of the Book Permission
   * @param {string} params.bookId - Book ID
   * @param {number} params.userAssetManagerId - Asset Manager ID of the User to grant the permission to
   * @param {string} params.permissionStatus - Permission status (Active or Inactive)
   * @param {string} params.permission - Permission value ('read' or 'write')
   * @param {string} [params.createdBy] - Username of the user that created this permission
   * @param {string} [params.updatedBy] - Username of the user that updated this permission
   * @param {date} [params.createdTime] - Time that the permission was created
   * @param {date} [params.updatedTime] - Time that the permission was updated
   *
   */
  constructor({
    assetManagerId,
    bookId,
    userAssetManagerId,
    permissionStatus,
    permission,
    ...coreFields
  }) {
    super(coreFields)
    Object.defineProperties(this, {
      _permissionStatus: { writable: true, enumerable: false },
      permissionStatus: {
        get: () => this._permissionStatus,
        set: (newPermissionStatus) => {
          if (newPermissionStatus) {
            if (PERMISSION_STATUSES.indexOf(newPermissionStatus) === -1) {
              throw new Error(`Invalid permission status: ${newPermissionStatus}`)
            }
            this._permissionStatus = newPermissionStatus
          }
        }, enumerable: true
      },
      _permission: { writable: true, enumerable: false },
      permission: {
        get: () => this._permission,
        set: (newPermission) =>  {
          if (newPermission) {
            if (PERMISSIONS.indexOf(newPermission) === -1) {
              throw new Error(`Invalid permission: ${newPermission}`)
            }
            this._permission = newPermission
          }
        }, enumerable: true
      }
    })
    this.assetManagerId = assetManagerId
    this.bookId = bookId
    this.userAssetManagerId = userAssetManagerId
    this.permissionStatus = permissionStatus
    this.permission = permission
  }
}

export default BookPermission