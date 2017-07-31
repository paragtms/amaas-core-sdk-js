import { AMaaSModel } from '../../../core'
import Asset from '../../Asset/asset.js'

import Decimal from 'decimal.js'

/**
 * Class representing a Base Bond
 * @memberof module:assets
 * @extends module:assets.Asset
 */
class BondBase extends Asset {
  /**
   * Construct new Bond instance
   * @param {object} params - BondBase creation options:
   * @param {string} params.assetManagerId - ID of Bond's Asset Manager __(required)__
   * @param {string} params.assetId - ID of the Bond __(required)__
   * @param {string} [params.assetClass=Bond] - Auto-set to `Bond` __(read-only)__
   * @param {string} [params.assetType] - Type of the Asset. Auto-set based on the class or subclass constructor
   * @param {string} [params.assetTypeDisplay] - Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`)
   * @param {boolean} [params.fungible=true] - Auto-set `true` for Bonds __(read-only)__
   * @param {string} [params.assetIssuerId] - ID of the Bond Issuer
   * @param {string} [params.assetStatus=Active] - Status of the Bond
   * @param {string} [params.countryId] - ID of the Bond's country
   * @param {string} [params.venueId] - ID of the Bond's venue if applicable
   * @param {string} [params.currency] - Bond currency (e.g. USD, SGD)
   * @param {string} [params.issueDate=0001-01-01] - Bond issue date (YYYY-MM-DD)
   * @param {string} [params.maturityDate=9999-12-31] - Bond maturity date (YYYY-MM-DD)
   * @param {string} [params.description] - Description of the Bond
   * @param {string} [params.displayName] - Display name of the Bond
   * @param {boolean} [params.rollPrice=true] - Whether to roll the price for the Bond
   * @param {string} [params.clientId] - ID of the associated client
   * @param {number} params.coupon - The Bond's coupon represented as a fraction of 1 i.e. 0.05 = 5%. Stored as a Decimal instance __(required)__
   * @param {number} params.par - The Bond's par value. Stored as a Decimal instance __(required)__
   * @param {string} params.payFrequency - Frequency of the coupon payment __(required)__
   * @param {boolean} [params.defaulted=false] - Whether the issuer has defaulted
   * @param {object} [params.comments] - Object of Comments attached to the Bond
   * @param {object} [params.links] - Object of array of Links attached to the Bond
   * @param {object} [params.references={ AMaaS: Reference() }] - Object of References attached to the Bond. * The AMaaS Reference is auto-created and populated
   * @param {string} [params.createdBy] - ID of the user that created the Bond
   * @param {string} [params.updatedBy] - ID of the user that updated the Bond
   * @param {date} [params.createdTime] - Time that the Bond was created
   * @param {date} [params.updatedTime] - Time that the Bond was updated
   * @param {number} [params.version] - Version number of the Bond
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
    maturityDate='9999-12-31',
    description='',
    displayName,
    rollPrice,
    clientId,
    coupon,
    par,
    payFrequency,
    defaulted=false,
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
      assetClass: 'Bond',
      fungible: true,
      assetIssuerId,
      assetStatus,
      countryId,
      venueId,
      currency,
      issueDate,
      description,
      displayName,
      rollPrice,
      clientId,
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
      _coupon: { writable: true, enumerable: false },
      coupon: {
        get: () => this._coupon,
        set: (newCoupon) => {
          this._coupon = newCoupon ? new Decimal(newCoupon) : new Decimal(0)
        }, enumerable: true
      },
      _par: { writable: true, enumerable: false },
      par: {
        get: () => this._par,
        set: (newPar) => {
          this._par = newPar ? new Decimal(newPar) : new Decimal(0)
        }, enumerable: true
      }
    })
    this.maturityDate = maturityDate
    this.defaulted = defaulted === true ? true : false // Default to false
    this.coupon = coupon
    this.par = par
    this.payFrequency = payFrequency
  }

}

export default BondBase
