import { AMaaSModel } from '../../core'

class Comment extends AMaaSModel {
  constructor({
    commentValue,
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

    this.commentValue = commentValue
  }
}

export default Comment
