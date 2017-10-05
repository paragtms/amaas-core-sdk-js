import Decimal from 'decimal.js'
import isEmpty from 'lodash/isEmpty'

import { AMaaSModel } from '../../core'
import {
  Charge,
  Code,
  Comment,
  Link,
  Party,
  Reference,
  Rate
} from '../../children'
import TransactionLink from '../../children/Link/TransactionLink'
import * as types from '../enums'

/**
 * Class representing a Transaction
 * @memberof module:transactions
 * @extends module:core.AMaaSModel
 */
class Transaction extends AMaaSModel {
  /**
   * Construct a new Transaction object
   * @param {object} params - Transaction creation options
   * @param {string} params.assetManagerId - ID of the Transaction's Asset Manager
   * @param {string} params.assetBookId - ID of the Transaction's book
   * @param {string} params.counterpartyBookId - ID of the counterparty to this Transaction
   * @param {string} params.transactionAction - Transaction action e.g. BUY, SELL etc.
   * @param {string} params.assetId - ID of the asset being transacted
   * @param {number} params.quantity - Quantity being transacted
   * @param {date} params.transactionDate - Date of transactionDate
   * @param {date} params.settlementDate - Date of settlement e.g. T+2 where T = transactionDate
   * @param {decimal} params.price - price of Asset being transacted
   * @param {string} params.transactionCurrency - Currency that the Transaction takes place in
   * @param {string} params.settlementCurrency - Currency that the Transaction is settled in
   * @param {*} params.asset - *
   * @param {date} params.executionTime - Time that the Transaction was executed
   * @param {Asset} params.transactionType - Type of Transaction e.g. Trade, Allocation
   * @param {string} params.transactionId - ID of the Transaction
   * @param {*} params.transactionStatus - *
   * @param {object} params.charges - Object of all charges (Charge class)
   * @param {object} params.codes - Object of all codes (Code class)
   * @param {object} params.comments - Object of all comments (Comment class)
   * @param {object} params.links - Object of all links (Link class)
   * @param {object} params.parties - Object of all parties as a Transaction child (PartyChild class)
   * @param {object} params.rates - Object of all rates (Rate class)
   * @param {object} params.references - *
   * @param {*} params.postings - *
  */
  constructor({
    assetManagerId,
    assetBookId,
    counterpartyBookId,
    transactionAction,
    assetId,
    quantity,
    transactionDate,
    settlementDate,
    price,
    transactionCurrency,
    settlementCurrency,
    grossSettlement,
    netSettlement,
    asset,
    executionTime,
    transactionType = 'Trade',
    transactionId,
    transactionStatus = 'New',
    charges = {},
    codes = {},
    comments = {},
    links = {},
    parties = {},
    rates = {},
    references,
    postings,
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
      _quantity: { writable: true, enumerable: false },
      quantity: {
        get: () => this._quantity,
        set: (newQuantity = 0) => {
          this._quantity = new Decimal(newQuantity)
        },
        enumerable: true
      },
      _price: { writable: true, enumerable: false },
      price: {
        get: () => this._price,
        set: (newPrice = 0) => {
          this._price = new Decimal(newPrice)
        },
        enumerable: true
      },
      _grossSettlement: { writable: true, enumerable: false },
      grossSettlement: {
        get: () =>
          this._grossSettlement
            ? this._grossSettlement
            : this.price.times(this.quantity),
        set: newGrossSettlement => {
          this._grossSettlement = newGrossSettlement
            ? new Decimal(newGrossSettlement)
            : undefined
        },
        enumerable: true
      },
      _netSettlement: { writable: true, enumerable: false },
      netSettlement: {
        get: () =>
          this._netSettlement
            ? this._netSettlement
            : this.grossSettlement.minus(this.chargesNetEffect()),
        set: newNetSettlement => {
          this._netSettlement = newNetSettlement
            ? new Decimal(newNetSettlement)
            : undefined
        },
        enumerable: true
      },
      _transactionAction: { writable: true, enumerable: false },
      transactionAction: {
        get: () => this._transactionAction,
        set: newTransactionAction => {
          if (newTransactionAction) {
            if (
              types.TRANSACTION_ACTIONS.indexOf(newTransactionAction) === -1
            ) {
              throw new Error(
                `Invalid Transaction Action: ${newTransactionAction}`
              )
            }
            this._transactionAction = newTransactionAction
          }
        },
        enumerable: true
      },
      _transactionStatus: { writable: true, enumerable: false },
      transactionStatus: {
        get: () => this._transactionStatus,
        set: newTransactionStatus => {
          if (newTransactionStatus) {
            if (
              types.TRANSACTION_STATUSES.indexOf(newTransactionStatus) === -1
            ) {
              throw new Error(
                `Invalid Transaction Status: ${newTransactionStatus}`
              )
            }
            this._transactionStatus = newTransactionStatus
          }
        },
        enumerable: true
      },
      _transactionType: { writable: true, enumerable: false },
      transactionType: {
        get: () => this._transactionType,
        set: newTransactionType => {
          if (newTransactionType) {
            if (types.TRANSACTION_TYPES.indexOf(newTransactionType) === -1) {
              throw new Error(`Invalid Transaction Type: ${newTransactionType}`)
            }
            this._transactionType = newTransactionType
          }
        },
        enumerable: true
      },
      _references: { writable: true, enumerable: false },
      references: {
        get: () => this._references,
        set: newReferences => {
          if (!newReferences || isEmpty(newReferences)) {
            this._references = {}
          } else {
            let newRefs = {}
            let primaryCount = 0
            for (let ref in newReferences) {
              if (newReferences.hasOwnProperty(ref)) {
                newRefs[ref] = new Reference(
                  Object.assign({}, newReferences[ref])
                )
              }
              if (newReferences[ref].referencePrimary) primaryCount++
            }
            if (primaryCount !== 1)
              throw new Error(
                `Exactly 1 primary Reference must be supplied - found: ${primaryCount}`
              )
            this._references = newRefs
          }
        },
        enumerable: true
      },
      _charges: { writable: true, enumerable: false },
      charges: {
        get: () => this._charges,
        set: newCharges => {
          if (newCharges) {
            let charges = {}
            for (let ref in newCharges) {
              if (newCharges.hasOwnProperty(ref)) {
                charges[ref] = new Charge(Object.assign({}, newCharges[ref]))
              }
            }
            this._charges = charges
          }
        },
        enumerable: true
      },
      _codes: { writable: true, enumerable: false },
      codes: {
        get: () => this._codes,
        set: newCodes => {
          if (newCodes) {
            let codes = {}
            for (let ref in newCodes) {
              if (newCodes.hasOwnProperty(ref)) {
                codes[ref] = new Code(Object.assign({}, newCodes[ref]))
              }
            }
            this._codes = codes
          }
        },
        enumerable: true
      },
      _comments: { writable: true, enumerable: false },
      comments: {
        get: () => this._comments,
        set: newComments => {
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
        set: newLinks => {
          if (newLinks) {
            let links = {}
            for (let name in newLinks) {
              // TODO: Remove this when the API returns Arrays for all Links
              if (newLinks[name] instanceof Array) {
                links[name] = newLinks[name].map(link => {
                  return new TransactionLink(link)
                })
              } else {
                console.warn(
                  'All Links should be Arrays: if you are seeing this message then a non-Array link has been encountered and it will be skipped for now'
                )
              }
            }
            this._links = links
          }
        },
        enumerable: true
      },
      _parties: { writable: true, enumerable: false },
      parties: {
        get: () => this._parties,
        set: newParties => {
          if (newParties) {
            let parties = {}
            for (let ref in newParties) {
              if (newParties.hasOwnProperty(ref)) {
                parties[ref] = new Party(Object.assign({}, newParties[ref]))
              }
            }
            this._parties = parties
          }
        },
        enumerable: true
      },
      _rates: { writable: true, enumerable: false },
      rates: {
        get: () => this._rates,
        set: newRates => {
          if (newRates) {
            let rates = {}
            for (let ref in newRates) {
              if (newRates.hasOwnProperty(ref)) {
                rates[ref] = new Rate(Object.assign({}, newRates[ref]))
              }
            }
            this._rates = rates
          }
        },
        enumerable: true
      }
    })
    this.assetManagerId = assetManagerId
    this.assetBookId = assetBookId
    this.counterpartyBookId = counterpartyBookId
    this.transactionAction = transactionAction
    this.assetId = assetId
    this.quantity = quantity
    this.transactionDate = transactionDate
    this.settlementDate = settlementDate
    this.price = price
    this.transactionCurrency = transactionCurrency
    this.settlementCurrency = settlementCurrency
    this.grossSettlement = grossSettlement
    this.netSettlement = netSettlement
    this.transactionType = transactionType
    this.transactionStatus = transactionStatus
    this.executionTime = executionTime
    this.transactionId = transactionId
    this.charges = charges
    this.codes = codes
    this.comments = comments
    this.links = links
    this.parties = parties
    this.rates = rates
    this.references = references
    this.postings = []
    this.asset = asset
  }

