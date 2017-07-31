import Party from '../Party/party.js'

/**
 * Class representing an Organisation
 * @memberof module:parties
 * @extends module:parties.Party
 */
class Organisation extends Party {
  /**
   * Construct a new Organisation instance
   * @param {object} params - Organisation creation options:
   * @param {number} params.assetManagerId - Asset Manager ID of the Organisation __(required)__
   * @param {string} params.partyId - Party ID of the Organisation __(required)__
   * @param {string} [params.partyStatus=Active] - Status of the Organisation
   * @param {string} [params.partyClass=Organisation] - Class of the Organisation (a subclass of Organisation may define its own partyClass)
   * @param {string} [params.baseCurrency] - Base Currency of the Organisation (e.g. SGD, USD)
   * @param {string} [params.description] - Description of the Organisation
   * @param {object} [params.addresses] - Object of Addresses associated with the Organisation
   * @param {object} [params.emails] - Object of Emails associated with the Organisation
   * @param {object} [params.references] - Object of References associated with the Organisation
   * @param {object} [params.comments] - Object of Comments associated with the Organisation
   * @param {object} [params.links] - Object of Links associated with the Organisation
   * @param {string} [params.legalName]- Legal name of the Asset Manager associated with this party
   * @param {string} [params.displayName] - Display name of the Asset Manager associated with this party 
   * @param {string} [params.url] - Url of this Party
   * @param {string} [params.createdBy] - ID of the user that created the Organisation
   * @param {string} [params.updatedBy] - ID of the user that updated the Organisation
   * @param {date} [params.createdTime] - Time that the Organisation was created
   * @param {date} [params.updatedTime] - Time that the Organisation was updated
   * @param {number} [params.version] - Version number of the Organisation
   */
  constructor({
    assetManagerId,
    partyId,
    partyStatus='Active',
    partyClass='Organisation',
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
      partyClass,
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

export default Organisation
