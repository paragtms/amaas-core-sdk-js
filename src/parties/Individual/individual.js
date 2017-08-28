import Party from '../Party/party.js'

/**
 * Class representing an Individual
 * @memberof module:parties
 * @extends module:parties.Party
 */
class Individual extends Party {
  /**
   * Construct a new Individual instance
   * @param {object} params - Individual creation options:
   * @param {number} params.assetManagerId - Asset Manager ID of the Individual __(required)__
   * @param {string} params.partyId - Party ID of the Individual __(required)__
   * @param {string} [params.partyStatus=Active] - Status of the Individual
   * @param {string} [params.partyClass=Individual] - Class of the Individual (a subclass of Individual may define its own partyClass)
   * @param {string} [params.baseCurrency] - Base Currency of the Individual (e.g. SGD, USD)
   * @param {string} [params.description] - Description of the Individual
   * @param {string} params.givenNames - Individual's given names
   * @param {string} params.surname - Individual's surname
   * @param {string} params.dateOfBirth - Individual's date of birth (YYYY-MM-DD)
   * @param {string} [params.title] - Individual's title (e.g. Mr, Mrs, Ms, etc.)
   * @param {string} [params.department] - Individual's department
   * @param {string} [params.role] - Individual's role
   * @param {string} [params.contactNumber] - Individual's contact number
   * @param {object} [params.addresses] - Object of Addresses associated with the Individual
   * @param {object} [params.emails] - Object of Emails associated with the Individual
   * @param {object} [params.references] - Object of References associated with the Individual
   * @param {object} [params.comments] - Object of Comments associated with the Individual
   * @param {object} [params.links] - Object of Links associated with the Individual
   * @param {string} [params.legalName]- Legal name of the Asset Manager associated with this party
   * @param {string} [params.displayName] - Display name of the Asset Manager associated with this party 
   * @param {string} [params.url] - Url of this Party
   * @param {string} [params.createdBy] - ID of the user that created the Individual
   * @param {string} [params.updatedBy] - ID of the user that updated the Individual
   * @param {date} [params.createdTime] - Time that the Individual was created
   * @param {date} [params.updatedTime] - Time that the Individual was updated
   * @param {number} [params.version] - Version number of the Individual
   */
  constructor({
    assetManagerId,
    partyId,
    partyStatus='Active',
    partyClass='Individual',
    baseCurrency,
    description,
    givenNames,
    surname,
    dateOfBirth,
    title,
    department,
    role,
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
      description: description || `${givenNames} ${surname}`,
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
    this.givenNames = givenNames
    this.surname = surname
    this.dateOfBirth = dateOfBirth
    this.title = title
    this.department = department
    this.role = role
    this.contactNumber = contactNumber
  }
}

export default Individual
