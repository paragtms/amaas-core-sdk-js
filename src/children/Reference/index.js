import { AMaaSModel } from '../../core'

/**
 * Class representing a Reference
 * @memberof module:core
 * @extends module:core.AMaaSModel
 */
class Reference extends AMaaSModel {
  /**
    * Construct a new Reference instance
    * @param {object} params - Reference creation options:
    * @param {string} params.referenceValue - The identifier of this Reference (e.g. transactionId)
    * @param {string} [params.createdBy] - ID of the user that created the Reference
    * @param {string} [params.updatedBy] - ID of the user that updated the Reference
    * @param {date} [params.createdTime] - Time that the Reference was created
    * @param {date} [params.updatedTime] - Time that the Reference was updated
    * @param {number} [params.version] - Version number of the Reference
  */
  constructor({ referenceValue, createdBy, updatedBy, createdTime, updatedTime, version }) {
    super({
      createdBy,
      updatedBy,
      createdTime,
      updatedTime,
      version
    })
    this.referenceValue = referenceValue
  }

  // set active(newActive) {
  //   switch (newActive) {
  //     case false:
  //       this._active = false
  //       break
  //     case undefined:
  //       this._active = true
  //       break
  //     default:
  //       this._active = newActive
  //   }
  // }
  //
  // get active() {
  //   return this._active
  // }


  // toJSON() {
  //   return Object.assign({}, {
  //     active: this.active
  //   }, this)
    // return {
    //   reference_value: this.referenceValue,
    //   active: this.active,
    //   created_by: this.createdBy,
    //   updated_by: this.updatedBy,
    //   created_time: this.createdTime,
    //   updated_time: this.updatedTime,
    //   version: this.version
    // }
  // }

}

export default Reference
