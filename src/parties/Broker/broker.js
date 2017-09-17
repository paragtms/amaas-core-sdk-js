import Company from '../Company/company'

/**
 * Class representing a Broker
 * @memberof module:parties
 * @extends module:parties.Company
 */
class Broker extends Company {
  /**
   * Construct a new Broker instance
   * @param {object} params - Broker creation options:
   * @param {number} params.assetManagerId - Asset Manager ID of the Broker __(required)__
   * @param {string} params.partyId - Party ID of the Broker __(required)__
   * @param {string} [params.partyStatus=Active] - Status of the Broker
   * @param {string} [params.baseCurrency] - Base Currency of the Broker (e.g. SGD, USD)
   * @param {string} [params.description] - Description of the Broker
   * @param {string} [params.licenseNumber] - Company license number (if applicable)
   * @param {string} [params.licenseType] - Company license type
   * @param {string} [params.assetsUnderManagement] - Value of assets under management
   * @param {string} [params.registrationNumber] - Business registration number (if applicable)
   * @param {string} [params.yearOfIncorporation] - Year of incorporation
   * @param {string} [params.contactNumber] - Contact number
   * @param {object} [params.addresses] - Object of Addresses associated with the Broker
   * @param {object} [params.emails] - Object of Emails associated with the Broker
   * @param {object} [params.references] - Object of References associated with the Broker
   * @param {object} [params.comments] - Object of Comments associated with the Broker
   * @param {object} [params.links] - Object of Links associated with the Broker
   * @param {string} [params.legalName]- Legal name of the Asset Manager associated with this party
   * @param {string} [params.displayName] - Display name of the Asset Manager associated with this party 
   * @param {string} [params.url] - Url of this Party
   * @param {string} [params.createdBy] - ID of the user that created the Broker
   * @param {string} [params.updatedBy] - ID of the user that updated the Broker
   * @param {date} [params.createdTime] - Time that the Broker was created
   * @param {date} [params.updatedTime] - Time that the Broker was updated
   * @param {number} [params.version] - Version number of the Broker
   */
  constructor({
    assetManagerId,
    partyId,
    partyStatus='Active',
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
      baseCurrency,
      description,
      yearOfIncorporation,
      contactNumber,
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

export default Broker
