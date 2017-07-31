import Organisation from '../Organisation/organisation.js'

/**
 * Class representing a Government Agency
 * @memberof module:parties
 * @extends module:parties.Organisation
 */
class GovernmentAgency extends Organisation {
  /**
   * Construct a new Government Agency instance
   * @param {object} params - Government Agency creation options:
   * @param {number} params.assetManagerId - Asset Manager ID of the Government Agency __(required)__
   * @param {string} params.partyId - Party ID of the Government Agency __(required)__
   * @param {string} [params.partyStatus=Active] - Status of the Government Agency
   * @param {string} [params.partyClass=Organisation] - Class of the Government Agency (a subclass of Organisation may define its own partyClass)
   * @param {string} [params.baseCurrency] - Base Currency of the Government Agency
   * @param {string} [params.description] - Description of the Government Agency
   * @param {object} [params.addresses] - Object of Addresses associated with the Government Agency
   * @param {object} [params.emails] - Object of Emails associated with the Government Agency
   * @param {object} [params.references] - Object of References associated with the Government Agency
   * @param {object} [params.comments] - Object of Comments associated with the Government Agency
   * @param {object} [params.links] - Object of Links associated with the Government Agency
   * @param {string} [params.legalName]- Legal name of the Asset Manager associated with this party
   * @param {string} [params.displayName] - Display name of the Asset Manager associated with this party 
   * @param {string} [params.url] - Url of this Party
   * @param {string} [params.createdBy] - ID of the user that created the Government Agency
   * @param {string} [params.updatedBy] - ID of the user that updated the Government Agency
   * @param {date} [params.createdTime] - Time that the Government Agency was created
   * @param {date} [params.updatedTime] - Time that the Government Agency was updated
   * @param {number} [params.version] - Version number of the Government Agency
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

export default GovernmentAgency
