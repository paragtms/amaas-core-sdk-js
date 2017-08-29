# Documentation

## Modules

<dl>
<dt><a href="#module_core">core</a></dt>
<dd><p>Core classes for the AMaaS Core SDK for JavaScript.
These classes cannot be instantiated from the SDK, they are included for reference.</p>
</dd>
<dt><a href="#module_api">api</a></dt>
<dd><p>API Methods. These methods enable communication with the AMaaS Database. All methods return Promises with the option to use callbacks instead. Specific implementation instructions are detailed below.</p>
</dd>
<dt><a href="#module_assetManagers">assetManagers</a></dt>
<dd><p>Classes for the AssetManagers service</p>
</dd>
<dt><a href="#module_assets">assets</a></dt>
<dd><p>Classes for the Assets service</p>
</dd>
<dt><a href="#module_books">books</a></dt>
<dd><p>Classes for the Books Service</p>
</dd>
<dt><a href="#module_children">children</a></dt>
<dd><p>These are general children classes used in a variety of places</p>
</dd>
<dt><a href="#module_corporateActions">corporateActions</a></dt>
<dd><p>Classes for the CorporateActions Service</p>
</dd>
<dt><a href="#module_monitor">monitor</a></dt>
<dd><p>Classes for the Monitor Service</p>
</dd>
<dt><a href="#module_parties">parties</a></dt>
<dd><p>Classes for the Parties service</p>
</dd>
<dt><a href="#module_relationships">relationships</a></dt>
<dd><p>Classes and API methods for the Relationships service (not ready yet)</p>
</dd>
<dt><a href="#module_transactions">transactions</a></dt>
<dd><p>Classes for the Transactions service.</p>
</dd>
</dl>

<a name="module_core"></a>

## core
Core classes for the AMaaS Core SDK for JavaScript.
These classes cannot be instantiated from the SDK, they are included for reference.


