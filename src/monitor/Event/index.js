import { AMaaSModel } from '../../core'
import * as enums from './enums'

/**
 * Class representing a Monitor Event
 * @memberof module:monitor
 * @extends module:core.AMaaSModel
 */
class Event extends AMaaSModel {
  /**
   * Construct a new Monitor Event instance
   * @param {object} params - Event creation options:
   * @param {number} params.assetManagerId - Asset Manager ID of the owner of the Event
   * @param {string} params.eventId - ID of the Event
   * @param {string} params.linkId - ID of the relevant resouce based on the `linkSource` (e.g. transactionId, assetId, partyId)
   * @param {string} params.linkSource - Service that the Event is from.<br />
   * Available Options:
   * <li>Transactions</li>
   * <li>Assets</li>
   * <li>Parties</li>
   * @param {string} params.eventType - The Event type.<br />
   * Available Options:
   * <li>Internal</li>
   * <li>External</li>
   * @param {string} params.eventStart - Start date and time of the event
   * @param {string} params.eventEnd - End date and time of the event
   * @param {string} params.eventStatus - Status of the event.<br />
   * Available Options:
   * <li>Open</li>
   * <li>Closed</li>
   * @param {string} params.title - Title of the Event
   * @param {string} params.description - Description of the Event
   * @param {number} params.internalId - Internal ID of the Event *(set server side)*
   * @param {number} params.clientId - Client ID *(set server side)*
   * @param {string} [params.createdBy] - Who the Event was created by *(set server side)*
   * @param {string} [params.createdTime] - When the Event was created *(set server side)*
   * @param {string} [params.updatedBy] - Who the Event was last updated by *(set server side)*
   * @param {string} [params.updatedTime] - When the Event was last updated *(set server side)*
   * @param {number} [params.version] - version *(set server side)*
   */
  constructor(props) {
    const { createdBy, updatedBy, createdTime, updatedTime, version, ...rest } = props
    super({
      createdBy, updatedBy, createdTime, updatedTime, version
    })
    Object.defineProperties(this, {
      _linkSource: { writable: true, enumerable: false },
      linkSource: {
        get: () => this._linkSource,
        set: (newLinkSource) => {
          if (newLinkSource) {
            if (enums.LINK_SOURCES.indexOf(newLinkSource) === -1) {
              throw new Error(`Invalid Link Source: ${newLinkSource}`)
            }
            this._linkSource = newLinkSource
          }
        }, enumerable: true
      },
      _eventType: { writable: true, enumerable: false },
      eventType: {
        get: () => this._eventType,
        set: (newEventType) => {
          if (newEventType) {
            if (enums.EVENT_TYPES.indexOf(newEventType) === -1) {
              throw new Error(`Invalid Event Type: ${newEventType}`)
            }
            this._eventType = newEventType
          }
        }, enumerable: true
      },
      _eventStatus: { writable: true, enumerable: false },
      eventStatus: {
        get: () => this._eventStatus,
        set: (newEventStatus) => {
          if (newEventStatus) {
            if (enums.EVENT_STATUSES.indexOf(newEventStatus) === -1) {
              throw new Error(`Invalid Event Status: ${newEventStatus}`)
            }
            this._eventStatus = newEventStatus
          }
        }, enumerable: true
      }
    })
    Object.assign(this, rest)
  }
}

export default Event