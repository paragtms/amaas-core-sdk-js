import Link from './Link.js'

class AssetLink extends Link {
  constructor({
    linkedAssetId,
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
    this.linkedAssetId
  }
}

export default AssetLink
