import Decimal from 'decimal.js'

import Future from '../Future/future'
import { TENORS } from '../../enums'

/**
 * Class representing a Bond Future
 * @memberof module:assets
 * @extends module:assets.Future
 */
class BondFuture extends Future {
  /**
   * Construct a new Bond Future instance
   * @param {object} params - Bond Future creation options:
   * @param {number} params.assetManagerId - ID of Bond Future's Asset Manager __(required)__
   * @param {number} params.assetId - ID of the Bond Future __(required)__
   * @param {string} [params.assetClass=Future] - Auto-set to `Future` __(read-only)__
   * @param {string} [params.assetType] - Type of the Bond Future. Auto-set based on the class or subclass constructor
   * @param {string} [params.assetTypeDisplay] - Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`)
   * @param {boolean} [params.fungible=true] - Auto-set to `true` __(read-only)__
   * @param {string} [params.assetIssuerId] - ID of the Bond Future's issuer
   * @param {string} [params.assetStatus=Active] - Status of the Bond Future
   * @param {string} [params.countryId] - ID of Bond Future's country
   * @param {string} [params.venueId] - ID of Bond Future's venue if applicable
   * @param {string} [params.currency] - Bond Future currency (e.g. USD, SGD)
   * @param {string} [params.issueDate=0001-01-01] - Issue date if applicable (YYYY-MM-DD)
   * @param {string} [params.expiryDate=9999-12-31] - Date of the contract's expiry (YYYY-MM-DD)
   * @param {string} [params.description] - Description of the Bond Future
   * @param {string} [params.displayName] - Display name of the Bond Future
   * @param {string} [params.clientId] - ID of the associated client
   * @param {string} params.settlementType - Settlement Type __(required)__<br />
   * Available options:
   * <li>Cash</li>
   * <li>Physical</li>
   * @param {number} params.contractSize - Contract Size __(required)__
   * @param {number} [params.pointValue] - Future point value. Stored as a Decimal instance
   * @param {number} params.tickSize Future tick size. Stored as a Decimal instance __(required)__
   * @param {string} [params.quoteUnit] - Future quote unit
   * @param {string} params.underlyingAssetId - ID of the underlying Asset __(required)__
   * @param {string} [params.cheapestToDeliverId] - The cheapest Bond which can be delivered to the terms of the Future
   * @param {string} [params.underlyingBondTenor] - Tenor of the underlying Bond<br />
   * Available options:
   * <li>1M</li>
   * <li>3M</li>
   * <li>6M</li>
   * <li>9M</li>
   * <li>1Y</li>
   * <li>2Y</li>
   * <li>5Y</li>
   * <li>10Y</li>
   * <li>15Y</li>
   * <li>20Y</li>
   * <li>30Y</li>
   * <li>40Y</li>
   * <li>50Y</li>
   * @param {number} [params.underlyingBondCoupon] - Coupon of the underlying Bond
   * @param {object} [params.comments] - Object of Comments attached to the Bond Future
   * @param {object} [params.links] - Object of array of Links attached to the Bond Future
   * @param {object} [params.references={ AMaaS: Reference() }] - Object of References associated with the Bond Future. * The AMaaS Reference is auto-created and populated
   * @param {string} [params.createdBy] - ID of the user that created the Bond Future
   * @param {string} [params.updatedBy] - ID of the user that updated the Bond Future
   * @param {date} [params.createdTime] - Time that the Bond Future was created
   * @param {date} [params.updatedTime] - Time that the Bond Future was updated
   * @param {number} [params.version] - Version number of the Bond Future
  */
  constructor({
    assetManagerId,
    assetId,
    assetIssuerId,
    assetStatus='Active',
    countryId,
    venueId,
    currency,
    issueDate,
    expiryDate,
    description='',
    displayName,
    clientId,
    settlementType,
    contractSize,
    pointValue,
    tickSize,
    quoteUnit,
    underlyingAssetId,

    cheapestToDeliverId,
    underlyingBondTenor,
    underlyingBondCoupon,

    comments,
    links,
    references,
    createdBy,
    updatedBy,
    createdTime,
    updatedTime,
    version
  }) {
    super({
      assetManagerId,
      assetId,
      assetIssuerId,
      assetStatus,
      countryId,
      venueId,
      currency,
      issueDate,
      description,
      displayName,
      clientId,
      settlementType,
      contractSize,
      pointValue,
      tickSize,
      quoteUnit,
      underlyingAssetId,
      expiryDate,
      comments,
      links,
      references,
      createdBy,
      updatedBy,
      createdTime,
      updatedTime,
      version
    })
    Object.defineProperties(this, {
      _underlyingBondCoupon: { writable: true, enumerable: false },
      underlyingBondCoupon: {
        get: () => this._underlyingBondCoupon,
        set: (newCoupon) => {
          if (!newCoupon) {
            this._underlyingBondCoupon = new Decimal(0)
          } else {
            this._underlyingBondCoupon = new Decimal(newCoupon)
          }
        },
        enumerable: true
      },
      _underlyingBondTenor: { writable: true, enumerable: false },
      underlyingBondTenor: {
        get: () => this._underlyingBondTenor,
        set: (newUBT) => {
          if (newUBT) {
            if (TENORS.indexOf(newUBT) === -1) {
              throw new Error(`Invalid tenor: ${newUBT}`)
            }
            this._underlyingBondTenor = newUBT
          }
        },
        enumerable: true
      }
    })
    this.cheapestToDeliverId = cheapestToDeliverId
    this.underlyingBondTenor = underlyingBondTenor
    this.underlyingBondCoupon = underlyingBondCoupon
  }

  getUnderlyingAssetId() {
    return this.cheapestToDeliverId
  }
}

export default BondFuture
