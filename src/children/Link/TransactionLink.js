import Link from './Link.js'

class TransactionLink extends Link {
  constructor({
    linkedTransactionId,
    active,
    createdBy,
    updatedBy,
    createdTime,
    updatedTime,
    version
  }) {
    super({
      active,
      createdBy,
      updatedBy,
      createdTime,
      updatedTime,
      version
    })
    this.linkedTransactionId = linkedTransactionId
  }
}

export default TransactionLink
