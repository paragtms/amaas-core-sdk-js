'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _asset = require('../../Asset/asset');

var _asset2 = _interopRequireDefault(_asset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Class representing a Synthetic
 * @memberof module:assets
 * @extends module:assets.Asset
 */
var Synthetic = function (_Asset) {
  _inherits(Synthetic, _Asset);

  /**
   * Construct a new Synthetic instance
   * @param {object} params - Synthetic creation options:
   * @param {number} params.assetManagerId - ID of Synthetic's Asset Manager __(required)__
   * @param {number} params.assetId - ID of the Asset __(required)__
   * @param {string} [params.assetClass=Synthetic] - Class of the Synthetic (a subclass of Synthetic may define its own assetClass)
   * @param {boolean} [params.fungible=true] - Whether the Synthetic is fungible __(required)__
   * @param {string} [params.assetIssuerId] - ID of the Synthetic's issuer
   * @param {string} [params.assetStatus=Active] - Status of the Synthetic
   * @param {string} [params.countryId] - ID of Synthetic's country
   * @param {string} [params.venueId] - ID of Synthetic's venue if applicable
   * @param {string} [params.currency] - Synthetic currency (e.g. USD, SGD)
   * @param {string} [params.issueDate=0001-01-01] - Issue date if applicable (YYYY-MM-DD)
   * @param {string} [params.maturityDate=9999-12-31] - Maturity date if applicable (YYYY-MM-DD)
   * @param {string} [params.description] - Description of the Synthetic
   * @param {string} [params.clientId] - ID of the associated client
   * @param {object} [params.comments] - Object of Comments attached to the Synthetic
   * @param {object} [params.links] - Object of array of Links attached to the Synthetic
   * @param {object} [params.references={ AMaaS: Reference() }] - Object of References associated with the Synthetic
   * @param {string} [params.createdBy] - ID of the user that created the Synthetic
   * @param {string} [params.updatedBy] - ID of the user that updated the Synthetic
   * @param {date} [params.createdTime] - Time that the Synthetic was created
   * @param {date} [params.updatedTime] - Time that the Synthetic was updated
   * @param {number} [params.version] - Version number
  */
  function Synthetic(_ref) {
    var assetManagerId = _ref.assetManagerId,
        assetId = _ref.assetId,
        _ref$assetClass = _ref.assetClass,
        assetClass = _ref$assetClass === undefined ? 'Synthetic' : _ref$assetClass,
        _ref$fungible = _ref.fungible,
        fungible = _ref$fungible === undefined ? true : _ref$fungible,
        assetIssuerId = _ref.assetIssuerId,
        _ref$assetStatus = _ref.assetStatus,
        assetStatus = _ref$assetStatus === undefined ? 'Active' : _ref$assetStatus,
        countryId = _ref.countryId,
        venueId = _ref.venueId,
        currency = _ref.currency,
        issueDate = _ref.issueDate,
        maturityDate = _ref.maturityDate,
        _ref$description = _ref.description,
        description = _ref$description === undefined ? '' : _ref$description,
        clientId = _ref.clientId,
        comments = _ref.comments,
        links = _ref.links,
        references = _ref.references,
        createdBy = _ref.createdBy,
        updatedBy = _ref.updatedBy,
        createdTime = _ref.createdTime,
        updatedTime = _ref.updatedTime,
        version = _ref.version;

    _classCallCheck(this, Synthetic);

    return _possibleConstructorReturn(this, (Synthetic.__proto__ || Object.getPrototypeOf(Synthetic)).call(this, {
      assetManagerId: assetManagerId,
      assetId: assetId,
      assetClass: assetClass,
      fungible: fungible,
      assetIssuerId: assetIssuerId,
      assetStatus: assetStatus,
      countryId: countryId,
      venueId: venueId,
      currency: currency,
      issueDate: issueDate,
      maturityDate: maturityDate,
      description: description,
      clientId: clientId,
      comments: comments,
      links: links,
      references: references,
      createdBy: createdBy,
      updatedBy: updatedBy,
      createdTime: createdTime,
      updatedTime: updatedTime,
      version: version
    }));
  }

  return Synthetic;
}(_asset2.default);

exports.default = Synthetic;