  chargesNetEffect() {
    if (Object.keys(this.charges).length == 0) {
      return new Decimal(0)
    }
    let netCharges = new Decimal(0)
    for (let chargeType in this.charges) {
      if (this.charges[chargeType].netAffecting) {
        netCharges = netCharges.plus(this.charges[chargeType].chargeValue)
      }
    }
    return netCharges
  }

  upsertCode(type, code) {
    this.codes[type] = new Code(Object.assign({}, code))
  }

  upsertLinkSet(type, links) {
    if (links) {
      const classLinks = links.map(link => {
        return new TransactionLink(Object.assign({}, link))
      })
      this.links[type] = classLinks
    }
  }

  addLink(type, link) {
    if (link) {
      this.links[type].push(new TransactionLink(Object.assign({}, link)))
    }
  }

  removeLink(type, linkedId) {
    if (!this.links[type]) {
      throw new Error(`Link Key Not Found: ${type}`)
    }
    const existingLinkCount = this.links[type].length
    if (linkedId) {
      const filtered = this.links[type].filter(link => {
        return link.linkedTransactionId !== linkedId
      })
      if (filtered.length === existingLinkCount) {
        throw new Error(`Linked Transaction ID Not Found: ${linkedId}`)
      }
      this.links[type] = filtered
    }
  }
}

export default Transaction
