import Party from '../Party/party'

/**
 * Class representing a Celled Fund Structure (SubFund)
 * @memberof module:parties
 * @extends module:parties.Party
 */
class SubFund extends Party {
  /**
   * Construct a new SubFund instance
   * @param {object} params - SubFund creation options:
   * @param {number} params.assetManagerId - Asset Manager ID of the SubFund __(required)__
   * @param {string} params.partyId - Party ID of the SubFund __(required)__
   * @param {string} [params.partyStatus=Active] - Status of the SubFund
   * @param {string} [params.baseCurrency] - Base Currency of the SubFund (e.g. SGD, USD)
   * @param {string} [params.description] - Description of the SubFund
   * @param {object} [params.addresses] - Object of Addresses associated with the SubFund
   * @param {object} [params.emails] - Object of Emails associated with the SubFund
   * @param {object} [params.references] - Object of References associated with the SubFund
   * @param {object} [params.comments] - Object of Comments associated with the SubFund
   * @param {object} [params.links] - Object of Links associated with the SubFund
   * @param {string} [params.legalName]- Legal name of the Asset Manager associated with this party
   * @param {string} [params.displayName] - Display name of the Asset Manager associated with this party 
   * @param {string} [params.url] - Url of this Party
   * @param {string} [params.createdBy] - ID of the user that created the SubFund
   * @param {string} [params.updatedBy] - ID of the user that updated the SubFund
   * @param {date} [params.createdTime] - Time that the SubFund was created
   * @param {date} [params.updatedTime] - Time that the SubFund was updated
   * @param {number} [params.version] - Version number of the SubFund
   */
  constructor({
    assetManagerId,
    partyId,
    partyStatus='Active',
    baseCurrency,
    description='',
    addresses={},
    emails={},
    references={},
    comments={},
    links={},
    legalName,
    displayName,
    url,
    createdBy,
    updatedBy,
    createdTime,
    updatedTime,
    version
  }) {
    super({
      assetManagerId,
      partyId,
      partyStatus,
      baseCurrency,
      description,
      addresses,
      emails,
      references,
      comments,
      links,
      legalName,
      displayName,
      url,
      createdBy,
      updatedBy,
      createdTime,
      updatedTime,
      version
    })
  }
}
export default SubFund
