import Organisation from '../Organisation/organisation.js'

/**
 * Class representing a Company
 * @memberof module:parties
 * @extends module:parties.Organisation
 */
class Company extends Organisation {
  /**
   * Construct a new Company instance
   * @param {object} params - Company creation options:
   * @param {number} params.assetManagerId - Asset Manager ID of the Company __(required)__
   * @param {string} params.partyId - Party ID of the Company __(required)__
   * @param {string} [params.partyStatus=Active] - Status of the Company
   * @param {string} [params.partyClass=Company] - Class of the Company (a subclass of Company may define its own partyClass)
   * @param {string} [params.baseCurrency] - Base Currency of the Company (e.g. SGD, USD)
   * @param {string} [params.description] - Description of the Company
   * @param {string} [params.yearOfIncorporation] - Year of incorporation
   * @param {string} [params.contactNumber] - Contact number
   * @param {object} [params.addresses] - Object of Addresses associated with the Company
   * @param {object} [params.emails] - Object of Emails associated with the Company
   * @param {object} [params.references] - Object of References associated with the Company
   * @param {object} [params.comments] - Object of Comments associated with the Company
   * @param {object} [params.links] - Object of Links associated with the Company
   * @param {string} [params.legalName]- Legal name of the Asset Manager associated with this party
   * @param {string} [params.displayName] - Display name of the Asset Manager associated with this party 
   * @param {string} [params.url] - Url of this Party
   * @param {string} [params.createdBy] - ID of the user that created the Company
   * @param {string} [params.updatedBy] - ID of the user that updated the Company
   * @param {date} [params.createdTime] - Time that the Company was created
   * @param {date} [params.updatedTime] - Time that the Company was updated
   * @param {number} [params.version] - Version number of the Company
   */
  constructor({
    assetManagerId,
    partyId,
    partyStatus='Active',
    partyClass='Company',
    baseCurrency,
    description='',
    yearOfIncorporation,
    contactNumber,
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
    this.yearOfIncorporation = yearOfIncorporation
    this.contactNumber = contactNumber
  }
}

export default Company
