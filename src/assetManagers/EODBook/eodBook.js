import { AMaaSModel } from '../../core'

class EODBook extends AMaaSModel {
   /**
   * Construct a new Asset Manager Model
   * @param {object} params - Asset Manager creation options:
   * @param {number} [params.assetManagerId=generated server side] - Asset Manager's ID. Include to specifically set, if it does not already exist
   * @param {string} [params.utcCloseTime]
   * @param {string} [params.bookId]
   * @param {string} [params.eodBookStatus]
   * @param {string} [params.createdBy] - ID of the user that created the Asset Manager
   * @param {string} [params.updatedBy] - ID of the user that updated the Asset Manager
   * @param {date} [params.createdTime] - Time that the Asset Manager was created
   * @param {date} [params.updatedTime] - Time that the Asset Manager was updated
   * @param {number} [params.version] - Version number of the Asset Manager
   */
   constructor({
    assetManagerId,
    utcCloseTime,
    bookId,
    eodBookStatus,
    createdBy,
    updatedBy,
    createdTime,
    updatedTime,
    version
  }) 
  {
    super({
      createdBy,
      updatedBy,
      createdTime,
      updatedTime,
      version
    })
    this.assetManagerId = assetManagerId
    this.utcCloseTime=utcCloseTime
    this.bookId = bookId
    this.eodBookStatus = eodBookStatus
  }
}
export default EODBook

