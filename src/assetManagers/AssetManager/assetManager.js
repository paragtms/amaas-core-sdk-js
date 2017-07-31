import { AMaaSModel } from '../../core'
import { ASSET_MANAGER_TYPES, ACCOUNT_TYPES } from '../enums'

/**
 * Class representing an Asset Manager
 * @memberof module:assetManagers
 * @extends module:core.AMaaSModel
 */
class AssetManager extends AMaaSModel {
  /**
   * Construct a new Asset Manager Model
   * @param {object} params - Asset Manager creation options:
   * @param {number} [params.assetManagerId=generated server side] - Asset Manager's ID. Include to specifically set, if it does not already exist
   * @param {string} params.assetManagerType - Type of Asset Manager (e.g. Hedge Fund). __(required)__<br />
   * Available types are:
   * <li>Accredited Investor</li>
   * <li>Bank</li>
   * <li>Broker</li>
   * <li>Corporate Treasury</li>
   * <li>Family Office</li>
   * <li>Fund Administrator</li>
   * <li>Fund Manager</li>
   * <li>Hedge Fund</li>
   * <li>Private Equity</li>
   * <li>Retail</li>
   * <li>Venture Capital</li>
   * @param {string} [params.assetManagerStatus=Active] - Status of Asset Manager
   * @param {string} [params.accountType=Basic] - Account Type reflecting the support level for the Asset Manager
   * @param {string} [params.clientId] - ID of the associated client
   * @param {string} [params.partyId='AMID'+assetManagerId] - ID of the Party that represents this Asset Manager. Defaults to e.g. AMID10 for assetManagerId 10
   * @param {string} [params.defaultBookOwnerId=assetManagerId] - Asset Manager ID of the default owner for any Books owned by this Asset Manager. Will be used if no `ownerId` is set on the Book. Defaults to e.g. 10 for assetManagerId 10
   * @param {string} [params.defaultTimezone=UTC] - Default timezone for any Books owned by this Asset Manager
   * @param {string} [params.defaultBookCloseTime=18:00:00] - Default Book close time for any books owned by this Asset Manager ('HH:MM:SS')
   * @param {string} [params.createdBy] - ID of the user that created the Asset Manager
   * @param {string} [params.updatedBy] - ID of the user that updated the Asset Manager
   * @param {date} [params.createdTime] - Time that the Asset Manager was created
   * @param {date} [params.updatedTime] - Time that the Asset Manager was updated
   * @param {number} [params.version] - Version number of the Asset Manager
   */
  constructor({
    assetManagerId,
    assetManagerType,
    assetManagerStatus='Active',
    accountType='Basic',
    clientId,
    partyId,
    defaultBookOwnerId,
    defaultTimezone='UTC',
    defaultBookCloseTime,
    createdBy,
    updatedBy,
    createdTime,
    updatedTime,
    version
  }) {
    super({
      createdBy,
      updatedBy,
      createdTime,
      updatedTime,
      version
    })
    Object.defineProperties(this, {
      _assetManagerType: { writable: true, enumerable: false },
      assetManagerType: {
        get: () => this._assetManagerType,
        set: (newAssetManagerType) => {
          if (newAssetManagerType) {
            if (ASSET_MANAGER_TYPES.indexOf(newAssetManagerType) == -1) {
              throw new Error(`Invalid Asset Manager Type: ${newAssetManagerType}`)
            } else {
              this._assetManagerType = newAssetManagerType
            }
          }
        }, enumerable: true
      },
      _accountType: { writable: true, enumerable: false },
      accountType: {
        get: () => this._accountType,
        set: (newAccountType) => {
          if (ACCOUNT_TYPES.indexOf(newAccountType) === -1) {
            throw new Error(`Invalid Account Type: ${newAccountType}`)
          } else {
            this._accountType = newAccountType
          }
        },
        enumerable: true
      }
    })
    this.assetManagerId = assetManagerId
    this.assetManagerType = assetManagerType
    this.assetManagerStatus = assetManagerStatus
    this.accountType = accountType
    this.clientId = clientId
    this.partyId = partyId
    this.defaultBookOwnerId = defaultBookOwnerId
    this.defaultTimezone = defaultTimezone
    this.defaultBookCloseTime = defaultBookCloseTime
  }
}

export default AssetManager
