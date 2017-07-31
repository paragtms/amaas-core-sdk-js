import Link from './Link.js'

class PartyLink extends Link {
  constructor({
    linkedPartyId,
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
    this.linkedPartyId = linkedPartyId
  }
}

export default PartyLink
