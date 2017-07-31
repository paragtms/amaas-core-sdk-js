import Decimal from 'decimal.js'
import { forEach } from 'lodash'

import Asset from '../Asset/asset'
import { PRIVATE_INVESTMENT_CATEGORY, PRIVATE_INVESTMENT_SUBCATEGORY, PRIVATE_INVESTMENT_SHARE_TYPE } from '../enums'

/**
 * Class representing a Private Investment
 * @memberof module:assets
 * @extends module:assets.Asset
 */
class PrivateInvestment extends Asset {
  /**
   * Construct a new Private Investment instance
   * @param {object} params - PrivateInvestment creation options:
   * @param {number} params.assetManagerId - ID of Private Investment's Asset Manager __(required)__
   * @param {number} params.assetId - ID of the Private Investment __(required)__
   * @param {string} [params.assetClass=Asset] - Class of the Private Investment
   * @param {string} [params.assetType] - Type of the Private Investment. Auto-set based on the class or subclass constructor
   * @param {string} [params.assetTypeDisplay] - Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`)
   * @param {boolean} params.fungible - Whether this Private Investment is fungible __(required)__
   * @param {string} [params.assetIssuerId] - ID of the AsPrivate Investmentset issuer
   * @param {string} [params.assetStatus=Active] - Status of the Private Investment
   * @param {string} [params.countryId] - ID of Private Investment's country
   * @param {string} [params.venueId] - ID of Private Investment's venue if applicable
   * @param {string} [params.currency] - Private Investment currency (e.g. USD, SGD)
   * @param {string} [params.issueDate=0001-01-01] - Issue date if applicable (YYYY-MM-DD)
   * @param {string} [params.description] - Description of the Private Investment
   * @param {string} [params.displayName] - Display name of the Private Investment
   * @param {boolean} [params.rollPrice=true] - Whether to roll the price for the Private Investment
   * 
   * @param {string} [params.category]
   * @param {string} [params.subCategory]
   * @param {string} [params.investmentDate]
   * @param {number} [params.numShares]
   * @param {number} [params.priceShare]
   * @param {string} [params.shareClass]
   * @param {string} [params.series]
   * @param {string} [params.shareType]
   * @param {number} [params.coupon]
   * @param {string} [params.couponFreq]
   * @param {number} [params.upfrontFee]
   * @param {number} [params.exitFee]
   * @param {number} [params.managementFee]
   * @param {number} [params.performanceFee]
   * @param {string} [params.hurdle]
   * @param {number} [params.margin]
   * @param {string} [params.highWaterMark]
   * @param {string} [params.maturityDate]
   * @param {number} [params.lockUpPeriod]
   * @param {number} [params.investmentTerm]
   * 
   * @param {string} [params.clientId] - ID of the associated client
   * @param {object} [params.comments] - Object of Comments attached to the Private Investment
   * @param {object} [params.links] - Object of array of Links attached to the Private Investment
   * @param {object} [params.references={ AMaaS: Reference() }] - Object of References associated with this Private Investment. * The AMaaS Reference is auto-created and populated
   * @param {string} [params.createdBy] - ID of the user that created the Private Investment
   * @param {string} [params.updatedBy] - ID of the user that updated the Private Investment
   * @param {date} [params.createdTime] - Time that the Private Investment was created
   * @param {date} [params.updatedTime] - Time that the Private Investment was updated
   * @param {number} [params.version] - Version number
   */
  constructor({
    assetManagerId,
    assetId,
    assetClass='PrivateInvestment',
    fungible,
    assetIssuerId,
    assetStatus='Active',
    countryId,
    venueId,
    currency,
    issueDate,
    description='',
    displayName='',
    rollPrice=true,

    category,
    subCategory,
    investmentDate,
    numShares,
    priceShare,
    shareClass,
    series,
    shareType,
    coupon,
    couponFreq,
    upfrontFee,
    exitFee,
    managementFee,
    performanceFee,
    hurdle,
    margin,
    highWaterMark,
    maturityDate,
    lockUpPeriod,
    investmentTerm,

    ownership,

    clientId,
    comments,
    links,
    references,
    createdBy,
    updatedBy,
    createdTime,
    updatedTime,
    version,
  }) {
    super({
      assetManagerId,
      assetId,
      assetClass,
      fungible: false,
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
      _category: { writable: true, enumerable: false },
      category: {
        get: () => this._category,
        set: (newCategory) => {
          if (!newCategory) return
          if (PRIVATE_INVESTMENT_CATEGORY.indexOf(newCategory) === -1) throw new Error(`Invalid Category: ${newCategory}`)
          this._category = newCategory
        }, enumerable: true
      },
      _subCategory: { writable: true, enumerable: false },
      subCategory: {
        get: () => this._subCategory,
        set: (newSubCategory) => {
          if (!newSubCategory) return
          let subC = PRIVATE_INVESTMENT_SUBCATEGORY[this.category]
          if (subC.indexOf(newSubCategory) === -1) throw new Error(`Invalid Sub Category: ${newSubCategory}`)
          this._subCategory = newSubCategory
        }, enumerable: true
      },
      _numShares: { writable: true, enumerable: false },
      numShares: {
        get: () => this._numShares,
        set: (newNumShares) => {
          if (!newNumShares) return
          if (!(new Decimal(newNumShares).isInt())) throw new Error(`Number of shares should be an integer. Received: ${newNumShares}`)
          this._numShares = newNumShares
        }, enumerable: true
      },
      _priceShare: { writable: true, enumerable: false },
      priceShare: {
        get: () => this._priceShare,
        set: (newPriceShare) => {
          if (!newPriceShare) return
          this._priceShare = new Decimal(newPriceShare)
        }, enumerable: true
      },
      _shareType: { writable: true, enumerable: false },
      shareType: {
        get: () => this._shareType,
        set: (newShareType) => {
          if (!newShareType) return
          if (PRIVATE_INVESTMENT_SHARE_TYPE.indexOf(newShareType) === -1) throw new Error(`Invalid Share Type: ${newShareType}`)
          this._shareType = newShareType
        }, enumerable: true
      },
      _lockUpPeriod: { writable: true, enumerable: false },
      lockUpPeriod: {
        get: () => this._lockUpPeriod,
        set: (newLockUpPeriod) => {
          if (!newLockUpPeriod) return
          if (!(new Decimal(newLockUpPeriod).isInt())) throw new Error(`Lock Up Period must be an integer. Received: ${newLockUpPeriod}`)
          this._lockUpPeriod = newLockUpPeriod
        }, enumerable: true
      },
      _investmentTerm: { writable: true, enumerable: false },
      investmentTerm: {
        get: () => this._investmentTerm,
        set: (newInvestmentTerm) => {
          if (!newInvestmentTerm) return
          if (!(new Decimal(newInvestmentTerm).isInt())) throw new Error(`Investment Term must be an integer. Received: ${newInvestmentTerm}`)
          this._investmentTerm = newInvestmentTerm
        }, enumerable: true
      },
      _ownership: { writable: true, enumerable: false },
      ownership: {
        get: () => this._ownership,
        set: (newOwnership) => {
          if (!newOwnership) return
          if (!Array.isArray(newOwnership)) throw new Error('Ownership must be an array.')
          const total = newOwnership.map(owned => {
            if (!owned.partyId) throw new Error('Missing partyId in ownership')
            return new Decimal(owned.split)
          }).reduce((sum, spl) => sum.plus(spl))
          if (total != 1) throw new Error(`Ownership splits must sum to 1. Received: ${total}`)
          this._ownership = newOwnership
        }
      }
    })

    this.category = category
    this.subCategory = subCategory
    this.investmentDate = investmentDate
    this.numShares = numShares
    this.priceShare = priceShare
    this.shareClass = shareClass
    this.series = series
    this.shareType = shareType
    this.coupon = coupon
    this.couponFreq = couponFreq
    this.upfrontFee = upfrontFee // TODO: These fees should probably be on the Transaction.
    this.exitFee = exitFee  // TODO: These fees should probably be on the Transaction.
    this.managementFee = managementFee  // TODO: These fees should probably be on the Transaction.
    this.performanceFee = performanceFee  // TODO: These fees should probably be on the Transaction.
    this.hurdle = hurdle
    this.margin = margin
    this.highWaterMark = highWaterMark
    this.maturityDate = maturityDate
    this.lockUpPeriod = lockUpPeriod
    this.investmentTerm = investmentTerm
    this.ownership = ownership
  }
}

export default PrivateInvestment