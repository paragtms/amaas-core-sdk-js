/**
 * API Methods. These methods enable communication with the AMaaS Database. All methods return Promises with the option to use callbacks instead. Specific implementation instructions are detailed below.
 * @module api
 */

import * as Allocations from '../utils/allocations'
import * as AssetManagers from '../utils/assetManagers'
import * as Assets from '../utils/assets'
import * as Books from '../utils/books'
import * as CorporateActions from '../utils/corporateActions'
import * as Monitor from '../utils/monitor'
import * as Netting from '../utils/netting'
import * as Parties from '../utils/parties'
import * as Positions from '../utils/positions'
import * as Relationships from '../utils/relationships'
import * as Transactions from '../utils/transactions'
import * as csv from '../csv_upload/csvUpload.js'

import { configureStage, configureAuth } from '../utils/network'

export {
  Allocations,
  AssetManagers,
  Assets,
  Books,
  CorporateActions,
  Monitor,
  Parties,
  Positions,
  Transactions,
  csv,
  config
}

function config(config) {
  const { stage, credentialsPath, token, apiVersion } = config
  configureStage({ stage, credentialsPath, apiVersion })
  configureAuth({ token })
}
