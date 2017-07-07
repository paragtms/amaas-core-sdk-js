import { AMaaSModel } from '../../core'
import { Address, Email } from '../Children'
import { Comment, Reference } from '../../children'
import PartyLink from '../../children/Link/PartyLink'
import { PARTY_STATUSES, PARTY_TYPES } from '../enums'

// Some changes to the file

/**
 * Class representing a Party
 * @memberof module:parties
 * @extends module:core.AMaaSModel
 */
class Party extends AMaaSModel {
  /**
   * Construct a new Party instance
   * @param {object} params - Party creation options:
   * @param {number} params.assetManagerId - Asset Manager ID of the Party __(required)__
   * @param {string} params.partyId - Party ID of the Party __(required)__
   * @param {string} [params.partyStatus=Active] - Status of the Party
   * @param {string} [params.partyClass=Party] - Class of the Party
   * @param {string} [params.baseCurrency] - Base Currency for the Party (e.g. SGD, USD)
   * @param {string} [params.description] - Description of the Party
   * @param {object} [params.addresses] - Object of Addresses associated with the Party
   * @param {object} [params.emails] - Object of Emails associated with the Party
   * @param {object} [params.references] - Object of References associated with the Party
   * @param {object} [params.comments] - Object of Comments associated with the Party
   * @param {object} [params.links] - Object of Links associated with this Party
   * @param {string} [params.legalName]- Legal name of the Asset Manager associated with this party
   * @param {string} [params.displayName] - Display name of the Asset Manager associated with this party
   * @param {string} [params.url] - Url of this Party
   * @param {string} [params.createdBy] - ID of the user that created the Party
   * @param {string} [params.updatedBy] - ID of the user that updated the Party
   * @param {date} [params.createdTime] - Time that the Party was created
   * @param {date} [params.updatedTime] - Time that the Party was updated
   * @param {number} [params.version] - Version number of the Party
   */
  constructor({
    assetManagerId,
    partyId,
    partyStatus='Active',
    partyClass='Party',
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
      createdBy,
      updatedBy,
      createdTime,
      updatedTime,
      version
    })
    Object.defineProperties(this, {
      _emails: { writable: true, enumerable: false },
      emails: {
        get: () => this._emails,
        set: (newEmails) => {
          if (Object.keys(newEmails).length > 0) {
            let emails = {}
            let primaryEmail = 0
            for (let type in newEmails) {
              if (newEmails.hasOwnProperty(type)) {
                emails[type] = new Email(Object.assign({}, newEmails[type]))
                this._checkEmail(newEmails[type].email)
                if (newEmails[type].emailPrimary) {
                  primaryEmail++
                }
              }
            }
            if (primaryEmail == 0) {
              throw new Error('At least 1 primary email must be supplied')
            }
            this._emails = emails
          } else {
            this._emails = {}
          }
        },
        enumerable: true
      },
      _addresses: { writable: true, enumerable: false },
      addresses: {
        get: () => this._addresses,
        set: (newAddresses) => {
          if (newAddresses && Object.keys(newAddresses).length > 0) {
            let addresses = {}
            let primaryAdd = 0
            for (let type in newAddresses) {
              if (newAddresses.hasOwnProperty(type)) {
                addresses[type] = new Address(Object.assign({}, newAddresses[type]))
                if (newAddresses[type].addressPrimary) {
                  primaryAdd++
                }
              }
            }
            if (primaryAdd == 0) {
              throw new Error('At least 1 primary address must be supplied')
            }
            this._addresses = addresses
          } else {
            this._addresses = {}
          }
        }, enumerable: true
      },
      _references: { writable: true, enumerable: false },
      references: {
        get: () => this._references,
        set: (newReferences) => {
          if (newReferences) {
            let references = {}
            for (let ref in newReferences) {
              if (newReferences.hasOwnProperty(ref)) {
                references[ref] = new Reference(Object.assign({}, newReferences[ref]))
              }
            }
            this._references = references
          }
        },
        enumerable: true
      },
      _comments: { writable: true, enumerable: false },
      comments: {
        get: () => this._comments,
        set: (newComments) => {
          if (newComments) {
            let comments = {}
            for (let ref in newComments) {
              if (newComments.hasOwnProperty(ref)) {
                comments[ref] = new Comment(Object.assign({}, newComments[ref]))
              }
            }
            this._comments = comments
          }
        },
        enumerable: true
      },
      _links: { writable: true, enumerable: false },
      links: {
        get: () => this._links,
        set: (newLinks) => {
          if (newLinks) {
            let links = {}
            for (let name in newLinks) {
              if (newLinks.hasOwnProperty(name)) {
                // TODO: Remove this when the API returns Arrays for all Links
                if (newLinks[name] instanceof Array) {
                  links[name] = newLinks[name].map(link => {
                    return new PartyLink(link)
                  })
                } else {
                  console.warn('All Links should be Arrays: if you are seeing this message then a non-Array link has been encountered and it will be skipped for now')
                }
              }
            }
            this._links = links
          }
        },
        enumerable: true
      },
      _partyStatus: { writable: true, enumerable: false },
      partyStatus: {
        get: () => this._partyStatus,
        set: (newPartyStatus) => {
          if (newPartyStatus) {
            if (PARTY_STATUSES.indexOf(newPartyStatus) === -1) {
              throw new Error(`Invalid Party Status: ${newPartyStatus}`)
            }
            this._partyStatus = newPartyStatus
          }
        },
        enumerable: true
      }
    })
    this.assetManagerId = assetManagerId
    this.partyId = partyId
    this.partyStatus = partyStatus
    this.partyClass = partyClass
    this.partyType = this.constructor.name
    this.baseCurrency = baseCurrency
    this.description = description
    this.addresses = addresses
    this.emails = emails
    this.references = references
    this.comments = comments
    this.links = links
    this.legalName =legalName
    this.displayName = displayName
    this.url = url
  }

  /**
   * Upsert an Address
   * @param {string} type - Type of Address (e.g. 'Registered', 'Legal')
   * @param {Address} address - new Address. Note that the new Address cannot be primary if a primary Address already exists. Use this.addresses setter to replace primary Addresses (??)
   */
  upsertAddress(type, address) {
    const addresses = Object.assign({}, this.addresses)
    if (address.addressPrimary) {
      for (let ref in addresses) {
        if (addresses.hasOwnProperty(ref)) {
          addresses[ref].addressPrimary = false
        }
      }
    }
    addresses[type] = address
    this.addresses = addresses
  }

  /**
   * Upsert an Email
   * @param {string} type - Type of Email (e.g. 'Work', 'Support')
   * @param {Emails} email - new Email. Note that the new Email cannot be primary if a primary Email already exists. Use this.emails setter to replace primary Emails (??)
   */
  upsertEmail(type, email) {
    const emails = Object.assign({}, this.emails)
    if (email.emailPrimary) {
      for (let ref in emails) {
        if (emails.hasOwnProperty(ref)) {
          emails[ref].emailPrimary = false
        }
      }
    }
    emails[type] = email
    this.emails = emails
  }

  // Check if input is a valid email string
  _checkEmail(email) {
    const regex = new RegExp('^.+@.+\..+$')
    if (!regex.test(email)) {
      throw new Error('Not a valid email')
    }
  }
}

export default Party
