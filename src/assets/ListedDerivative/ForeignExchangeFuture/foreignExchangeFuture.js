import Future from '../Future/future'
import { Comment, Reference } from '../../../children'
import AssetLink from '../../../children/Link/AssetLink'
/**
 * Class representing an ForeignExchangeFuture
 * @memberof module:assets
 * @extends module:ListDerivatives.Future
 */
class ForeignExchangeFuture extends Future {
      /**
   * Construct a new ForeignExchangeFuture instance
   * @param {object} params - ForeignExchangeFuture creation options:
   * @param {number} params.assetManagerId - ID of Asset's Asset Manager __(required)__
   * @param {number} params.assetId - ID of the Asset __(required)__
   * @param {string} params.settlementType - A type of settlement
   * @param {number} params.contractSize - An integer, e.g. 10 barrels per contract
   * @param {string} params.pointValue - Value of 1 point
   * @param {number} params.tickSize - The minimum unit of price change
   * @param {number} params.quoteUnit - Contract unit, e.g. barrel 
   * @param {string} [params.assetIssuerId] - ID of the Asset issuer
   * @param {string} [params.assetStatus=Active] - Status of the Asset
   * @param {string} [params.countryId] - ID of Asset's country
   * @param {string} [params.venueId] - ID of Asset's venue if applicable
   * @param {string} [params.currency] - Asset currency (e.g. USD, SGD)
   * @param {string} [params.issueDate=0001-01-01] - Issue date if applicable (YYYY-MM-DD)
   * @param {string} [params.expiryDate] - Expiry date 
   * @param {string} [params.description] - Description of the Asset
   * @param {string} [params.displayName] - Display name of the Asset
   * @param {object} [params.links] - Object of array of Links attached to the Asset
   * @param {object} [params.references={}] - Object of References associated with this Asset. * The AMaaS Reference is auto-created and populated
   * @param {string} [params.createdBy] - ID of the user that created the Asset
   * @param {string} [params.updatedBy] - ID of the user that updated the Asset
   * @param {date} [params.createdTime] - Time that the Asset was created
   * @param {date} [params.updatedTime] - Time that the Asset was updated
   * @param {number} [params.version] - Version number
   */
  constructor({
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
  }
}

export default ForeignExchangeFuture