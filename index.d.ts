declare module '@amaas/amaas-core-sdk-js' {
  // Interfaces
  // AssetManagers
  export interface IAssetManager {
    assetManagerId?: number
    assetManagerType: 'Accredited Investor' | 'Bank' | 'Broker' | 'Corporate Treasury' | 'Family Office' | 'Fund Administrator' | 'Fund Manager' | 'Hedge Fund' | 'Private Equity' | 'Individual' | 'Venture Capital'
    assetManagerStatus?: string
    accountType?: 'Test' | 'Basic' | 'Professional'
    clientId?: number
    partyId?: string
    defaultBookOwnerId?: number
    defaultTimezone?: string
    defaultBookCloseTime?: string
    createdBy?: string
    updatedBy?: string
    createdTime?: string
    updatedTime?: string
    version?: number
  }

  export interface IDomain {
    assetManagerId: number
    domain: string
    isPrimary: boolean
    createdBy?: string
    updatedBy?: string
    createdTime?: string
    updatedTime?: string
    version?: number
  }

  export interface IEODBook {
    assetManagerId: number
    utcCloseTime?: string
    bookId?: string
    eodBookStatus?: string
    createdBy?: string
    updatedBy?: string
    createdTime?: string
    updatedTime?: string
    version?: number
  }

  // Books
  export interface IBook {
    assetManagerId: number
    bookId: string
    bookType?: 'Counterparty' | 'Management' | 'Trading' | 'Wash'
    bookStatus?: string
    ownerId?: number
    partyId?: string
    closeTime?: string
    timezone?: string
    baseCurrency?: string
    businessUnit?: string
    description?: string
    positions?: any[]
    createdBy?: string
    updatedBy?: string
    createdTime?: string
    updatedTime?: string
    version?: number
  }

  // Assets
  export interface IAsset {
    assetManagerId: number
    assetId: string
    assetClass?: string
    fungible: boolean
    assetIssuerId?: string | number
    assetStatus?: string
    countryId?: string
    venueId?: string
    currency?: string
    issueDate?: string
    description?: string
    displayName?: string
    rollPrice?: boolean
    clientId?: string | number
    comments?: any
    links?: any
    references?: any
    createdBy?: string
    updatedBy?: string
    createdTime?: string
    updatedTime?: string
    version?: number
  }

  export interface IBondBase extends IAsset {
    maturityDate?: string
    defaulted: boolean
    coupon?: any
    par?: any
    payFrequency?: string
  }

  export interface IBondCorporate extends IBondBase {}
  export interface IBondGovernment extends IBondBase {}
  export interface IBondMortgage extends IBondBase {}
  export interface ICurrency extends IAsset {
    deliverable?: boolean
    minorUnitPlaces?: string | number
  }
  export interface ICustomAsset extends IAsset {
    maturityDate?: string
    [propName: string]: any
  }
  export interface IDerivative extends IAsset {}
  export interface IBondOption extends IDerivative {
    optionStyle?: 'American' | 'Bermudan' | 'European'
    optionType?: 'Put' | 'Call'
    strike?: any
    expiryDate?: string
    underlyingAssetId?: string | number
  }
  export interface IContractForDifference extends IDerivative {}
  export interface IForeignExchangeOption extends IDerivative {
    optionStyle?: 'American' | 'Bermudan' | 'European'
    optionType?: 'Put' | 'Call'
    strike?: any
    expiryDate?: string
    underlyingAssetId?: string | number
  }
  export interface IEquity extends IAsset {}
  export interface IFund extends IAsset {
    fundType?: 'Open' | 'Closed' | 'ETF'
    creationDate?: string
    nav?: any
    expenseRatio?: any
    netAssets?: any
  }
  export interface IExchangeTradedFund extends IFund {}
  export interface IForeignExchangeBase extends IAsset {
    countryCodes: any[]
    major: boolean
  }
  export interface IForeignExchange extends IForeignExchangeBase {}
  export interface IForeignExchangeForward extends IForeignExchangeBase {
    settlementDate: string
    fixingDate?: string
    forwardRate: string | number
  }
  export interface IIndex extends IAsset {}
  export interface IListedDerivative extends IAsset {}
  export interface IFuture extends IListedDerivative {
    settlementType?: 'Physical' | 'Cash'
    contractSize?: any
    pointValue?: any
    tickSize?: any
    quoteUnit?: any
    underlyingAssetId?: string
    expiryDate?: string
  }
  export interface IBondFuture extends IFuture {
    cheapestToDeliverId?: string | number
    underlyingBondTenor?: '1M' | '3M' | '6M' | '9M' | '1Y' | '2Y' | '5Y' | '10Y' | '15Y' | '20Y' | '30Y' | '40Y' | '50Y'
    underlyingBondCoupon?: any
  }
  export interface IBondFuture extends IFuture {
    cheapestToDeliverId?: string | number
    underlyingBondTenor?: '1M' | '3M' | '6M' | '9M' | '1Y' | '2Y' | '5Y' | '10Y' | '15Y' | '20Y' | '30Y' | '40Y' | '50Y'
    underlyingBondCoupon?: any
  }
  export interface IFutureOption extends IFuture {
    optionType?: 'Put' | 'Call'
    optionStyle?: 'American' | 'Bermudan' | 'European'
    strike?: any
  }
  export interface IBondFutureOption extends IFutureOption {}
  export interface ICommodityFuture extends IFuture {}
  export interface IForeignExchangeFuture extends IFuture {}
  export interface IEnergyFuture extends IFuture {}
  export interface IEquityFuture extends IFuture {}
  export interface IIndexFuture extends IFuture {}
  export interface IInterestRateFuture extends IFuture {}
  export interface IListedContractForDifference extends IListedDerivative {}
  export interface IPrivateInvestment extends IAsset {
    category?: 'Private Equity' | 'Mutual Funds' | 'Hedge Funds' | 'Fund of Funds' | 'StartUp' | 'Private Company' | 'Others'
    subCategory?: 'Money Market Funds' | 'Bond Funds' | 'Balanced Funds' | 'Equity Funds' | 'Speciality Funds' | 'Leverage Buyout Funds' | 'Growth Equity Funds' | 'Venture Capital Funds' | 'Real Estate Investment Funds' | 'Mezzanine Funds' | 'Distresses Debt Funds' | 'Special Situation Funds'| 'Market Neutral Funds' | 'Equity Long Funds' | 'Equity Short Funds' | 'Event-Driven Funds' | 'Macro Funds' | 'Currency Funds' | 'Equity Funds' | 'Commodity' | 'Credit' | 'Index Arbitrage' | 'Quant Funds' | 'Lifestyle Startup' | 'Small Business' | 'Silicon Valley Type Startup' | 'Startup to be Quickly Sold' | 'Large Company Startup' | 'Social Startups'
    investmentDate?: string
    numShares?: any
    priceShare?: any
    shareClass?: string
    series?: string
    shareType?: string
    coupon?: any
    couponFreq?: string | number
    upfrontFee?: any
    exitFee?: any
    managementFee?: any
    performanceFee?: any
    hurdle?: any
    margin?: any
    highWaterMark?: any
    maturityDate?: string
    lockUpPeriod?: any
    investmentTerm?: any
    ownership?: any
  }
  export interface IRealAsset extends IAsset {
    ownership?: any
  }
  export interface IRealEstate extends IRealAsset {}
  export interface IWine extends IRealAsset {
    year?: any
    producer?: string
    region?: string
    appellation?: string | number
    classification?: string | number
    color?: string
    bottleSize?: string
    bottleInCellar?: any
    bottleLocation?: string
    storageCost?: any
    ratingType?: string
    ratingValue?: any
    packingType?: any
    toDrinkStart?: string
    toDrinkEnd?: string
  }
  export interface ISukuk extends IAsset {
    maturityDate?: string
  }
  export interface ISynthetic extends IAsset {
    maturityDate?: string
  }
  export interface ISynethticFromBook extends ISynthetic {
    bookId?: string
  }
  export interface ISyntheticMultiLeg extends ISynthetic {
    legs?: any[]
  }

  export interface IFuzzySearchResult {
    total: number
    max_score: number
    hits: IFuzzyHit[]
  }

  export interface IFuzzyHit {
    _index: string
    _type: string
    _id: string
    _score: number
    _source: {
      [field: string]: any
    }
  }

  // Parties
  export interface IParty {
    assetManagerId: number
    partyId: string
    partyStatus?: string
    partyClass?: string
    baseCurrency?: string
    description?: string
    addresses?: any
    emails?: any
    references?: any
    comments?: any
    links?: any
    legalName?: string
    displayName?: string
    url?: string
    createdBy?: string
    updatedBy?: string
    createdTime?: string
    updatedTime?: string
    version?: number
  }
  export interface IIndividual extends IParty {
    givenNames?: string
    surname?: string
    dateOfBirth?: string
    title?: string
    role?: string
    department?: string
    contactNumber?: string
  }
  export interface IOrganisation extends IParty {}
  export interface ISubFund extends IParty {}
  export interface IGovernmentAgency extends IOrganisation {}
  export interface ICompany extends IOrganisation {
    licenseNumber?: string
    licenseType?: string
    assetsUnderManagement?: string
    registrationNumber?: string
    yearOfIncoporation?: string
    contactNumber?: string
  }
  export interface IFund extends ICompany {}
  export interface IExchange extends ICompany {}
  export interface IBroker extends ICompany {}
  export interface IAssetManagerParty extends ICompany {}

  // Relationships
  export interface IRelationship {
    assetManagerId: number
    relationshipId?: string
    relatedId: number
    relationshipType: 'Administrator' | 'External' | 'Front Office' | 'Employee'
    clientId?: number
    relationshipStatus: 'Active' | 'Pending' | 'Superseded' | 'Inactive'
    createdBy?: string
    updatedBy?: string
    createdTime?: string
    updatedTime?: string
    version?: number
  }

  // Monitor
  export interface IMonitorItem {
    assetManagerId: number
    itemId?: string
    itemClass?: 'Exception' | 'Notification'
    itemType?: string
    itemLevel?: 'Info' | 'Warning' | 'Error' | 'Critical'
    itemSource?: string
    message?: string
    itemStatus?: 'Open' | 'Closed' | 'Resubmitted' | 'Superseded'
    assetBookId?: string
    transactionId?: string
    assetId?: string
    itemDate?: string
    createdBy?: string
    createdTime?: string
    updatedBy?: string
    updatedTime?: string
    version?: number
  }

  export interface IMonitorEvent {
    assetManagerId: number
    eventId?: string
    linkId?: string
    linkSource?: string
    eventType?: 'Internal' | 'External'
    eventStart?: string
    eventEnd?: string
    eventStatus?: 'Open' | 'Closed'
    title?: string
    description?: string
    internalId?: number
    clientId?: number
    createdBy?: string
    createdTime?: string
    updatedBy?: string
    updatedTime?: string
    version?: number
  }

  // Transactions
  export interface ITransaction {
    assetManagerId: number
    assetBookId?: string
    counterpartyBookId?: string
    transactionAction?: 'Buy' | 'Sell' | 'Short Sell' | 'Deliver' | 'Receive' | 'Subscription' | 'Redemption' | 'Acquire' | 'Remove'
    assetId?: string
    quantity?: any
    transactionDate?: string
    settlementDate?: string
    price?: any
    transactionCurrency?: string
    settlementCurrency?: string
    asset?: any
    executionTime?: string
    transactionType?: 'Allocation' | 'Block' | 'Cashflow' | 'Coupon' | 'Dividend' | 'Exercise' | 'Expiry' | 'Payment' | 'Journal' | 'Maturity' | 'Net' | 'Novation' | 'Split' | 'Trade' | 'Transfer'
    transactionId?: string
    transactionStatus?: 'New' | 'Amended' | 'Superseded' | 'Cancelled' | 'Netted' | 'Novated'
    charges?: any
    codes?: any
    comments?: any
    links?: any
    parties?: any
    rates?: any
    references?: any
    postings?: any
    createdBy?: string
    updatedBy?: string
    createdTime?: string
    updatedTime?: string
    version?: number
  }
  export interface IPosition {
    assetManagerId: number
    bookId?: string
    assetId?: string
    quantity?: any
    validFrom?: string
    internalId?: string
    validTo?: string
    clientId?: number
    accountingType?: string
    accountId?: string | number
    createdBy?: string
    updatedBy?: string
    createdTime?: string
    updatedTime?: string
    version?: number
  }

  
  // API
  namespace api {
    namespace AssetManagers {
      function retrieve({ AMId }: { AMId: number }, callback?: Function): Promise<any> | void
      function insert({ assetManager }: { assetManager: assetManagers.AssetManager | IAssetManager }, callback?: Function): Promise<assetManagers.AssetManager> | void
      function amend({ AMId, assetManager }: { AMId: number, assetManager: assetManagers.AssetManager | IAssetManager }, callback?: Function): Promise<assetManagers.AssetManager> | void
      function deactivate({ AMId }: { AMId: number }, callback?: Function): Promise<assetManagers.AssetManager> | void
      function reactivate({ AMId }: { AMId: number }, callback?: Function): Promise<assetManagers.AssetManager> | void
      function searchDomains({ query }: { query?: { assetManagerIds?: number | number[], isPrimary?: boolean, domains?: string | string[], domainStatuses?: string | string[], fields?: string | string[] } }, callback?: Function): Promise<assetManagers.Domain | assetManagers.Domain[]> | void
      function checkDomains({ domain }: { domain: string }, callback?: Function): Promise<assetManagers.Domain[]> | void
      function insertDomain({ AMId, domain }: { AMId: number, domain: assetManagers.Domain | IDomain }, callback?: Function): Promise<assetManagers.Domain> | void
      function retrieveEODBooks({ AMId, bookID }: { AMId: number, bookID: string }, callback?: Function): Promise<assetManagers.EODBook | assetManagers.EODBook[]> | void
      function getCredentialsForPubSub({ AMId }: { AMId: number }, callback?: Function): Promise<{ credentials: { AccessKeyId: string, SecretAccessKey: string, SessionToken: string }, topics: string[] }> | void
    }
    namespace Assets {
      function retrieve({ AMId, resourceId }: { AMId: number, resourceId?: string }, callback?: Function): Promise<assets.AssetClassTypes[]> | void
      function insert({ AMId, asset }: { AMId: number, asset: assets.AssetClassTypes | assets.IAssetTypes }, callback?: Function): Promise<assets.AssetClassTypes> | void
      function amend({ AMId, asset, resourceId }: { AMId: number, asset: assets.AssetClassTypes | assets.IAssetTypes, resourceId: string }, callback?: Function): Promise<assets.AssetClassTypes> | void
      function partialAmend({ AMId, changes, resourceId }: { AMId: number, changes: { [keyName: string]: any }, resourceId: string }, callback?: Function): Promise<assets.AssetClassTypes> | void
      function search({ AMId, query }: { AMId: number, query?: { clientIds?: string | number | any[], assetStatuses?: string | string[], assetIds?: string | string[], referenceTypes?: string | string[], referenceValues?: string | string[], assetIssuerIds?: string | number | any[], assetClasses?: string | string[], assetTypes?: string | string[] } }, callback?: Function): Promise<assets.AssetClassTypes[]> | void
      function fuzzySearch({ AMId, query }: { AMId: number, query: any }, callback?: Function): Promise<IFuzzySearchResult> | void
      function deactivate({ AMId, resourceId }: { AMId: number, resourceId: string }, callback?: Function): Promise<assets.AssetClassTypes> | void
      function reactivate({ AMId, resourceId }: { AMId: number, resourceId: string }, callback?: Function): Promise<assets.AssetClassTypes> | void
      function fieldSearch(query: { assetManagerIds: number[], [searchQuery: string]: any }, callback?: Function): Promise<any> | void
    }
    namespace Books {
      function retrieve({ AMId, resourceId }: { AMId: number, resourceId?: string }, callback?: Function): Promise<books.Book[]> | void
      function search({ AMId, query }: { AMId: number, query?: { assetManagerIds?: number | number[], clientIds?: string | number | any[], bookStatuses?: string | string[], bookIds?: string | string[], ownerIds?: string | string[] } }, callback?: Function): Promise<books.Book[]> | void
      function insert({ AMId, book }: { AMId: number, book: books.Book | IBook }, callback?: Function): Promise<books.Book> | void
      function amend({ AMId, book, resourceId }: { AMId: number, book: books.Book | IBook, resourceId: string }, callback?: Function): Promise<books.Book> | void
      function retire({ AMId, resourceId }: { AMId: number, resourceId: string }, callback?: Function): Promise<books.Book> | void
      function reactivate({ AMId, resourceId }: { AMId: number, resourceId: string }, callback?: Function): Promise<books.Book> | void
    }
    namespace Fundamentals {
      function countries({ code }: { code?: string }, callback?: Function): Promise<{ [key: string]: string | number }> | void
      function calcBusinessDate({ date, codes, offset, invalidDates }: { date: string, codes: string | string[], offset: number, invalidDates: any }, callback?: Function): Promise<{ businessDate: string }> | void
      function processDateInfo({ date, codes }: { date: string, codes: string | string[] }, callback?: Function): Promise<{ [countryCode: string]: any }> | void
      function holidays({ codes, years }: { codes: string | string[], years: string | string[] }, callback?: Function): Promise<{ [countryCode: string]: { calendar: string, holidays: any[], weekends: number[] } }> | void
    }
    namespace Monitor {
      function retrieveItems({ AMId, resourceId }: { AMId: number, resourceId?: string }, callback?: Function): Promise<monitor.Item | monitor.Item[]> | void
      function insertNewItem({ AMId, item }: { AMId: number, item: IMonitorItem | monitor.Item }, callback?: Function): Promise<monitor.Item> | void
      function resubmitItem({ AMId, resourceId }: { AMId: number, resourceId: string }, callback?: Function): Promise<monitor.Item> | void
      function searchItems({ AMId, query }: { AMId?: number, query?: { assetManagerIds?: number | number[], itemIds?: string | string[], assetBookIds?: string | string[], itemStatuses?: string | string[], itemClasses?: string | string[], itemTypes?: string | string[], itemLevels?: string | string[], itemSources?: string | string[], transactionIds?: string | string[], assetIds?: string | string[] } }, callback?: Function): Promise<monitor.Item | monitor.Item[]> | void
      function closeItem({ AMId, resourceId }: { AMId: number, resourceId: string }, callback?: Function): Promise<monitor.Item> | void
      function retrieveEvent({ AMId, resourceId }: { AMId: number, resourceId?: string }, callback?: Function): Promise<monitor.Event | monitor.Event[]> | void
      function insertEvent({ AMId, event }: { AMId: number, event: monitor.Event | IMonitorEvent }, callback?: Function): Promise<monitor.Event> | void
      function closeEvent({ AMId, resourceId }: { AMId: number, resourceId: string }, callback?: Function): Promise<monitor.Event> | void
    }
    namespace Parties {
      function retrieve({ AMId, resourceId }: { AMId: number, resourceId?: string }, callback?: Function): Promise<parties.PartiesClassType | parties.PartiesClassType[]> | void
      function insert({ AMId, party }: { AMId: number, party: parties.PartiesClassType | parties.PartiesInterfaceType }, callback?: Function): Promise<parties.PartiesClassType> | void
      function amend({ AMId, party, resourceId }: { AMId: number, party: parties.PartiesClassType | parties.PartiesInterfaceType, resourceId: string }): Promise<parties.PartiesClassType> | void
      function partialAmend({ AMId, changes, resourceId }: { AMId: number, changes: any, resourceId: string }, callback?: Function): Promise<parties.PartiesClassType> | void
      function search({ AMId, query }: { AMId: number, query?: { assetManagerIds?: number | number[], clientIds?: number | number[], partyStatuses?: string | string[], partyIds?: string | string[], partyClasses?: string | string[], partyTypes?: string | string[] } }, callback?: Function): Promise<parties.PartiesClassType[]> | void
      function fuzzySearch({ AMId, query }: { AMId: number, query: any }, callback?: Function): Promise<IFuzzySearchResult> | void
      function deactivate({ AMId, resourceId }: { AMId: number, resourceId: string }, callback?: Function): Promise<parties.PartiesClassType> | void
      function reactivate({ AMId, resourceId }: { AMId: number, resourceId: string }, callback?: Function): Promise<parties.PartiesClassType> | void
    }
    namespace Relationships {
      function retrieve({ AMId }: { AMId: number }, callback?: Function): Promise<relationships.Relationship[]> | void
      function requestRelationship({ AMId, options }: { AMId: number, options: { relationshipId: string, relationshipType: string } }, callback?: Function): Promise<relationships.Relationship> | void
      function insert({ AMId, relationship }: { AMId: number, relationship: relationships.Relationship | IRelationship }, callback?: Function): Promise<relationships.Relationship> | void
      function amend({ AMId, relationship }: { AMId: number, relationship: relationships.Relationship | IRelationship }, callback?: Function): Promise<relationships.Relationship> | void
      function getRelatedAMID({ AMId, options }: { AMId: number, options: { includeInactive : boolean[], relationshipType: string[] } }, callback?: Function): Promise<relationships.Relationship | relationships.Relationship[]> | void
      function sendInvitation({ AMId, toEmail, fromEmail, companyName }: { AMId: number, toEmail: string, fromEmail: string, companyName: string }, callback?: Function): Promise<boolean> | void
      function approveRel({ AMId, relatedId, relationshipType }: { AMId: number, relatedId: string, relationshipType: string }, callback?: Function): Promise<relationships.Relationship> | void
      function rejectRel({ AMId, relatedId, relationshipType }: { AMId: number, relatedId: string, relationshipType: string }, callback?: Function): Promise<relationships.Relationship> | void
      function revokeRel({ AMId, relatedId, relationshipType }: { AMId: number, relatedId: string, relationshipType: string }, callback?: Function): Promise<relationships.Relationship> | void
    }
    namespace Positions {
      function retrieve({ AMId }: { AMId: number }, callback?: Function): Promise<transactions.Position> | void
      function search({ AMId, query }: { AMId: number, query?: { assetManagerIds?: number | number[], bookIds?: string | string[], assetIds?: string | string[], clientIds?: number | number[], accountIds?: string | string[], accountingTypes?: string | string[], positionDate?: string | string[] } }, callback?: Function): Promise<transactions.Position> | void
      function fieldSearch(query: { assetManagerIds: number[], [searchQuery: string]: any }, callback?: Function): Promise<any> | void
    }
    namespace Transactions {
      function retrieve({ AMId, resourceId }: { AMId: number, resourceId?: string }, callback?: Function): Promise<transactions.Transaction[]> | void
      function insert({ AMId, transaction }: { AMId: number, transaction: transactions.Transaction | ITransaction }, callback?: Function): Promise<transactions.Transaction> | void
      function amend({ AMId, transaction, resourceId }: { AMId: number, transaction: transactions.Transaction | ITransaction, resourceId?: string }, callback?: Function): Promise<transactions.Transaction> | void
      function partialAmend({ AMId, changes, resourceId }: { AMId: number, changes: any, resourceId?: string }, callback?: Function): Promise<transactions.Transaction> | void
      function search({ AMId, query }: { AMId: number, query?: { clientIds?: string | number | any[], transactionStatuses?: string | string[], transactionIds?: string | string[], assetBookIds?: string | string[], counterpartyBookIds?: string | string[], assetIds?: string | string[], transactionDateStart?: any, transactionDateEnd?: any, codeTypes?: string | string[], codeValues?: string | string[], linkTypes?: string | string[], linkedTransactionIds?: string | string[], partyTypes?: string | string[], partyIds?: string | string[], referenceTypes?: string | string[], referenceValues?: string | string[] } }, callback?: Function): Promise<transactions.Transaction> | void
      function fieldSearch(query: { assetManagerIds: number[], [searchQuery: string]: any }, callback?: Function): Promise<any> | void
      function cancel({ AMId, resourceId }: { AMId: number, resourceId: string }, callback?: Function): Promise<transactions.Transaction> | void
    }
    function config({ stage, credentialsPath, apiVersion, token }: { stage?: string, credentialsPath?: string, apiVersion?: string, token?: string }): void
  }
  // CLASSES
  
  // assetManagers
  namespace assetManagers {

    class AssetManager {
      assetManagerId?: number
      assetManagerType: 'Accredited Investor' | 'Bank' | 'Broker' | 'Corporate Treasury' | 'Family Office' | 'Fund Administrator' | 'Fund Manager' | 'Hedge Fund' | 'Private Equity' | 'Individual' | 'Venture Capital'
      assetManagerStatus?: string
      accountType?: 'Test' | 'Basic' | 'Professional'
      clientId?: number
      partyId?: string
      defaultBookOwnerId?: number
      defaultTimezone?: string
      defaultBookCloseTime?: string
      createdBy?: string
      updatedBy?: string
      createdTime?: string
      updatedTime?: string
      version?: number
      constructor(props: IAssetManager)
    }

    class Domain {
      assetManagerId: number
      domain: string
      isPrimary: boolean
      createdBy?: string
      updatedBy?: string
      createdTime?: string
      updatedTime?: string
      version?: number
      constructor(props: IDomain)
    }

    class EODBook {
      assetManagerId: number
      utcCloseTime?: string
      bookId?: string
      eodBookStatus?: string
      createdBy?: string
      updatedBy?: string
      createdTime?: string
      updatedTime?: string
      version?: number
      constructor(props: IEODBook)
    }
  }

  // books
  namespace books {

    class Book {
      assetManagerId: number
      bookId: string
      bookType?: 'Counterparty' | 'Management' | 'Trading' | 'Wash'
      bookStatus?: string
      ownerId?: number
      partyId?: string
      closeTime?: string
      timezone?: string
      baseCurrency?: string
      businessUnit?: string
      description?: string
      positions?: any[]
      createdBy?: string
      updatedBy?: string
      createdTime?: string
      updatedTime?: string
      version?: number
      constructor(props: IBook)
    }
  }

  //assets
  namespace assets {

    type IAssetTypes = IAsset | IBondTypes | ICurrencyTypes | ICustomAssetTypes | IDerivativesType | IEquityTypes | IFundTypes | IForeignExchangeTypes | IIndexTypes | IListedDerivativeTypes | IPrivateInvestmentTypes | IRealAssetTypes | ISukukTypes | ISyntheticTypes
    type AssetClassTypes = Asset | BondClassTypes | CurrencyClassTypes | CustomAssetClassTypes | DerivativesClassType | EquityClassTypes | FundClassTypes | ForeignExchangeClassTypes | IndexClassTypes | ListedDerivativeClassTypes | PrivateInvestmentClassTypes | RealAssetClassTypes | SukukClassTypes | SyntheticClassTypes

    // base class
    class Asset {
      assetManagerId: number
      assetId: string
      assetClass?: string
      fungible: boolean
      assetIssuerId?: string | number
      assetStatus?: string
      countryId?: string
      venueId?: string
      currency?: string
      issueDate?: string
      description?: string
      displayName?: string
      rollPrice?: boolean
      clientId?: string | number
      comments?: any
      links?: any
      references?: any
      createdBy?: string
      updatedBy?: string
      createdTime?: string
      updatedTime?: string
      version?: number
      constructor(props: IAsset)
    }

    // bonds
    type IBondTypes = IBondBase | IBondCorporate | IBondGovernment | IBondMortgage
    type BondClassTypes = BondBase | BondCorporate | BondGovernment | BondMortgage

    class BondBase extends Asset {
      maturityDate?: string
      defaulted: boolean
      coupon?: any
      par?: any
      payFrequency?: string
      constructor(props: IBondBase)
    }
    class BondCorporate extends BondBase {
      constructor(props: IBondCorporate)
    }
    class BondGovernment extends BondBase {
      constructor(props: IBondGovernment)
    }
    class BondMortgage extends BondBase {
      constructor(props: IBondMortgage)
    }

    // currency
    type ICurrencyTypes = ICurrency
    type CurrencyClassTypes = Currency
    class Currency extends Asset {
      deliverable?: boolean
      minorUnitPlaces?: string | number
      constructor(props: ICurrency)
    }

    // custom asset
    type ICustomAssetTypes = ICustomAsset
    type CustomAssetClassTypes = CustomAsset
    class CustomAsset extends Asset {
      maturityDate?: string
      [propName: string]: any
      constructor(props: ICustomAsset)
    }

    // derivatives
    type IDerivativesType = IDerivative | IBondOption | IContractForDifference | IForeignExchangeOption
    type DerivativesClassType = Derivative | BondOption | ContractForDifference | ForeignExchangeOption
    class Derivative extends Asset {
      constructor(props: IDerivative)
    }
    class BondOption extends Derivative {
      optionStyle?: 'American' | 'Bermudan' | 'European'
      optionType?: 'Put' | 'Call'
      strike?: any
      expiryDate?: string
      underlyingAssetId?: string | number
      constructor(props: IBondOption)
    }
    class ContractForDifference extends Derivative {
      constructor(props: IContractForDifference)
    }
    class ForeignExchangeOption extends Derivative {
      optionStyle?: 'American' | 'Bermudan' | 'European'
      optionType?: 'Put' | 'Call'
      strike?: any
      expiryDate?: string
      underlyingAssetId?: string | number
      constructor(props: IForeignExchangeOption)
    }

    // equity
    type IEquityTypes = IEquity
    type EquityClassTypes = Equity
    class Equity extends Asset {
      constructor(props: IEquity)
    }

    // funds
    type IFundTypes = IFund | IExchangeTradedFund
    type FundClassTypes = Fund | ExchangeTradedFund
    class Fund extends Asset {
      fundType?: 'Open' | 'Closed' | 'ETF'
      creationDate?: string
      nav?: any
      expenseRatio?: any
      netAssets?: any
      constructor(props: IFund)
    }
    class ExchangeTradedFund extends Fund {
      constructor(props: IExchangeTradedFund)
    }

    // foreign exchange
    type IForeignExchangeTypes = IForeignExchangeBase | IForeignExchange | IForeignExchangeForward
    type ForeignExchangeClassTypes = ForeignExchangeBase | ForeignExchange | ForeignExchangeForward
    class ForeignExchangeBase extends Asset {
      constructor(props: IForeignExchangeBase)
    }
    class ForeignExchange extends ForeignExchangeBase {
      constructor(props: IForeignExchange)
    }
    class ForeignExchangeForward extends ForeignExchangeBase {
      constructor(props: IForeignExchangeForward)
    }

    // index
    type IIndexTypes = IIndex
    type IndexClassTypes = Index
    class Index extends Asset {
      constructor(props: IIndex)
    }

    // listed derivative
    type IListedDerivativeTypes = IListedDerivative | IFuture | IBondFuture | IFutureOption | IBondFutureOption | IEnergyFuture | IEquityFuture | IIndexFuture | IInterestRateFuture | IListedContractForDifference
    type ListedDerivativeClassTypes = ListedDerivative | Future | BondFuture | FutureOption | BondFutureOption | EnergyFuture | EquityFuture | IndexFuture | InterestRateFuture | ListedContractForDifference
    class ListedDerivative extends Asset {
      constructor(props: IListedDerivative)
    }
    class Future extends ListedDerivative {
      settlementType?: 'Physical' | 'Cash'
      contractSize?: any
      pointValue?: any
      tickSize?: any
      quoteUnit?: any
      underlyingAssetId?: string
      expiryDate?: string
      constructor(props: IFuture)
    }
    class BondFuture extends Future {
      cheapestToDeliverId?: string | number
      underlyingBondTenor?: '1M' | '3M' | '6M' | '9M' | '1Y' | '2Y' | '5Y' | '10Y' | '15Y' | '20Y' | '30Y' | '40Y' | '50Y'
      underlyingBondCoupon?: any
    }
    class CommodityFuture extends Future {
      constructor(props: ICommodityFuture)
    }
    class ForeignExchangeFuture extends Future {
      constructor(props: IForeignExchangeFuture)
    }
    class FutureOption extends Future {
      optionType?: 'Put' | 'Call'
      optionStyle?: 'American' | 'Bermudan' | 'European'
      strike?: any
      constructor(props: IFutureOption)
    }
    class BondFutureOption extends FutureOption {
      constructor(props: IBondFutureOption)
    }
    class EnergyFuture extends Future {
      constructor(props: IEnergyFuture)
    }
    class EquityFuture extends Future {
      constructor(props: IEquityFuture)
    }
    class IndexFuture extends Future {
      constructor(props: IIndexFuture)
    }
    class InterestRateFuture extends Future {
      constructor(props: IInterestRateFuture)
    }
    class ListedContractForDifference extends ListedDerivative {
      constructor(props: IListedContractForDifference)
    }

    // private investment
    type IPrivateInvestmentTypes = IPrivateInvestment
    type PrivateInvestmentClassTypes = PrivateInvestment
    class PrivateInvestment extends Asset {
      category?: 'Private Equity' | 'Mutual Funds' | 'Hedge Funds' | 'Fund of Funds' | 'StartUp' | 'Private Company' | 'Others'
      subCategory?: 'Money Market Funds' | 'Bond Funds' | 'Balanced Funds' | 'Equity Funds' | 'Speciality Funds' | 'Leverage Buyout Funds' | 'Growth Equity Funds' | 'Venture Capital Funds' | 'Real Estate Investment Funds' | 'Mezzanine Funds' | 'Distresses Debt Funds' | 'Special Situation Funds'| 'Market Neutral Funds' | 'Equity Long Funds' | 'Equity Short Funds' | 'Event-Driven Funds' | 'Macro Funds' | 'Currency Funds' | 'Equity Funds' | 'Commodity' | 'Credit' | 'Index Arbitrage' | 'Quant Funds' | 'Lifestyle Startup' | 'Small Business' | 'Silicon Valley Type Startup' | 'Startup to be Quickly Sold' | 'Large Company Startup' | 'Social Startups'
      investmentDate?: string
      numShares?: any
      priceShare?: any
      shareClass?: string
      series?: string
      shareType?: string
      coupon?: any
      couponFreq?: string | number
      upfrontFee?: any
      exitFee?: any
      managementFee?: any
      performanceFee?: any
      hurdle?: any
      margin?: any
      highWaterMark?: any
      maturityDate?: string
      lockUpPeriod?: any
      investmentTerm?: any
      ownership?: any
      constructor(props: IPrivateInvestment)
    }

    // real assets
    type IRealAssetTypes = IRealAsset | IRealEstate | IWine
    type RealAssetClassTypes = RealAsset | RealEstate | Wine
    class RealAsset extends Asset {
      ownership?: any
      constructor(props: IRealAsset)
    }
    class RealEstate extends RealAsset {
      constructor(props: IRealEstate)
    }
    class Wine extends RealAsset {
      year?: any
      producer?: string
      region?: string
      appellation?: string | number
      classification?: string | number
      color?: string
      bottleSize?: string
      bottleInCellar?: any
      bottleLocation?: string
      storageCost?: any
      ratingType?: string
      ratingValue?: any
      packingType?: any
      toDrinkStart?: string
      toDrinkEnd?: string
      constructor(props: IWine)
    }

    // sukuk
    type ISukukTypes = ISukuk
    type SukukClassTypes = Sukuk
    class Sukuk extends Asset {
      maturityDate?: string
      constructor(props: ISukuk)
    }

    // synthetics
    type ISyntheticTypes = ISynthetic | ISynethticFromBook | ISyntheticMultiLeg
    type SyntheticClassTypes = Synthetic | SynethticFromBook | SyntheticMultiLeg
    class Synthetic extends Asset {
      maturityDate?: string
      constructor(props: ISynthetic)
    }
    class SynethticFromBook extends Synthetic {
      bookId?: string
      constructor(props: ISynethticFromBook)
    }
    class SyntheticMultiLeg extends Synthetic {
      legs?: any[]
      constructor(props: ISyntheticMultiLeg)
    }

  }

  // parties
  namespace parties {

    type PartiesClassType = parties.AssetManager | parties.Broker | parties.Company | parties.Exchange | parties.Fund | parties.GovernmentAgency | parties.Individual | parties.Organisation | parties.Party | parties.SubFund
    type PartiesInterfaceType = IAssetManagerParty | IBroker | ICompany | IExchange | IFund | IGovernmentAgency | IIndividual | IOrganisation | IParty | ISubFund

    class Party {
      assetManagerId: number
      partyId: string
      partyStatus?: string
      partyClass?: string
      baseCurrency?: string
      description?: string
      addresses?: any
      emails?: any
      references?: any
      comments?: any
      links?: any
      legalName?: string
      displayName?: string
      url?: string
      createdBy?: string
      updatedBy?: string
      createdTime?: string
      updatedTime?: string
      version?: number
      constructor(props: IParty)
    }

    class Individual extends Party {
      givenNames?: string
      surname?: string
      dateOfBirth?: string
      title?: string
      role?: string
      department?: string
      contactNumber?: string
      constructor(props: IIndividual)
    }

    class Organisation extends Party {
      constructor(props: IOrganisation)
    }

    class SubFund extends Party {
      constructor(props: ISubFund)
    }

    class GovernmentAgency extends Organisation {
      constructor(props: IGovernmentAgency)
    }

    class Company extends Organisation {
      licenseNumber?: string
      licenseType?: string
      assetsUnderManagement?: string
      registrationNumber?: string
      yearOfIncoporation?: string
      contactNumber?: string
      constructor(props: ICompany)
    }

    class Fund extends Company {
      constructor(props: IFund)
    }

    class Exchange extends Company {
      constructor(props: IExchange)
    }

    class Broker extends Company {
      constructor(props: IBroker)
    }

    class AssetManager extends Company {
      constructor(props: AssetManager)
    }

  }

  // relationships
  namespace relationships {

    class Relationship {
      assetManagerId: number
      relationshipId?: string
      relatedId: number
      relationshipType: 'Administrator' | 'External' | 'Front Office' | 'Employee'
      clientId?: number
      relationshipStatus: 'Active' | 'Pending' | 'Superseded' | 'Inactive'
      createdBy?: string
      updatedBy?: string
      createdTime?: string
      updatedTime?: string
      version?: number
      constructor(props: IRelationship)
    }
  }

  // monitor
  namespace monitor {
    class Item {
      assetManagerId: number
      itemId?: string
      itemClass?: 'Exception' | 'Notification'
      itemType?: string
      itemLevel?: 'Info' | 'Warning' | 'Error' | 'Critical'
      itemSource?: string
      message?: string
      itemStatus?: 'Open' | 'Closed' | 'Resubmitted' | 'Superseded'
      assetBookId?: string
      transactionId?: string
      assetId?: string
      itemDate?: string
      createdBy?: string
      createdTime?: string
      updatedBy?: string
      updatedTime?: string
      version?: number
      constructor(props: IMonitorItem)
    }

    class Event {
      assetManagerId: number
      eventId?: string
      linkId?: string
      linkSource?: string
      eventType?: 'Internal' | 'External'
      eventStart?: string
      eventEnd?: string
      eventStatus?: 'Open' | 'Closed'
      title?: string
      description?: string
      internalId?: number
      clientId?: number
      createdBy?: string
      createdTime?: string
      updatedBy?: string
      updatedTime?: string
      version?: number
      constructor(props: IMonitorEvent)
    }
  }

  // transactions
  namespace transactions {
    class Transaction {
      assetManagerId: number
      assetBookId?: string
      counterpartyBookId?: string
      transactionAction?: 'Buy' | 'Sell' | 'Short Sell' | 'Deliver' | 'Receive' | 'Subscription' | 'Redemption' | 'Acquire' | 'Remove'
      assetId?: string
      quantity?: any
      transactionDate?: string
      settlementDate?: string
      price?: any
      transactionCurrency?: string
      settlementCurrency?: string
      asset?: any
      executionTime?: string
      transactionType?: 'Allocation' | 'Block' | 'Cashflow' | 'Coupon' | 'Dividend' | 'Exercise' | 'Expiry' | 'Payment' | 'Journal' | 'Maturity' | 'Net' | 'Novation' | 'Split' | 'Trade' | 'Transfer'
      transactionId?: string
      transactionStatus?: 'New' | 'Amended' | 'Superseded' | 'Cancelled' | 'Netted' | 'Novated'
      charges?: any
      codes?: any
      comments?: any
      links?: any
      parties?: any
      rates?: any
      references?: any
      postings?: any
      createdBy?: string
      updatedBy?: string
      createdTime?: string
      updatedTime?: string
      version?: number
      constructor(props: ITransaction)
    }

    class Position {
      assetManagerId: number
      bookId?: string
      assetId?: string
      quantity?: any
      validFrom?: string
      internalId?: string
      validTo?: string
      clientId?: number
      accountingType?: string
      accountId?: string | number
      createdBy?: string
      updatedBy?: string
      createdTime?: string
      updatedTime?: string
      version?: number
      constructor(props: IPosition)
    }
  }
}