* [core](#module_core)
    * [.Reference](#module_core.Reference) ⇐ [<code>AMaaSModel</code>](#module_core.AMaaSModel)
        * [new Reference(params)](#new_module_core.Reference_new)
    * [.AMaaSModel](#module_core.AMaaSModel)
        * [new AMaaSModel(params)](#new_module_core.AMaaSModel_new)

<a name="module_core.Reference"></a>

### core.Reference ⇐ [<code>AMaaSModel</code>](#module_core.AMaaSModel)
Class representing a Reference

**Kind**: static class of [<code>core</code>](#module_core)  
**Extends**: [<code>AMaaSModel</code>](#module_core.AMaaSModel)  
<a name="new_module_core.Reference_new"></a>

#### new Reference(params)
Construct a new Reference instance


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | Reference creation options: |
| params.referenceValue | <code>string</code> | The identifier of this Reference (e.g. transactionId) |
| [params.createdBy] | <code>string</code> | ID of the user that created the Reference |
| [params.updatedBy] | <code>string</code> | ID of the user that updated the Reference |
| [params.createdTime] | <code>date</code> | Time that the Reference was created |
| [params.updatedTime] | <code>date</code> | Time that the Reference was updated |
| [params.version] | <code>number</code> | Version number of the Reference |

<a name="module_core.AMaaSModel"></a>

### core.AMaaSModel
Class representing a AMaaSModel.
This is the base class for almost every other class.

**Kind**: static class of [<code>core</code>](#module_core)  
<a name="new_module_core.AMaaSModel_new"></a>

#### new AMaaSModel(params)
Construct new AMaaSModel object


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | AMaaSModel creation options: |
| [params.createdBy] | <code>string</code> | ID of the user that created the AMaaSModel |
| [params.updatedBy] | <code>string</code> | ID of the user that updated the AMaaSModel |
| [params.createdTime] | <code>date</code> | Time that the AMaaSModel was created |
| [params.updatedTime] | <code>date</code> | Time that the AMaaSModel was updated |
| [params.version] | <code>number</code> | Version number of the AMaaSModel |

<a name="module_api"></a>

## api
API Methods. These methods enable communication with the AMaaS Database. All methods return Promises with the option to use callbacks instead. Specific implementation instructions are detailed below.


* [api](#module_api)
    * [.csv](#module_api.csv) : <code>object</code>
        * [.parseString(params)](#module_api.csv.parseString) ⇒ <code>Array</code>
    * [.Allocations](#module_api.Allocations) : <code>object</code>
        * [.retrieve(params, [callback])](#module_api.Allocations.retrieve) ⇒ <code>Promise</code> \| <code>null</code>
        * [.send(params, [callback])](#module_api.Allocations.send) ⇒ <code>Promise</code> \| <code>null</code>
    * [.AssetManagers](#module_api.AssetManagers) : <code>object</code>
        * [.retrieve(params, [callback])](#module_api.AssetManagers.retrieve) ⇒ <code>Promise</code> \| <code>null</code>
        * [.insert(params, [callback])](#module_api.AssetManagers.insert) ⇒ <code>Promise</code> \| <code>null</code>
        * [.amend(params, [callback])](#module_api.AssetManagers.amend) ⇒ <code>Promise</code> \| <code>null</code>
        * [.deactivate(params, [callback])](#module_api.AssetManagers.deactivate) ⇒ <code>Promise</code> \| <code>null</code>
        * [.reactivate(params, [callback])](#module_api.AssetManagers.reactivate) ⇒ <code>Promise</code> \| <code>null</code>
        * [.searchDomains(params, [callback])](#module_api.AssetManagers.searchDomains) ⇒ <code>Promise</code> \| <code>null</code>
        * [.checkDomains(params, [callback])](#module_api.AssetManagers.checkDomains) ⇒ <code>Promise</code> \| <code>null</code>
        * [.insertDomain(params, [callback])](#module_api.AssetManagers.insertDomain) ⇒ <code>Promise</code> \| <code>null</code>
        * [.retrieveEODBooks(params, [callback])](#module_api.AssetManagers.retrieveEODBooks) ⇒ <code>Promise</code> \| <code>null</code>
        * [.getCredentialsForPubSub(params, [callback])](#module_api.AssetManagers.getCredentialsForPubSub) ⇒ <code>Promise</code> \| <code>null</code>
    * [.Assets](#module_api.Assets) : <code>object</code>
        * [.retrieve(params, [callback])](#module_api.Assets.retrieve) ⇒ <code>Promise</code> \| <code>null</code>
        * [.insert(params, [callback])](#module_api.Assets.insert) ⇒ <code>Promise</code> \| <code>null</code>
        * [.amend(params, [callback])](#module_api.Assets.amend) ⇒ <code>Promise</code> \| <code>null</code>
        * [.partialAmend(params, [callback])](#module_api.Assets.partialAmend) ⇒ <code>Promise</code> \| <code>null</code>
        * [.search(params, callback)](#module_api.Assets.search) ⇒ <code>Promise</code> \| <code>null</code>
        * [.fieldsSearch(query, callback)](#module_api.Assets.fieldsSearch) ⇒ <code>Promise</code> \| <code>null</code>
        * [.deactivate(params, [callback])](#module_api.Assets.deactivate) ⇒ <code>Promise</code> \| <code>null</code>
        * [.reactivate(params, [callback])](#module_api.Assets.reactivate) ⇒ <code>Promise</code> \| <code>null</code>
    * [.Books](#module_api.Books) : <code>object</code>
        * [.retrieve(params, [callback])](#module_api.Books.retrieve) ⇒ <code>Promise</code> \| <code>null</code>
        * [.search(params, [callback])](#module_api.Books.search) ⇒ <code>Promise</code> \| <code>null</code>
        * [.insert(params, [callback])](#module_api.Books.insert) ⇒ <code>Promise</code> \| <code>null</code>
        * [.amend(params, [callback])](#module_api.Books.amend) ⇒ <code>Promise</code> \| <code>null</code>
        * [.retire(params, [callback])](#module_api.Books.retire) ⇒ <code>Promise</code> \| <code>null</code>
        * [.reactivate(params, [callback])](#module_api.Books.reactivate) ⇒ <code>Promise</code> \| <code>null</code>
    * [.CorporateActions](#module_api.CorporateActions) : <code>object</code>
        * [.retrieve(params, [callback])](#module_api.CorporateActions.retrieve) ⇒ <code>Promise</code> \| <code>null</code>
        * [.insert(params, [callback])](#module_api.CorporateActions.insert) ⇒ <code>Promise</code> \| <code>null</code>
        * [.amend(params, [callback])](#module_api.CorporateActions.amend) ⇒ <code>Promise</code> \| <code>null</code>
        * [.search(params, [callback])](#module_api.CorporateActions.search) ⇒ <code>Promise</code> \| <code>null</code>
        * [.cancel(params, [callback])](#module_api.CorporateActions.cancel) ⇒ <code>Promise</code> \| <code>null</code>
        * [.reopen(params, [callback])](#module_api.CorporateActions.reopen) ⇒ <code>Promise</code> \| <code>null</code>
    * [.Fundamentals](#module_api.Fundamentals) : <code>object</code>
        * [.countries(params, [callback])](#module_api.Fundamentals.countries) ⇒ <code>Promise</code> \| <code>null</code>
        * [.calcBusinessDate(params, [callback])](#module_api.Fundamentals.calcBusinessDate) ⇒ <code>Promise</code> \| <code>null</code>
        * [.processDateInfo(params, [callback])](#module_api.Fundamentals.processDateInfo) ⇒ <code>Promise</code> \| <code>null</code>
        * [.holidays(params, [callback])](#module_api.Fundamentals.holidays) ⇒ <code>Promise</code> \| <code>null</code>
    * [.Monitor](#module_api.Monitor) : <code>object</code>
        * [.retrieveItem(params, callback)](#module_api.Monitor.retrieveItem) ⇒ <code>Promise</code> \| <code>null</code>
        * [.insertNewItem(params, [callback])](#module_api.Monitor.insertNewItem) ⇒ <code>Promise</code> \| <code>null</code>
        * [.resubmitItem(params, [callback])](#module_api.Monitor.resubmitItem) ⇒ <code>Promise</code> \| <code>null</code>
        * [.searchItems(params, [callback])](#module_api.Monitor.searchItems) ⇒ <code>Promise</code> \| <code>null</code>
        * [.closeItem(params, [callback])](#module_api.Monitor.closeItem) ⇒ <code>Promise</code> \| <code>null</code>
        * [.retrieveEvent(params, [callback])](#module_api.Monitor.retrieveEvent) ⇒ <code>Promise</code> \| <code>null</code>
        * [.insertEvent(params, [callback])](#module_api.Monitor.insertEvent) ⇒ <code>Promise</code> \| <code>null</code>
        * [.closeEvent(params, callback)](#module_api.Monitor.closeEvent) ⇒ <code>Promise</code> \| <code>null</code>
    * [.Netting](#module_api.Netting) : <code>object</code>
        * [.retrieve(params, [callback])](#module_api.Netting.retrieve) ⇒ <code>Promise</code> \| <code>null</code>
        * [.send(params, [callback])](#module_api.Netting.send) ⇒ <code>Promise</code> \| <code>null</code>
    * [.Parties](#module_api.Parties) : <code>object</code>
        * [.retrieve(params, [callback])](#module_api.Parties.retrieve) ⇒ <code>Promise</code> \| <code>null</code>
        * [.insert(params, [callback])](#module_api.Parties.insert) ⇒ <code>Promise</code> \| <code>null</code>
        * [.amend(params, [callback])](#module_api.Parties.amend) ⇒ <code>Promise</code> \| <code>null</code>
        * [.partialAmend(params, [callback])](#module_api.Parties.partialAmend) ⇒ <code>Promise</code> \| <code>null</code>
        * [.search(params, [callback])](#module_api.Parties.search) ⇒ <code>Promise</code> \| <code>null</code>
        * [.deactivate(params, [callback])](#module_api.Parties.deactivate) ⇒ <code>Promise</code> \| <code>null</code>
        * [.reactivate(params, [callback])](#module_api.Parties.reactivate) ⇒ <code>Promise</code> \| <code>null</code>
    * [.Positions](#module_api.Positions) : <code>object</code>
        * [.retrieve(params, [callback])](#module_api.Positions.retrieve) ⇒ <code>Promise</code> \| <code>null</code>
        * [.search(params, [callback])](#module_api.Positions.search) ⇒ <code>Promise</code> \| <code>null</code>
        * [.fieldsSearch(query, callback)](#module_api.Positions.fieldsSearch) ⇒ <code>Promise</code> \| <code>null</code>
        * [.fieldsSearch(query, callback)](#module_api.Positions.fieldsSearch) ⇒ <code>Promise</code> \| <code>null</code>
    * [.Relationships](#module_api.Relationships) : <code>object</code>
        * [.retrieve(params, [callback])](#module_api.Relationships.retrieve) ⇒ <code>Promise</code> \| <code>null</code>
        * [.requestRelationship(params, [callback])](#module_api.Relationships.requestRelationship) ⇒ <code>Promise</code> \| <code>null</code>
        * [.getRelatedAMID(params, [callback])](#module_api.Relationships.getRelatedAMID) ⇒ <code>Promise</code> \| <code>null</code>
        * [.insert(params, [callback])](#module_api.Relationships.insert) ⇒ <code>Promise</code> \| <code>null</code>
        * [.amend(params, [callback])](#module_api.Relationships.amend) ⇒ <code>Promise</code> \| <code>null</code>
        * [.sendInvitation(params, [callback])](#module_api.Relationships.sendInvitation) ⇒ <code>Promise</code> \| <code>null</code>
    * [.Transactions](#module_api.Transactions) : <code>object</code>
        * [.retrieve(params, [callback])](#module_api.Transactions.retrieve) ⇒ <code>Promise</code> \| <code>null</code>
        * [.insert(params, [callback])](#module_api.Transactions.insert) ⇒ <code>Promise</code> \| <code>null</code>
        * [.amend(params, [callback])](#module_api.Transactions.amend) ⇒ <code>Promise</code> \| <code>null</code>
        * [.partialAmend(params, [callback])](#module_api.Transactions.partialAmend) ⇒ <code>Promise</code> \| <code>null</code>
        * [.search(params, [callback])](#module_api.Transactions.search) ⇒ <code>Promise</code> \| <code>null</code>
        * [.cancel(params, [callback])](#module_api.Transactions.cancel) ⇒ <code>Promise</code> \| <code>null</code>

<a name="module_api.csv"></a>

### api.csv : <code>object</code>
**Kind**: static namespace of [<code>api</code>](#module_api)  
<a name="module_api.csv.parseString"></a>

#### csv.parseString(params) ⇒ <code>Array</code>
Convert csv object string into class instance

**Kind**: static method of [<code>csv</code>](#module_api.csv)  
**Returns**: <code>Array</code> - An array of Transaction instances  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.csv | <code>string</code> | csv string to parse |
| params.type | <code>string</code> | type of data being passed in<br /> Available types are: <li>transactions</li> |

<a name="module_api.Allocations"></a>

### api.Allocations : <code>object</code>
**Kind**: static namespace of [<code>api</code>](#module_api)  
**Note**: This service is in beta (untested)  

* [.Allocations](#module_api.Allocations) : <code>object</code>
    * [.retrieve(params, [callback])](#module_api.Allocations.retrieve) ⇒ <code>Promise</code> \| <code>null</code>
    * [.send(params, [callback])](#module_api.Allocations.send) ⇒ <code>Promise</code> \| <code>null</code>

<a name="module_api.Allocations.retrieve"></a>

#### Allocations.retrieve(params, [callback]) ⇒ <code>Promise</code> \| <code>null</code>
Retrieve Allocations for a specific Transaction

**Kind**: static method of [<code>Allocations</code>](#module_api.Allocations)  
**Returns**: <code>Promise</code> \| <code>null</code> - If no callback supplied, returns a Promise that resolves with an Array of Link instances or a single Link instance (an Allocation is an instance of the Link class)  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>number</code> | Asset Manager ID of Transaction |
| [params.resourceId] | <code>string</code> | Transaction ID. Omit to return all Allocations for the supplied AMId |
| [callback] | <code>function</code> | Function of form (error, result) called on completion. `result` is an array of Link instances or a single Link instance. Omit to return Promise |

<a name="module_api.Allocations.send"></a>

#### Allocations.send(params, [callback]) ⇒ <code>Promise</code> \| <code>null</code>
Send Allocations for a specific Transaction

**Kind**: static method of [<code>Allocations</code>](#module_api.Allocations)  
**Returns**: <code>Promise</code> \| <code>null</code> - If no callback supplied, returns a Promise that resolves with the inserted Allocations  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>number</code> | Asset Manager ID of Transaction |
| params.resourceId | <code>string</code> | Transaction ID |
| params.data | <code>object</code> | Allocation data for the Transaction of the form [ { book_id: '123', quantity: '50', transaction_id: 'XYZ' }, { book_id: '456', quantity: '50', transaction_id: 'ABC' } ]. If transaction_id is supplied, it is used as the inserted Allocation's transactionId. Otherwise a random ID is generated |
| [callback] | <code>function</code> | Called with two arugments (error, result) on completion. `result` is the inserted Allocations. Omit to return Promise |

<a name="module_api.AssetManagers"></a>

### api.AssetManagers : <code>object</code>
**Kind**: static namespace of [<code>api</code>](#module_api)  

* [.AssetManagers](#module_api.AssetManagers) : <code>object</code>
    * [.retrieve(params, [callback])](#module_api.AssetManagers.retrieve) ⇒ <code>Promise</code> \| <code>null</code>
    * [.insert(params, [callback])](#module_api.AssetManagers.insert) ⇒ <code>Promise</code> \| <code>null</code>
    * [.amend(params, [callback])](#module_api.AssetManagers.amend) ⇒ <code>Promise</code> \| <code>null</code>
    * [.deactivate(params, [callback])](#module_api.AssetManagers.deactivate) ⇒ <code>Promise</code> \| <code>null</code>
    * [.reactivate(params, [callback])](#module_api.AssetManagers.reactivate) ⇒ <code>Promise</code> \| <code>null</code>
    * [.searchDomains(params, [callback])](#module_api.AssetManagers.searchDomains) ⇒ <code>Promise</code> \| <code>null</code>
    * [.checkDomains(params, [callback])](#module_api.AssetManagers.checkDomains) ⇒ <code>Promise</code> \| <code>null</code>
    * [.insertDomain(params, [callback])](#module_api.AssetManagers.insertDomain) ⇒ <code>Promise</code> \| <code>null</code>
    * [.retrieveEODBooks(params, [callback])](#module_api.AssetManagers.retrieveEODBooks) ⇒ <code>Promise</code> \| <code>null</code>
    * [.getCredentialsForPubSub(params, [callback])](#module_api.AssetManagers.getCredentialsForPubSub) ⇒ <code>Promise</code> \| <code>null</code>

<a name="module_api.AssetManagers.retrieve"></a>

#### AssetManagers.retrieve(params, [callback]) ⇒ <code>Promise</code> \| <code>null</code>
Retrieve Asset Manager data for specified Asset Manager ID

**Kind**: static method of [<code>AssetManagers</code>](#module_api.AssetManagers)  
**Returns**: <code>Promise</code> \| <code>null</code> - If no callback supplied, returns a Promise that resolves with an AssetManager instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>number</code> | Asset Manager ID to retrieve |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is an AssetManager instance. Omit to return Promise |

<a name="module_api.AssetManagers.insert"></a>

#### AssetManagers.insert(params, [callback]) ⇒ <code>Promise</code> \| <code>null</code>
Insert a new Asset Manager into the database

**Kind**: static method of [<code>AssetManagers</code>](#module_api.AssetManagers)  
**Returns**: <code>Promise</code> \| <code>null</code> - If no callback supplied, returns a Promise that resolves with the inserted AssetManager instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.assetManager | <code>AssetManager</code> | Asset Manager instance to insert |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is the inserted AssetManager instance. Omit to return Promise |

<a name="module_api.AssetManagers.amend"></a>

#### AssetManagers.amend(params, [callback]) ⇒ <code>Promise</code> \| <code>null</code>
Amend an Asset Manager (Replaces current Asset Manager with what is passed in)

**Kind**: static method of [<code>AssetManagers</code>](#module_api.AssetManagers)  
**Returns**: <code>Promise</code> \| <code>null</code> - If no callback supplied, returns a Promise that resolves with the amended AssetManager instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>number</code> | AMID of the Asset Manager to amend |
| params.assetManager | <code>AssetManager</code> | Asset Manager instance to insert |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is the amended AssetManager instance. Omit to return Promise |

<a name="module_api.AssetManagers.deactivate"></a>

#### AssetManagers.deactivate(params, [callback]) ⇒ <code>Promise</code> \| <code>null</code>
Deactivate an Asset Manager

**Kind**: static method of [<code>AssetManagers</code>](#module_api.AssetManagers)  
**Returns**: <code>Promise</code> \| <code>null</code> - If no callback supplied, returns a Promise that resolves with the deactivated AssetManager instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>number</code> | AMID of the Asset Manager to deactivate |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is the deactivated AssetManager instance. Omit to return Promise |

<a name="module_api.AssetManagers.reactivate"></a>

#### AssetManagers.reactivate(params, [callback]) ⇒ <code>Promise</code> \| <code>null</code>
Reactivate an Asset Manager

**Kind**: static method of [<code>AssetManagers</code>](#module_api.AssetManagers)  
**Returns**: <code>Promise</code> \| <code>null</code> - If no callback supplied, returns a Promise that resolves with the reactivated AssetManager instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>number</code> | AMID of the Asset Manager to deactivate |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is the reactivated AssetManager instance. Omit to return Promise |

<a name="module_api.AssetManagers.searchDomains"></a>

#### AssetManagers.searchDomains(params, [callback]) ⇒ <code>Promise</code> \| <code>null</code>
Search domains

**Kind**: static method of [<code>AssetManagers</code>](#module_api.AssetManagers)  
**Returns**: <code>Promise</code> \| <code>null</code> - If no callback supplied, returns a promise that resolves with the matching Domain instances.  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.query | <code>string</code> | search parameters for the domain search. Available keys are: <li>assetManagerIds</li> <li>isPrimary</li> <li>domains</li> <li>domainStatuses</li> <li>fields</li> e.g. `query = { isPrimary: true, domains: ['amaas.com', 'argomi.com'], domainStatuses: 'Active' }` |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` are the matching Domain instances. Omit to return promise. |

<a name="module_api.AssetManagers.checkDomains"></a>

#### AssetManagers.checkDomains(params, [callback]) ⇒ <code>Promise</code> \| <code>null</code>
Check whether a domain has any AMIDs associated with it

**Kind**: static method of [<code>AssetManagers</code>](#module_api.AssetManagers)  
**Returns**: <code>Promise</code> \| <code>null</code> - If no callback supplied, returns a promise that resolves with the Domain instance containing an AMID which is primary for this domain, or null.  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.domain | <code>string</code> | domain to retrieve Asset Manager IDs for (not including '@') |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is the Domain instance where the associated AMID is primary, or null. Omit to return promise. |

<a name="module_api.AssetManagers.insertDomain"></a>

#### AssetManagers.insertDomain(params, [callback]) ⇒ <code>Promise</code> \| <code>null</code>
Insert a new Domain for a given AMID

**Kind**: static method of [<code>AssetManagers</code>](#module_api.AssetManagers)  
**Returns**: <code>Promise</code> \| <code>null</code> - If no callback supplied, returns a promise that resolves with the inserted Domain instance.  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>number</code> | Asset Manager ID of the new Domain's owner. |
| params.domain | <code>Domain</code> | Domain instance or object to insert. |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is the inserted Domain instance. Omit to return promise. |

<a name="module_api.AssetManagers.retrieveEODBooks"></a>

#### AssetManagers.retrieveEODBooks(params, [callback]) ⇒ <code>Promise</code> \| <code>null</code>
Retrieve EOD Books

**Kind**: static method of [<code>AssetManagers</code>](#module_api.AssetManagers)  
**Returns**: <code>Promise</code> \| <code>null</code> - If no callback supplied, returns a promise that resolves with an array of EODBooks or a single EODBook instance.  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>number</code> | AMID of caller. |
| params.bookID | <code>string</code> | Book ID to retrieve. |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is an array of EODBooks or a single EODBook instance. Omit to return promise. |

<a name="module_api.AssetManagers.getCredentialsForPubSub"></a>

#### AssetManagers.getCredentialsForPubSub(params, [callback]) ⇒ <code>Promise</code> \| <code>null</code>
Retrieve temporary credentials for pub/sub connection

**Kind**: static method of [<code>AssetManagers</code>](#module_api.AssetManagers)  
**Returns**: <code>Promise</code> \| <code>null</code> - If no callback supplied, returns a promise that resolves with the credentials object as well as an array of available subscriptions.  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>number</code> | AMId of user for whom you want to retrieve credentials |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is the credentials object containing `AccessKeyId`, `SecretAccessKey` and `SessionToken`, along with an array of available subscription topics. |

<a name="module_api.Assets"></a>

### api.Assets : <code>object</code>
**Kind**: static namespace of [<code>api</code>](#module_api)  

* [.Assets](#module_api.Assets) : <code>object</code>
    * [.retrieve(params, [callback])](#module_api.Assets.retrieve) ⇒ <code>Promise</code> \| <code>null</code>
    * [.insert(params, [callback])](#module_api.Assets.insert) ⇒ <code>Promise</code> \| <code>null</code>
    * [.amend(params, [callback])](#module_api.Assets.amend) ⇒ <code>Promise</code> \| <code>null</code>
    * [.partialAmend(params, [callback])](#module_api.Assets.partialAmend) ⇒ <code>Promise</code> \| <code>null</code>
    * [.search(params, callback)](#module_api.Assets.search) ⇒ <code>Promise</code> \| <code>null</code>
    * [.fieldsSearch(query, callback)](#module_api.Assets.fieldsSearch) ⇒ <code>Promise</code> \| <code>null</code>
    * [.deactivate(params, [callback])](#module_api.Assets.deactivate) ⇒ <code>Promise</code> \| <code>null</code>
    * [.reactivate(params, [callback])](#module_api.Assets.reactivate) ⇒ <code>Promise</code> \| <code>null</code>

<a name="module_api.Assets.retrieve"></a>

#### Assets.retrieve(params, [callback]) ⇒ <code>Promise</code> \| <code>null</code>
Retrieve Asset data for specified AMId and assetId

**Kind**: static method of [<code>Assets</code>](#module_api.Assets)  
**Returns**: <code>Promise</code> \| <code>null</code> - If no callback supplied, returns a Promise that resolves with an array of Assets or a single Asset instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>number</code> | Asset Manager ID of the Asset |
| [params.resourceId] | <code>string</code> | Asset ID of the Asset. Omit to return all Assets for the supplied AMId |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is an array of Assets or a single Asset instance. Omit to return Promise |

<a name="module_api.Assets.insert"></a>

#### Assets.insert(params, [callback]) ⇒ <code>Promise</code> \| <code>null</code>
Insert a new Asset into the database

**Kind**: static method of [<code>Assets</code>](#module_api.Assets)  
**Returns**: <code>Promise</code> \| <code>null</code> - If no callback supplied, returns a Promise that resolves with the inserted Asset instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>number</code> | Asset Manager ID of the Asset Manager to whom the inserted Asset belongs |
| params.asset | <code>Asset</code> | Asset instance to insert |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. ` result` is the inserted Asset instance. Omit to return Promise |

<a name="module_api.Assets.amend"></a>

#### Assets.amend(params, [callback]) ⇒ <code>Promise</code> \| <code>null</code>
Amend an existing Asset. WARNING: This makes a HTTP PUT request and will replace the existing Asset with the one passed in

**Kind**: static method of [<code>Assets</code>](#module_api.Assets)  
**Returns**: <code>Promise</code> \| <code>null</code> - If no callback supplied, returns a Promise that resolves with the amended Asset instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>number</code> | AMId of the Asset to amend |
| params.asset | <code>Asset</code> | Amended Asset instance to PUT |
| params.resourceId | <code>string</code> | Asset ID of the Asset to amend |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is the amended Asset instance. Omit to return Promise |

<a name="module_api.Assets.partialAmend"></a>

#### Assets.partialAmend(params, [callback]) ⇒ <code>Promise</code> \| <code>null</code>
Partially amend an existing Asset.

**Kind**: static method of [<code>Assets</code>](#module_api.Assets)  
**Returns**: <code>Promise</code> \| <code>null</code> - If no callback supplied, returns a Promise that resolves with the amended Asset instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>string</code> | AMId of the Asset to be partially amended |
| params.changes | <code>object</code> | Object of changes to the Asset. |
| params.resourceId | <code>string</code> | Asset ID of the Asset to be partially amended |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is the amended Asset instance. Omit to return Promise |

<a name="module_api.Assets.search"></a>

#### Assets.search(params, callback) ⇒ <code>Promise</code> \| <code>null</code>
Search for Assets

**Kind**: static method of [<code>Assets</code>](#module_api.Assets)  
**Returns**: <code>Promise</code> \| <code>null</code> - If no callback supplied, returns a Promise that resolves with an array of Assets or a single Asset instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| [params.AMId] | <code>number</code> | Asset Manager ID of the Assets to search over. If omitted, you must send assetManagerIds in the search query with at least one value |
| params.query | <code>object</code> | Search parameters of the form { `key`: `[values]` }<br /> Available keys are: <li>assetManagerIds (Required if AMId param is omitted)</li> <li>clientIds</li> <li>assetStatuses</li> <li>assetIds</li> <li>referenceTypes</li> <li>referenceValues</li> <li>assetIssuerIds</li> <li>assetClasses</li> <li>assetTypes</li> e.g. `{ assetManagerIds: 1, assetClasses: ['ForeignExchange', 'Equity'] }` |
| callback | <code>function</code> | Called with two arguments (error, result) on completion. `result` is an array of Assets or a single Asset instance |

<a name="module_api.Assets.fieldsSearch"></a>

#### Assets.fieldsSearch(query, callback) ⇒ <code>Promise</code> \| <code>null</code>
Search for Assets and return specified fields

**Kind**: static method of [<code>Assets</code>](#module_api.Assets)  
**Returns**: <code>Promise</code> \| <code>null</code> - If no callback supplied, returns a Promise that resolves with an array of plain objects or a single plain object  

| Param | Type | Description |
| --- | --- | --- |
| query | <code>object</code> | Query object of the form `{ assetManagerIds: number, fields: string[] }`. Any asset property may be specified as a field parameter. e.g. `{ query: { assetManagerIds: [1, 2], fields: ['assetId', 'references', 'comments']} }` |
| callback | <code>function</code> | Called with two arguments (error, result) on completion. `result` is an array of plain objects or a single plain object |

<a name="module_api.Assets.deactivate"></a>

#### Assets.deactivate(params, [callback]) ⇒ <code>Promise</code> \| <code>null</code>
Delete an exising Asset. This will set the Asset status to 'Inactive'.

**Kind**: static method of [<code>Assets</code>](#module_api.Assets)  
**Returns**: <code>Promise</code> \| <code>null</code> - If no callback supplied, returns a Promise that resolves with the deactivated Asset instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>string</code> | AMId of the Asset to be deleted |
| params.resourceId | <code>string</code> | Asset ID of the Asset to be deleted |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is the deactivated Asset instance. Omit to return Promise |

<a name="module_api.Assets.reactivate"></a>

#### Assets.reactivate(params, [callback]) ⇒ <code>Promise</code> \| <code>null</code>
Reactivate a deactivated Asset. This will set the Asset status to 'Active'.

**Kind**: static method of [<code>Assets</code>](#module_api.Assets)  
**Returns**: <code>Promise</code> \| <code>null</code> - If no callback supplied, returns a Promise that resolves with the reactivated Asset instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>string</code> | AMId of the Asset to be deleted |
| params.resourceId | <code>string</code> | Asset ID of the Asset to be deleted |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is the reactivated Asset instance. Omit to return Promise |

<a name="module_api.Books"></a>

### api.Books : <code>object</code>
**Kind**: static namespace of [<code>api</code>](#module_api)  

* [.Books](#module_api.Books) : <code>object</code>
    * [.retrieve(params, [callback])](#module_api.Books.retrieve) ⇒ <code>Promise</code> \| <code>null</code>
    * [.search(params, [callback])](#module_api.Books.search) ⇒ <code>Promise</code> \| <code>null</code>
    * [.insert(params, [callback])](#module_api.Books.insert) ⇒ <code>Promise</code> \| <code>null</code>
    * [.amend(params, [callback])](#module_api.Books.amend) ⇒ <code>Promise</code> \| <code>null</code>
    * [.retire(params, [callback])](#module_api.Books.retire) ⇒ <code>Promise</code> \| <code>null</code>
    * [.reactivate(params, [callback])](#module_api.Books.reactivate) ⇒ <code>Promise</code> \| <code>null</code>

<a name="module_api.Books.retrieve"></a>

#### Books.retrieve(params, [callback]) ⇒ <code>Promise</code> \| <code>null</code>
Retrieve Book data for specified AMId and bookId

**Kind**: static method of [<code>Books</code>](#module_api.Books)  
**Returns**: <code>Promise</code> \| <code>null</code> - If no callback supplied, returns a Promise that resolves with an array of Books or a single Book instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>number</code> | Asset Manager ID of the Asset |
| [params.resourceId] | <code>string</code> | ID of the Book. Omit to return all Books for the supplied AMId |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is an array of Books or a single Book instance. Omit to return Promise |

<a name="module_api.Books.search"></a>

#### Books.search(params, [callback]) ⇒ <code>Promise</code> \| <code>null</code>
Search Books for specified AMId and bookId

**Kind**: static method of [<code>Books</code>](#module_api.Books)  
**Returns**: <code>Promise</code> \| <code>null</code> - If no callback supplied, returns a Promise that resolves with an array of Books or a single Book instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| [params.AMId] | <code>number</code> | Asset Manager ID of the user calling the API. If omitted, you must pass assetManagerIds in the query |
| params.query | <code>object</code> | Search parameters of the form: { `key`: `value` | `[values]` }<br /> Available keys are: <li>assetManagerIds (Required if AMId param is omitted)</li> <li>clientIds</li> <li>bookStatuses</li> <li>bookIds</li> <li>ownerIds</li> e.g. `{ assetManagerIds: 1, bookIds: [1, 2, 3] }` |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is an array of Books or a single Book instance. Omit to return Promise |

<a name="module_api.Books.insert"></a>

#### Books.insert(params, [callback]) ⇒ <code>Promise</code> \| <code>null</code>
Insert a new Book into the database

**Kind**: static method of [<code>Books</code>](#module_api.Books)  
**Returns**: <code>Promise</code> \| <code>null</code> - If no callback supplied, returns a Promise that resolves with the inserted Book instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>number</code> | Asset Manager ID of the AM insering the Book |
| params.book | <code>Asset</code> | Book instance to insert |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is the inserted Book instance. Omit to return Promise |

<a name="module_api.Books.amend"></a>

#### Books.amend(params, [callback]) ⇒ <code>Promise</code> \| <code>null</code>
Amend an existing Book. WARNING: This makes a HTTP PUT request and will replace the existing Book with the one passed in

**Kind**: static method of [<code>Books</code>](#module_api.Books)  
**Returns**: <code>Promise</code> \| <code>null</code> - If no callback supplied, returns a Promise that resolves with the amended Book instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>number</code> | AMId of the Book to amend |
| params.book | <code>Asset</code> | Amended Book instance to PUT |
| params.resourceId | <code>string</code> | Book ID of the Book to amend |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is the amended Book instance. Omit to return Promise |

<a name="module_api.Books.retire"></a>

#### Books.retire(params, [callback]) ⇒ <code>Promise</code> \| <code>null</code>
Retire a Book. This will set the Book status to 'Retired'.

**Kind**: static method of [<code>Books</code>](#module_api.Books)  
**Returns**: <code>Promise</code> \| <code>null</code> - If no callback supplied, returns a Promise that resolves with the retired Book instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>string</code> | AMId of the Books to be retired |
| params.resourceId | <code>string</code> | Book ID of the Book to be retired |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is the retired Book instance. Omit to return Promise |

<a name="module_api.Books.reactivate"></a>

#### Books.reactivate(params, [callback]) ⇒ <code>Promise</code> \| <code>null</code>
Reactivate a Book. This will set the Book status to 'Active'.

**Kind**: static method of [<code>Books</code>](#module_api.Books)  
**Returns**: <code>Promise</code> \| <code>null</code> - If no callback supplied, returns a Promise that resolves with the reactivated Book instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>string</code> | AMId of the Books to be reactivated |
| params.resourceId | <code>string</code> | Book ID of the Book to be reactivated |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is the reactivated Book instance. Omit to return Promise |

<a name="module_api.CorporateActions"></a>

### api.CorporateActions : <code>object</code>
**Kind**: static namespace of [<code>api</code>](#module_api)  

* [.CorporateActions](#module_api.CorporateActions) : <code>object</code>
    * [.retrieve(params, [callback])](#module_api.CorporateActions.retrieve) ⇒ <code>Promise</code> \| <code>null</code>
    * [.insert(params, [callback])](#module_api.CorporateActions.insert) ⇒ <code>Promise</code> \| <code>null</code>
    * [.amend(params, [callback])](#module_api.CorporateActions.amend) ⇒ <code>Promise</code> \| <code>null</code>
    * [.search(params, [callback])](#module_api.CorporateActions.search) ⇒ <code>Promise</code> \| <code>null</code>
    * [.cancel(params, [callback])](#module_api.CorporateActions.cancel) ⇒ <code>Promise</code> \| <code>null</code>
    * [.reopen(params, [callback])](#module_api.CorporateActions.reopen) ⇒ <code>Promise</code> \| <code>null</code>

<a name="module_api.CorporateActions.retrieve"></a>

#### CorporateActions.retrieve(params, [callback]) ⇒ <code>Promise</code> \| <code>null</code>
Retrieve a Corporate Action

**Kind**: static method of [<code>CorporateActions</code>](#module_api.CorporateActions)  
**Returns**: <code>Promise</code> \| <code>null</code> - If no callback supplied, returns a Promise that resolves with an array of Corporate Actions or a single CorporateAction instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>number</code> | AMId of the Asset Manager that owns the Corporate Action |
| [params.resourceId] | <code>string</code> | ID of the Corporate Action to retrieve. Omit to return all Corporate Actions for supplied AMId |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is an array of Corporate Actions or a single CorporateAction instance. Omit to return Promise |

<a name="module_api.CorporateActions.insert"></a>

#### CorporateActions.insert(params, [callback]) ⇒ <code>Promise</code> \| <code>null</code>
Insert a Corporate Action

**Kind**: static method of [<code>CorporateActions</code>](#module_api.CorporateActions)  
**Returns**: <code>Promise</code> \| <code>null</code> - If no callback supplied, returns a Promise that resolves with the inserted CorporateAction instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>number</code> | AMId of the Asset Manager that owns the Corporate Action |
| params.corporateAction | <code>string</code> | CorporateAction instance to insert |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is the inserted CorporateAction instance. Omit to return Promise |

<a name="module_api.CorporateActions.amend"></a>

#### CorporateActions.amend(params, [callback]) ⇒ <code>Promise</code> \| <code>null</code>
Insert a Corporate Action

**Kind**: static method of [<code>CorporateActions</code>](#module_api.CorporateActions)  
**Returns**: <code>Promise</code> \| <code>null</code> - If no callback supplied, returns a Promise that resolves with the amended CorporateAction instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>number</code> | AMId of the Asset Manager that owns the Corporate Action |
| params.resourceId | <code>string</code> | ID of the Corporate Action to amend |
| params.corporateAction | <code>string</code> | Amended CorporateAction instance |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is the amended CorporateAction instance. Omit to return Promise |

<a name="module_api.CorporateActions.search"></a>

#### CorporateActions.search(params, [callback]) ⇒ <code>Promise</code> \| <code>null</code>
Search for Corporate Actions

**Kind**: static method of [<code>CorporateActions</code>](#module_api.CorporateActions)  
**Returns**: <code>Promise</code> \| <code>null</code> - If no callback supplied, returns a Promise that resolves with an array of Corporate Actions or a single CorporateAction instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| [params.AMId] | <code>number</code> | AMId of the Asset Manager that owns the Corporate Action. If omitted you must pass assetManagerIds in the query |
| params.query | <code>object</code> | Search parameters of the form { `key`: `value` | `[values]` }<br /> Available keys are: <li>assetManagerIds (Required if AMId param is omitted)</li> <li>clientIds</li> <li>corporateActionIds</li> <li>corporateActionStatuses</li> <li>corporateActionTypes</li> <li>assetIds</li> <li>partyIds</li> <li>recordDateStart</li> <li>recordDateEnd</li> <li>declaredDateStart</li> <li>declaredDateEnd</li> <li>referenceTypes</li> <li>referenceValues</li> e.g. `{ assetManagerIds: 1, assetIds: ['ASKJ18', 'LKHB98'] }` |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is an array of Corporate Actions or a single CorporateAction instance. Omit to return Promise |

<a name="module_api.CorporateActions.cancel"></a>

#### CorporateActions.cancel(params, [callback]) ⇒ <code>Promise</code> \| <code>null</code>
Cancel a Corporate Action

**Kind**: static method of [<code>CorporateActions</code>](#module_api.CorporateActions)  
**Returns**: <code>Promise</code> \| <code>null</code> - If no callback supplied, returns a Promise that resolves with the cancelled CorporateAction instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>number</code> | AMId of the Asset Manager that owns the Corporate Action. |
| params.resourceId | <code>array</code> | ID of the Corporate Action to cancel |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is the cancelled CorporateAction instance. Omit to return Promise |

<a name="module_api.CorporateActions.reopen"></a>

#### CorporateActions.reopen(params, [callback]) ⇒ <code>Promise</code> \| <code>null</code>
Reopen a cancelled Corporate Action

**Kind**: static method of [<code>CorporateActions</code>](#module_api.CorporateActions)  
**Returns**: <code>Promise</code> \| <code>null</code> - If no callback supplied, returns a Promise that resolves with the reopened CorporateAction instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>number</code> | AMId of the Asset Manager that owns the Corporate Action. |
| params.resourceId | <code>array</code> | ID of the Corporate Action to reopen |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is the reopened CorporateAction instance. Omit to return Promise |

<a name="module_api.Fundamentals"></a>

### api.Fundamentals : <code>object</code>
**Kind**: static namespace of [<code>api</code>](#module_api)  

* [.Fundamentals](#module_api.Fundamentals) : <code>object</code>
    * [.countries(params, [callback])](#module_api.Fundamentals.countries) ⇒ <code>Promise</code> \| <code>null</code>
    * [.calcBusinessDate(params, [callback])](#module_api.Fundamentals.calcBusinessDate) ⇒ <code>Promise</code> \| <code>null</code>
    * [.processDateInfo(params, [callback])](#module_api.Fundamentals.processDateInfo) ⇒ <code>Promise</code> \| <code>null</code>
    * [.holidays(params, [callback])](#module_api.Fundamentals.holidays) ⇒ <code>Promise</code> \| <code>null</code>

<a name="module_api.Fundamentals.countries"></a>

#### Fundamentals.countries(params, [callback]) ⇒ <code>Promise</code> \| <code>null</code>
Retrieve country info for a specific code.

**Kind**: static method of [<code>Fundamentals</code>](#module_api.Fundamentals)  
**Returns**: <code>Promise</code> \| <code>null</code> - If no callback supplied, resolves with a country object.  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.code | <code>string</code> | Country code. |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is a country object. Omit to return Promise |

<a name="module_api.Fundamentals.calcBusinessDate"></a>

#### Fundamentals.calcBusinessDate(params, [callback]) ⇒ <code>Promise</code> \| <code>null</code>
Make request and search data

**Kind**: static method of [<code>Fundamentals</code>](#module_api.Fundamentals)  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.codes | <code>string</code> \| <code>array</code> | A country code string or an array of country code strings |
| params.date | <code>string</code> | start date |
| params.offset | <code>string</code> | Number of offset days. |
| params.invalidDates | <code>string</code> \| <code>array</code> | an invalid date string or an array of invalid dates strings |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is a country name returned or country names. Omit to return Promise |

<a name="module_api.Fundamentals.processDateInfo"></a>

#### Fundamentals.processDateInfo(params, [callback]) ⇒ <code>Promise</code> \| <code>null</code>
Make request and search data

**Kind**: static method of [<code>Fundamentals</code>](#module_api.Fundamentals)  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.codes | <code>string</code> \| <code>array</code> | A country code string or an array of country codes strings |
| params.date | <code>string</code> | start date |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is a country name returned or country names. Omit to return Promise |

<a name="module_api.Fundamentals.holidays"></a>

#### Fundamentals.holidays(params, [callback]) ⇒ <code>Promise</code> \| <code>null</code>
Make request and search data

**Kind**: static method of [<code>Fundamentals</code>](#module_api.Fundamentals)  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.codes | <code>string</code> \| <code>array</code> | A country code string or an array of country codes strings |
| params.years | <code>string</code> \| <code>array</code> | A year string or an array of |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is a country name returned or country names. Omit to return Promise |

<a name="module_api.Monitor"></a>

### api.Monitor : <code>object</code>
**Kind**: static namespace of [<code>api</code>](#module_api)  

* [.Monitor](#module_api.Monitor) : <code>object</code>
    * [.retrieveItem(params, callback)](#module_api.Monitor.retrieveItem) ⇒ <code>Promise</code> \| <code>null</code>
    * [.insertNewItem(params, [callback])](#module_api.Monitor.insertNewItem) ⇒ <code>Promise</code> \| <code>null</code>
    * [.resubmitItem(params, [callback])](#module_api.Monitor.resubmitItem) ⇒ <code>Promise</code> \| <code>null</code>
    * [.searchItems(params, [callback])](#module_api.Monitor.searchItems) ⇒ <code>Promise</code> \| <code>null</code>
    * [.closeItem(params, [callback])](#module_api.Monitor.closeItem) ⇒ <code>Promise</code> \| <code>null</code>
    * [.retrieveEvent(params, [callback])](#module_api.Monitor.retrieveEvent) ⇒ <code>Promise</code> \| <code>null</code>
    * [.insertEvent(params, [callback])](#module_api.Monitor.insertEvent) ⇒ <code>Promise</code> \| <code>null</code>
    * [.closeEvent(params, callback)](#module_api.Monitor.closeEvent) ⇒ <code>Promise</code> \| <code>null</code>

<a name="module_api.Monitor.retrieveItem"></a>

#### Monitor.retrieveItem(params, callback) ⇒ <code>Promise</code> \| <code>null</code>
Retrieve a Monitor Item

**Kind**: static method of [<code>Monitor</code>](#module_api.Monitor)  
**Returns**: <code>Promise</code> \| <code>null</code> - - If no callback supplied, returns a Promise that resolves with an array of Items or a single Item instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.assetManagerId | <code>number</code> | Asset Manager ID of the Item(s) to be retrieved |
| [params.resourceId] | <code>string</code> | itemId of the Item to be retrieved. Omit to return all Items for given AMId |
| callback | <code>function</code> | Called with two arguments (error, result) on completion. `result` is an array of Items or a single Item instance. Omit to return Promise |

<a name="module_api.Monitor.insertNewItem"></a>

#### Monitor.insertNewItem(params, [callback]) ⇒ <code>Promise</code> \| <code>null</code>
Insert a new Monitor Item

**Kind**: static method of [<code>Monitor</code>](#module_api.Monitor)  
**Returns**: <code>Promise</code> \| <code>null</code> - - If no callback supplied, returns a Promise that resolves with the inserted Item instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.assetManagerId | <code>number</code> | Asset Manager ID of the Item |
| params.item | <code>Item</code> \| <code>object</code> | Monitor Item |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result ` is the inserted Item instance. Omit to return Promise |

<a name="module_api.Monitor.resubmitItem"></a>

#### Monitor.resubmitItem(params, [callback]) ⇒ <code>Promise</code> \| <code>null</code>
Resubmit a monitor item

**Kind**: static method of [<code>Monitor</code>](#module_api.Monitor)  
**Returns**: <code>Promise</code> \| <code>null</code> - If no callback supplied, returns a Promise that resolves with the resubmitted Item instance.  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>number</code> | Asset Manager ID of the Item to be resubmitted |
| params.resourceId | <code>string</code> | itemId of the Item to be resubmitted |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is the resubmitted Item instance. Omit to return promise |

<a name="module_api.Monitor.searchItems"></a>

#### Monitor.searchItems(params, [callback]) ⇒ <code>Promise</code> \| <code>null</code>
Search Monitor Items

**Kind**: static method of [<code>Monitor</code>](#module_api.Monitor)  
**Returns**: <code>Promise</code> \| <code>null</code> - If no callback supplied, returns a Promise that resolves with an array of Items or a single Item instance.  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| [params.assetManagerId] | <code>number</code> | Asset Manager ID of the Items over which to search. If omitted, you must include `assetManagerIds` in the query |
| params.query | <code>object</code> | Search parameters of the form { `key`: `value` | `[values]` }<br/> Available keys are: <li>assetManagerIds (required if AMId param is omitted)</li> <li>itemIds</li> <li>assetBookIds</li> <li>itemStatuses</li> <li>itemClasses</li> <li>itemTypes</li> <li>itemLevels</li> <li>itemSources</li> <li>transactionIds</li> <li>assetIds</li> |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is an array of Items or a single Item instance. |

<a name="module_api.Monitor.closeItem"></a>

#### Monitor.closeItem(params, [callback]) ⇒ <code>Promise</code> \| <code>null</code>
Close a monitor item

**Kind**: static method of [<code>Monitor</code>](#module_api.Monitor)  
**Returns**: <code>Promise</code> \| <code>null</code> - If no callback supplied, returns a Promise that resolves with the closed Monitor Item instance.  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>number</code> | Asset Manager ID of the Item to close |
| params.resourceId | <code>string</code> | itemId of the Item to close |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is the closed Monitor Item instance. Omit to return promise |

<a name="module_api.Monitor.retrieveEvent"></a>

#### Monitor.retrieveEvent(params, [callback]) ⇒ <code>Promise</code> \| <code>null</code>
**Kind**: static method of [<code>Monitor</code>](#module_api.Monitor)  
**Returns**: <code>Promise</code> \| <code>null</code> - If no callback supplied, returns a Promise that resolves with an Event or array of Events  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters |
| params.AMId | <code>number</code> | Asset Manager ID of the Event to retrieve __(required)__ |
| [params.resourceId] | <code>string</code> | Event ID. Omit to return all Events for the Asset Manager ID |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is an Event or array of Events. Omit to return promise |

<a name="module_api.Monitor.insertEvent"></a>

#### Monitor.insertEvent(params, [callback]) ⇒ <code>Promise</code> \| <code>null</code>
**Kind**: static method of [<code>Monitor</code>](#module_api.Monitor)  
**Returns**: <code>Promise</code> \| <code>null</code> - If no callback supplied, returns a Promise that resolves with the newly inserted Event  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters |
| params.AMId | <code>number</code> | Asset Manager ID to insert to |
| params.event | <code>Event</code> | Event instance or object to insert |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is the inserted Event. Omit to return promise |

<a name="module_api.Monitor.closeEvent"></a>

#### Monitor.closeEvent(params, callback) ⇒ <code>Promise</code> \| <code>null</code>
**Kind**: static method of [<code>Monitor</code>](#module_api.Monitor)  
**Returns**: <code>Promise</code> \| <code>null</code> - If no callback supplied, returns a Promise that resolves with the closed Event  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters |
| params.AMId | <code>number</code> | Asset Manager ID of the Event to close |
| params.resourceId | <code>string</code> | Event ID to close |
| callback | <code>function</code> | Called with two arguments (error, result) on completion. `result` is the closed Event. Omit to return promise |

<a name="module_api.Netting"></a>

### api.Netting : <code>object</code>
**Kind**: static namespace of [<code>api</code>](#module_api)  
**Note**: This service is in beta (untested)  

* [.Netting](#module_api.Netting) : <code>object</code>
    * [.retrieve(params, [callback])](#module_api.Netting.retrieve) ⇒ <code>Promise</code> \| <code>null</code>
    * [.send(params, [callback])](#module_api.Netting.send) ⇒ <code>Promise</code> \| <code>null</code>

<a name="module_api.Netting.retrieve"></a>

#### Netting.retrieve(params, [callback]) ⇒ <code>Promise</code> \| <code>null</code>
Retrieve Netting for a specific Transaction

**Kind**: static method of [<code>Netting</code>](#module_api.Netting)  
**Returns**: <code>Promise</code> \| <code>null</code> - If callback is supplied, it is called with ???. Otherwise a promise that resolves with ??? is returned  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>number</code> | Asset Manager ID of Transaction |
| params.resourceId | <code>string</code> | Transaction ID |
| params.token | <code>string</code> | Authorization token |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is ???. Omit to return Promise |

<a name="module_api.Netting.send"></a>

#### Netting.send(params, [callback]) ⇒ <code>Promise</code> \| <code>null</code>
Send Transactions to Net

**Kind**: static method of [<code>Netting</code>](#module_api.Netting)  
**Returns**: <code>Promise</code> \| <code>null</code> - If no callback supplied, returns a Promise that resolves with ???  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | object of parameters: |
| params.AMId | <code>number</code> |  | Asset Manager ID of the Transactions to be netted |
| params.data | <code>array</code> |  | An Array of Transaction IDs to be netted |
| [params.nettingType] | <code>string</code> | <code>&quot;Net&quot;</code> | Optional netting type |
| [callback] | <code>function</code> |  | Called with two arguments (error, result) on completion. `result` is ??? Omit to return Promise |

<a name="module_api.Parties"></a>

### api.Parties : <code>object</code>
**Kind**: static namespace of [<code>api</code>](#module_api)  

* [.Parties](#module_api.Parties) : <code>object</code>
    * [.retrieve(params, [callback])](#module_api.Parties.retrieve) ⇒ <code>Promise</code> \| <code>null</code>
    * [.insert(params, [callback])](#module_api.Parties.insert) ⇒ <code>Promise</code> \| <code>null</code>
    * [.amend(params, [callback])](#module_api.Parties.amend) ⇒ <code>Promise</code> \| <code>null</code>
    * [.partialAmend(params, [callback])](#module_api.Parties.partialAmend) ⇒ <code>Promise</code> \| <code>null</code>
    * [.search(params, [callback])](#module_api.Parties.search) ⇒ <code>Promise</code> \| <code>null</code>
    * [.deactivate(params, [callback])](#module_api.Parties.deactivate) ⇒ <code>Promise</code> \| <code>null</code>
    * [.reactivate(params, [callback])](#module_api.Parties.reactivate) ⇒ <code>Promise</code> \| <code>null</code>

<a name="module_api.Parties.retrieve"></a>

#### Parties.retrieve(params, [callback]) ⇒ <code>Promise</code> \| <code>null</code>
Retrieve Party data for specified AMId and partyId

**Kind**: static method of [<code>Parties</code>](#module_api.Parties)  
**Returns**: <code>Promise</code> \| <code>null</code> - - If no callback supplied, returns a Promise that resolves with an array of Parties or a single Party instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>number</code> | Asset Manager ID of the Party |
| [params.partyId] | <code>string</code> | Party ID of the Party. Omitting this will return all Parties associated with the supplied AMId |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is an array of Parties or a single Party instance. Omit to return Promise |

<a name="module_api.Parties.insert"></a>

#### Parties.insert(params, [callback]) ⇒ <code>Promise</code> \| <code>null</code>
Insert a new Party into the database

**Kind**: static method of [<code>Parties</code>](#module_api.Parties)  
**Returns**: <code>Promise</code> \| <code>null</code> - If no callback supplied, returns a Promise that resolves with the inserted Party instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>number</code> | Asset Manager ID to whom the Party will belong |
| params.party | <code>Party</code> | Party instance to insert |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is the inserted Party instance. Omit to return Promise. |

<a name="module_api.Parties.amend"></a>

#### Parties.amend(params, [callback]) ⇒ <code>Promise</code> \| <code>null</code>
Amend an existing Party. WARNING: This makes a HTTP PUT request and will replace the existing Party with the one passed in

**Kind**: static method of [<code>Parties</code>](#module_api.Parties)  
**Returns**: <code>Promise</code> \| <code>null</code> - If no callback supplied, returns a Promise that resolves with the amended Party instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>number</code> | AMId of the Party to amend |
| params.party | <code>Party</code> | Amended Party instance to PUT |
| params.resourceId | <code>string</code> | Party ID of the Party to amend |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is the amended Party instance. Omit to return Promise |

<a name="module_api.Parties.partialAmend"></a>

#### Parties.partialAmend(params, [callback]) ⇒ <code>Promise</code> \| <code>null</code>
Partially amend an existing Party.

**Kind**: static method of [<code>Parties</code>](#module_api.Parties)  
**Returns**: <code>Promise</code> \| <code>null</code> - If no callback supplied, returns a Promise that resolves with the amended Party instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>string</code> | AMId of the Party to be partially amended |
| params.changes | <code>object</code> | Object of changes to the Party |
| params.resourceId | <code>string</code> | Party ID of the Party to be partially amended |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is the amended Party instance. Omit to return Promise |

<a name="module_api.Parties.search"></a>

#### Parties.search(params, [callback]) ⇒ <code>Promise</code> \| <code>null</code>
Search for Parties

**Kind**: static method of [<code>Parties</code>](#module_api.Parties)  
**Returns**: <code>Promise</code> \| <code>null</code> - If no callback supplied, returns a Promise that resolves with an array of Parties or a single Party instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| [params.AMId] | <code>number</code> | Asset Manager of the Parties to search over. If omitted you must pass assetManagerIds in the query |
| params.query | <code>object</code> | Search parameters of the form: { `key`: `value` | `[values]` }<br /> Available keys are: <li>assetManagerIds (required if AMId param is omitted)</li> <li>clientIds</li> <li>partyStatuses</li> <li>partyIds</li> <li>partyClasses</li> <li>partyTypes</li> e.g. `{ assetManagerIds: 1, partyTypes: ['Individual', 'Fund'] }` |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is an array of Parties or a single Party instance. Omit to return promise |

<a name="module_api.Parties.deactivate"></a>

#### Parties.deactivate(params, [callback]) ⇒ <code>Promise</code> \| <code>null</code>
Deactivate an exising Party. This will set the Party status to 'Inactive'

**Kind**: static method of [<code>Parties</code>](#module_api.Parties)  
**Returns**: <code>Promise</code> \| <code>null</code> - If no callback supplied, returns a Promise that resolves with the deactivated Party instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>string</code> | AMId of the Party to be deactivated |
| params.resourceId | <code>string</code> | Party ID of the Party to be deactivated |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is the deactivated Party instance. Omit to return Promise |

<a name="module_api.Parties.reactivate"></a>

#### Parties.reactivate(params, [callback]) ⇒ <code>Promise</code> \| <code>null</code>
Reactivate a Party. This will set the Party status to 'Active'

**Kind**: static method of [<code>Parties</code>](#module_api.Parties)  
**Returns**: <code>Promise</code> \| <code>null</code> - If no callback supplied, returns a Promise that resolves with the reactivated Party instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>string</code> | AMId of the Party to be reactivated |
| params.resourceId | <code>string</code> | Party ID of the Party to be reactivated |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is the reactivated Party instance. Omit to return Promise |

<a name="module_api.Positions"></a>

### api.Positions : <code>object</code>
**Kind**: static namespace of [<code>api</code>](#module_api)  

* [.Positions](#module_api.Positions) : <code>object</code>
    * [.retrieve(params, [callback])](#module_api.Positions.retrieve) ⇒ <code>Promise</code> \| <code>null</code>
    * [.search(params, [callback])](#module_api.Positions.search) ⇒ <code>Promise</code> \| <code>null</code>
    * [.fieldsSearch(query, callback)](#module_api.Positions.fieldsSearch) ⇒ <code>Promise</code> \| <code>null</code>
    * [.fieldsSearch(query, callback)](#module_api.Positions.fieldsSearch) ⇒ <code>Promise</code> \| <code>null</code>

<a name="module_api.Positions.retrieve"></a>

#### Positions.retrieve(params, [callback]) ⇒ <code>Promise</code> \| <code>null</code>
Retrieve a Position from the database

**Kind**: static method of [<code>Positions</code>](#module_api.Positions)  
**Returns**: <code>Promise</code> \| <code>null</code> - If no callback is supplied, returns promise that resolves with an array of Positions  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters |
| params.AMId | <code>number</code> | Asset Manager ID of the the Positions |
| [callback] | <code>function</code> | Called with two arugments (error, result) on completion. `result` is an array of Positions. Omit to return Promise |

<a name="module_api.Positions.search"></a>

#### Positions.search(params, [callback]) ⇒ <code>Promise</code> \| <code>null</code>
Search for Positions in the database

**Kind**: static method of [<code>Positions</code>](#module_api.Positions)  
**Returns**: <code>Promise</code> \| <code>null</code> - If no callback is supplied, returns promise that resolves with array of Positions  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters |
| params.AMId | <code>number</code> | Asset Manager ID of the Asset Manager owning the Postions |
| params.query | <code>object</code> | Search parameters of the form: { `key`: `values` | `[values]` }<br /> Available keys are: <li>assetManagerIds (Required if AMId param is omitted)</li> <li>bookIds</li> <li>assetIds</li> <li>clientIds</li> <li>accountIds</li> <li>accountingTypes</li> <li>positionDate</li> e.g. `{ assetManagerIds: 1, bookIds: ['LAXJ98', 'OXYW09', 'COSY45'] }` |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. Omit to return Promise |

<a name="module_api.Positions.fieldsSearch"></a>

#### Positions.fieldsSearch(query, callback) ⇒ <code>Promise</code> \| <code>null</code>
Search for Positions and return only specified fields

**Kind**: static method of [<code>Positions</code>](#module_api.Positions)  
**Returns**: <code>Promise</code> \| <code>null</code> - If no callback is supplied, returns promise that resolves with a plain object or array of plain objects.  

| Param | Type | Description |
| --- | --- | --- |
| query | <code>number</code> | query object of the form `{ assetManagerIds: number, fields: string[] }`. Any Position properties can be passed to `fields`. Note that you may include additional properties in this object corresponding to the available search keys as defined in the `search` function. e.g. `{ assetManagerIds: [1], assetIds: [1, 2], fields: ['displayName', 'assetId'] }` |
| callback | <code>function</code> | Called with two arguments (error, result) on completion. `result` is a plain object or array of plain objects. Omit to return Promise |

<a name="module_api.Positions.fieldsSearch"></a>

#### Positions.fieldsSearch(query, callback) ⇒ <code>Promise</code> \| <code>null</code>
Search for Transaction with specified fields

**Kind**: static method of [<code>Positions</code>](#module_api.Positions)  
**Returns**: <code>Promise</code> \| <code>null</code> - If no callback supplied, returns a Promise that resolves with a plain object or array of plain objects.  

| Param | Type | Description |
| --- | --- | --- |
| query | <code>object</code> | query object of the form `{ assetManagerIds: number, fields: string[] }`. Any Transaction properties can be passed to `fields`. Note that you may include additional properties in this object corresponding to the available search keys as defined in the `search` function. e.g.`{ assetManagerIds: [1, 2], fields: ['assetId', 'references', 'comments']}` |
| callback | <code>function</code> | Called with two arguments (error, result) on completion. `result` is a plain object or array of plain objects. Omit to return Promise |

<a name="module_api.Relationships"></a>

### api.Relationships : <code>object</code>
**Kind**: static namespace of [<code>api</code>](#module_api)  

* [.Relationships](#module_api.Relationships) : <code>object</code>
    * [.retrieve(params, [callback])](#module_api.Relationships.retrieve) ⇒ <code>Promise</code> \| <code>null</code>
    * [.requestRelationship(params, [callback])](#module_api.Relationships.requestRelationship) ⇒ <code>Promise</code> \| <code>null</code>
    * [.getRelatedAMID(params, [callback])](#module_api.Relationships.getRelatedAMID) ⇒ <code>Promise</code> \| <code>null</code>
    * [.insert(params, [callback])](#module_api.Relationships.insert) ⇒ <code>Promise</code> \| <code>null</code>
    * [.amend(params, [callback])](#module_api.Relationships.amend) ⇒ <code>Promise</code> \| <code>null</code>
    * [.sendInvitation(params, [callback])](#module_api.Relationships.sendInvitation) ⇒ <code>Promise</code> \| <code>null</code>

<a name="module_api.Relationships.retrieve"></a>

#### Relationships.retrieve(params, [callback]) ⇒ <code>Promise</code> \| <code>null</code>
Retrieve Relationships for specified Asset Manager

**Kind**: static method of [<code>Relationships</code>](#module_api.Relationships)  
**Returns**: <code>Promise</code> \| <code>null</code> - If no callback supplied, returns a promise that resolves with an array of Relationships or a Relationship instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>number</code> | Asset Manager ID of the Relationships |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is an array of Relationships or a Relationship instance. Omit to return Promise |

<a name="module_api.Relationships.requestRelationship"></a>

#### Relationships.requestRelationship(params, [callback]) ⇒ <code>Promise</code> \| <code>null</code>
Request a new Relationship

**Kind**: static method of [<code>Relationships</code>](#module_api.Relationships)  
**Returns**: <code>Promise</code> \| <code>null</code> - If no callback supplied, returns a Promise that resolves with the inserted Relationship instance.  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>number</code> | Asset Manager ID of the AM you are requesting a relationship to (Not the caller's AMID!) |
| params.params | <code>object</code> | Object of relationshipType and relationshipId. |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is the inserted Relationship instance. Omit to return Promise |

<a name="module_api.Relationships.getRelatedAMID"></a>

#### Relationships.getRelatedAMID(params, [callback]) ⇒ <code>Promise</code> \| <code>null</code>
Get a list of relationships where the passed AMID is the relatedId

**Kind**: static method of [<code>Relationships</code>](#module_api.Relationships)  
**Returns**: <code>Promise</code> \| <code>null</code> - If no callback supplied, returns a Promise that resolves with the Relationship instance or list of Relationships.  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>number</code> | Asset Manager ID of the AM that you want to see the parent Relationships for |
| params.options | <code>object</code> | `{ includeInactive: [true], relationshipType: ['Employee', 'External] }` |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is the Relationship instance or list of Relationships. Omit to return Promise |

<a name="module_api.Relationships.insert"></a>

#### Relationships.insert(params, [callback]) ⇒ <code>Promise</code> \| <code>null</code>
Insert a new Relationship

**Kind**: static method of [<code>Relationships</code>](#module_api.Relationships)  
**Returns**: <code>Promise</code> \| <code>null</code> - If no callback supplied, returns a Promise that resolves with the inserted Relationship instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>number</code> | Asset Manager for whom the Relationship will belong |
| params.relationship | <code>Relationship</code> | Relationship instance to insert |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is the inserted Relationship instance. Omit to return Promise |

<a name="module_api.Relationships.amend"></a>

#### Relationships.amend(params, [callback]) ⇒ <code>Promise</code> \| <code>null</code>
Amend an existing Relationship

**Kind**: static method of [<code>Relationships</code>](#module_api.Relationships)  
**Returns**: <code>Promise</code> \| <code>null</code> - If no callback supplied, returns a Promise that resolves with the amended Relationship instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>number</code> | Asset Manager ID who owns the Relationship to amend |
| params.relationship | <code>Relationship</code> | Amended Relationship instance |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is the amended Relationship instance. Omit to return Promise |

<a name="module_api.Relationships.sendInvitation"></a>

#### Relationships.sendInvitation(params, [callback]) ⇒ <code>Promise</code> \| <code>null</code>
Send invitation to join

**Kind**: static method of [<code>Relationships</code>](#module_api.Relationships)  
**Returns**: <code>Promise</code> \| <code>null</code> - If no callback supplied, returns a promise that resolves with `true`.  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>number</code> | AMID of company to join |
| params.toEmail | <code>string</code> | Email address to send to |
| params.fromEmail | <code>string</code> | Email address sent from |
| params.companyName | <code>string</code> | Company to Join |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is `true`. |

<a name="module_api.Transactions"></a>

### api.Transactions : <code>object</code>
**Kind**: static namespace of [<code>api</code>](#module_api)  

* [.Transactions](#module_api.Transactions) : <code>object</code>
    * [.retrieve(params, [callback])](#module_api.Transactions.retrieve) ⇒ <code>Promise</code> \| <code>null</code>
    * [.insert(params, [callback])](#module_api.Transactions.insert) ⇒ <code>Promise</code> \| <code>null</code>
    * [.amend(params, [callback])](#module_api.Transactions.amend) ⇒ <code>Promise</code> \| <code>null</code>
    * [.partialAmend(params, [callback])](#module_api.Transactions.partialAmend) ⇒ <code>Promise</code> \| <code>null</code>
    * [.search(params, [callback])](#module_api.Transactions.search) ⇒ <code>Promise</code> \| <code>null</code>
    * [.cancel(params, [callback])](#module_api.Transactions.cancel) ⇒ <code>Promise</code> \| <code>null</code>

<a name="module_api.Transactions.retrieve"></a>

#### Transactions.retrieve(params, [callback]) ⇒ <code>Promise</code> \| <code>null</code>
Retrieve a Transaction from the database

**Kind**: static method of [<code>Transactions</code>](#module_api.Transactions)  
**Returns**: <code>Promise</code> \| <code>null</code> - If no callback supplied, returns Promise that resolves with an Array of Transactions or a single Transaction instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>number</code> | Asset Manager ID of the Transaction's owner |
| [params.resourceId] | <code>string</code> | Transaction ID. Omit to return all Transactions for the supplied AMId |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is an Array of Transactions or a single Transaction instance. Omit to return Promise |

<a name="module_api.Transactions.insert"></a>

#### Transactions.insert(params, [callback]) ⇒ <code>Promise</code> \| <code>null</code>
Insert a new Transaction into the database

**Kind**: static method of [<code>Transactions</code>](#module_api.Transactions)  
**Returns**: <code>Promise</code> \| <code>null</code> - If no callback supplied, returns Promise that resolves with the inserted Transaction instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.transaction | <code>Transaction</code> | Transaction instance or object to insert |
| params.AMId | <code>number</code> | Asset Manager ID of the Transaction's owner |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is the inserted Transaction instance. Omit to return Promise |

<a name="module_api.Transactions.amend"></a>

#### Transactions.amend(params, [callback]) ⇒ <code>Promise</code> \| <code>null</code>
Amend a Transaction

**Kind**: static method of [<code>Transactions</code>](#module_api.Transactions)  
**Returns**: <code>Promise</code> \| <code>null</code> - If no callback supplied, returns Promise that resolves with the amended Transaction instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.transaction | <code>Transaction</code> | The amended Transaction instance |
| params.AMId | <code>number</code> | Asset Manager ID of the Transaction's owner |
| params.resourceId | <code>string</code> | Transaction ID |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is the amended Transaction instance. Omit to return Promise |

<a name="module_api.Transactions.partialAmend"></a>

#### Transactions.partialAmend(params, [callback]) ⇒ <code>Promise</code> \| <code>null</code>
Partially amend a Transaction

**Kind**: static method of [<code>Transactions</code>](#module_api.Transactions)  
**Returns**: <code>Promise</code> \| <code>null</code> - If no callback supplied, returns Promise that resolves with the amended Transaction instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.changes | <code>Transaction</code> | object of changes to apply to the Transaction |
| params.AMId | <code>number</code> | Asset Manager ID of the Transaction's owner |
| params.resourceId | <code>string</code> | Transaction ID |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is the amended Transaction instance. Omit to return Promise |

<a name="module_api.Transactions.search"></a>

#### Transactions.search(params, [callback]) ⇒ <code>Promise</code> \| <code>null</code>
Search Transactions

**Kind**: static method of [<code>Transactions</code>](#module_api.Transactions)  
**Returns**: <code>Promise</code> \| <code>null</code> - If no callback supplied, returns a Promise that resolves with an array of Transactions or a single Transaction instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters |
| [params.AMId] | <code>number</code> | Asset Manager ID of the Transactions to search over. If omitted you must pass assetManagerIds in the query |
| params.query | <code>object</code> | Search parameters of the form: { `key`: `value` | `[values]` }<br /> Available keys are: <li>clientIds</li> <li>transactionStatuses</li> <li>transactionIds</li> <li>assetBookIds</li> <li>counterpartyBookIds</li> <li>assetIds</li> <li>transactionDateStart</li> <li>transactionDateEnd</li> <li>codeTypes</li> <li>codeValues</li> <li>linkTypes</li> <li>linkedTransactionIds</li> <li>partyTypes</li> <li>partyIds</li> <li>referenceTypes</li> <li>referenceValues</li> e.g. `{ assetManagerIds: 1, bookIds: [1, 2, 3] }` |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is an array of Transactions or a single Transaction instance. Omit to return Promise |

<a name="module_api.Transactions.cancel"></a>

#### Transactions.cancel(params, [callback]) ⇒ <code>Promise</code> \| <code>null</code>
Cancel a Transaction

**Kind**: static method of [<code>Transactions</code>](#module_api.Transactions)  
**Returns**: <code>Promise</code> \| <code>null</code> - If no callback supplied, returns Promise that resolves with the cancelled Transaction instance. Note that this is the only time the API returns a Transaction instance where transactionStatus === 'Cancelled'  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>number</code> | Asset Manager ID of the Transaction's owner |
| params.resourceId | <code>string</code> | Transaction ID |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is the cancelled Transaction instance. Omit to return Promise |

<a name="module_assetManagers"></a>

## assetManagers
Classes for the AssetManagers service


* [assetManagers](#module_assetManagers)
    * [.AssetManager](#module_assetManagers.AssetManager) ⇐ [<code>AMaaSModel</code>](#module_core.AMaaSModel)
        * [new AssetManager(params)](#new_module_assetManagers.AssetManager_new)
    * [.Domain](#module_assetManagers.Domain) ⇐ [<code>AMaaSModel</code>](#module_core.AMaaSModel)
        * [new Domain(params)](#new_module_assetManagers.Domain_new)
    * [.EODBook](#module_assetManagers.EODBook) ⇐ [<code>AMaaSModel</code>](#module_core.AMaaSModel)
        * [new EODBook(params)](#new_module_assetManagers.EODBook_new)

<a name="module_assetManagers.AssetManager"></a>

### assetManagers.AssetManager ⇐ [<code>AMaaSModel</code>](#module_core.AMaaSModel)
Class representing an Asset Manager

**Kind**: static class of [<code>assetManagers</code>](#module_assetManagers)  
**Extends**: [<code>AMaaSModel</code>](#module_core.AMaaSModel)  
<a name="new_module_assetManagers.AssetManager_new"></a>

#### new AssetManager(params)
Construct a new Asset Manager Model


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | Asset Manager creation options: |
| [params.assetManagerId] | <code>number</code> | <code>generated server side</code> | Asset Manager's ID. Include to specifically set, if it does not already exist |
| params.assetManagerType | <code>string</code> |  | Type of Asset Manager (e.g. Hedge Fund). __(required)__<br /> Available types are: <li>Accredited Investor</li> <li>Bank</li> <li>Broker</li> <li>Corporate Treasury</li> <li>Family Office</li> <li>Fund Administrator</li> <li>Fund Manager</li> <li>Hedge Fund</li> <li>Private Equity</li> <li>Retail</li> <li>Venture Capital</li> |
| [params.assetManagerStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of Asset Manager |
| [params.accountType] | <code>string</code> | <code>&quot;Basic&quot;</code> | Account Type reflecting the support level for the Asset Manager |
| [params.clientId] | <code>string</code> |  | ID of the associated client |
| [params.partyId] | <code>string</code> | <code>&quot;&#x27;AMID&#x27;+assetManagerId&quot;</code> | ID of the Party that represents this Asset Manager. Defaults to e.g. AMID10 for assetManagerId 10 |
| [params.defaultBookOwnerId] | <code>string</code> | <code>&quot;assetManagerId&quot;</code> | Asset Manager ID of the default owner for any Books owned by this Asset Manager. Will be used if no `ownerId` is set on the Book. Defaults to e.g. 10 for assetManagerId 10 |
| [params.defaultTimezone] | <code>string</code> | <code>&quot;UTC&quot;</code> | Default timezone for any Books owned by this Asset Manager |
| [params.defaultBookCloseTime] | <code>string</code> | <code>&quot;18:00:00&quot;</code> | Default Book close time for any books owned by this Asset Manager ('HH:MM:SS') |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Asset Manager |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Asset Manager |
| [params.createdTime] | <code>date</code> |  | Time that the Asset Manager was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Asset Manager was updated |
| [params.version] | <code>number</code> |  | Version number of the Asset Manager |

<a name="module_assetManagers.Domain"></a>

### assetManagers.Domain ⇐ [<code>AMaaSModel</code>](#module_core.AMaaSModel)
Class representing a Domain

**Kind**: static class of [<code>assetManagers</code>](#module_assetManagers)  
**Extends**: [<code>AMaaSModel</code>](#module_core.AMaaSModel)  
<a name="new_module_assetManagers.Domain_new"></a>

#### new Domain(params)
Construct a new Domain instance


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | Domain creation options: |
| params.assetManagerId | <code>number</code> | AMID of the Domain object |
| params.domain | <code>string</code> | Domain itself without '@' (e.g. companyX.com) |
| params.isPrimary | <code>boolean</code> | Whether this Domain is primary for the given AMID |

<a name="module_assetManagers.EODBook"></a>

### assetManagers.EODBook ⇐ [<code>AMaaSModel</code>](#module_core.AMaaSModel)
Class representing an EOD Book

**Kind**: static class of [<code>assetManagers</code>](#module_assetManagers)  
**Extends**: [<code>AMaaSModel</code>](#module_core.AMaaSModel)  
<a name="new_module_assetManagers.EODBook_new"></a>

#### new EODBook(params)
Construct a new EODBoook Model


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | Asset Manager creation options: |
| [params.assetManagerId] | <code>number</code> | <code>generated server side</code> | Asset Manager's ID. Include to specifically set, if it does not already exist |
| [params.utcCloseTime] | <code>string</code> |  |  |
| [params.bookId] | <code>string</code> |  |  |
| [params.eodBookStatus] | <code>string</code> |  |  |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Asset Manager |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Asset Manager |
| [params.createdTime] | <code>date</code> |  | Time that the Asset Manager was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Asset Manager was updated |
| [params.version] | <code>number</code> |  | Version number of the Asset Manager |

<a name="module_assets"></a>

## assets
Classes for the Assets service


* [assets](#module_assets)
    * [.Asset](#module_assets.Asset) ⇐ [<code>AMaaSModel</code>](#module_core.AMaaSModel)
        * [new Asset(params)](#new_module_assets.Asset_new)
    * [.BondBase](#module_assets.BondBase) ⇐ [<code>Asset</code>](#module_assets.Asset)
        * [new BondBase(params)](#new_module_assets.BondBase_new)
    * [.BondCorporate](#module_assets.BondCorporate) ⇐ [<code>BondBase</code>](#module_assets.BondBase)
        * [new BondCorporate(params)](#new_module_assets.BondCorporate_new)
    * [.BondGovernment](#module_assets.BondGovernment) ⇐ [<code>BondBase</code>](#module_assets.BondBase)
        * [new BondGovernment(params)](#new_module_assets.BondGovernment_new)
    * [.BondMortgage](#module_assets.BondMortgage) ⇐ [<code>BondBase</code>](#module_assets.BondBase)
        * [new BondMortgage(params)](#new_module_assets.BondMortgage_new)
    * [.Currency](#module_assets.Currency) ⇐ [<code>Asset</code>](#module_assets.Asset)
        * [new Currency(params)](#new_module_assets.Currency_new)
    * [.CustomAsset](#module_assets.CustomAsset) ⇐ [<code>Asset</code>](#module_assets.Asset)
        * [new CustomAsset(params)](#new_module_assets.CustomAsset_new)
    * [.BondOption](#module_assets.BondOption) ⇐ [<code>Derivative</code>](#module_assets.Derivative)
        * [new BondOption(params)](#new_module_assets.BondOption_new)
    * [.ContractForDifference](#module_assets.ContractForDifference) ⇐ [<code>Derivative</code>](#module_assets.Derivative)
        * [new ContractForDifference(params)](#new_module_assets.ContractForDifference_new)
    * [.Derivative](#module_assets.Derivative) ⇐ [<code>Asset</code>](#module_assets.Asset)
        * [new Derivative(params)](#new_module_assets.Derivative_new)
    * [.ForeignExchangeOption](#module_assets.ForeignExchangeOption) ⇐ [<code>Derivative</code>](#module_assets.Derivative)
        * [new ForeignExchangeOption(params)](#new_module_assets.ForeignExchangeOption_new)
    * [.Equity](#module_assets.Equity) ⇐ [<code>Asset</code>](#module_assets.Asset)
        * [new Equity(params)](#new_module_assets.Equity_new)
    * [.ExchangeTradedFund](#module_assets.ExchangeTradedFund) ⇐ [<code>Fund</code>](#module_assets.Fund)
        * [new ExchangeTradedFund(params)](#new_module_assets.ExchangeTradedFund_new)
    * [.Fund](#module_assets.Fund) ⇐ [<code>Asset</code>](#module_assets.Asset)
        * [new Fund(params)](#new_module_assets.Fund_new)
    * [.ForeignExchange](#module_assets.ForeignExchange) ⇐ [<code>ForeignExchangeBase</code>](#module_assets.ForeignExchangeBase)
        * [new ForeignExchange(params)](#new_module_assets.ForeignExchange_new)
    * [.ForeignExchangeForward](#module_assets.ForeignExchangeForward) ⇐ [<code>ForeignExchangeBase</code>](#module_assets.ForeignExchangeBase)
        * [new ForeignExchangeForward(params)](#new_module_assets.ForeignExchangeForward_new)
    * [.ForeignExchangeBase](#module_assets.ForeignExchangeBase) ⇐ [<code>Asset</code>](#module_assets.Asset)
        * [new ForeignExchangeBase(params)](#new_module_assets.ForeignExchangeBase_new)
    * [.Index](#module_assets.Index) ⇐ [<code>Asset</code>](#module_assets.Asset)
        * [new Index(params)](#new_module_assets.Index_new)
    * [.BondFuture](#module_assets.BondFuture) ⇐ [<code>Future</code>](#module_assets.Future)
        * [new BondFuture(params)](#new_module_assets.BondFuture_new)
    * [.BondFutureOption](#module_assets.BondFutureOption) ⇐ [<code>Future</code>](#module_assets.Future)
        * [new BondFutureOption(params)](#new_module_assets.BondFutureOption_new)
    * [.CommodityFuture](#module_assets.CommodityFuture) ⇐ <code>module:ListDerivatives.Future</code>
        * [new CommodityFuture(params)](#new_module_assets.CommodityFuture_new)
    * [.EnergyFuture](#module_assets.EnergyFuture) ⇐ [<code>Future</code>](#module_assets.Future)
        * [new EnergyFuture(params)](#new_module_assets.EnergyFuture_new)
    * [.EquityFuture](#module_assets.EquityFuture) ⇐ [<code>ListedDerivative</code>](#module_assets.ListedDerivative)
        * [new EquityFuture(params)](#new_module_assets.EquityFuture_new)
    * [.ForeignExchangeFuture](#module_assets.ForeignExchangeFuture) ⇐ <code>module:ListDerivatives.Future</code>
        * [new ForeignExchangeFuture(params)](#new_module_assets.ForeignExchangeFuture_new)
    * [.Future](#module_assets.Future) ⇐ [<code>ListedDerivative</code>](#module_assets.ListedDerivative)
        * [new Future(params)](#new_module_assets.Future_new)
    * [.FutureOption](#module_assets.FutureOption) ⇐ [<code>Future</code>](#module_assets.Future)
        * [new FutureOption(params)](#new_module_assets.FutureOption_new)
    * [.IndexFuture](#module_assets.IndexFuture) ⇐ [<code>Future</code>](#module_assets.Future)
        * [new IndexFuture(params)](#new_module_assets.IndexFuture_new)
    * [.InterestRateFuture](#module_assets.InterestRateFuture) ⇐ [<code>Future</code>](#module_assets.Future)
        * [new InterestRateFuture(params)](#new_module_assets.InterestRateFuture_new)
    * [.ListedContractForDifference](#module_assets.ListedContractForDifference) ⇐ [<code>ListedDerivative</code>](#module_assets.ListedDerivative)
        * [new ListedContractForDifference(params)](#new_module_assets.ListedContractForDifference_new)
    * [.ListedDerivative](#module_assets.ListedDerivative) ⇐ [<code>Asset</code>](#module_assets.Asset)
        * [new ListedDerivative(params)](#new_module_assets.ListedDerivative_new)
    * [.PrivateInvestment](#module_assets.PrivateInvestment) ⇐ [<code>Asset</code>](#module_assets.Asset)
        * [new PrivateInvestment(params)](#new_module_assets.PrivateInvestment_new)
    * [.RealAsset](#module_assets.RealAsset) ⇐ [<code>Asset</code>](#module_assets.Asset)
        * [new RealAsset(params)](#new_module_assets.RealAsset_new)
    * [.RealEstate](#module_assets.RealEstate) ⇐ [<code>RealAsset</code>](#module_assets.RealAsset)
        * [new RealEstate(params)](#new_module_assets.RealEstate_new)
    * [.Wine](#module_assets.Wine) ⇐ [<code>RealAsset</code>](#module_assets.RealAsset)
        * [new Wine(params)](#new_module_assets.Wine_new)
    * [.Sukuk](#module_assets.Sukuk) ⇐ [<code>Asset</code>](#module_assets.Asset)
        * [new Sukuk(params)](#new_module_assets.Sukuk_new)
    * [.Synthetic](#module_assets.Synthetic) ⇐ [<code>Asset</code>](#module_assets.Asset)
        * [new Synthetic(params)](#new_module_assets.Synthetic_new)
    * [.SyntheticFromBook](#module_assets.SyntheticFromBook) ⇐ [<code>Synthetic</code>](#module_assets.Synthetic)
        * [new SyntheticFromBook(params)](#new_module_assets.SyntheticFromBook_new)
    * [.SyntheticMultiLeg](#module_assets.SyntheticMultiLeg) ⇐ [<code>Synthetic</code>](#module_assets.Synthetic)
        * [new SyntheticMultiLeg(params)](#new_module_assets.SyntheticMultiLeg_new)

<a name="module_assets.Asset"></a>

### assets.Asset ⇐ [<code>AMaaSModel</code>](#module_core.AMaaSModel)
Class representing an Asset

**Kind**: static class of [<code>assets</code>](#module_assets)  
**Extends**: [<code>AMaaSModel</code>](#module_core.AMaaSModel)  
<a name="new_module_assets.Asset_new"></a>

#### new Asset(params)
Construct a new Asset instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | Asset creation options: |
| params.assetManagerId | <code>number</code> |  | ID of Asset's Asset Manager __(required)__ |
| params.assetId | <code>number</code> |  | ID of the Asset __(required)__ |
| [params.assetClass] | <code>string</code> | <code>&quot;Asset&quot;</code> | Class of the Asset |
| [params.assetType] | <code>string</code> |  | Type of the Asset. Auto-set based on the class or subclass constructor |
| [params.assetTypeDisplay] | <code>string</code> |  | Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`) |
| params.fungible | <code>boolean</code> |  | Whether this Asset is fungible __(required)__ |
| [params.assetIssuerId] | <code>string</code> |  | ID of the Asset issuer |
| [params.assetStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Asset |
| [params.countryId] | <code>string</code> |  | ID of Asset's country |
| [params.venueId] | <code>string</code> |  | ID of Asset's venue if applicable |
| [params.currency] | <code>string</code> |  | Asset currency (e.g. USD, SGD) |
| [params.issueDate] | <code>string</code> | <code>&quot;0001-01-01&quot;</code> | Issue date if applicable (YYYY-MM-DD) |
| [params.description] | <code>string</code> |  | Description of the Asset |
| [params.displayName] | <code>string</code> |  | Display name of the Asset |
| [params.rollPrice] | <code>boolean</code> | <code>true</code> | Whether to roll the price for the Asset |
| [params.clientId] | <code>string</code> |  | ID of the associated client |
| [params.comments] | <code>object</code> |  | Object of Comments attached to the Asset |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the Asset |
| [params.references] | <code>object</code> | <code>{}</code> | Object of References associated with this Asset. * The AMaaS Reference is auto-created and populated |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Asset |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Asset |
| [params.createdTime] | <code>date</code> |  | Time that the Asset was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Asset was updated |
| [params.version] | <code>number</code> |  | Version number |

<a name="module_assets.BondBase"></a>

### assets.BondBase ⇐ [<code>Asset</code>](#module_assets.Asset)
Class representing a Base Bond

**Kind**: static class of [<code>assets</code>](#module_assets)  
**Extends**: [<code>Asset</code>](#module_assets.Asset)  
<a name="new_module_assets.BondBase_new"></a>

#### new BondBase(params)
Construct new Bond instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | BondBase creation options: |
| params.assetManagerId | <code>string</code> |  | ID of Bond's Asset Manager __(required)__ |
| params.assetId | <code>string</code> |  | ID of the Bond __(required)__ |
| [params.assetClass] | <code>string</code> | <code>&quot;Bond&quot;</code> | Auto-set to `Bond` __(read-only)__ |
| [params.assetType] | <code>string</code> |  | Type of the Asset. Auto-set based on the class or subclass constructor |
| [params.assetTypeDisplay] | <code>string</code> |  | Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`) |
| [params.fungible] | <code>boolean</code> | <code>true</code> | Auto-set `true` for Bonds __(read-only)__ |
| [params.assetIssuerId] | <code>string</code> |  | ID of the Bond Issuer |
| [params.assetStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Bond |
| [params.countryId] | <code>string</code> |  | ID of the Bond's country |
| [params.venueId] | <code>string</code> |  | ID of the Bond's venue if applicable |
| [params.currency] | <code>string</code> |  | Bond currency (e.g. USD, SGD) |
| [params.issueDate] | <code>string</code> | <code>&quot;0001-01-01&quot;</code> | Bond issue date (YYYY-MM-DD) |
| [params.maturityDate] | <code>string</code> | <code>&quot;9999-12-31&quot;</code> | Bond maturity date (YYYY-MM-DD) |
| [params.description] | <code>string</code> |  | Description of the Bond |
| [params.displayName] | <code>string</code> |  | Display name of the Bond |
| [params.rollPrice] | <code>boolean</code> | <code>true</code> | Whether to roll the price for the Bond |
| [params.clientId] | <code>string</code> |  | ID of the associated client |
| params.coupon | <code>number</code> |  | The Bond's coupon represented as a fraction of 1 i.e. 0.05 = 5%. Stored as a Decimal instance __(required)__ |
| params.par | <code>number</code> |  | The Bond's par value. Stored as a Decimal instance __(required)__ |
| params.payFrequency | <code>string</code> |  | Frequency of the coupon payment __(required)__ |
| [params.defaulted] | <code>boolean</code> | <code>false</code> | Whether the issuer has defaulted |
| [params.comments] | <code>object</code> |  | Object of Comments attached to the Bond |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the Bond |
| [params.references] | <code>object</code> | <code>{ AMaaS: Reference() }</code> | Object of References attached to the Bond. * The AMaaS Reference is auto-created and populated |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Bond |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Bond |
| [params.createdTime] | <code>date</code> |  | Time that the Bond was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Bond was updated |
| [params.version] | <code>number</code> |  | Version number of the Bond |

<a name="module_assets.BondCorporate"></a>

### assets.BondCorporate ⇐ [<code>BondBase</code>](#module_assets.BondBase)
Class representing a Corporate Bond

**Kind**: static class of [<code>assets</code>](#module_assets)  
**Extends**: [<code>BondBase</code>](#module_assets.BondBase)  
<a name="new_module_assets.BondCorporate_new"></a>

#### new BondCorporate(params)
Construct new Corporate Bond instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | BondCorporate creation options: |
| params.assetManagerId | <code>string</code> |  | ID of Bond's Asset Manager __(required)__ |
| params.assetId | <code>string</code> |  | ID of the Bond __(required)__ |
| [params.assetClass] | <code>string</code> | <code>&quot;Bond&quot;</code> | Auto-set to `Bond` __(read-only)__ |
| [params.assetType] | <code>string</code> |  | Type of the Bond. Auto-set based on the class or subclass constructor |
| [params.assetTypeDisplay] | <code>string</code> |  | Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`) |
| [params.fungible] | <code>boolean</code> | <code>true</code> | Auto-set `true` for Bonds __(read-only)__ |
| [params.assetIssuerId] | <code>string</code> |  | ID of the Bond Issuer |
| [params.assetStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Bond |
| [params.countryId] | <code>string</code> |  | ID of the Bond's origin country |
| [params.venueId] | <code>string</code> |  | ID of the Bond's venue |
| [params.currency] | <code>string</code> |  | Currency denomination of the Bond |
| [params.issueDate] | <code>string</code> | <code>&quot;0001-01-01&quot;</code> | Bond issue date (YYYY-MM-DD) |
| [params.maturityDate] | <code>string</code> | <code>&quot;9999-12-31&quot;</code> | Bond maturity date (YYYY-MM-DD) |
| [params.description] | <code>string</code> |  | Description of the Bond |
| [params.displayName] | <code>string</code> |  | Display name of the Bond |
| [params.rollPrice] | <code>boolean</code> | <code>true</code> | Whether to roll the price for the Bond |
| [params.clientId] | <code>string</code> |  | ID of the associated client |
| params.coupon | <code>number</code> |  | The Bond's coupon represented as a fraction of 1 i.e. 0.05 = 5%. Stored as a Decimal instance __(required)__ |
| params.par | <code>number</code> |  | The Bond's par value. Stored as a Decimal instance __(required)__ |
| params.payFrequency | <code>string</code> |  | Frequency of the coupon payment __(required)__ |
| [params.defaulted] | <code>boolean</code> | <code>false</code> | Whether the issuer has defaulted |
| [params.comments] | <code>object</code> |  | Object of Comments attached to the Bond |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the Bond |
| [params.references] | <code>object</code> | <code>{ AMaaS: Reference() }</code> | Object of References attached to the Bond. * The AMaaS Reference is auto-created and populated |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Bond |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Bond |
| [params.createdTime] | <code>date</code> |  | Time that the Bond was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Bond was updated |
| [params.version] | <code>number</code> |  | Version number of the Bond |

<a name="module_assets.BondGovernment"></a>

### assets.BondGovernment ⇐ [<code>BondBase</code>](#module_assets.BondBase)
Class representing a Government Bond

**Kind**: static class of [<code>assets</code>](#module_assets)  
**Extends**: [<code>BondBase</code>](#module_assets.BondBase)  
<a name="new_module_assets.BondGovernment_new"></a>

#### new BondGovernment(params)
Construct new Government Bond instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | BondGovernment creation options: |
| params.assetManagerId | <code>string</code> |  | ID of Bond's Asset Manager __(required)__ |
| params.assetId | <code>string</code> |  | ID of the Bond __(required)__ |
| [params.assetClass] | <code>string</code> | <code>&quot;Bond&quot;</code> | Auto-set to `Bond` __(read-only)__ |
| [params.assetType] | <code>string</code> |  | Type of the Bond. Auto-set based on the class or subclass constructor |
| [params.assetTypeDisplay] | <code>string</code> |  | Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`) |
| [params.fungible] | <code>boolean</code> | <code>true</code> | Auto-set `true` for Bonds __(read-only)__ |
| [params.assetIssuerId] | <code>string</code> |  | ID of the Bond Issuer |
| [params.assetStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Bond |
| [params.countryId] | <code>string</code> |  | ID of the Bond's country |
| [params.venueId] | <code>string</code> |  | ID of the Bond's venue |
| [params.currency] | <code>string</code> |  | Bond currency (e.g. USD, SGD) |
| [params.issueDate] | <code>string</code> | <code>&quot;0001-01-01&quot;</code> | Bond issue date (YYYY-MM-DD) |
| [params.maturityDate] | <code>string</code> | <code>&quot;9999-12-31&quot;</code> | Bond maturity date (YYYY-MM-DD) |
| [params.description] | <code>string</code> |  | Description of the Bond |
| [params.displayName] | <code>string</code> |  | Display name of the Bond |
| [params.rollPrice] | <code>boolean</code> | <code>true</code> | Whether to roll the price for the Bond |
| [params.clientId] | <code>string</code> |  | ID of the associated client |
| params.coupon | <code>number</code> |  | The Bond's coupon represented as a fraction of 1 i.e. 0.05 = 5%. Stored as a Decimal instance __(required)__ |
| params.par | <code>number</code> |  | The Bond's par value. Stored as a Decimal instance __(required)__ |
| params.payFrequency | <code>string</code> |  | Frequency of coupon payment __(required)__ |
| [params.defaulted] | <code>boolean</code> | <code>false</code> | Whether the issuer has defaulted |
| [params.comments] | <code>object</code> |  | Object of Comments attached to the Bond |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the Bond |
| [params.references] | <code>object</code> | <code>{ AMaaS: Reference() }</code> | Object of References attached to the Bond. * The AMaaS Reference is auto-created and populated |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Bond |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Bond |
| [params.createdTime] | <code>date</code> |  | Time that the Bond was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Bond was updated |
| [params.version] | <code>number</code> |  | Version number of the Bond |

<a name="module_assets.BondMortgage"></a>

### assets.BondMortgage ⇐ [<code>BondBase</code>](#module_assets.BondBase)
Class representing a Mortgage Bond

**Kind**: static class of [<code>assets</code>](#module_assets)  
**Extends**: [<code>BondBase</code>](#module_assets.BondBase)  
<a name="new_module_assets.BondMortgage_new"></a>

#### new BondMortgage(params)
Construct new Mortgage Bond instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | BondMortgage creation options: |
| params.assetManagerId | <code>string</code> |  | ID of Bond's Asset Manager __(required)__ |
| params.assetId | <code>string</code> |  | ID of the Bond __(required)__ |
| [params.assetClass] | <code>string</code> | <code>&quot;Bond&quot;</code> | Auto-set to `Bond` __(read-only)__ |
| [params.assetType] | <code>string</code> |  | Type of the Bond. Auto-set based on the class or subclass constructor |
| [params.assetTypeDisplay] | <code>string</code> |  | Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`) |
| [params.fungible] | <code>boolean</code> | <code>true</code> | Auto-set `true` for Bonds __(read-only)__ |
| [params.assetIssuerId] | <code>string</code> |  | ID of the Bond Issuer |
| [params.assetStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Bond |
| [params.countryId] | <code>string</code> |  | ID of the Bond's country |
| [params.venueId] | <code>string</code> |  | ID of the Bond's venue |
| [params.currency] | <code>string</code> |  | Bond Currency (e.g. USD, SGD) |
| [params.issueDate] | <code>string</code> | <code>&quot;0001-01-01&quot;</code> | Bond issue date (YYYY-MM-DD) |
| [params.maturityDate] | <code>string</code> | <code>&quot;9999-12-31&quot;</code> | Bond maturity date (YYYY-MM-DD) |
| [params.description] | <code>string</code> |  | Description of the Bond |
| [params.displayName] | <code>string</code> |  | Display name of the Bond |
| [params.rollPrice] | <code>boolean</code> | <code>true</code> | Whether to roll the price for the Bond |
| [params.clientId] | <code>string</code> |  | ID of the associated client |
| params.coupon | <code>number</code> |  | The Bond's coupon represented as a fraction of 1 i.e. 0.05 = 5%. Stored as a Decimal instance __(required)__ |
| params.par | <code>number</code> |  | The Bond's par value. Stored as a Decimal instance __(required)__ |
| params.payFrequency | <code>string</code> |  | Frequency of the coupon payment __(required)__ |
| [params.defaulted] | <code>boolean</code> | <code>false</code> | Whether the issuer has defaulted |
| [params.comments] | <code>object</code> |  | Object of Comments attached to the Bond |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the Bond |
| [params.references] | <code>object</code> | <code>{ AMaaS: Reference() }</code> | Object of References attached to the Bond |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Bond |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Bond |
| [params.createdTime] | <code>date</code> |  | Time that the Bond was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Bond was updated |
| [params.version] | <code>number</code> |  | Version number of the Bond |

<a name="module_assets.Currency"></a>

### assets.Currency ⇐ [<code>Asset</code>](#module_assets.Asset)
Class representing an Currency

**Kind**: static class of [<code>assets</code>](#module_assets)  
**Extends**: [<code>Asset</code>](#module_assets.Asset)  
<a name="new_module_assets.Currency_new"></a>

#### new Currency(params)
Construct a new Currency instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | Currency creation options: |
| params.assetManagerId | <code>number</code> |  | ID of Currency's Asset Manager __(required)__ |
| params.assetId | <code>number</code> |  | ID of the Currency __(required)__ |
| [params.assetClass] | <code>string</code> | <code>&quot;Currency&quot;</code> | Auto-set to `Currency` __(read-only)__ |
| [params.assetType] | <code>string</code> |  | Type of the Currency. Auto-set based on the class or subclass constructor |
| [params.assetTypeDisplay] | <code>string</code> |  | Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`) |
| [params.fungible] | <code>boolean</code> | <code>true</code> | Auto-set to `true` for Currency |
| [params.assetIssuerId] | <code>string</code> |  | ID of the Currency issuer |
| [params.assetStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Currency |
| [params.countryId] | <code>string</code> |  | ID of Currency's country |
| [params.venueId] | <code>string</code> |  | ID of Currency's venue if applicable |
| [params.currency] | <code>string</code> |  | Auto-set to 'assetId' __(read-only)__ |
| [params.description] | <code>string</code> |  | Description of the Currency |
| [params.displayName] | <code>string</code> |  | Display name of the Currency |
| [params.clientId] | <code>string</code> |  | ID of associated client |
| [params.deliverable] | <code>boolean</code> | <code>true</code> | Whether the Currency is deliverable |
| [params.minorUnitPlaces] | <code>number</code> |  | Decimal precision of Currency (e.g. 4 for JPY, 2 for USD) |
| [params.comments] | <code>object</code> |  | Object of Comments attached to the Currency |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the Currency |
| [params.references] | <code>object</code> | <code>{ AMaaS: Reference() }</code> | Object of References attached to the Currency. * The AMaaS Reference is auto-created and populated |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Asset |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Asset |
| [params.createdTime] | <code>date</code> |  | Time that the Asset was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Asset was updated |
| [params.version] | <code>number</code> |  | Version number of the Asset |

<a name="module_assets.CustomAsset"></a>

### assets.CustomAsset ⇐ [<code>Asset</code>](#module_assets.Asset)
Class representing an Custom Asset

**Kind**: static class of [<code>assets</code>](#module_assets)  
**Extends**: [<code>Asset</code>](#module_assets.Asset)  
<a name="new_module_assets.CustomAsset_new"></a>

#### new CustomAsset(params)
Construct a new Custom Asset instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | CustomAsset creation options: |
| params.assetManagerId | <code>integer</code> |  | ID of Asset's Asset Manager __(required)__ |
| params.assetId | <code>number</code> |  | ID of the Asset __(required)__ |
| [params.assetClass] | <code>string</code> | <code>&quot;Asset&quot;</code> | Auto-set to `Asset` __(read-only)__ |
| [params.assetType] | <code>string</code> |  | Type of the Asset. Auto-set based on the class or subclass constructor |
| [params.assetTypeDisplay] | <code>string</code> |  | Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`) |
| params.fungible | <code>boolean</code> |  | Whether this Asset is fungible __(required)__ |
| [params.assetIssuerId] | <code>string</code> |  | ID of the Asset issuer |
| [params.assetStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Asset |
| [params.countryId] | <code>string</code> |  | ID of Asset's country |
| [params.venueId] | <code>string</code> |  | ID of Asset's venue if applicable |
| [params.currency] | <code>string</code> |  | Asset currency (e.g. USD, SGD) |
| [params.issueDate] | <code>string</code> | <code>&quot;0001-01-01&quot;</code> | Issue date if applicable (YYYY-MM-DD) |
| [params.maturityDate] | <code>string</code> | <code>&quot;9999-12-31&quot;</code> | Maturity date if applicable (YYYY-MM-DD) |
| [params.description] | <code>string</code> |  | Description of the Asset |
| [params.displayName] | <code>string</code> |  | Display name of the Asset |
| [params.rollPrice] | <code>boolean</code> |  | Whether to roll the price for the Asset |
| [params.clientId] | <code>string</code> |  | ID of the associated client |
| [params.comments] | <code>object</code> |  | Object of Comments attached to the Asset |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the Asset |
| [params.references] | <code>object</code> | <code>{ AMaaS: Reference() }</code> | Object of References associated with this Asset. * The AMaaS Reference is auto-created and populated |
| [params.clientAdditional] | <code>object</code> |  | Object of custom properties for creating a Custom Asset (e.g. { size: 'Large', Flavour: 'Lime' }) |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Asset |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Asset |
| [params.createdTime] | <code>date</code> |  | Time that the Asset was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Asset was updated |
| [params.version] | <code>number</code> |  | Version number |

<a name="module_assets.BondOption"></a>

### assets.BondOption ⇐ [<code>Derivative</code>](#module_assets.Derivative)
Class representing an Bond Option

**Kind**: static class of [<code>assets</code>](#module_assets)  
**Extends**: [<code>Derivative</code>](#module_assets.Derivative)  
<a name="new_module_assets.BondOption_new"></a>

#### new BondOption(params)
Construct a new Bond Option instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | BondOption creation options |
| params.assetManagerId | <code>number</code> |  | ID of Bond Option's Asset Manager __(required)__ |
| params.assetId | <code>number</code> |  | ID of the Bond Option __(required)__ |
| [params.assetClass] | <code>string</code> | <code>&quot;Derivative&quot;</code> | Auto-set to `Derivative` __(read-only)__ |
| [params.assetType] | <code>string</code> |  | Type of the Bond Option. Auto-set based on the class or subclass constructor |
| [params.assetTypeDisplay] | <code>string</code> |  | Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`) |
| [params.fungible] | <code>boolean</code> | <code>false</code> | Auto-set to `false` for Derivative and subclasses |
| [params.assetIssuerId] | <code>string</code> |  | ID of the Bond Option's issuer |
| [params.assetStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Bond Option |
| [params.countryId] | <code>string</code> |  | ID of Bond Option's country |
| [params.venueId] | <code>string</code> |  | ID of Bond Option's venue if applicable |
| [params.currency] | <code>string</code> |  | Bond Option currency (e.g. USD, SGD) |
| [params.issueDate] | <code>string</code> | <code>&quot;0001-01-01&quot;</code> | Issue date (YYYY-MM-DD) |
| [params.expiryDate] | <code>string</code> | <code>&quot;9999-12-31&quot;</code> | Expiry date (YYYY-MM-DD) |
| [params.description] | <code>string</code> |  | Description of the Bond Option |
| [params.displayName] | <code>string</code> |  | Display name of the Bond Option |
| [params.clientId] | <code>string</code> |  | ID of the associated client |
| params.optionStyle | <code>string</code> |  | Option style __(required)__<br /> Available options: <li>American</li> <li>Bermudan</li> <li>European</li> |
| params.optionType | <code>string</code> |  | Option type __(required)__<br /> Available options: <li>Put</li> <li>Call</li> |
| params.strike | <code>number</code> |  | Strike price of the Bond Option. Stored as a Decimal instance __(required)__ |
| params.underlyingAssetId | <code>string</code> |  | ID of the underlying Asset __(required)__ |
| [params.comments] | <code>object</code> |  | Object of Comments attached to the Bond Option |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the Bond Option |
| [params.references] | <code>object</code> | <code>{ AMaaS: Reference() }</code> | Object of References associated with the Bond Option. * The AMaaS Reference is auto-created and populated |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Bond Option |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Bond Option |
| [params.createdTime] | <code>date</code> |  | Time that the Bond Option was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Bond Option was updated |
| [params.version] | <code>number</code> |  | Version number of the Bond Option |

<a name="module_assets.ContractForDifference"></a>

### assets.ContractForDifference ⇐ [<code>Derivative</code>](#module_assets.Derivative)
Class representing a CFD

**Kind**: static class of [<code>assets</code>](#module_assets)  
**Extends**: [<code>Derivative</code>](#module_assets.Derivative)  
<a name="new_module_assets.ContractForDifference_new"></a>

#### new ContractForDifference(params)
Construct a new CFD instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | CFD creation options: |
| params.assetManagerId | <code>number</code> |  | ID of Asset's Asset Manager __(required)__ |
| params.assetId | <code>number</code> |  | ID of the Asset __(required)__ |
| [params.assetClass] | <code>string</code> | <code>&quot;Derivative&quot;</code> | Auto-set to `Derivative` __(read-only)__ |
| [params.assetType] | <code>string</code> |  | Type of the CFD. Auto-set based on the class or subclass constructor |
| [params.assetTypeDisplay] | <code>string</code> |  | Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`) |
| [params.fungible] | <code>boolean</code> | <code>false</code> | Auto-set to `false` for Derivative and its subclasses __(read-only)__ |
| [params.assetIssuerId] | <code>string</code> |  | ID of the CFD issuer |
| [params.assetStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the CFD |
| [params.countryId] | <code>string</code> |  | ID of CFD's country |
| [params.venueId] | <code>string</code> |  | ID of CFD's venue |
| [params.currency] | <code>string</code> |  | CFD currency (e.g. USD, SGD) |
| [params.issueDate] | <code>string</code> |  | Issue date if applicable (YYYY-MM-DD) |
| [params.description] | <code>string</code> |  | Description of the CFD |
| [params.displayName] | <code>string</code> |  | Display name of the CFD |
| [params.clientId] | <code>string</code> |  | ID of the associated client |
| [params.comments] | <code>object</code> |  | Object of Comments attached to the CFD |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the CFD |
| [params.references] | <code>object</code> | <code>{ AMaaS: Reference() }</code> | Object of References associated with the CFD. * The AMaaS Reference is auto-created and populated |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the CFD |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the CFD |
| [params.createdTime] | <code>date</code> |  | Time that the CFD was created |
| [params.updatedTime] | <code>date</code> |  | Time that the CFD was updated |
| [params.version] | <code>number</code> |  | Version number of the CFD |

<a name="module_assets.Derivative"></a>

### assets.Derivative ⇐ [<code>Asset</code>](#module_assets.Asset)
Class representing an Derivative

**Kind**: static class of [<code>assets</code>](#module_assets)  
**Extends**: [<code>Asset</code>](#module_assets.Asset)  
<a name="new_module_assets.Derivative_new"></a>

#### new Derivative(params)
Construct a new Derivative instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | Derivative creation options: |
| params.assetManagerId | <code>integer</code> |  | ID of Derivative's Asset Manager __(required)__ |
| params.assetId | <code>number</code> |  | ID of the Derivative __(required)__ |
| [params.assetClass] | <code>string</code> | <code>&quot;Derivative&quot;</code> | Class of the Derivative (a subclass of Derivative may define its own assetClass) |
| [params.assetType] | <code>string</code> |  | Type of the Derivative. Auto-set based on the class or subclass constructor |
| [params.assetTypeDisplay] | <code>string</code> |  | Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`) |
| [params.fungible] | <code>boolean</code> | <code>false</code> | Auto-set to `false` for Derivative __(read-only)__ |
| [params.assetIssuerId] | <code>string</code> |  | ID of the Derivative's issuer |
| [params.assetStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Derivative |
| [params.countryId] | <code>string</code> |  | ID of Derivative's country |
| [params.venueId] | <code>string</code> |  | ID of Derivative's venue if applicable |
| params.currency | <code>string</code> |  | Derivative currency (e.g. USD, SGD) |
| [params.issueDate] | <code>string</code> | <code>&quot;0001-01-01&quot;</code> | Issue date if applicable (YYYY-MM-DD) |
| [params.description] | <code>string</code> |  | Description of the Derivative |
| [params.displayName] | <code>string</code> |  | Display name of the Derivative |
| [params.rollPrice] | <code>boolean</code> | <code>false</code> | Auto-set to `false` __(read-only)__ |
| [params.clientId] | <code>string</code> |  | ID of the associated client |
| [params.comments] | <code>object</code> |  | Object of Comments attached to the Derivative |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the Derivative |
| [params.references] | <code>object</code> | <code>{ AMaaS: Reference() }</code> | Object of References associated with the Derivative. * The AMaaS Reference is auto-created and populated |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Derivative |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Derivative |
| [params.createdTime] | <code>date</code> |  | Time that the Derivative was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Derivative was updated |
| [params.version] | <code>number</code> |  | Version number of the Derivative |

<a name="module_assets.ForeignExchangeOption"></a>

### assets.ForeignExchangeOption ⇐ [<code>Derivative</code>](#module_assets.Derivative)
Class representing an FX Option

**Kind**: static class of [<code>assets</code>](#module_assets)  
**Extends**: [<code>Derivative</code>](#module_assets.Derivative)  
<a name="new_module_assets.ForeignExchangeOption_new"></a>

#### new ForeignExchangeOption(params)
Construct a new FX Option instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | ForeignExchangeOption creation options: |
| params.assetManagerId | <code>number</code> |  | ID of FX Option's Asset Manager __(required)__ |
| params.assetId | <code>number</code> |  | ID of the Asset __(required)__ |
| [params.assetClass] | <code>string</code> | <code>&quot;ForeignExchange&quot;</code> | Auto-set to `ForeignExchange` __(read-only)__ |
| [params.assetType] | <code>string</code> |  | Type of the FX Option. Auto-set based on the class or subclass constructor |
| [params.assetTypeDisplay] | <code>string</code> |  | Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`) |
| [params.fungible] | <code>boolean</code> | <code>false</code> | Auto-set to `false` __(read-only)__ |
| [params.assetIssuerId] | <code>string</code> |  | ID of the FX Option's issuer |
| [params.assetStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the FX Option |
| [params.countryId] | <code>string</code> |  | ID of FX Option's country |
| [params.venueId] | <code>string</code> |  | ID of FX Option's venue if applicable |
| [params.currency] | <code>string</code> |  | FX Option currency (e.g. USD, SGD) |
| [params.issueDate] | <code>string</code> |  | Issue date (YYYY-MM-DD) |
| [params.expiryDate] | <code>string</code> |  | Expiry date (YYYY-MM-DD) |
| [params.description] | <code>string</code> |  | Description of the FX Option |
| [params.displayName] | <code>string</code> |  | Display name of the FX Option |
| [params.clientId] | <code>string</code> |  | ID of the client to which the FX Option belongs |
| params.optionStyle | <code>string</code> |  | FX Option style __(required)__<br /> Available options: <li>American</li> <li>Bermudan</li> <li>European</li> |
| params.optionType | <code>string</code> |  | FX Option type __(required)__<br /> Available options: <li>Put</li> <li>Call</li> |
| params.strike | <code>number</code> |  | Strike price of the FX Option __(required)__ |
| params.underlyingAssetId | <code>string</code> |  | ID of the underlying Asset __(required)__ |
| [params.comments] | <code>object</code> |  | Object of Comments attached to the FX Option |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the FX Option |
| [params.references] | <code>object</code> | <code>{ AMaaS: Reference() }</code> | Object of References associated with the FX Option. * The AMaaS Reference is auto-created and populated |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the FX Option |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the FX Option |
| [params.createdTime] | <code>date</code> |  | Time that the FX Option was created |
| [params.updatedTime] | <code>date</code> |  | Time that the FX Option was updated |
| [params.version] | <code>number</code> |  | Version number |

<a name="module_assets.Equity"></a>

### assets.Equity ⇐ [<code>Asset</code>](#module_assets.Asset)
Class representing an Equity

**Kind**: static class of [<code>assets</code>](#module_assets)  
**Extends**: [<code>Asset</code>](#module_assets.Asset)  
<a name="new_module_assets.Equity_new"></a>

#### new Equity(params)
Construct a new Equity instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | Equity creation options: |
| params.assetManagerId | <code>number</code> |  | ID of Equity's Asset Manager __(required)__ |
| params.assetId | <code>number</code> |  | ID of the Equity __(required)__ |
| [params.assetClass] | <code>string</code> | <code>&quot;Equity&quot;</code> | Class of the Equity (a subclass of Equity may define its own assetClass) |
| [params.assetType] | <code>string</code> |  | Type of the Equity. Auto-set based on the class or subclass constructor |
| [params.assetTypeDisplay] | <code>string</code> |  | Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`) |
| [params.fungible] | <code>boolean</code> | <code>true</code> | Auto-set to `true` for Equity __(read-only)__ |
| [params.assetIssuerId] | <code>string</code> |  | ID of the Equity's issuer |
| [params.assetStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Equity |
| [params.countryId] | <code>string</code> |  | ID of Equity's country |
| [params.venueId] | <code>string</code> |  | ID of Equity's venue if applicable |
| [params.currency] | <code>string</code> |  | Equity currency (e.g. USD, SGD) |
| [params.issueDate] | <code>string</code> |  | Issue date if applicable (YYYY-MM-DD) |
| [params.description] | <code>string</code> |  | Description of the Equity |
| [params.displayName] | <code>string</code> |  | Display name of the Equity |
| [params.rollPrice] | <code>boolean</code> | <code>true</code> | Whether to roll the price for the Equity |
| [params.clientId] | <code>string</code> |  | ID of the associated client |
| [params.shareClass] | <code>string</code> | <code>&quot;Common&quot;</code> | Share Class |
| [params.comments] | <code>object</code> |  | Object of Comments attached to the Equity |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the Equity |
| [params.references] | <code>object</code> | <code>{ AMaaS: Reference() }</code> | Object of References associated with the Equity. * The AMaaS Reference is auto-created and populated |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Equity |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Equity |
| [params.createdTime] | <code>date</code> |  | Time that the Equity was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Equity was updated |
| [params.version] | <code>number</code> |  | Version number of the Equity |

<a name="module_assets.ExchangeTradedFund"></a>

### assets.ExchangeTradedFund ⇐ [<code>Fund</code>](#module_assets.Fund)
Class representing an ETF

**Kind**: static class of [<code>assets</code>](#module_assets)  
**Extends**: [<code>Fund</code>](#module_assets.Fund)  
<a name="new_module_assets.ExchangeTradedFund_new"></a>

#### new ExchangeTradedFund(params)
Construct a new ETF instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | ExchangeTradedFund creation options: |
| params.assetManagerId | <code>number</code> |  | ID of ETF's Asset Manager __(required)__ |
| params.assetId | <code>number</code> |  | ID of the ETF __(required)__ |
| [params.assetClass] | <code>string</code> |  | Auto-set to `Fund` __(read-only)__ |
| [params.assetType] | <code>string</code> |  | Type of the ETF. Auto-set based on the class or subclass constructor |
| [params.assetTypeDisplay] | <code>string</code> |  | Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`) |
| [params.fungible] | <code>boolean</code> | <code>true</code> | Auto-set to `true` for Fund and its subclasses |
| [params.assetIssuerId] | <code>string</code> |  | ID of the ETF's issuer |
| [params.assetStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the ETF |
| [params.countryId] | <code>string</code> |  | ID of ETF's country |
| [params.venueId] | <code>string</code> |  | ID of ETF's venue if applicable |
| [params.currency] | <code>string</code> |  | ETF currency (e.g. USD, SGD) |
| [params.creationDate] | <code>string</code> | <code>&quot;0001-01-01&quot;</code> | ETF's creation date (YYYY-MM-DD) |
| [params.description] | <code>string</code> |  | Description of the ETF |
| [params.displayName] | <code>string</code> |  | Display name of the ETF |
| [params.rollPrice] | <code>boolean</code> | <code>true</code> | Whether to roll the price for the ETF |
| [params.clientId] | <code>string</code> |  | ID of the associated client |
| [params.fundType] | <code>string</code> | <code>&quot;ETF&quot;</code> | Auto-set to `ETF` __(read-only)__ |
| [params.nav] | <code>number</code> |  | ETF's Net Asset Value. Stored as a Decimal instance |
| [params.expenseRatio] | <code>number</code> |  | ETF's expense ratio. Stored as a Decimal instance |
| [params.netAssets] | <code>number</code> |  | ETF's net assets. Stored as a Decimal instance |
| [params.comments] | <code>object</code> |  | Object of Comments attached to the ETF |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the ETF |
| [params.references] | <code>object</code> | <code>{ AMaaS: Reference() }</code> | Object of References associated with the ETF. * The AMaaS Reference is auto-created and populated |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the ETF |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the ETF |
| [params.createdTime] | <code>date</code> |  | Time that the ETF was created |
| [params.updatedTime] | <code>date</code> |  | Time that the ETF was updated |
| [params.version] | <code>number</code> |  | Version number |

<a name="module_assets.Fund"></a>

### assets.Fund ⇐ [<code>Asset</code>](#module_assets.Asset)
Class representing a Fund

**Kind**: static class of [<code>assets</code>](#module_assets)  
**Extends**: [<code>Asset</code>](#module_assets.Asset)  
<a name="new_module_assets.Fund_new"></a>

#### new Fund(params)
Construct a new Fund instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | Fund creation options: |
| params.assetManagerId | <code>number</code> |  | ID of Fund's Asset Manager. Asset Manager refers to AMaaS user, NOT an asset manager in the Fund. __(required)__ |
| params.assetId | <code>number</code> |  | ID of the Fund __(required)__ |
| [params.assetClass] | <code>string</code> | <code>&quot;Fund&quot;</code> | Class of the Fund (a subclass of Fund may define its own assetClass) |
| [params.assetType] | <code>string</code> |  | Type of the Fund. Auto-set based on the class or subclass constructor |
| [params.assetTypeDisplay] | <code>string</code> |  | Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`) |
| [params.fungible] | <code>boolean</code> | <code>true</code> | Auto-set to `true` for Fund __(read-only)__ |
| [params.assetIssuerId] | <code>string</code> |  | ID of the Fund's issuer |
| [params.assetStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Fund |
| [params.countryId] | <code>string</code> |  | ID of Fund's country |
| [params.venueId] | <code>string</code> |  | ID of Fund's venue if applicable |
| [params.currency] | <code>string</code> |  | Fund currency (e.g. USD, SGD) |
| [params.description] | <code>string</code> |  | Description of the Fund |
| [params.displayName] | <code>string</code> |  | Display name of the Fund |
| [params.rollPrice] | <code>boolean</code> | <code>true</code> | Whether to roll the price for the Fund |
| [params.clientId] | <code>string</code> |  | ID of the associated client |
| params.fundType | <code>string</code> |  | Type of Fund __(required)__<br /> Available options: <li>Open</li> <li>Closed</li> <li>ETF</li> |
| [params.creationDate] | <code>string</code> | <code>&quot;0001-01-01&quot;</code> | Fund's creation date (YYYY-MM-DD) |
| [params.nav] | <code>number</code> |  | Fund's Net Asset Value. Stored as a Decimal instance |
| [params.expenseRatio] | <code>number</code> |  | Fund's expense ratio. Stored as a Decimal instance |
| [params.netAssets] | <code>number</code> |  | Fund's net assets. Stored as a Decimal instance |
| [params.comments] | <code>object</code> |  | Object of Comments attached to the Fund |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the Fund |
| [params.references] | <code>object</code> | <code>{ AMaaS: Reference() }</code> | Object of References associated with the Fund. * The AMaaS Reference is auto-created and populated |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Fund |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Fund |
| [params.createdTime] | <code>date</code> |  | Time that the Fund was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Fund was updated |
| [params.version] | <code>number</code> |  | Version number |

<a name="module_assets.ForeignExchange"></a>

### assets.ForeignExchange ⇐ [<code>ForeignExchangeBase</code>](#module_assets.ForeignExchangeBase)
Class representing FX

**Kind**: static class of [<code>assets</code>](#module_assets)  
**Extends**: [<code>ForeignExchangeBase</code>](#module_assets.ForeignExchangeBase)  
<a name="new_module_assets.ForeignExchange_new"></a>

#### new ForeignExchange(params)
Construct a new Foreign Exchange instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | ForeignExchange creation options: |
| params.assetId | <code>number</code> |  | ID of the Asset __(required)__ |
| params.assetClass | <code>string</code> |  | Auto-set to `ForeignExchange` __(read-only)__ |
| [params.assetType] | <code>string</code> |  | Type of the ForeignExchange. Auto-set based on the class or subclass constructor |
| [params.assetTypeDisplay] | <code>string</code> |  | Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`) |
| [params.fungible] | <code>boolean</code> | <code>true</code> | Auto-set to `true` __(read-only)__ |
| [params.assetIssuerId] | <code>string</code> |  | ID of the Foreign Exchange's issuer |
| [params.assetStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Foreign Exchange |
| [params.description] | <code>string</code> |  | Description of the Foreign Exchange |
| [params.displayName] | <code>string</code> |  | Display name of the ForeignExchange |
| params.countryCodes | <code>array</code> |  | Array of country codes __(required)__ |
| params.major | <code>boolean</code> |  | Whether this FX is major __(required)__ |
| [params.clientId] | <code>string</code> |  | ID of the associated client |
| [params.comments] | <code>object</code> |  | Object of Comments attached to the Foreign Exchange |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the Foreign Exchange |
| [params.references] | <code>object</code> | <code>{ AMaaS: Reference() }</code> | Object of References associated with the Foreign Exchange. * The AMaaS Reference is auto-created and populated |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Foreign Exchange |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Foreign Exchange |
| [params.createdTime] | <code>date</code> |  | Time that the Foreign Exchange was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Foreign Exchange was updated |
| [params.version] | <code>number</code> |  | Version number |

<a name="module_assets.ForeignExchangeForward"></a>

### assets.ForeignExchangeForward ⇐ [<code>ForeignExchangeBase</code>](#module_assets.ForeignExchangeBase)
Class representing FXForward

**Kind**: static class of [<code>assets</code>](#module_assets)  
**Extends**: [<code>ForeignExchangeBase</code>](#module_assets.ForeignExchangeBase)  
<a name="new_module_assets.ForeignExchangeForward_new"></a>

#### new ForeignExchangeForward(params)
Construct a new FXForward instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | FXForward creation options: |
| params.assetId | <code>string</code> |  | ID of the FXForward __(required)__ |
| params.assetIssuerId | <code>string</code> |  | ID of the Issuer |
| params.assetManagerId | <code>number</code> |  | Asset Manager ID |
| [params.assetClass] | <code>string</code> | <code>&quot;ForeignExchange&quot;</code> | Auto-set to `ForeignExchange` __(read-only)__ |
| [params.assetStatus] | <code>string</code> |  | Status of the asset |
| [params.description] | <code>string</code> |  | Description of the ForeignExchangeForward |
| [params.clientId] | <code>string</code> |  | ID of the client |
| params.major | <code>boolean</code> |  | Whether it is a major currency or not |
| params.countryCodes | <code>object</code> |  | An array of country codes |
| params.settlementDate | <code>string</code> |  | The date of exchange of ownership |
| [params.fixingDate] | <code>string</code> |  | The date of fixing exchange rate between two currencies |
| params.forwardRate | <code>string</code> |  | Currency exchange rate |
| [params.comments] | <code>object</code> |  | Object of Comments attached to the Non Deliverable Forward |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the Non Deliverable Forward |
| [params.references] | <code>object</code> | <code>{ AMaaS: Reference() }</code> | Object of References associated with this Asset. * The AMaaS Reference is auto-created and populated |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Non Deliverable Forward |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Non Deliverable Forward |
| [params.createdTime] | <code>date</code> |  | Time that the Non Deliverable Forward was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Non Deliverable Forward was updated |
| [params.version] | <code>number</code> |  | Version number |

<a name="module_assets.ForeignExchangeBase"></a>

### assets.ForeignExchangeBase ⇐ [<code>Asset</code>](#module_assets.Asset)
Class representing FX (this should never be instantiated directly, use the appropriate subclass instead).
Note that creating and editing FXBase subclasses and other public subclasses is a restricted action.

**Kind**: static class of [<code>assets</code>](#module_assets)  
**Extends**: [<code>Asset</code>](#module_assets.Asset)  
<a name="new_module_assets.ForeignExchangeBase_new"></a>

#### new ForeignExchangeBase(params)
Construct a new ForeignExchangeBase instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | ForeignExchangeBase creation options: |
| [params.assetManagerId] | <code>number</code> | <code>0</code> | Auto-set to `0` except for ForeignExchangeForward. All FX classes and subclasses are treated as public Assets |
| params.assetId | <code>number</code> |  | ID of the ForeignExchangeBase __(required)__ |
| [params.assetClass] | <code>string</code> | <code>&quot;ForeignExchange&quot;</code> | Auto-set to `ForeignExchange` __(read-only)__ |
| [params.assetType] | <code>string</code> |  | Type of the ForeignExchangeBase. Auto-set based on the class or subclass constructor |
| [params.assetTypeDisplay] | <code>string</code> |  | Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`) |
| [params.fungible] | <code>boolean</code> | <code>true</code> | Auto-set to `true` for ForeignExchangeBase __(read-only)__ |
| [params.assetIssuerId] | <code>string</code> |  | ID of the ForeignExchangeBase's issuer |
| [params.assetStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the ForeignExchangeBase |
| [params.description] | <code>string</code> |  | Description of the ForeignExchangeBase |
| [params.displayName] | <code>string</code> |  | Display name of the ForeignExchangeBase |
| params.countryCodes | <code>array</code> |  | Array of country codes __(required)__ |
| params.major | <code>boolean</code> |  | Whether this FX is major __(required)__ |
| [params.rollPrice] | <code>boolean</code> | <code>false</code> | Auto-set to `false` __(read-only)__ |
| [params.clientId] | <code>string</code> |  | ID of the associated client |
| [params.comments] | <code>object</code> |  | Object of Comments attached to the ForeignExchangeBase |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the ForeignExchangeBase |
| [params.references] | <code>object</code> | <code>{ AMaaS: Reference() }</code> | Object of References associated with the ForeignExchangeBase. * The AMaaS Reference is auto-created and populated |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the ForeignExchangeBase |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the ForeignExchangeBase |
| [params.createdTime] | <code>date</code> |  | Time that the ForeignExchangeBase was created |
| [params.updatedTime] | <code>date</code> |  | Time that the ForeignExchangeBase was updated |
| params.version | <code>number</code> |  | Version number |

<a name="module_assets.Index"></a>

### assets.Index ⇐ [<code>Asset</code>](#module_assets.Asset)
Class representing an Index

**Kind**: static class of [<code>assets</code>](#module_assets)  
**Extends**: [<code>Asset</code>](#module_assets.Asset)  
<a name="new_module_assets.Index_new"></a>

#### new Index(params)
Construct a new Index instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | Index creation options: |
| params.assetManagerId | <code>number</code> |  | ID of Index's Asset Manager __(required)__ |
| params.assetId | <code>number</code> |  | ID of the Asset __(required)__ |
| [params.assetClass] | <code>string</code> | <code>&quot;Index&quot;</code> | Auto-set to `Index` __(read-only)__ |
| [params.assetType] | <code>string</code> |  | Type of the Index. Auto-set based on the class or subclass constructor |
| [params.assetTypeDisplay] | <code>string</code> |  | Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`) |
| [params.fungible] | <code>boolean</code> | <code>true</code> | Auto-set to `true` for Index __(read-only)__ |
| [params.assetIssuerId] | <code>string</code> |  | ID of the Index's issuer |
| [params.assetStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Index |
| [params.countryId] | <code>string</code> |  | ID of Index's country |
| [params.currency] | <code>string</code> |  | Index currency (e.g. USD, SGD) |
| [params.issueDate] | <code>string</code> | <code>&quot;0001-01-01&quot;</code> | Issue date if applicable (YYYY-MM-DD) |
| [params.description] | <code>string</code> |  | Description of the Index |
| [params.displayName] | <code>string</code> |  | Display name of the Index |
| [params.rollPrice] | <code>boolean</code> | <code>false</code> | Auto-set to `false` __(read-only)__ |
| [params.clientId] | <code>string</code> |  | ID of the associated client |
| [params.comments] | <code>object</code> |  | Object of Comments attached to the Index |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the Index |
| [params.references] | <code>object</code> | <code>{ AMaaS: Reference() }</code> | Object of References associated with the Index. * The AMaaS Reference is auto-created and populated |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Index |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Index |
| [params.createdTime] | <code>date</code> |  | Time that the Index was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Index was updated |
| [params.version] | <code>number</code> |  | Version number |

<a name="module_assets.BondFuture"></a>

### assets.BondFuture ⇐ [<code>Future</code>](#module_assets.Future)
Class representing a Bond Future

**Kind**: static class of [<code>assets</code>](#module_assets)  
**Extends**: [<code>Future</code>](#module_assets.Future)  
<a name="new_module_assets.BondFuture_new"></a>

#### new BondFuture(params)
Construct a new Bond Future instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | Bond Future creation options: |
| params.assetManagerId | <code>number</code> |  | ID of Bond Future's Asset Manager __(required)__ |
| params.assetId | <code>number</code> |  | ID of the Bond Future __(required)__ |
| [params.assetClass] | <code>string</code> | <code>&quot;Future&quot;</code> | Auto-set to `Future` __(read-only)__ |
| [params.assetType] | <code>string</code> |  | Type of the Bond Future. Auto-set based on the class or subclass constructor |
| [params.assetTypeDisplay] | <code>string</code> |  | Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`) |
| [params.fungible] | <code>boolean</code> | <code>true</code> | Auto-set to `true` __(read-only)__ |
| [params.assetIssuerId] | <code>string</code> |  | ID of the Bond Future's issuer |
| [params.assetStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Bond Future |
| [params.countryId] | <code>string</code> |  | ID of Bond Future's country |
| [params.venueId] | <code>string</code> |  | ID of Bond Future's venue if applicable |
| [params.currency] | <code>string</code> |  | Bond Future currency (e.g. USD, SGD) |
| [params.issueDate] | <code>string</code> | <code>&quot;0001-01-01&quot;</code> | Issue date if applicable (YYYY-MM-DD) |
| [params.expiryDate] | <code>string</code> | <code>&quot;9999-12-31&quot;</code> | Date of the contract's expiry (YYYY-MM-DD) |
| [params.description] | <code>string</code> |  | Description of the Bond Future |
| [params.displayName] | <code>string</code> |  | Display name of the Bond Future |
| [params.clientId] | <code>string</code> |  | ID of the associated client |
| params.settlementType | <code>string</code> |  | Settlement Type __(required)__<br /> Available options: <li>Cash</li> <li>Physical</li> |
| params.contractSize | <code>number</code> |  | Contract Size __(required)__ |
| [params.pointValue] | <code>number</code> |  | Future point value. Stored as a Decimal instance |
| params.tickSize | <code>number</code> |  | Future tick size. Stored as a Decimal instance __(required)__ |
| [params.quoteUnit] | <code>string</code> |  | Future quote unit |
| params.underlyingAssetId | <code>string</code> |  | ID of the underlying Asset __(required)__ |
| [params.cheapestToDeliverId] | <code>string</code> |  | The cheapest Bond which can be delivered to the terms of the Future |
| [params.underlyingBondTenor] | <code>string</code> |  | Tenor of the underlying Bond<br /> Available options: <li>1M</li> <li>3M</li> <li>6M</li> <li>9M</li> <li>1Y</li> <li>2Y</li> <li>5Y</li> <li>10Y</li> <li>15Y</li> <li>20Y</li> <li>30Y</li> <li>40Y</li> <li>50Y</li> |
| [params.underlyingBondCoupon] | <code>number</code> |  | Coupon of the underlying Bond |
| [params.comments] | <code>object</code> |  | Object of Comments attached to the Bond Future |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the Bond Future |
| [params.references] | <code>object</code> | <code>{ AMaaS: Reference() }</code> | Object of References associated with the Bond Future. * The AMaaS Reference is auto-created and populated |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Bond Future |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Bond Future |
| [params.createdTime] | <code>date</code> |  | Time that the Bond Future was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Bond Future was updated |
| [params.version] | <code>number</code> |  | Version number of the Bond Future |

<a name="module_assets.BondFutureOption"></a>

### assets.BondFutureOption ⇐ [<code>Future</code>](#module_assets.Future)
Class representing a Bond Future Option

**Kind**: static class of [<code>assets</code>](#module_assets)  
**Extends**: [<code>Future</code>](#module_assets.Future)  
<a name="new_module_assets.BondFutureOption_new"></a>

#### new BondFutureOption(params)
Construct a new Bond Future Option instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | Bond Future Option creation options: |
| params.assetManagerId | <code>number</code> |  | ID of Bond Future Option's Asset Manager __(required)__ |
| params.assetId | <code>number</code> |  | ID of the Bond Future Option __(required)__ |
| [params.assetClass] | <code>string</code> | <code>&quot;Future&quot;</code> | Auto-set to `Future` __(read-only)__ |
| [params.assetType] | <code>string</code> |  | Type of the Bond Future Option. Auto-set based on the class or subclass constructor |
| [params.assetTypeDisplay] | <code>string</code> |  | Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`) |
| [params.fungible] | <code>boolean</code> | <code>true</code> | Auto-set to `true` __(read-only)__ |
| [params.assetIssuerId] | <code>string</code> |  | ID of the Bond Future Option's issuer |
| [params.assetStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Bond Future Option |
| [params.countryId] | <code>string</code> |  | ID of Bond Future Option's country |
| [params.venueId] | <code>string</code> |  | ID of Bond Future Option's venue if applicable |
| [params.currency] | <code>string</code> |  | Bond Future Option currency (e.g. USD, SGD) |
| [params.issueDate] | <code>string</code> | <code>&quot;0001-01-01&quot;</code> | Issue date if applicable (YYYY-MM-DD) |
| [params.expiryDate] | <code>string</code> | <code>&quot;9999-12-31&quot;</code> | Date of the contract's expiry (YYYY-MM-DD) |
| [params.description] | <code>string</code> |  | Description of the Bond Future Option |
| [params.displayName] | <code>string</code> |  | Display name of the Bond Future Option |
| [params.clientId] | <code>string</code> |  | ID of the associated client |
| params.settlementType | <code>string</code> |  | Settlement Type __(required)__<br /> <li>Cash</li> <li>Physical</li> |
| params.contractSize | <code>number</code> |  | Contract Size __(required)__ |
| [params.pointValue] | <code>number</code> |  | Future point value. Stored as a Decimal instance |
| params.tickSize | <code>number</code> |  | Future tick size. Stored as a Decimal instance __(required)__ |
| [params.quoteUnit] | <code>string</code> |  | Future quote unit |
| params.underlyingAssetId | <code>string</code> |  | ID of the underlying Asset __(required)__ |
| params.optionType | <code>string</code> |  | Option type __(required)__<br /> Available options: <li>Put</li> <li>Call</li> |
| params.optionStyle | <code>string</code> |  | Option style __(required)__<br /> Available options: <li>American</li> <li>Bermudan</li> <li>European</li> |
| params.strike | <code>number</code> |  | Strike price. Stored as a Decimal instance __(required)__ |
| [params.comments] | <code>object</code> |  | Object of Comments attached to the Bond Future Option |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the Bond Future Option |
| [params.references] | <code>object</code> | <code>{ AMaaS: Reference() }</code> | Object of References associated with the Bond Future Option. * The AMaaS Reference is auto-created and populated |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Bond Future Option |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Bond Future Option |
| [params.createdTime] | <code>date</code> |  | Time that the Bond Future Option was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Bond Future Option was updated |
| [params.version] | <code>number</code> |  | Version number |

<a name="module_assets.CommodityFuture"></a>

### assets.CommodityFuture ⇐ <code>module:ListDerivatives.Future</code>
Class representing an CommodityFuture

**Kind**: static class of [<code>assets</code>](#module_assets)  
**Extends**: <code>module:ListDerivatives.Future</code>  
<a name="new_module_assets.CommodityFuture_new"></a>

#### new CommodityFuture(params)
Construct a new CommodityFuture instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | CommodityFuture creation options: |
| params.assetManagerId | <code>number</code> |  | ID of Asset's Asset Manager __(required)__ |
| params.assetId | <code>number</code> |  | ID of the Asset __(required)__ |
| params.settlementType | <code>string</code> |  | A type of settlement |
| params.contractSize | <code>number</code> |  | An integer, e.g. 10 barrels per contract |
| params.pointValue | <code>string</code> |  | Value of 1 point |
| params.tickSize | <code>number</code> |  | The minimum unit of price change |
| params.quoteUnit | <code>number</code> |  | Contract unit, e.g. barrel |
| [params.assetIssuerId] | <code>string</code> |  | ID of the Asset issuer |
| [params.assetStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Asset |
| [params.countryId] | <code>string</code> |  | ID of Asset's country |
| [params.venueId] | <code>string</code> |  | ID of Asset's venue if applicable |
| [params.currency] | <code>string</code> |  | Asset currency (e.g. USD, SGD) |
| [params.issueDate] | <code>string</code> | <code>&quot;0001-01-01&quot;</code> | Issue date if applicable (YYYY-MM-DD) |
| [params.expiryDate] | <code>string</code> |  | Expiry date |
| [params.description] | <code>string</code> |  | Description of the Asset |
| [params.displayName] | <code>string</code> |  | Display name of the Asset |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the Asset |
| [params.references] | <code>object</code> | <code>{}</code> | Object of References associated with this Asset. * The AMaaS Reference is auto-created and populated |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Asset |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Asset |
| [params.createdTime] | <code>date</code> |  | Time that the Asset was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Asset was updated |
| [params.version] | <code>number</code> |  | Version number |

<a name="module_assets.EnergyFuture"></a>

### assets.EnergyFuture ⇐ [<code>Future</code>](#module_assets.Future)
Class representing an Energy Future

**Kind**: static class of [<code>assets</code>](#module_assets)  
**Extends**: [<code>Future</code>](#module_assets.Future)  
<a name="new_module_assets.EnergyFuture_new"></a>

#### new EnergyFuture(params)
Construct a new Energy Future instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | EnergyFuture creation options |
| params.assetManagerId | <code>number</code> |  | ID of Energy Future's Asset Manager __(required)__ |
| params.assetId | <code>number</code> |  | ID of the Energy Future __(required)__ |
| [params.assetClass] | <code>string</code> | <code>&quot;Future&quot;</code> | Auto-set to `Future` __(read-only)__ |
| [params.assetType] | <code>string</code> |  | Type of the Energy Future. Auto-set based on the class or subclass constructor |
| [params.assetTypeDisplay] | <code>string</code> |  | Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`) |
| [params.fungible] | <code>boolean</code> | <code>true</code> | Auto-set to `true` __(read-only)__ |
| [params.assetIssuerId] | <code>string</code> |  | ID of the Energy Future's issuer |
| [params.assetStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Energy Future |
| [params.countryId] | <code>string</code> |  | ID of Energy Future's country |
| [params.venueId] | <code>string</code> |  | ID of Energy Future's venue if applicable |
| [params.currency] | <code>string</code> |  | Energy Future currency (e.g. USD, SGD) |
| [params.issueDate] | <code>string</code> | <code>&quot;0001-01-01&quot;</code> | Issue date if applicable (YYYY-MM-DD) |
| [params.expiryDate] | <code>string</code> | <code>&quot;9999-12-31&quot;</code> | Date of the contract's expiry (YYYY-MM-DD) |
| [params.description] | <code>string</code> |  | Description of the Energy Future |
| [params.displayName] | <code>string</code> |  | Display name of the Energy Future |
| [params.clientId] | <code>string</code> |  | ID of the associated client |
| params.settlementType | <code>string</code> |  | Settlement Type __(required)__<br /> Available options <li>Cash</li> <li>Physical</li> |
| params.contractSize | <code>number</code> |  | Contract Size __(required)__ |
| [params.pointValue] | <code>number</code> |  | Future point value. Stored as a Decimal instance |
| params.tickSize | <code>number</code> |  | Future tick size. Stored as a Decimal instance __(required)__ |
| [params.quoteUnit] | <code>string</code> |  | Future quote unit |
| params.underlyingAssetId | <code>string</code> |  | ID of the underlying Asset __(required)__ |
| [params.comments] | <code>object</code> |  | Object of Comments attached to the Energy Future |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the Energy Future |
| [params.references] | <code>object</code> | <code>{ AMaaS: Reference() }</code> | Object of References associated with the Energy Future. * The AMaaS Reference is auto-created and populated |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Energy Future |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Energy Future |
| [params.createdTime] | <code>date</code> |  | Time that the Energy Future was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Energy Future was updated |
| [params.version] | <code>number</code> |  | Version number |

<a name="module_assets.EquityFuture"></a>

### assets.EquityFuture ⇐ [<code>ListedDerivative</code>](#module_assets.ListedDerivative)
Class representing a Future

**Kind**: static class of [<code>assets</code>](#module_assets)  
**Extends**: [<code>ListedDerivative</code>](#module_assets.ListedDerivative)  
<a name="new_module_assets.EquityFuture_new"></a>

#### new EquityFuture(params)
Construct a new Equity Future instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | EquityFuture creation options: |
| params.assetManagerId | <code>number</code> |  | ID of Equity Future's Asset Manager __(required)__ |
| params.assetId | <code>number</code> |  | ID of the Equity Future __(required)__ |
| [params.assetClass] | <code>string</code> | <code>&quot;Future&quot;</code> | Auto-set to `Future` __(read-only)__ |
| [params.assetType] | <code>string</code> |  | Type of the Equity Future. Auto-set based on the class or subclass constructor |
| [params.assetTypeDisplay] | <code>string</code> |  | Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`) |
| [params.fungible] | <code>boolean</code> | <code>true</code> | Auto-set to `true` __(read-only)__ |
| [params.assetIssuerId] | <code>string</code> |  | ID of the Equity Future's issuer |
| [params.assetStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Equity Future |
| [params.countryId] | <code>string</code> |  | ID of Equity Future's country |
| [params.venueId] | <code>string</code> |  | ID of Equity Future's venue if applicable |
| [params.currency] | <code>string</code> |  | Equity Future currency (e.g. USD, SGD) |
| [params.issueDate] | <code>string</code> | <code>&quot;0001-01-01&quot;</code> | Issue date if applicable (YYYY-MM-DD) |
| [params.expiryDate] | <code>string</code> | <code>&quot;9999-12-31&quot;</code> | Date of the contract's expiry (YYYY-MM-DD) |
| [params.description] | <code>string</code> |  | Description of the Equity Future |
| [params.displayName] | <code>string</code> |  | Display name of the Equity Future |
| [params.clientId] | <code>string</code> |  | ID of the associated client |
| params.settlementType | <code>string</code> |  | Settlement Type __(required)__<br /> Available options: <li>Cash</li> <li>Physical</li> |
| params.contractSize | <code>number</code> |  | Contract Size __(required)__ |
| [params.pointValue] | <code>number</code> |  | Future point value. Stored as a Decimal instance |
| params.tickSize | <code>number</code> |  | Future tick size. Stored as a Decimal instance |
| [params.quoteUnit] | <code>string</code> |  | Future quote unit |
| params.underlyingAssetId | <code>string</code> |  | ID of the underlying Asset __(required)__ |
| [params.comments] | <code>object</code> |  | Object of Comments attached to the Equity Future |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the Equity Future |
| [params.references] | <code>object</code> | <code>{ AMaaS: Reference() }</code> | Object of References associated with the Equity Future. * The AMaaS Reference is auto-created and populated |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Equity Future |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Equity Future |
| [params.createdTime] | <code>date</code> |  | Time that the Equity Future was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Equity Future was updated |
| [params.version] | <code>number</code> |  | Version number |

<a name="module_assets.ForeignExchangeFuture"></a>

### assets.ForeignExchangeFuture ⇐ <code>module:ListDerivatives.Future</code>
Class representing an ForeignExchangeFuture

**Kind**: static class of [<code>assets</code>](#module_assets)  
**Extends**: <code>module:ListDerivatives.Future</code>  
<a name="new_module_assets.ForeignExchangeFuture_new"></a>

#### new ForeignExchangeFuture(params)
Construct a new ForeignExchangeFuture instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | ForeignExchangeFuture creation options: |
| params.assetManagerId | <code>number</code> |  | ID of Asset's Asset Manager __(required)__ |
| params.assetId | <code>number</code> |  | ID of the Asset __(required)__ |
| params.settlementType | <code>string</code> |  | A type of settlement |
| params.contractSize | <code>number</code> |  | An integer, e.g. 10 barrels per contract |
| params.pointValue | <code>string</code> |  | Value of 1 point |
| params.tickSize | <code>number</code> |  | The minimum unit of price change |
| params.quoteUnit | <code>number</code> |  | Contract unit, e.g. barrel |
| [params.assetIssuerId] | <code>string</code> |  | ID of the Asset issuer |
| [params.assetStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Asset |
| [params.countryId] | <code>string</code> |  | ID of Asset's country |
| [params.venueId] | <code>string</code> |  | ID of Asset's venue if applicable |
| [params.currency] | <code>string</code> |  | Asset currency (e.g. USD, SGD) |
| [params.issueDate] | <code>string</code> | <code>&quot;0001-01-01&quot;</code> | Issue date if applicable (YYYY-MM-DD) |
| [params.expiryDate] | <code>string</code> |  | Expiry date |
| [params.description] | <code>string</code> |  | Description of the Asset |
| [params.displayName] | <code>string</code> |  | Display name of the Asset |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the Asset |
| [params.references] | <code>object</code> | <code>{}</code> | Object of References associated with this Asset. * The AMaaS Reference is auto-created and populated |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Asset |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Asset |
| [params.createdTime] | <code>date</code> |  | Time that the Asset was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Asset was updated |
| [params.version] | <code>number</code> |  | Version number |

<a name="module_assets.Future"></a>

### assets.Future ⇐ [<code>ListedDerivative</code>](#module_assets.ListedDerivative)
Class representing a Future

**Kind**: static class of [<code>assets</code>](#module_assets)  
**Extends**: [<code>ListedDerivative</code>](#module_assets.ListedDerivative)  
<a name="new_module_assets.Future_new"></a>

#### new Future(params)
Construct a new Future instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | Future creation options: |
| params.assetManagerId | <code>number</code> |  | ID of Future's Asset Manager __(required)__ |
| params.assetId | <code>number</code> |  | ID of the Future __(required)__ |
| [params.assetClass] | <code>string</code> | <code>&quot;Future&quot;</code> | Class of the Future (a subclass of Future may define its own assetClass) |
| [params.assetType] | <code>string</code> |  | Type of the Future. Auto-set based on the class or subclass constructor |
| [params.assetTypeDisplay] | <code>string</code> |  | Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`) |
| [params.fungible] | <code>boolean</code> | <code>true</code> | Auto-set to `true` __(read-only)__ |
| [params.assetIssuerId] | <code>string</code> |  | ID of the Future's issuer |
| [params.assetStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Future |
| [params.countryId] | <code>string</code> |  | ID of Future's country |
| [params.venueId] | <code>string</code> |  | ID of Future's venue if applicable |
| [params.currency] | <code>string</code> |  | Asset currency (e.g. USD, SGD) |
| [params.issueDate] | <code>string</code> | <code>&quot;0001-01-01&quot;</code> | Issue date if applicable (YYYY-MM-DD) |
| [params.description] | <code>string</code> |  | Description of the Future |
| [params.displayName] | <code>string</code> |  | Display name of the Future |
| [params.clientId] | <code>string</code> |  | ID of the associated client |
| params.settlementType | <code>string</code> |  | Settlement Type __(required)__<br /> Available options: <li>Cash</li> <li>Physical</li> |
| params.contractSize | <code>number</code> |  | Contract Size __(required)__ |
| [params.pointValue] | <code>number</code> |  | Future point value. Stored as a Decimal instance |
| params.tickSize | <code>number</code> |  | Future tick size. Stored as a Decimal instance __(required)__ |
| [params.quoteUnit] | <code>string</code> |  | Future quote unit |
| params.underlyingAssetId | <code>string</code> |  | ID of the underlying Asset __(required)__ |
| [params.expiryDate] | <code>string</code> | <code>&quot;9999-12-31&quot;</code> | Date of the Future's expiry (YYYY-MM-DD) |
| [params.comments] | <code>object</code> |  | Object of Comments attached to the Future |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the Future |
| [params.references] | <code>object</code> | <code>{ AMaaS: Reference() }</code> | Object of References associated with the Future. * The AMaaS Reference is auto-created and populated |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Future |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Future |
| [params.createdTime] | <code>date</code> |  | Time that the Future was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Future was updated |
| [params.version] | <code>number</code> |  | Version number |

<a name="module_assets.FutureOption"></a>

### assets.FutureOption ⇐ [<code>Future</code>](#module_assets.Future)
Class representing a Future Option

**Kind**: static class of [<code>assets</code>](#module_assets)  
**Extends**: [<code>Future</code>](#module_assets.Future)  
<a name="new_module_assets.FutureOption_new"></a>

#### new FutureOption(params)
Construct a new Future Option instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | Future Option creation options: |
| params.assetManagerId | <code>number</code> |  | ID of Future Option's Asset Manager __(required)__ |
| params.assetId | <code>number</code> |  | ID of the Future Option __(required)__ |
| [params.assetClass] | <code>string</code> | <code>&quot;Future&quot;</code> | Auto-set to `Future` __(read-only)__ |
| [params.assetType] | <code>string</code> |  | Type of the Future Option. Auto-set based on the class or subclass constructor |
| [params.assetTypeDisplay] | <code>string</code> |  | Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`) |
| [params.fungible] | <code>boolean</code> | <code>true</code> | Auto-set to `true` for Future subclasses __(read-only)__ |
| [params.assetIssuerId] | <code>string</code> |  | ID of the Future Option's issuer |
| [params.assetStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Future Option |
| [params.countryId] | <code>string</code> |  | ID of Future Option's country |
| [params.venueId] | <code>string</code> |  | ID of Future Option's venue if applicable |
| [params.currency] | <code>string</code> |  | Future Option currency (e.g. USD, SGD) |
| [params.issueDate] | <code>string</code> | <code>&quot;0001-01-01&quot;</code> | Issue date if applicable (YYYY-MM-DD) |
| [params.expiryDate] | <code>string</code> | <code>&quot;9999-12-31&quot;</code> | Expiry date (YYYY-MM-DD) |
| [params.description] | <code>string</code> |  | Description of the Future Option |
| [params.displayName] | <code>string</code> |  | Display name of the Furure Option |
| [params.clientId] | <code>string</code> |  | ID of the associated client |
| params.settlementType | <code>string</code> |  | Settlement Type __(required)__<br /> Available options: <li>Cash</li> <li>Physical</li> |
| params.contractSize | <code>number</code> |  | Contract Size __(required)__ |
| [params.pointValue] | <code>number</code> |  | Future point value. Stored as a Decimal instance |
| params.tickSize | <code>number</code> |  | Future tick size. Stored as a Decimal instance __(required)__ |
| [params.quoteUnit] | <code>string</code> |  | Future quote unit |
| params.underlyingAssetId | <code>string</code> |  | ID of the underlying Asset __(required)__ |
| params.optionType | <code>string</code> |  | Option type __(required)__<br /> Available options: <li>Put</li> <li>Call</li> |
| params.optionStyle | <code>string</code> |  | Option style __(required)__<br /> Available options: <li>American</li> <li>Bermudan</li> <li>European</li> |
| params.strike | <code>number</code> |  | Strike price __(required)__ |
| [params.comments] | <code>object</code> |  | Object of Comments attached to the Future Option |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the Future Option |
| [params.references] | <code>object</code> | <code>{ AMaaS: Reference() }</code> | Object of References associated with the Future Option |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Future Option |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Future Option |
| [params.createdTime] | <code>date</code> |  | Time that the Future Option was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Future Option was updated |
| [params.version] | <code>number</code> |  | Version number |

<a name="module_assets.IndexFuture"></a>

### assets.IndexFuture ⇐ [<code>Future</code>](#module_assets.Future)
Class representing an Index Future

**Kind**: static class of [<code>assets</code>](#module_assets)  
**Extends**: [<code>Future</code>](#module_assets.Future)  
<a name="new_module_assets.IndexFuture_new"></a>

#### new IndexFuture(params)
Construct a new Index Future instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | IndexFuture creation options: |
| params.assetManagerId | <code>number</code> |  | ID of Index Future's Asset Manager __(required)__ |
| params.assetId | <code>number</code> |  | ID of the Index Future __(required)__ |
| [params.assetClass] | <code>string</code> | <code>&quot;Future&quot;</code> | Auto-set to `Future` __(read-only)__ |
| [params.assetType] | <code>string</code> |  | Type of the Index Future. Auto-set based on the class or subclass constructor |
| [params.assetTypeDisplay] | <code>string</code> |  | Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`) |
| [params.fungible] | <code>boolean</code> | <code>true</code> | Auto-set to `true` __(read-only)__ |
| [params.assetIssuerId] | <code>string</code> |  | ID of the Index Future's issuer |
| [params.assetStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Index Future |
| [params.countryId] | <code>string</code> |  | ID of Index Future's country |
| [params.venueId] | <code>string</code> |  | ID of Index Future's venue if applicable |
| [params.currency] | <code>string</code> |  | Index Future currency (e.g. USD, SGD) |
| [params.issueDate] | <code>string</code> | <code>&quot;0001-01-01&quot;</code> | Issue date if applicable (YYYY-MM-DD) |
| [params.expiryDate] | <code>string</code> | <code>&quot;9999-12-31&quot;</code> | Date of the contract's expiry (YYYY-MM-DD) |
| [params.description] | <code>string</code> |  | Description of the Index Future |
| [params.displayName] | <code>string</code> |  | Display name of the Index Future |
| [params.clientId] | <code>string</code> |  | ID of the associated client |
| params.settlementType | <code>string</code> |  | Settlement Type __(required)__<br /> Available options: <li>Cash</li> <li>Physical</li> |
| params.contractSize | <code>number</code> |  | Contract Size __(required)__ |
| [params.pointValue] | <code>number</code> |  | Future point value. Stored as a Decimal instance |
| params.tickSize | <code>number</code> |  | Future tick size. Stored as a Decimal instance __(required)__ |
| [params.quoteUnit] | <code>string</code> |  | Future quote unit |
| params.underlyingAssetId | <code>string</code> |  | ID of the underlying Asset __(required)__ |
| [params.comments] | <code>object</code> |  | Object of Comments attached to the Index Future |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the Index Future |
| [params.references] | <code>object</code> | <code>{ AMaaS: Reference() }</code> | Object of References associated with the Index Future. * The AMaaS Reference is auto-created and populated |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Index Future |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Index Future |
| [params.createdTime] | <code>date</code> |  | Time that the Index Future was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Index Future was updated |
| [params.version] | <code>number</code> |  | Version number |

<a name="module_assets.InterestRateFuture"></a>

### assets.InterestRateFuture ⇐ [<code>Future</code>](#module_assets.Future)
Class representing an Interest Rate Future

**Kind**: static class of [<code>assets</code>](#module_assets)  
**Extends**: [<code>Future</code>](#module_assets.Future)  
<a name="new_module_assets.InterestRateFuture_new"></a>

#### new InterestRateFuture(params)
Construct a new Interest Rate Future instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | InterestRateFuture creation options |
| params.assetManagerId | <code>number</code> |  | ID of Interest Rate Future's Asset Manager __(required)__ |
| params.assetId | <code>number</code> |  | ID of the Interest Rate Future __(required)__ |
| [params.assetClass] | <code>string</code> | <code>&quot;Future&quot;</code> | Auto-set to `Future` __(read-only)__ |
| [params.assetType] | <code>string</code> |  | Type of the Interest Rate Future. Auto-set based on the class or subclass constructor |
| [params.assetTypeDisplay] | <code>string</code> |  | Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`) |
| [params.fungible] | <code>boolean</code> | <code>true</code> | Auto-set to `true` __(read-only)__ |
| [params.assetIssuerId] | <code>string</code> |  | ID of the Interest Rate Future's issuer |
| [params.assetStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Interest Rate Future |
| [params.countryId] | <code>string</code> |  | ID of Interest Rate Future's country |
| [params.venueId] | <code>string</code> |  | ID of Interest Rate Future's venue if applicable |
| [params.currency] | <code>string</code> |  | Interest Rate Future currency (e.g. USD, SGD) |
| [params.issueDate] | <code>string</code> | <code>&quot;0001-01-01&quot;</code> | Issue date if applicable (YYYY-MM-DD) |
| [params.expiryDate] | <code>string</code> | <code>&quot;9999-12-31&quot;</code> | Date of the contract's expiry (YYYY-MM-DD) |
| [params.description] | <code>string</code> |  | Description of the Interest Rate Future |
| [params.displayName] | <code>string</code> |  | Display name of the Interest Rate Future |
| [params.clientId] | <code>string</code> |  | ID of the associated client |
| params.settlementType | <code>string</code> |  | Settlement Type __(required)__<br /> Available options: <li>Cash</li> <li>Physical</li> |
| params.contractSize | <code>number</code> |  | Contract Size __(required)__ |
| [params.pointValue] | <code>number</code> |  | Future point value. Stored as Decimal instance |
| params.tickSize | <code>number</code> |  | Future tick size. Stored as a Decimal instance __(required)__ |
| [params.quoteUnit] | <code>string</code> |  | Future quote unit |
| params.underlyingAssetId | <code>string</code> |  | ID of the underlying Asset __(required)__ |
| [params.comments] | <code>object</code> |  | Object of Comments attached to the Interest Rate Future |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the Interest Rate Future |
| [params.references] | <code>object</code> | <code>{ AMaaS: Reference() }</code> | Object of References associated with the Interest Rate Future. * The AMaaS Reference is auto-created and populated |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Interest Rate Future |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Interest Rate Future |
| [params.createdTime] | <code>date</code> |  | Time that the Interest Rate Future was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Interest Rate Future was updated |
| [params.version] | <code>number</code> |  | Version number |

<a name="module_assets.ListedContractForDifference"></a>

### assets.ListedContractForDifference ⇐ [<code>ListedDerivative</code>](#module_assets.ListedDerivative)
Class representing a Listed CFD

**Kind**: static class of [<code>assets</code>](#module_assets)  
**Extends**: [<code>ListedDerivative</code>](#module_assets.ListedDerivative)  
<a name="new_module_assets.ListedContractForDifference_new"></a>

#### new ListedContractForDifference(params)
Construct a new Listed CFD instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | ListedContractForDifference creation options: |
| params.assetManagerId | <code>number</code> |  | ID of Listed CFD's Asset Manager __(required)__ |
| params.assetId | <code>number</code> |  | ID of the Listed CFD __(required)__ |
| [params.assetClass] | <code>string</code> | <code>&quot;ListedDerivative&quot;</code> | Auto-set to `ListedDerivative` __(read-only)__ |
| [params.assetType] | <code>string</code> |  | Type of the Listed CFD. Auto-set based on the class or subclass constructor |
| [params.assetTypeDisplay] | <code>string</code> |  | Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`) |
| [params.fungible] | <code>boolean</code> | <code>true</code> | Auto-set to `true` __(read-only)__ |
| [params.assetIssuerId] | <code>string</code> |  | ID of the Listed CFD's issuer |
| [params.assetStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Listed CFD |
| [params.countryId] | <code>string</code> |  | ID of Listed CFD's country |
| [params.venueId] | <code>string</code> |  | ID of Listed CFD's venue if applicable |
| [params.currency] | <code>string</code> |  | Listed CFD currency (e.g. USD, SGD) |
| [params.issueDate] | <code>string</code> | <code>&quot;0001-01-01&quot;</code> | Issue date if applicable (YYYY-MM-DD) |
| [params.description] | <code>string</code> |  | Description of the Listed CFD |
| [params.displayName] | <code>string</code> |  | Display name of the Listed CFD |
| [params.clientId] | <code>string</code> |  | ID of the associated client |
| [params.comments] | <code>object</code> |  | Object of Comments attached to the Listed CFD |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the Listed CFD |
| [params.references] | <code>object</code> | <code>{ AMaaS: Reference() }</code> | Object of References associated with the Listed CFD. * The AMaaS Reference is auto-created and populated |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Listed CFD |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Listed CFD |
| [params.createdTime] | <code>date</code> |  | Time that the Listed CFD was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Listed CFD was updated |
| [params.version] | <code>number</code> |  | Version number |

<a name="module_assets.ListedDerivative"></a>

### assets.ListedDerivative ⇐ [<code>Asset</code>](#module_assets.Asset)
Class representing a Listed Derivative

**Kind**: static class of [<code>assets</code>](#module_assets)  
**Extends**: [<code>Asset</code>](#module_assets.Asset)  
<a name="new_module_assets.ListedDerivative_new"></a>

#### new ListedDerivative(params)
Construct a new Listed Derivative instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | ListedDerivative creation options: |
| params.assetManagerId | <code>number</code> |  | ID of Listed Derivative's Asset Manager __(required)__ |
| params.assetId | <code>number</code> |  | ID of the Listed Derivative __(required)__ |
| [params.assetClass] | <code>string</code> | <code>&quot;ListedDerivative&quot;</code> | Class of the Listed Derivative (a subclass may define its own assetClass) |
| [params.assetType] | <code>string</code> |  | Type of the Listed Derivative. Auto-set based on the class or subclass constructor |
| [params.assetTypeDisplay] | <code>string</code> |  | Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`) |
| [params.fungible] | <code>boolean</code> | <code>true</code> | Auto-set to `true` __(read-only)__ |
| [params.assetIssuerId] | <code>string</code> |  | ID of the Listed Derivative's issuer |
| [params.assetStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Listed Derivative |
| [params.countryId] | <code>string</code> |  | ID of Listed Derivative's country |
| [params.venueId] | <code>string</code> |  | ID of Listed Derivative's venue if applicable |
| [params.currency] | <code>string</code> |  | Listed Derivative currency (e.g. USD, SGD) |
| [params.issueDate] | <code>string</code> |  | Issue date if applicable (YYYY-MM-DD) |
| [params.description] | <code>string</code> |  | Description of the Listed Derivative |
| [params.displayName] | <code>string</code> |  | Display name of the Listed Derivative |
| [params.rollPrice] | <code>boolean</code> | <code>false</code> | Auto-set to `false` __(read-only)__ |
| [params.clientId] | <code>string</code> |  | ID of the associated client |
| [params.comments] | <code>object</code> |  | Object of Comments attached to the Listed Derivative |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the Listed Derivative |
| [params.references] | <code>object</code> | <code>{ AMaaS: Reference() }</code> | Object of References associated with the Listed Derivative. * The AMaaS Reference is auto-created and populated |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Listed Derivative |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Listed Derivative |
| [params.createdTime] | <code>date</code> |  | Time that the Listed Derivative was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Listed Derivative was updated |
| [params.version] | <code>number</code> |  | Version number |

<a name="module_assets.PrivateInvestment"></a>

### assets.PrivateInvestment ⇐ [<code>Asset</code>](#module_assets.Asset)
Class representing a Private Investment

**Kind**: static class of [<code>assets</code>](#module_assets)  
**Extends**: [<code>Asset</code>](#module_assets.Asset)  
<a name="new_module_assets.PrivateInvestment_new"></a>

#### new PrivateInvestment(params)
Construct a new Private Investment instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | PrivateInvestment creation options: |
| params.assetManagerId | <code>number</code> |  | ID of Private Investment's Asset Manager __(required)__ |
| params.assetId | <code>number</code> |  | ID of the Private Investment __(required)__ |
| [params.assetClass] | <code>string</code> | <code>&quot;Asset&quot;</code> | Class of the Private Investment |
| [params.assetType] | <code>string</code> |  | Type of the Private Investment. Auto-set based on the class or subclass constructor |
| [params.assetTypeDisplay] | <code>string</code> |  | Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`) |
| params.fungible | <code>boolean</code> |  | Whether this Private Investment is fungible __(required)__ |
| [params.assetIssuerId] | <code>string</code> |  | ID of the AsPrivate Investmentset issuer |
| [params.assetStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Private Investment |
| [params.countryId] | <code>string</code> |  | ID of Private Investment's country |
| [params.venueId] | <code>string</code> |  | ID of Private Investment's venue if applicable |
| [params.currency] | <code>string</code> |  | Private Investment currency (e.g. USD, SGD) |
| [params.issueDate] | <code>string</code> | <code>&quot;0001-01-01&quot;</code> | Issue date if applicable (YYYY-MM-DD) |
| [params.description] | <code>string</code> |  | Description of the Private Investment |
| [params.displayName] | <code>string</code> |  | Display name of the Private Investment |
| [params.rollPrice] | <code>boolean</code> | <code>true</code> | Whether to roll the price for the Private Investment |
| [params.category] | <code>string</code> |  |  |
| [params.subCategory] | <code>string</code> |  |  |
| [params.investmentDate] | <code>string</code> |  |  |
| [params.numShares] | <code>number</code> |  |  |
| [params.priceShare] | <code>number</code> |  |  |
| [params.shareClass] | <code>string</code> |  |  |
| [params.series] | <code>string</code> |  |  |
| [params.shareType] | <code>string</code> |  |  |
| [params.coupon] | <code>number</code> |  |  |
| [params.couponFreq] | <code>string</code> |  |  |
| [params.upfrontFee] | <code>number</code> |  |  |
| [params.exitFee] | <code>number</code> |  |  |
| [params.managementFee] | <code>number</code> |  |  |
| [params.performanceFee] | <code>number</code> |  |  |
| [params.hurdle] | <code>string</code> |  |  |
| [params.margin] | <code>number</code> |  |  |
| [params.highWaterMark] | <code>string</code> |  |  |
| [params.maturityDate] | <code>string</code> |  |  |
| [params.lockUpPeriod] | <code>number</code> |  |  |
| [params.investmentTerm] | <code>number</code> |  |  |
| [params.clientId] | <code>string</code> |  | ID of the associated client |
| [params.comments] | <code>object</code> |  | Object of Comments attached to the Private Investment |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the Private Investment |
| [params.references] | <code>object</code> | <code>{ AMaaS: Reference() }</code> | Object of References associated with this Private Investment. * The AMaaS Reference is auto-created and populated |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Private Investment |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Private Investment |
| [params.createdTime] | <code>date</code> |  | Time that the Private Investment was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Private Investment was updated |
| [params.version] | <code>number</code> |  | Version number |

<a name="module_assets.RealAsset"></a>

### assets.RealAsset ⇐ [<code>Asset</code>](#module_assets.Asset)
Class representing a Real Asset

**Kind**: static class of [<code>assets</code>](#module_assets)  
**Extends**: [<code>Asset</code>](#module_assets.Asset)  
<a name="new_module_assets.RealAsset_new"></a>

#### new RealAsset(params)
Construct a new Real Asset instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | RealAsset creation options |
| params.assetManagerId | <code>number</code> |  | ID of Asset's Asset Manager __(required)__ |
| params.assetId | <code>number</code> |  | ID of the Asset __(required)__ |
| [params.assetClass] | <code>string</code> | <code>&quot;RealAsset&quot;</code> | Class of the Asset (a subclass of RealAsset may define its own assetClass) |
| [params.assetType] | <code>string</code> |  | Type of the Asset. Auto-set based on the class or subclass constructor |
| [params.assetTypeDisplay] | <code>string</code> |  | Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`) |
| [params.fungible] | <code>boolean</code> | <code>false</code> | Auto-set to `false` __(read-only)__ |
| [params.assetIssuerId] | <code>string</code> |  | ID of the Real Asset's issuer |
| [params.assetStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Real Asset |
| [params.countryId] | <code>string</code> |  | ID of Real Asset's country |
| [params.venueId] | <code>string</code> |  | ID of Real Asset's venue if applicable |
| [params.currency] | <code>string</code> |  | Real Asset currency (e.g. USD, SGD) |
| [params.description] | <code>string</code> |  | Description of the Real Asset |
| [params.displayName] | <code>string</code> |  | Display name of the Asset |
| [params.rollPrice] | <code>boolean</code> | <code>true</code> | Whether to roll the price for the Asset |
| [params.clientId] | <code>string</code> |  | ID of the associated client |
| [params.ownership] | <code>object</code> |  | Array of objects specifying the split of ownership of the Real Asset (it must sum to 1) (e.g. `[ {partyId: 'ABC', split: 0.3}, {partyId: 'DEF', split: 0.7} ]` |
| [params.comments] | <code>object</code> |  | Object of Comments attached to the Real Asset |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the Real Asset |
| [params.references] | <code>object</code> | <code>{ AMaaS: Reference() }</code> | Object of References associated with the Real Asset. * The AMaaS Reference is auto-created and populated |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Real Asset |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Real Asset |
| [params.createdTime] | <code>date</code> |  | Time that the Real Asset was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Real Asset was updated |
| [params.version] | <code>number</code> |  | Version number |

<a name="module_assets.RealEstate"></a>

### assets.RealEstate ⇐ [<code>RealAsset</code>](#module_assets.RealAsset)
Class representing Real Estate

**Kind**: static class of [<code>assets</code>](#module_assets)  
**Extends**: [<code>RealAsset</code>](#module_assets.RealAsset)  
<a name="new_module_assets.RealEstate_new"></a>

#### new RealEstate(params)
Construct a new Real Estate instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | RealEstate creation options: |
| params.assetManagerId | <code>number</code> |  | ID of Real Estate's Asset Manager __(required)__ |
| params.assetId | <code>number</code> |  | ID of the Real Estate __(required)__ |
| [params.assetClass] | <code>string</code> | <code>&quot;RealAsset&quot;</code> | Auto-set to `RealEstate` __(read-only)__ |
| [params.assetType] | <code>string</code> |  | Type of the Real Estate. Auto-set based on the class or subclass constructor |
| [params.assetTypeDisplay] | <code>string</code> |  | Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`) |
| [params.fungible] | <code>boolean</code> | <code>false</code> | Auto-set to `false` __(read-only)__ |
| [params.assetIssuerId] | <code>string</code> |  | ID of the Real Estate's issuer |
| [params.assetStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Real Estate |
| [params.countryId] | <code>string</code> |  | ID of Real Estate's country |
| [params.venueId] | <code>string</code> |  | ID of Real Estate's venue if applicable |
| [params.currency] | <code>string</code> |  | Real Estate currency (e.g. USD, SGD) |
| [params.description] | <code>string</code> |  | Description of the Real Estate |
| [params.displayName] | <code>string</code> |  | Display name of the Real Estate |
| [params.rollPrice] | <code>boolean</code> | <code>true</code> | Whether to roll the price for the Real Estate |
| [params.clientId] | <code>string</code> |  | ID of the associated client |
| [params.comments] | <code>object</code> |  | Object of Comments attached to the Real Estate |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the Real Estate |
| [params.references] | <code>object</code> | <code>{ AMaaS: Reference() }</code> | Object of References associated with the Real Estate. * The AMaaS Reference is auto-created and populated |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Real Estate |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Real Estate |
| [params.createdTime] | <code>date</code> |  | Time that the Real Estate was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Real Estate was updated |
| [params.version] | <code>number</code> |  | Version number |

<a name="module_assets.Wine"></a>

### assets.Wine ⇐ [<code>RealAsset</code>](#module_assets.RealAsset)
Class representing Wine

**Kind**: static class of [<code>assets</code>](#module_assets)  
**Extends**: [<code>RealAsset</code>](#module_assets.RealAsset)  
<a name="new_module_assets.Wine_new"></a>

#### new Wine(params)
Construct a new Wine instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | Wine creation options: |
| params.assetManagerId | <code>number</code> |  | ID of Wine's Asset Manager __(required)__ |
| params.assetId | <code>number</code> |  | ID of the Wine __(required)__ |
| [params.assetClass] | <code>string</code> | <code>&quot;RealAsset&quot;</code> | Auto-set to `RealAsset` __(read-only)__ |
| [params.assetType] | <code>string</code> |  | Type of the Wine. Auto-set based on the class or subclass constructor |
| [params.assetTypeDisplay] | <code>string</code> |  | Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`) |
| [params.fungible] | <code>boolean</code> | <code>false</code> | Auto-set to `false` __(read-only)__ |
| [params.assetIssuerId] | <code>string</code> |  | ID of the Wine's issuer |
| [params.assetStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Wine |
| [params.countryId] | <code>string</code> |  | ID of Wine's country |
| [params.venueId] | <code>string</code> |  | ID of Wine's venue if applicable |
| [params.currency] | <code>string</code> |  | Wine currency (e.g. USD, SGD) |
| [params.description] | <code>string</code> |  | Description of the Wine |
| [params.displayName] | <code>string</code> |  | Display name of the Wine |
| [params.clientId] | <code>string</code> |  | ID of the associated client |
| [params.year] | <code>string</code> |  | Year of production |
| [params.producer] | <code>string</code> |  | Name of the producer |
| [params.region] | <code>string</code> |  | Region |
| [params.appellation] | <code>string</code> |  | Appellation |
| [params.classification] | <code>string</code> |  | Classification |
| [params.color] | <code>string</code> |  | Color (e.g. red, white) |
| [params.bottleSize] | <code>string</code> |  | Bottle size (e.g. Magnum) |
| [params.bottleInCellar] | <code>string</code> |  | ??? |
| [params.bottleLocation] | <code>string</code> |  | Location of the bottle |
| [params.storageCost] | <code>string</code> |  | Storage cost of the Wine |
| [params.ratingType] | <code>string</code> |  | Rating Type |
| [params.ratingValue] | <code>string</code> |  | Rating Value |
| [params.packingType] | <code>string</code> |  | Packing Type |
| [params.toDrinkStart] | <code>string</code> |  | Earliest date it is suitable to begin drinking (YYYY-MM-DD) |
| [params.toDrinkEnd] | <code>string</code> |  | Latest date to drink (YYYY-MM-DD) |
| [params.comments] | <code>object</code> |  | Object of Comments attached to the Wine |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the Wine |
| [params.references] | <code>object</code> | <code>{ AMaaS: Reference() }</code> | Object of References associated with the Wine. * The AMaaS Reference is auto-created and populated |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Wine |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Wine |
| [params.createdTime] | <code>date</code> |  | Time that the Wine created |
| [params.updatedTime] | <code>date</code> |  | Time that the Wine was updated |
| [params.version] | <code>number</code> |  | Version number |

<a name="module_assets.Sukuk"></a>

### assets.Sukuk ⇐ [<code>Asset</code>](#module_assets.Asset)
Class representing a Sukuk

**Kind**: static class of [<code>assets</code>](#module_assets)  
**Extends**: [<code>Asset</code>](#module_assets.Asset)  
<a name="new_module_assets.Sukuk_new"></a>

#### new Sukuk(params)
Construct a new Sukuk instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | Sukuk creation options: |
| params.assetManagerId | <code>number</code> |  | ID of Sukuk's Asset Manager __(required)__ |
| params.assetId | <code>number</code> |  | ID of the Sukuk __(required)__ |
| [params.assetClass] | <code>string</code> | <code>&quot;Sukuk&quot;</code> | Class of the Sukuk (a subclass of Sukuk may define its own assetClass) |
| [params.assetType] | <code>string</code> |  | Type of the Sukuk. Auto-set based on the class or subclass constructor |
| [params.assetTypeDisplay] | <code>string</code> |  | Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`) |
| [params.fungible] | <code>boolean</code> | <code>true</code> | Auto-set to `true` __(read-only)__ |
| [params.assetIssuerId] | <code>string</code> |  | ID of the Sukuk's issuer |
| [params.assetStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Sukuk |
| [params.countryId] | <code>string</code> |  | ID of Sukuk's country |
| [params.venueId] | <code>string</code> |  | ID of Sukuk's venue if applicable |
| [params.currency] | <code>string</code> |  | Sukuk currency (e.g. USD, SGD) |
| [params.issueDate] | <code>string</code> | <code>&quot;0001-01-01&quot;</code> | Issue date if applicable (YYYY-MM-DD) |
| [params.maturityDate] | <code>string</code> | <code>&quot;9999-12-31&quot;</code> | Maturity date if applicable (YYYY-MM-DD) |
| [params.description] | <code>string</code> |  | Description of the Sukuk |
| [params.displayName] | <code>string</code> |  | Display name of the Sukuk |
| [params.rollPrice] | <code>boolean</code> | <code>true</code> | Whether to roll the price for the Sukuk |
| [params.clientId] | <code>string</code> |  | ID of the associated client |
| [params.comments] | <code>object</code> |  | Object of Comments attached to the Sukuk |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the Sukuk |
| [params.references] | <code>object</code> | <code>{ AMaaS: Reference() }</code> | Object of References associated with the Sukuk. * The AMaaS Reference is auto-created and populated |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Sukuk |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Sukuk |
| [params.createdTime] | <code>date</code> |  | Time that the Sukuk was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Sukuk was updated |
| [params.version] | <code>number</code> |  | Version number |

<a name="module_assets.Synthetic"></a>

### assets.Synthetic ⇐ [<code>Asset</code>](#module_assets.Asset)
Class representing a Synthetic

**Kind**: static class of [<code>assets</code>](#module_assets)  
**Extends**: [<code>Asset</code>](#module_assets.Asset)  
<a name="new_module_assets.Synthetic_new"></a>

#### new Synthetic(params)
Construct a new Synthetic instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | Synthetic creation options: |
| params.assetManagerId | <code>number</code> |  | ID of Synthetic's Asset Manager __(required)__ |
| params.assetId | <code>number</code> |  | ID of the Asset __(required)__ |
| [params.assetClass] | <code>string</code> | <code>&quot;Synthetic&quot;</code> | Class of the Synthetic (a subclass of Synthetic may define its own assetClass) |
| [params.assetType] | <code>string</code> |  | Type of the Synthetic. Auto-set based on the class or subclass constructor |
| [params.assetTypeDisplay] | <code>string</code> |  | Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`) |
| [params.fungible] | <code>boolean</code> | <code>true</code> | Whether the Synthetic is fungible __(required)__ |
| [params.assetIssuerId] | <code>string</code> |  | ID of the Synthetic's issuer |
| [params.assetStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Synthetic |
| [params.countryId] | <code>string</code> |  | ID of Synthetic's country |
| [params.venueId] | <code>string</code> |  | ID of Synthetic's venue if applicable |
| [params.currency] | <code>string</code> |  | Synthetic currency (e.g. USD, SGD) |
| [params.issueDate] | <code>string</code> | <code>&quot;0001-01-01&quot;</code> | Issue date if applicable (YYYY-MM-DD) |
| [params.maturityDate] | <code>string</code> | <code>&quot;9999-12-31&quot;</code> | Maturity date if applicable (YYYY-MM-DD) |
| [params.description] | <code>string</code> |  | Description of the Synthetic |
| [params.displayName] | <code>string</code> |  | Display name of the Synthetic |
| [params.rollPrice] | <code>boolean</code> | <code>true</code> | Whether to roll the price for the Synthetic |
| [params.clientId] | <code>string</code> |  | ID of the associated client |
| [params.comments] | <code>object</code> |  | Object of Comments attached to the Synthetic |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the Synthetic |
| [params.references] | <code>object</code> | <code>{ AMaaS: Reference() }</code> | Object of References associated with the Synthetic |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Synthetic |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Synthetic |
| [params.createdTime] | <code>date</code> |  | Time that the Synthetic was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Synthetic was updated |
| [params.version] | <code>number</code> |  | Version number |

<a name="module_assets.SyntheticFromBook"></a>

### assets.SyntheticFromBook ⇐ [<code>Synthetic</code>](#module_assets.Synthetic)
Class representing a Synthetic From Book. This is an Asset whose value is based on the value of the assets in a referenced Book

**Kind**: static class of [<code>assets</code>](#module_assets)  
**Extends**: [<code>Synthetic</code>](#module_assets.Synthetic)  
<a name="new_module_assets.SyntheticFromBook_new"></a>

#### new SyntheticFromBook(params)
Construct a new Synthetic From Book instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | SyntheticFromBook creation options: |
| params.assetManagerId | <code>number</code> |  | ID of Synthetic's Asset Manager __(required)__ |
| params.assetId | <code>number</code> |  | ID of the Synthetic __(required)__ |
| [params.assetClass] | <code>string</code> | <code>&quot;Synthetic&quot;</code> | Auto-set to `Synthetic` __(read-only)__ |
| [params.assetType] | <code>string</code> |  | Type of the Synthetic. Auto-set based on the class or subclass constructor |
| [params.assetTypeDisplay] | <code>string</code> |  | Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`) |
| params.fungible | <code>boolean</code> | <code>true</code> | Whether this Synthetic is fungible __(required)__ |
| [params.assetIssuerId] | <code>string</code> |  | ID of the Synthetic's issuer |
| [params.assetStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Synthetic |
| [params.countryId] | <code>string</code> |  | ID of Synthetic's country |
| [params.venueId] | <code>string</code> |  | ID of Synthetic's venue if applicable |
| [params.currency] | <code>string</code> |  | Synthetic currency (e.g. USD, SGD) |
| [params.issueDate] | <code>string</code> | <code>&quot;0001-01-01&quot;</code> | Issue date if applicable (YYYY-MM-DD) |
| [params.maturityDate] | <code>string</code> | <code>&quot;9999-12-31&quot;</code> | Maturity date if applicable (YYYY-MM-DD) |
| [params.description] | <code>string</code> |  | Description of the Synthetic |
| [params.displayName] | <code>string</code> |  | Display name of the Synthetic |
| [params.rollPrice] | <code>boolean</code> | <code>false</code> | Auto-set to `false` __(read-only)__ |
| params.bookId | <code>string</code> |  | Underlying Book ID __(required)__ |
| [params.clientId] | <code>string</code> |  | ID of the associated client |
| [params.comments] | <code>object</code> |  | Object of Comments attached to the Synthetic |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the Synthetic |
| [params.references] | <code>object</code> | <code>{ AMaaS: Reference() }</code> | Object of References associated with the Synthetic. * The AMaaS Reference is auto-created and populated |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Synthetic |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Synthetic |
| [params.createdTime] | <code>date</code> |  | Time that the Synthetic was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Synthetic was updated |
| [params.version] | <code>number</code> |  | Version number |

<a name="module_assets.SyntheticMultiLeg"></a>

### assets.SyntheticMultiLeg ⇐ [<code>Synthetic</code>](#module_assets.Synthetic)
Class representing a Multi-Leg Synthetic. This is an Asset which takes multiple assets as 'legs'. The value of the entire structure is equal to the sum of the legs

**Kind**: static class of [<code>assets</code>](#module_assets)  
**Extends**: [<code>Synthetic</code>](#module_assets.Synthetic)  
<a name="new_module_assets.SyntheticMultiLeg_new"></a>

#### new SyntheticMultiLeg(params)
Construct a new Multi-Leg Synthetic instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | SyntheticMultiLeg creation options: |
| params.assetManagerId | <code>number</code> |  | ID of Synthetic's Asset Manager __(required)__ |
| params.assetId | <code>number</code> |  | ID of the Synthetic __(required)__ |
| [params.assetClass] | <code>string</code> | <code>&quot;Synthetic&quot;</code> | Auto-set to `Synthetic` __(read-only)__ |
| [params.assetType] | <code>string</code> |  | Type of the Synthetic. Auto-set based on the class or subclass constructor |
| [params.assetTypeDisplay] | <code>string</code> |  | Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`) |
| [params.fungible] | <code>boolean</code> | <code>true</code> | Whether this Asset is fungible __(required)__ |
| [params.assetIssuerId] | <code>string</code> |  | ID of the Synthetic's issuer |
| [params.assetStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Synthetic |
| [params.countryId] | <code>string</code> |  | ID of Synthetic's country |
| [params.venueId] | <code>string</code> |  | ID of Synthetic's venue if applicable |
| [params.currency] | <code>string</code> |  | Synthetic currency (e.g. USD, SGD) |
| [params.issueDate] | <code>string</code> | <code>&quot;0001-01-01&quot;</code> | Issue date if applicable (YYYY-MM-DD) |
| [params.maturityDate] | <code>string</code> | <code>&quot;9999-12-31&quot;</code> | Maturity date if applicable (YYYY-MM-DD) |
| [params.description] | <code>string</code> |  | Description of the Synthetic |
| [params.displayName] | <code>string</code> |  | Display name of the Synthetic |
| [params.rollPrice] | <code>boolean</code> | <code>false</code> | Auto-set to `false` __(read-only)__ |
| [params.clientId] | <code>string</code> |  | ID of the associated client |
| params.legs | <code>array</code> |  | Legs of the Synthetic. Array of objects of the form { assetId: `string`, quantity: `Decimal` } __(required)__ |
| [params.comments] | <code>object</code> |  | Object of Comments attached to the Synthetic |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the Synthetic |
| [params.references] | <code>object</code> | <code>{ AMaaS: Reference() }</code> | Object of References associated with the Synthetic |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Synthetic |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Synthetic |
| [params.createdTime] | <code>date</code> |  | Time that the Synthetic was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Synthetic was updated |
| [params.version] | <code>number</code> |  | Version number |

<a name="module_books"></a>

## books
Classes for the Books Service


* [books](#module_books)
    * [.Book](#module_books.Book) ⇐ [<code>AMaaSModel</code>](#module_core.AMaaSModel)
        * [new Book(params)](#new_module_books.Book_new)

<a name="module_books.Book"></a>

### books.Book ⇐ [<code>AMaaSModel</code>](#module_core.AMaaSModel)
Class representing a Book

**Kind**: static class of [<code>books</code>](#module_books)  
**Extends**: [<code>AMaaSModel</code>](#module_core.AMaaSModel)  
<a name="new_module_books.Book_new"></a>

#### new Book(params)
Construct a new Book object


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | Book creation options: |
| params.assetManagerId | <code>number</code> |  | ID of Book's Asset Manager __(required)__ |
| params.bookId | <code>string</code> |  | ID of this Book __(required)__ |
| params.bookType | <code>string</code> |  | Book Type<br /> Available options: <li>Counterparty</li> <li>Management</li> <li>Trading</li> <li>Wash</li> |
| [params.bookStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | status of Book |
| [params.ownerId] | <code>number</code> |  | ID of the owner of the Book (e.g. the Trader who is responsible for the Book) |
| [params.partyId] | <code>number</code> |  | ID of the party of which the activity being tracked belongs (e.g. Registered fund or HNWI) |
| [params.closeTime] | <code>string</code> | <code>&quot;17:30:00&quot;</code> | Book close time. This is stored as local time, to be referenced against timezone |
| [params.timezone] | <code>string</code> | <code>&quot;UTC&quot;</code> | Book's timezone (use this to determine absolute close time) |
| [params.baseCurrency] | <code>string</code> | <code>&quot;USD&quot;</code> | Base currency for the Book |
| [params.businessUnit] | <code>string</code> |  | A business unit to associate with the Book (e.g. Emerging Markets, Equities) |
| [params.description] | <code>string</code> |  | Description of the book |
| [params.positions] | <code>Array</code> |  | Array of objects [{asset_id: string, quantity: number}] |
| [params.createdBy] | <code>string</code> |  | ID of the user that created this object (required if creating a new Book) |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated this object (use if amending existing Book) |
| [params.createdTime] | <code>date</code> |  | Time that the Book was created (required if creating new Book) |
| [params.updatedTime] | <code>date</code> |  | Time that the Book was updated (required if amending existing Book) |
| [params.version] | <code>number</code> |  | Version number of the Book |

<a name="module_children"></a>

## children
These are general children classes used in a variety of places


* [children](#module_children)
    * [.PartyChild](#module_children.PartyChild) ⇐ [<code>AMaaSModel</code>](#module_core.AMaaSModel)
        * [new PartyChild(params)](#new_module_children.PartyChild_new)

<a name="module_children.PartyChild"></a>

### children.PartyChild ⇐ [<code>AMaaSModel</code>](#module_core.AMaaSModel)
Class representing a Party (a Transaction children type)

**Kind**: static class of [<code>children</code>](#module_children)  
**Extends**: [<code>AMaaSModel</code>](#module_core.AMaaSModel)  
<a name="new_module_children.PartyChild_new"></a>

#### new PartyChild(params)
Construct a new PartyChild object


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | PartyChild creation options: |
| params.partyId | <code>string</code> | ID of the linked Party |
| [params.createdBy] | <code>string</code> | ID of the user that created the linked Party |
| [params.updatedBy] | <code>string</code> | ID of the user that updated the linked Party |
| [params.createdTime] | <code>date</code> | Time that the linked Party was created |
| [params.updatedTime] | <code>date</code> | Time that the linked Party was updated |
| [params.version] | <code>number</code> | Version number of the linked Party |

<a name="module_corporateActions"></a>

## corporateActions
Classes for the CorporateActions Service


* [corporateActions](#module_corporateActions)
    * [.CorporateAction](#module_corporateActions.CorporateAction) ⇐ [<code>AMaaSModel</code>](#module_core.AMaaSModel)
    * [.Dividend](#module_corporateActions.Dividend) ⇐ <code>module:coporateActions.CorporateAction</code>
    * [.Notification](#module_corporateActions.Notification) ⇐ [<code>CorporateAction</code>](#module_corporateActions.CorporateAction)
    * [.Split](#module_corporateActions.Split) ⇐ [<code>CorporateAction</code>](#module_corporateActions.CorporateAction)

<a name="module_corporateActions.CorporateAction"></a>

### corporateActions.CorporateAction ⇐ [<code>AMaaSModel</code>](#module_core.AMaaSModel)
Class representing a Corporate Actions

**Kind**: static class of [<code>corporateActions</code>](#module_corporateActions)  
**Extends**: [<code>AMaaSModel</code>](#module_core.AMaaSModel)  
<a name="module_corporateActions.Dividend"></a>

### corporateActions.Dividend ⇐ <code>module:coporateActions.CorporateAction</code>
Class representing a Dividend

**Kind**: static class of [<code>corporateActions</code>](#module_corporateActions)  
**Extends**: <code>module:coporateActions.CorporateAction</code>  
<a name="module_corporateActions.Notification"></a>

### corporateActions.Notification ⇐ [<code>CorporateAction</code>](#module_corporateActions.CorporateAction)
Class representing a Notification

**Kind**: static class of [<code>corporateActions</code>](#module_corporateActions)  
**Extends**: [<code>CorporateAction</code>](#module_corporateActions.CorporateAction)  
<a name="module_corporateActions.Split"></a>

### corporateActions.Split ⇐ [<code>CorporateAction</code>](#module_corporateActions.CorporateAction)
Class representing a Split

**Kind**: static class of [<code>corporateActions</code>](#module_corporateActions)  
**Extends**: [<code>CorporateAction</code>](#module_corporateActions.CorporateAction)  
<a name="module_monitor"></a>

## monitor
Classes for the Monitor Service


* [monitor](#module_monitor)
    * [.Event](#module_monitor.Event) ⇐ [<code>AMaaSModel</code>](#module_core.AMaaSModel)
        * [new Event(params)](#new_module_monitor.Event_new)
    * [.Item](#module_monitor.Item) ⇐ [<code>AMaaSModel</code>](#module_core.AMaaSModel)
        * [new Item(params)](#new_module_monitor.Item_new)

<a name="module_monitor.Event"></a>

### monitor.Event ⇐ [<code>AMaaSModel</code>](#module_core.AMaaSModel)
Class representing a Monitor Event

**Kind**: static class of [<code>monitor</code>](#module_monitor)  
**Extends**: [<code>AMaaSModel</code>](#module_core.AMaaSModel)  
<a name="new_module_monitor.Event_new"></a>

#### new Event(params)
Construct a new Monitor Event instance


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | Event creation options: |
| params.assetManagerId | <code>number</code> | Asset Manager ID of the owner of the Event |
| params.eventId | <code>string</code> | ID of the Event |
| params.linkId | <code>string</code> | ID of the relevant resouce based on the `linkSource` (e.g. transactionId, assetId, partyId) |
| params.linkSource | <code>string</code> | Service that the Event is from.<br /> Available Options: <li>Transactions</li> <li>Assets</li> <li>Parties</li> |
| params.eventType | <code>string</code> | The Event type.<br /> Available Options: <li>Internal</li> <li>External</li> |
| params.eventStart | <code>string</code> | Start date and time of the event |
| params.eventEnd | <code>string</code> | End date and time of the event |
| params.eventStatus | <code>string</code> | Status of the event.<br /> Available Options: <li>Open</li> <li>Closed</li> |
| params.title | <code>string</code> | Title of the Event |
| params.description | <code>string</code> | Description of the Event |
| params.internalId | <code>number</code> | Internal ID of the Event *(set server side)* |
| params.clientId | <code>number</code> | Client ID *(set server side)* |
| [params.createdBy] | <code>string</code> | Who the Event was created by *(set server side)* |
| [params.createdTime] | <code>string</code> | When the Event was created *(set server side)* |
| [params.updatedBy] | <code>string</code> | Who the Event was last updated by *(set server side)* |
| [params.updatedTime] | <code>string</code> | When the Event was last updated *(set server side)* |
| [params.version] | <code>number</code> | version *(set server side)* |

<a name="module_monitor.Item"></a>

### monitor.Item ⇐ [<code>AMaaSModel</code>](#module_core.AMaaSModel)
Class representing a Monitor Item

**Kind**: static class of [<code>monitor</code>](#module_monitor)  
**Extends**: [<code>AMaaSModel</code>](#module_core.AMaaSModel)  
<a name="new_module_monitor.Item_new"></a>

#### new Item(params)
Construct a new Monitor item


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | Item creation options: |
| params.assetManagerId | <code>number</code> | Asset Manager ID of owner |
| params.itemId | <code>string</code> | Monitor Item ID |
| params.itemClass | <code>string</code> | Class of the Monitor Item<br /> Available Options:  <li>Exception</li> <li>Notification</li> |
| params.itemType | <code>string</code> | Type of Monitor Item |
| params.itemLevel | <code>string</code> | Level of Monitor Item<br/> Available options: <li>Info</li> <li>Warning</li> <li>Error</li> <li>Critical</li> |
| params.itemSource | <code>string</code> | Source of the Monitor Item |
| params.message | <code>message</code> | Message attached to the item |
| params.itemStatus | <code>string</code> | Status of the Item<br/> Available options: <li>Open</li> <li>Closed</li> <li>Resubmitted</li> <li>Superseded</li> |
| params.assetBookId | <code>string</code> | Book ID associated with the Monitor Item |
| params.transactionId | <code>string</code> | Transaction ID associated with the Monitor Item |
| params.assetId | <code>string</code> | Asset ID associated with the Monitor Item |
| params.itemDate | <code>string</code> | Date of the Monitor Item |

<a name="module_parties"></a>

## parties
Classes for the Parties service


* [parties](#module_parties)
    * [.AssetManager](#module_parties.AssetManager) ⇐ [<code>Company</code>](#module_parties.Company)
        * [new AssetManager(params)](#new_module_parties.AssetManager_new)
        * [.upsertAddress(type, address)](#module_parties.Party+upsertAddress)
        * [.upsertEmail(type, email)](#module_parties.Party+upsertEmail)
    * [.Broker](#module_parties.Broker) ⇐ [<code>Company</code>](#module_parties.Company)
        * [new Broker(params)](#new_module_parties.Broker_new)
        * [.upsertAddress(type, address)](#module_parties.Party+upsertAddress)
        * [.upsertEmail(type, email)](#module_parties.Party+upsertEmail)
    * [.Address](#module_parties.Address) ⇐ [<code>AMaaSModel</code>](#module_core.AMaaSModel)
        * [new Address(params)](#new_module_parties.Address_new)
    * [.Email](#module_parties.Email) ⇐ [<code>AMaaSModel</code>](#module_core.AMaaSModel)
        * [new Email(params)](#new_module_parties.Email_new)
    * [.Company](#module_parties.Company) ⇐ [<code>Organisation</code>](#module_parties.Organisation)
        * [new Company(params)](#new_module_parties.Company_new)
        * [.upsertAddress(type, address)](#module_parties.Party+upsertAddress)
        * [.upsertEmail(type, email)](#module_parties.Party+upsertEmail)
    * [.Exchange](#module_parties.Exchange) ⇐ [<code>Company</code>](#module_parties.Company)
        * [new Exchange(params)](#new_module_parties.Exchange_new)
        * [.upsertAddress(type, address)](#module_parties.Party+upsertAddress)
        * [.upsertEmail(type, email)](#module_parties.Party+upsertEmail)
    * [.Fund](#module_parties.Fund) ⇐ [<code>Company</code>](#module_parties.Company)
        * [new Fund(params)](#new_module_parties.Fund_new)
        * [.upsertAddress(type, address)](#module_parties.Party+upsertAddress)
        * [.upsertEmail(type, email)](#module_parties.Party+upsertEmail)
    * [.GovernmentAgency](#module_parties.GovernmentAgency) ⇐ [<code>Organisation</code>](#module_parties.Organisation)
        * [new GovernmentAgency(params)](#new_module_parties.GovernmentAgency_new)
        * [.upsertAddress(type, address)](#module_parties.Party+upsertAddress)
        * [.upsertEmail(type, email)](#module_parties.Party+upsertEmail)
    * [.Individual](#module_parties.Individual) ⇐ [<code>Party</code>](#module_parties.Party)
        * [new Individual(params)](#new_module_parties.Individual_new)
        * [.upsertAddress(type, address)](#module_parties.Party+upsertAddress)
        * [.upsertEmail(type, email)](#module_parties.Party+upsertEmail)
    * [.Organisation](#module_parties.Organisation) ⇐ [<code>Party</code>](#module_parties.Party)
        * [new Organisation(params)](#new_module_parties.Organisation_new)
        * [.upsertAddress(type, address)](#module_parties.Party+upsertAddress)
        * [.upsertEmail(type, email)](#module_parties.Party+upsertEmail)
    * [.Party](#module_parties.Party) ⇐ [<code>AMaaSModel</code>](#module_core.AMaaSModel)
        * [new Party(params)](#new_module_parties.Party_new)
        * [.upsertAddress(type, address)](#module_parties.Party+upsertAddress)
        * [.upsertEmail(type, email)](#module_parties.Party+upsertEmail)
    * [.SubFund](#module_parties.SubFund) ⇐ [<code>Party</code>](#module_parties.Party)
        * [new SubFund(params)](#new_module_parties.SubFund_new)
        * [.upsertAddress(type, address)](#module_parties.Party+upsertAddress)
        * [.upsertEmail(type, email)](#module_parties.Party+upsertEmail)

<a name="module_parties.AssetManager"></a>

### parties.AssetManager ⇐ [<code>Company</code>](#module_parties.Company)
Class representing an Asset Manager

**Kind**: static class of [<code>parties</code>](#module_parties)  
**Extends**: [<code>Company</code>](#module_parties.Company)  

* [.AssetManager](#module_parties.AssetManager) ⇐ [<code>Company</code>](#module_parties.Company)
    * [new AssetManager(params)](#new_module_parties.AssetManager_new)
    * [.upsertAddress(type, address)](#module_parties.Party+upsertAddress)
    * [.upsertEmail(type, email)](#module_parties.Party+upsertEmail)

<a name="new_module_parties.AssetManager_new"></a>

#### new AssetManager(params)
Construct a new Asset Manager instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | Asset Manager creation options |
| params.assetManagerId | <code>number</code> |  | Asset Manager ID of the Asset Manager |
| params.partyId | <code>string</code> |  | Party ID of the Asset Manager |
| params.partyStatus | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Asset Manager (e.g. 'Active') |
| params.baseCurrency | <code>string</code> |  | Base Currency of the Asset Manager (e.g. SGD, USD) |
| params.description | <code>string</code> |  | Description of the Asset Manager |
| [params.licenseNumber] | <code>string</code> |  | Company license number (if applicable) |
| [params.licenseType] | <code>string</code> |  | Company license type |
| [params.assetsUnderManagement] | <code>string</code> |  | Value of assets under management |
| [params.registrationNumber] | <code>string</code> |  | Business registration number (if applicable) |
| [params.yearOfIncorporation] | <code>string</code> |  | Year of incorporation |
| [params.contactNumber] | <code>string</code> |  | Contact number |
| params.addresses | <code>object</code> |  | Object of Addresses associated with this Asset Manager |
| params.emails | <code>object</code> |  | Object of Emails associated with this Asset Manager |
| params.references | <code>object</code> |  | Object of References associated with this Asset Manager |
| params.comments | <code>object</code> |  | Object of Comments associated with the Asset Manager |
| params.links | <code>object</code> |  | Object of Links associated with the Asset Manager |
| params.legalName- | <code>string</code> |  | Legal name of the Asset Manager associated with this party |
| params.displayName | <code>string</code> |  | Display name of the Asset Manager associated with this party |
| params.url | <code>string</code> |  | Url of this Party |
| params.createdBy | <code>string</code> |  | ID of the user that created the Asset Manager |
| params.updatedBy | <code>string</code> |  | ID of the user that updated the Asset Manager |
| params.createdTime | <code>date</code> |  | Time that the Asset Manager was created |
| params.updatedTime | <code>date</code> |  | Time that the Asset Manager was updated |
| params.version | <code>number</code> |  | Version number of the Asset Manager |

<a name="module_parties.Party+upsertAddress"></a>

#### assetManager.upsertAddress(type, address)
Upsert an Address

**Kind**: instance method of [<code>AssetManager</code>](#module_parties.AssetManager)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of Address (e.g. 'Registered', 'Legal') |
| address | <code>Address</code> | new Address. Note that the new Address cannot be primary if a primary Address already exists. Use this.addresses setter to replace primary Addresses (??) |

<a name="module_parties.Party+upsertEmail"></a>

#### assetManager.upsertEmail(type, email)
Upsert an Email

**Kind**: instance method of [<code>AssetManager</code>](#module_parties.AssetManager)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of Email (e.g. 'Work', 'Support') |
| email | <code>Emails</code> | new Email. Note that the new Email cannot be primary if a primary Email already exists. Use this.emails setter to replace primary Emails (??) |

<a name="module_parties.Broker"></a>

### parties.Broker ⇐ [<code>Company</code>](#module_parties.Company)
Class representing a Broker

**Kind**: static class of [<code>parties</code>](#module_parties)  
**Extends**: [<code>Company</code>](#module_parties.Company)  

* [.Broker](#module_parties.Broker) ⇐ [<code>Company</code>](#module_parties.Company)
    * [new Broker(params)](#new_module_parties.Broker_new)
    * [.upsertAddress(type, address)](#module_parties.Party+upsertAddress)
    * [.upsertEmail(type, email)](#module_parties.Party+upsertEmail)

<a name="new_module_parties.Broker_new"></a>

#### new Broker(params)
Construct a new Broker instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | Broker creation options: |
| params.assetManagerId | <code>number</code> |  | Asset Manager ID of the Broker __(required)__ |
| params.partyId | <code>string</code> |  | Party ID of the Broker __(required)__ |
| [params.partyStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Broker |
| [params.baseCurrency] | <code>string</code> |  | Base Currency of the Broker (e.g. SGD, USD) |
| [params.description] | <code>string</code> |  | Description of the Broker |
| [params.licenseNumber] | <code>string</code> |  | Company license number (if applicable) |
| [params.licenseType] | <code>string</code> |  | Company license type |
| [params.assetsUnderManagement] | <code>string</code> |  | Value of assets under management |
| [params.registrationNumber] | <code>string</code> |  | Business registration number (if applicable) |
| [params.yearOfIncorporation] | <code>string</code> |  | Year of incorporation |
| [params.contactNumber] | <code>string</code> |  | Contact number |
| [params.addresses] | <code>object</code> |  | Object of Addresses associated with the Broker |
| [params.emails] | <code>object</code> |  | Object of Emails associated with the Broker |
| [params.references] | <code>object</code> |  | Object of References associated with the Broker |
| [params.comments] | <code>object</code> |  | Object of Comments associated with the Broker |
| [params.links] | <code>object</code> |  | Object of Links associated with the Broker |
| [params.legalName] | <code>string</code> |  | Legal name of the Asset Manager associated with this party |
| [params.displayName] | <code>string</code> |  | Display name of the Asset Manager associated with this party |
| [params.url] | <code>string</code> |  | Url of this Party |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Broker |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Broker |
| [params.createdTime] | <code>date</code> |  | Time that the Broker was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Broker was updated |
| [params.version] | <code>number</code> |  | Version number of the Broker |

<a name="module_parties.Party+upsertAddress"></a>

#### broker.upsertAddress(type, address)
Upsert an Address

**Kind**: instance method of [<code>Broker</code>](#module_parties.Broker)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of Address (e.g. 'Registered', 'Legal') |
| address | <code>Address</code> | new Address. Note that the new Address cannot be primary if a primary Address already exists. Use this.addresses setter to replace primary Addresses (??) |

<a name="module_parties.Party+upsertEmail"></a>

#### broker.upsertEmail(type, email)
Upsert an Email

**Kind**: instance method of [<code>Broker</code>](#module_parties.Broker)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of Email (e.g. 'Work', 'Support') |
| email | <code>Emails</code> | new Email. Note that the new Email cannot be primary if a primary Email already exists. Use this.emails setter to replace primary Emails (??) |

<a name="module_parties.Address"></a>

### parties.Address ⇐ [<code>AMaaSModel</code>](#module_core.AMaaSModel)
Class representing an Address

**Kind**: static class of [<code>parties</code>](#module_parties)  
**Extends**: [<code>AMaaSModel</code>](#module_core.AMaaSModel)  
<a name="new_module_parties.Address_new"></a>

#### new Address(params)
Construct a new Address instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | Address creation options |
| [params.addressPrimary] | <code>boolean</code> | <code>false</code> | Flag for whether Address is primary for its owner. If a Party has Addresses, at least one must be primary |
| params.lineOne | <code>string</code> |  | First line of the Address |
| params.lineTwo | <code>string</code> |  | Second line of the Address |
| params.city | <code>string</code> |  | City of the Address |
| params.region | <code>string</code> |  | Region of the Address |
| params.postalCode | <code>string</code> |  | Postal code of the Address |
| params.countryId | <code>string</code> |  | Country of the Address |
| params.active | <code>boolean</code> |  | Whether this Address is active for its owner |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Address |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Address |
| [params.createdTime] | <code>date</code> |  | Time that the Address was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Address was updated |
| [params.version] | <code>number</code> |  | Version number of the Address |

<a name="module_parties.Email"></a>

### parties.Email ⇐ [<code>AMaaSModel</code>](#module_core.AMaaSModel)
Class representing an Email

**Kind**: static class of [<code>parties</code>](#module_parties)  
**Extends**: [<code>AMaaSModel</code>](#module_core.AMaaSModel)  
<a name="new_module_parties.Email_new"></a>

#### new Email(params)
Construct a new Email object


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | Email creation options: |
| params.emailPrimary | <code>boolean</code> | Whether the Email is primary for its owner. If a Party has Emails, at least one must be primary |
| params.email | <code>string</code> | Email address |
| params.active | <code>boolean</code> | Whether the Email is active for its owner |
| [params.createdBy] | <code>string</code> | ID of the user that created the Email |
| [params.updatedBy] | <code>string</code> | ID of the user that updated the Email |
| [params.createdTime] | <code>date</code> | Time that the Email was created |
| [params.updatedTime] | <code>date</code> | Time that the Email was updated |
| [params.version] | <code>number</code> | Version number of the Email |

<a name="module_parties.Company"></a>

### parties.Company ⇐ [<code>Organisation</code>](#module_parties.Organisation)
Class representing a Company

**Kind**: static class of [<code>parties</code>](#module_parties)  
**Extends**: [<code>Organisation</code>](#module_parties.Organisation)  

* [.Company](#module_parties.Company) ⇐ [<code>Organisation</code>](#module_parties.Organisation)
    * [new Company(params)](#new_module_parties.Company_new)
    * [.upsertAddress(type, address)](#module_parties.Party+upsertAddress)
    * [.upsertEmail(type, email)](#module_parties.Party+upsertEmail)

<a name="new_module_parties.Company_new"></a>

#### new Company(params)
Construct a new Company instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | Company creation options: |
| params.assetManagerId | <code>number</code> |  | Asset Manager ID of the Company __(required)__ |
| params.partyId | <code>string</code> |  | Party ID of the Company __(required)__ |
| [params.partyStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Company |
| [params.partyClass] | <code>string</code> | <code>&quot;Company&quot;</code> | Class of the Company (a subclass of Company may define its own partyClass) |
| [params.baseCurrency] | <code>string</code> |  | Base Currency of the Company (e.g. SGD, USD) |
| [params.description] | <code>string</code> |  | Description of the Company |
| [params.licenseNumber] | <code>string</code> |  | Company license number (if applicable) |
| [params.licenseType] | <code>string</code> |  | Company license type |
| [params.assetsUnderManagement] | <code>string</code> |  | Value of assets under management |
| [params.registrationNumber] | <code>string</code> |  | Business registration number (if applicable) |
| [params.yearOfIncorporation] | <code>string</code> |  | Year of incorporation |
| [params.contactNumber] | <code>string</code> |  | Contact number |
| [params.addresses] | <code>object</code> |  | Object of Addresses associated with the Company |
| [params.emails] | <code>object</code> |  | Object of Emails associated with the Company |
| [params.references] | <code>object</code> |  | Object of References associated with the Company |
| [params.comments] | <code>object</code> |  | Object of Comments associated with the Company |
| [params.links] | <code>object</code> |  | Object of Links associated with the Company |
| [params.legalName] | <code>string</code> |  | Legal name of the Asset Manager associated with this party |
| [params.displayName] | <code>string</code> |  | Display name of the Asset Manager associated with this party |
| [params.url] | <code>string</code> |  | Url of this Party |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Company |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Company |
| [params.createdTime] | <code>date</code> |  | Time that the Company was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Company was updated |
| [params.version] | <code>number</code> |  | Version number of the Company |

<a name="module_parties.Party+upsertAddress"></a>

#### company.upsertAddress(type, address)
Upsert an Address

**Kind**: instance method of [<code>Company</code>](#module_parties.Company)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of Address (e.g. 'Registered', 'Legal') |
| address | <code>Address</code> | new Address. Note that the new Address cannot be primary if a primary Address already exists. Use this.addresses setter to replace primary Addresses (??) |

<a name="module_parties.Party+upsertEmail"></a>

#### company.upsertEmail(type, email)
Upsert an Email

**Kind**: instance method of [<code>Company</code>](#module_parties.Company)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of Email (e.g. 'Work', 'Support') |
| email | <code>Emails</code> | new Email. Note that the new Email cannot be primary if a primary Email already exists. Use this.emails setter to replace primary Emails (??) |

<a name="module_parties.Exchange"></a>

### parties.Exchange ⇐ [<code>Company</code>](#module_parties.Company)
Class representing an Exchange

**Kind**: static class of [<code>parties</code>](#module_parties)  
**Extends**: [<code>Company</code>](#module_parties.Company)  

* [.Exchange](#module_parties.Exchange) ⇐ [<code>Company</code>](#module_parties.Company)
    * [new Exchange(params)](#new_module_parties.Exchange_new)
    * [.upsertAddress(type, address)](#module_parties.Party+upsertAddress)
    * [.upsertEmail(type, email)](#module_parties.Party+upsertEmail)

<a name="new_module_parties.Exchange_new"></a>

#### new Exchange(params)
Construct a new Exchange instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | Exchange creation options: |
| params.assetManagerId | <code>number</code> |  | Asset Manager ID of the Exchange __(required)__ |
| params.partyId | <code>string</code> |  | Party ID of the Exchange __(required)__ |
| [params.partyStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Exchange |
| [params.baseCurrency] | <code>string</code> |  | Base Currency of the Exchange (e.g. SGD, USD) |
| [params.description] | <code>string</code> |  | Description of the Exchange |
| [params.licenseNumber] | <code>string</code> |  | Company license number (if applicable) |
| [params.licenseType] | <code>string</code> |  | Company license type |
| [params.assetsUnderManagement] | <code>string</code> |  | Value of assets under management |
| [params.registrationNumber] | <code>string</code> |  | Business registration number (if applicable) |
| [params.yearOfIncorporation] | <code>string</code> |  | Year of incorporation |
| [params.contactNumber] | <code>string</code> |  | Contact number |
| [params.addresses] | <code>object</code> |  | Object of Addresses associated with the Exchange |
| [params.emails] | <code>object</code> |  | Object of Emails associated with the Exchange |
| [params.references] | <code>object</code> |  | Object of References associated with the Exchange |
| [params.comments] | <code>object</code> |  | Object of Comments associated with the Exchange |
| [params.links] | <code>object</code> |  | Object of Links associated with the Exchange |
| [params.legalName] | <code>string</code> |  | Legal name of the Asset Manager associated with this party |
| [params.displayName] | <code>string</code> |  | Display name of the Asset Manager associated with this party |
| [params.url] | <code>string</code> |  | Url of this Party |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Exchange |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Exchange |
| [params.createdTime] | <code>date</code> |  | Time that the Exchange was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Exchange was updated |
| [params.version] | <code>number</code> |  | Version number of the Exchange |

<a name="module_parties.Party+upsertAddress"></a>

#### exchange.upsertAddress(type, address)
Upsert an Address

**Kind**: instance method of [<code>Exchange</code>](#module_parties.Exchange)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of Address (e.g. 'Registered', 'Legal') |
| address | <code>Address</code> | new Address. Note that the new Address cannot be primary if a primary Address already exists. Use this.addresses setter to replace primary Addresses (??) |

<a name="module_parties.Party+upsertEmail"></a>

#### exchange.upsertEmail(type, email)
Upsert an Email

**Kind**: instance method of [<code>Exchange</code>](#module_parties.Exchange)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of Email (e.g. 'Work', 'Support') |
| email | <code>Emails</code> | new Email. Note that the new Email cannot be primary if a primary Email already exists. Use this.emails setter to replace primary Emails (??) |

<a name="module_parties.Fund"></a>

### parties.Fund ⇐ [<code>Company</code>](#module_parties.Company)
Class representing a Fund

**Kind**: static class of [<code>parties</code>](#module_parties)  
**Extends**: [<code>Company</code>](#module_parties.Company)  

* [.Fund](#module_parties.Fund) ⇐ [<code>Company</code>](#module_parties.Company)
    * [new Fund(params)](#new_module_parties.Fund_new)
    * [.upsertAddress(type, address)](#module_parties.Party+upsertAddress)
    * [.upsertEmail(type, email)](#module_parties.Party+upsertEmail)

<a name="new_module_parties.Fund_new"></a>

#### new Fund(params)
Construct a new Fund instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | Fund creation options: |
| params.assetManagerId | <code>number</code> |  | Asset Manager ID of the Fund __(required)__ |
| params.partyId | <code>string</code> |  | Party ID of the Fund __(required)__ |
| [params.partyStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Fund |
| [params.baseCurrency] | <code>string</code> |  | Base Currency of the Fund (e.g. SGD, USD) |
| [params.description] | <code>string</code> |  | Description of the Fund |
| [params.licenseNumber] | <code>string</code> |  | Company license number (if applicable) |
| [params.licenseType] | <code>string</code> |  | Company license type |
| [params.assetsUnderManagement] | <code>string</code> |  | Value of assets under management |
| [params.registrationNumber] | <code>string</code> |  | Business registration number (if applicable) |
| [params.yearOfIncorporation] | <code>string</code> |  | Year of incorporation |
| [params.contactNumber] | <code>string</code> |  | Contact number |
| [params.addresses] | <code>object</code> |  | Object of Addresses associated with the Fund |
| [params.emails] | <code>object</code> |  | Object of Emails associated with the Fund |
| [params.references] | <code>object</code> |  | Object of References associated with the Fund |
| [params.comments] | <code>object</code> |  | Object of Comments associated with the Fund |
| [params.links] | <code>object</code> |  | Object of Links associated with the Fund |
| [params.legalName] | <code>string</code> |  | Legal name of the Asset Manager associated with this party |
| [params.displayName] | <code>string</code> |  | Display name of the Asset Manager associated with this party |
| [params.url] | <code>string</code> |  | Url of this Party |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Fund |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Fund |
| [params.createdTime] | <code>date</code> |  | Time that the Fund was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Fund was updated |
| [params.version] | <code>number</code> |  | Version number of the Fund |

<a name="module_parties.Party+upsertAddress"></a>

#### fund.upsertAddress(type, address)
Upsert an Address

**Kind**: instance method of [<code>Fund</code>](#module_parties.Fund)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of Address (e.g. 'Registered', 'Legal') |
| address | <code>Address</code> | new Address. Note that the new Address cannot be primary if a primary Address already exists. Use this.addresses setter to replace primary Addresses (??) |

<a name="module_parties.Party+upsertEmail"></a>

#### fund.upsertEmail(type, email)
Upsert an Email

**Kind**: instance method of [<code>Fund</code>](#module_parties.Fund)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of Email (e.g. 'Work', 'Support') |
| email | <code>Emails</code> | new Email. Note that the new Email cannot be primary if a primary Email already exists. Use this.emails setter to replace primary Emails (??) |

<a name="module_parties.GovernmentAgency"></a>

### parties.GovernmentAgency ⇐ [<code>Organisation</code>](#module_parties.Organisation)
Class representing a Government Agency

**Kind**: static class of [<code>parties</code>](#module_parties)  
**Extends**: [<code>Organisation</code>](#module_parties.Organisation)  

* [.GovernmentAgency](#module_parties.GovernmentAgency) ⇐ [<code>Organisation</code>](#module_parties.Organisation)
    * [new GovernmentAgency(params)](#new_module_parties.GovernmentAgency_new)
    * [.upsertAddress(type, address)](#module_parties.Party+upsertAddress)
    * [.upsertEmail(type, email)](#module_parties.Party+upsertEmail)

<a name="new_module_parties.GovernmentAgency_new"></a>

#### new GovernmentAgency(params)
Construct a new Government Agency instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | Government Agency creation options: |
| params.assetManagerId | <code>number</code> |  | Asset Manager ID of the Government Agency __(required)__ |
| params.partyId | <code>string</code> |  | Party ID of the Government Agency __(required)__ |
| [params.partyStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Government Agency |
| [params.partyClass] | <code>string</code> | <code>&quot;Organisation&quot;</code> | Class of the Government Agency (a subclass of Organisation may define its own partyClass) |
| [params.baseCurrency] | <code>string</code> |  | Base Currency of the Government Agency |
| [params.description] | <code>string</code> |  | Description of the Government Agency |
| [params.addresses] | <code>object</code> |  | Object of Addresses associated with the Government Agency |
| [params.emails] | <code>object</code> |  | Object of Emails associated with the Government Agency |
| [params.references] | <code>object</code> |  | Object of References associated with the Government Agency |
| [params.comments] | <code>object</code> |  | Object of Comments associated with the Government Agency |
| [params.links] | <code>object</code> |  | Object of Links associated with the Government Agency |
| [params.legalName] | <code>string</code> |  | Legal name of the Asset Manager associated with this party |
| [params.displayName] | <code>string</code> |  | Display name of the Asset Manager associated with this party |
| [params.url] | <code>string</code> |  | Url of this Party |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Government Agency |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Government Agency |
| [params.createdTime] | <code>date</code> |  | Time that the Government Agency was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Government Agency was updated |
| [params.version] | <code>number</code> |  | Version number of the Government Agency |

<a name="module_parties.Party+upsertAddress"></a>

#### governmentAgency.upsertAddress(type, address)
Upsert an Address

**Kind**: instance method of [<code>GovernmentAgency</code>](#module_parties.GovernmentAgency)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of Address (e.g. 'Registered', 'Legal') |
| address | <code>Address</code> | new Address. Note that the new Address cannot be primary if a primary Address already exists. Use this.addresses setter to replace primary Addresses (??) |

<a name="module_parties.Party+upsertEmail"></a>

#### governmentAgency.upsertEmail(type, email)
Upsert an Email

**Kind**: instance method of [<code>GovernmentAgency</code>](#module_parties.GovernmentAgency)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of Email (e.g. 'Work', 'Support') |
| email | <code>Emails</code> | new Email. Note that the new Email cannot be primary if a primary Email already exists. Use this.emails setter to replace primary Emails (??) |

<a name="module_parties.Individual"></a>

### parties.Individual ⇐ [<code>Party</code>](#module_parties.Party)
Class representing an Individual

**Kind**: static class of [<code>parties</code>](#module_parties)  
**Extends**: [<code>Party</code>](#module_parties.Party)  

* [.Individual](#module_parties.Individual) ⇐ [<code>Party</code>](#module_parties.Party)
    * [new Individual(params)](#new_module_parties.Individual_new)
    * [.upsertAddress(type, address)](#module_parties.Party+upsertAddress)
    * [.upsertEmail(type, email)](#module_parties.Party+upsertEmail)

<a name="new_module_parties.Individual_new"></a>

#### new Individual(params)
Construct a new Individual instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | Individual creation options: |
| params.assetManagerId | <code>number</code> |  | Asset Manager ID of the Individual __(required)__ |
| params.partyId | <code>string</code> |  | Party ID of the Individual __(required)__ |
| [params.partyStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Individual |
| [params.partyClass] | <code>string</code> | <code>&quot;Individual&quot;</code> | Class of the Individual (a subclass of Individual may define its own partyClass) |
| [params.baseCurrency] | <code>string</code> |  | Base Currency of the Individual (e.g. SGD, USD) |
| [params.description] | <code>string</code> |  | Description of the Individual |
| params.givenNames | <code>string</code> |  | Individual's given names |
| params.surname | <code>string</code> |  | Individual's surname |
| params.dateOfBirth | <code>string</code> |  | Individual's date of birth (YYYY-MM-DD) |
| [params.title] | <code>string</code> |  | Individual's title (e.g. Mr, Mrs, Ms, etc.) |
| [params.department] | <code>string</code> |  | Individual's department |
| [params.role] | <code>string</code> |  | Individual's role |
| [params.contactNumber] | <code>string</code> |  | Individual's contact number |
| [params.addresses] | <code>object</code> |  | Object of Addresses associated with the Individual |
| [params.emails] | <code>object</code> |  | Object of Emails associated with the Individual |
| [params.references] | <code>object</code> |  | Object of References associated with the Individual |
| [params.comments] | <code>object</code> |  | Object of Comments associated with the Individual |
| [params.links] | <code>object</code> |  | Object of Links associated with the Individual |
| [params.legalName] | <code>string</code> |  | Legal name of the Asset Manager associated with this party |
| [params.displayName] | <code>string</code> |  | Display name of the Asset Manager associated with this party |
| [params.url] | <code>string</code> |  | Url of this Party |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Individual |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Individual |
| [params.createdTime] | <code>date</code> |  | Time that the Individual was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Individual was updated |
| [params.version] | <code>number</code> |  | Version number of the Individual |

<a name="module_parties.Party+upsertAddress"></a>

#### individual.upsertAddress(type, address)
Upsert an Address

**Kind**: instance method of [<code>Individual</code>](#module_parties.Individual)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of Address (e.g. 'Registered', 'Legal') |
| address | <code>Address</code> | new Address. Note that the new Address cannot be primary if a primary Address already exists. Use this.addresses setter to replace primary Addresses (??) |

<a name="module_parties.Party+upsertEmail"></a>

#### individual.upsertEmail(type, email)
Upsert an Email

**Kind**: instance method of [<code>Individual</code>](#module_parties.Individual)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of Email (e.g. 'Work', 'Support') |
| email | <code>Emails</code> | new Email. Note that the new Email cannot be primary if a primary Email already exists. Use this.emails setter to replace primary Emails (??) |

<a name="module_parties.Organisation"></a>

### parties.Organisation ⇐ [<code>Party</code>](#module_parties.Party)
Class representing an Organisation

**Kind**: static class of [<code>parties</code>](#module_parties)  
**Extends**: [<code>Party</code>](#module_parties.Party)  

* [.Organisation](#module_parties.Organisation) ⇐ [<code>Party</code>](#module_parties.Party)
    * [new Organisation(params)](#new_module_parties.Organisation_new)
    * [.upsertAddress(type, address)](#module_parties.Party+upsertAddress)
    * [.upsertEmail(type, email)](#module_parties.Party+upsertEmail)

<a name="new_module_parties.Organisation_new"></a>

#### new Organisation(params)
Construct a new Organisation instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | Organisation creation options: |
| params.assetManagerId | <code>number</code> |  | Asset Manager ID of the Organisation __(required)__ |
| params.partyId | <code>string</code> |  | Party ID of the Organisation __(required)__ |
| [params.partyStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Organisation |
| [params.partyClass] | <code>string</code> | <code>&quot;Organisation&quot;</code> | Class of the Organisation (a subclass of Organisation may define its own partyClass) |
| [params.baseCurrency] | <code>string</code> |  | Base Currency of the Organisation (e.g. SGD, USD) |
| [params.description] | <code>string</code> |  | Description of the Organisation |
| [params.addresses] | <code>object</code> |  | Object of Addresses associated with the Organisation |
| [params.emails] | <code>object</code> |  | Object of Emails associated with the Organisation |
| [params.references] | <code>object</code> |  | Object of References associated with the Organisation |
| [params.comments] | <code>object</code> |  | Object of Comments associated with the Organisation |
| [params.links] | <code>object</code> |  | Object of Links associated with the Organisation |
| [params.legalName] | <code>string</code> |  | Legal name of the Asset Manager associated with this party |
| [params.displayName] | <code>string</code> |  | Display name of the Asset Manager associated with this party |
| [params.url] | <code>string</code> |  | Url of this Party |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Organisation |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Organisation |
| [params.createdTime] | <code>date</code> |  | Time that the Organisation was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Organisation was updated |
| [params.version] | <code>number</code> |  | Version number of the Organisation |

<a name="module_parties.Party+upsertAddress"></a>

#### organisation.upsertAddress(type, address)
Upsert an Address

**Kind**: instance method of [<code>Organisation</code>](#module_parties.Organisation)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of Address (e.g. 'Registered', 'Legal') |
| address | <code>Address</code> | new Address. Note that the new Address cannot be primary if a primary Address already exists. Use this.addresses setter to replace primary Addresses (??) |

<a name="module_parties.Party+upsertEmail"></a>

#### organisation.upsertEmail(type, email)
Upsert an Email

**Kind**: instance method of [<code>Organisation</code>](#module_parties.Organisation)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of Email (e.g. 'Work', 'Support') |
| email | <code>Emails</code> | new Email. Note that the new Email cannot be primary if a primary Email already exists. Use this.emails setter to replace primary Emails (??) |

<a name="module_parties.Party"></a>

### parties.Party ⇐ [<code>AMaaSModel</code>](#module_core.AMaaSModel)
Class representing a Party

**Kind**: static class of [<code>parties</code>](#module_parties)  
**Extends**: [<code>AMaaSModel</code>](#module_core.AMaaSModel)  

* [.Party](#module_parties.Party) ⇐ [<code>AMaaSModel</code>](#module_core.AMaaSModel)
    * [new Party(params)](#new_module_parties.Party_new)
    * [.upsertAddress(type, address)](#module_parties.Party+upsertAddress)
    * [.upsertEmail(type, email)](#module_parties.Party+upsertEmail)

<a name="new_module_parties.Party_new"></a>

#### new Party(params)
Construct a new Party instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | Party creation options: |
| params.assetManagerId | <code>number</code> |  | Asset Manager ID of the Party __(required)__ |
| params.partyId | <code>string</code> |  | Party ID of the Party __(required)__ |
| [params.partyStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Party |
| [params.partyClass] | <code>string</code> | <code>&quot;Party&quot;</code> | Class of the Party |
| [params.baseCurrency] | <code>string</code> |  | Base Currency for the Party (e.g. SGD, USD) |
| [params.description] | <code>string</code> |  | Description of the Party |
| [params.addresses] | <code>object</code> |  | Object of Addresses associated with the Party |
| [params.emails] | <code>object</code> |  | Object of Emails associated with the Party |
| [params.references] | <code>object</code> |  | Object of References associated with the Party |
| [params.comments] | <code>object</code> |  | Object of Comments associated with the Party |
| [params.links] | <code>object</code> |  | Object of Links associated with this Party |
| [params.legalName] | <code>string</code> |  | Legal name of the Asset Manager associated with this party |
| [params.displayName] | <code>string</code> |  | Display name of the Asset Manager associated with this party |
| [params.url] | <code>string</code> |  | Url of this Party |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Party |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Party |
| [params.createdTime] | <code>date</code> |  | Time that the Party was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Party was updated |
| [params.version] | <code>number</code> |  | Version number of the Party |

<a name="module_parties.Party+upsertAddress"></a>

#### party.upsertAddress(type, address)
Upsert an Address

**Kind**: instance method of [<code>Party</code>](#module_parties.Party)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of Address (e.g. 'Registered', 'Legal') |
| address | <code>Address</code> | new Address. Note that the new Address cannot be primary if a primary Address already exists. Use this.addresses setter to replace primary Addresses (??) |

<a name="module_parties.Party+upsertEmail"></a>

#### party.upsertEmail(type, email)
Upsert an Email

**Kind**: instance method of [<code>Party</code>](#module_parties.Party)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of Email (e.g. 'Work', 'Support') |
| email | <code>Emails</code> | new Email. Note that the new Email cannot be primary if a primary Email already exists. Use this.emails setter to replace primary Emails (??) |

<a name="module_parties.SubFund"></a>

### parties.SubFund ⇐ [<code>Party</code>](#module_parties.Party)
Class representing a Celled Fund Structure (SubFund)

**Kind**: static class of [<code>parties</code>](#module_parties)  
**Extends**: [<code>Party</code>](#module_parties.Party)  

* [.SubFund](#module_parties.SubFund) ⇐ [<code>Party</code>](#module_parties.Party)
    * [new SubFund(params)](#new_module_parties.SubFund_new)
    * [.upsertAddress(type, address)](#module_parties.Party+upsertAddress)
    * [.upsertEmail(type, email)](#module_parties.Party+upsertEmail)

<a name="new_module_parties.SubFund_new"></a>

#### new SubFund(params)
Construct a new SubFund instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | SubFund creation options: |
| params.assetManagerId | <code>number</code> |  | Asset Manager ID of the SubFund __(required)__ |
| params.partyId | <code>string</code> |  | Party ID of the SubFund __(required)__ |
| [params.partyStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the SubFund |
| [params.baseCurrency] | <code>string</code> |  | Base Currency of the SubFund (e.g. SGD, USD) |
| [params.description] | <code>string</code> |  | Description of the SubFund |
| [params.addresses] | <code>object</code> |  | Object of Addresses associated with the SubFund |
| [params.emails] | <code>object</code> |  | Object of Emails associated with the SubFund |
| [params.references] | <code>object</code> |  | Object of References associated with the SubFund |
| [params.comments] | <code>object</code> |  | Object of Comments associated with the SubFund |
| [params.links] | <code>object</code> |  | Object of Links associated with the SubFund |
| [params.legalName] | <code>string</code> |  | Legal name of the Asset Manager associated with this party |
| [params.displayName] | <code>string</code> |  | Display name of the Asset Manager associated with this party |
| [params.url] | <code>string</code> |  | Url of this Party |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the SubFund |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the SubFund |
| [params.createdTime] | <code>date</code> |  | Time that the SubFund was created |
| [params.updatedTime] | <code>date</code> |  | Time that the SubFund was updated |
| [params.version] | <code>number</code> |  | Version number of the SubFund |

<a name="module_parties.Party+upsertAddress"></a>

#### subFund.upsertAddress(type, address)
Upsert an Address

**Kind**: instance method of [<code>SubFund</code>](#module_parties.SubFund)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of Address (e.g. 'Registered', 'Legal') |
| address | <code>Address</code> | new Address. Note that the new Address cannot be primary if a primary Address already exists. Use this.addresses setter to replace primary Addresses (??) |

<a name="module_parties.Party+upsertEmail"></a>

#### subFund.upsertEmail(type, email)
Upsert an Email

**Kind**: instance method of [<code>SubFund</code>](#module_parties.SubFund)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of Email (e.g. 'Work', 'Support') |
| email | <code>Emails</code> | new Email. Note that the new Email cannot be primary if a primary Email already exists. Use this.emails setter to replace primary Emails (??) |

<a name="module_relationships"></a>

## relationships
Classes and API methods for the Relationships service (not ready yet)


* [relationships](#module_relationships)
    * [.Relationship](#module_relationships.Relationship) ⇐ <code>module:Core.AMaaSModel</code>
        * [new Relationship(params)](#new_module_relationships.Relationship_new)

<a name="module_relationships.Relationship"></a>

### relationships.Relationship ⇐ <code>module:Core.AMaaSModel</code>
Class representing a Relationship

**Kind**: static class of [<code>relationships</code>](#module_relationships)  
**Extends**: <code>module:Core.AMaaSModel</code>  
<a name="new_module_relationships.Relationship_new"></a>

#### new Relationship(params)
Construct a new Relationship instance


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | Relationship creation options |
| params.assetManagerId | <code>number</code> | ID of the Asset Manager who owns this Relationship |
| params.relationshipId | <code>number</code> | ID of the Relationship (to uniquely identity Relationship amongst other Relationships between the same parties) |
| params.relatedId | <code>number</code> | ID of the Asset Manager to whom this Relationship connects |
| params.relationshipType | <code>string</code> | The type of Relationship between these Asset Managers |
| params.clientId | <code>string</code> | The client ID that owns this Relationship |
| params.relationshipStatus | <code>string</code> | The status of the Relationship |
| params.createdBy | <code>string</code> | ID of the user that created the Relationship |
| params.updatedBy | <code>string</code> | ID of the user that updated the Relationship |
| params.createdTime | <code>date</code> | Time that the Relationship was created |
| params.updatedTime | <code>date</code> | Time that the Relationship was updated |
| params.version | <code>number</code> | Version number of the Relationship |

<a name="module_transactions"></a>

## transactions
Classes for the Transactions service.


* [transactions](#module_transactions)
    * [.Transaction](#module_transactions.Transaction) ⇐ [<code>AMaaSModel</code>](#module_core.AMaaSModel)
        * [new Transaction(params)](#new_module_transactions.Transaction_new)

<a name="module_transactions.Transaction"></a>

### transactions.Transaction ⇐ [<code>AMaaSModel</code>](#module_core.AMaaSModel)
Class representing a Transaction

**Kind**: static class of [<code>transactions</code>](#module_transactions)  
**Extends**: [<code>AMaaSModel</code>](#module_core.AMaaSModel)  
<a name="new_module_transactions.Transaction_new"></a>

#### new Transaction(params)
Construct a new Transaction object


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | Transaction creation options |
| params.assetManagerId | <code>string</code> | ID of the Transaction's Asset Manager |
| params.assetBookId | <code>string</code> | ID of the Transaction's book |
| params.counterpartyBookId | <code>string</code> | ID of the counterparty to this Transaction |
| params.transactionAction | <code>string</code> | Transaction action e.g. BUY, SELL etc. |
| params.assetId | <code>string</code> | ID of the asset being transacted |
| params.quantity | <code>number</code> | Quantity being transacted |
| params.transactionDate | <code>date</code> | Date of transactionDate |
| params.settlementDate | <code>date</code> | Date of settlement e.g. T+2 where T = transactionDate |
| params.price | <code>decimal</code> | price of Asset being transacted |
| params.transactionCurrency | <code>string</code> | Currency that the Transaction takes place in |
| params.settlementCurrency | <code>string</code> | Currency that the Transaction is settled in |
| params.asset | <code>\*</code> | * |
| params.executionTime | <code>date</code> | Time that the Transaction was executed |
| params.transactionType | <code>Asset</code> | Type of Transaction e.g. Trade, Allocation |
| params.transactionId | <code>string</code> | ID of the Transaction |
| params.transactionStatus | <code>\*</code> | * |
| params.charges | <code>object</code> | Object of all charges (Charge class) |
| params.codes | <code>object</code> | Object of all codes (Code class) |
| params.comments | <code>object</code> | Object of all comments (Comment class) |
| params.links | <code>object</code> | Object of all links (Link class) |
| params.parties | <code>object</code> | Object of all parties as a Transaction child (PartyChild class) |
| params.rates | <code>object</code> | Object of all rates (Rate class) |
| params.references | <code>object</code> | * |
| params.postings | <code>\*</code> | * |

