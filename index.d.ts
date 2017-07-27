declare module '@amaas/amaas-core-sdk-js' {
  // API

  namespace api {
    namespace AssetManagers {
      function retrieve({ AMId }: { AMId: number }, callback?: Function): Promise<any> | void
      function insert({ assetManager }: { assetManager: assetManagers.AssetManager | assetManagers.IAssetManager }, callback?: Function): Promise<assetManagers.AssetManager> | void
      function amend({ AMId, assetManager }: { AMId: number, assetManager: assetManagers.AssetManager | assetManagers.IAssetManager }, callback?: Function): Promise<assetManagers.AssetManager> | void
      function deactivate({ AMId }: { AMId: number }, callback?: Function): Promise<assetManagers.AssetManager> | void
      function reactivate({ AMId }: { AMId: number }, callback?: Function): Promise<assetManagers.AssetManager> | void
      function checkDomains({ domain }: { domain: string }, callback?: Function): Promise<assetManagers.Domain | null> | void
      function insertDomain({ domain }: { domain: assetManagers.Domain | assetManagers.IDomain }, callback?: Function): Promise<assetManagers.Domain> | void
      function retrieveEODBooks({ AMId, bookID }: { AMId: number, bookID: string }, callback?: Function): Promise<assetManagers.EODBook | assetManagers.EODBook[]> | void
    }
    namespace Assets {
      function retrieve({ AMId, resourceId }: { AMId: number, resourceId?: string }, callback?: Function): Promise<assets.AssetClassTypes[]> | void
      function insert({ AMId, asset }: { AMId: number, asset: assets.AssetClassTypes | assets.IAssetTypes }, callback?: Function): Promise<assets.AssetClassTypes> | void
      function amend({ AMId, asset, resourceId }: { AMId: number, asset: assets.AssetClassTypes | assets.IAssetTypes, resourceId: string }, callback?: Function): Promise<assets.AssetClassTypes> | void
      function partialAmend({ AMId, changes, resourceId }: { AMId: number, changes: { [keyName: string]: any }, resourceId: string }, callback?: Function): Promise<assets.AssetClassTypes> | void
      function search({ AMId, query }: { AMId: number, query: { clientIds?: any[], assetStatuses?: string[], assetIds?: string[], referenceTypes?: any[], referenceValues?: any[], assetIssuerIds?: any[], assetClasses?: string[], assetTypes?: string[] } }, callback?: Function): Promise<assets.AssetClassTypes[]> | void
      function deactivate({ AMId, resourceId }: { AMId: number, resourceId: string }, callback?: Function): Promise<assets.AssetClassTypes> | void
      function reactivate({ AMId, resourceId }: { AMId: number, resourceId: string }, callback?: Function): Promise<assets.AssetClassTypes> | void
    }
    namespace Books {
      function retrieve({ AMId, resourceId }: { AMId: number, resourceId?: string }, callback?: Function): Promise<books.Book[]> | void
      function search({ AMId, query }: { AMId: number, query: { assetManagerIds?: number[], clientIds?: any[], bookStatuses?: string[], bookIds?: string[], ownerIds?: string[] } }, callback?: Function): Promise<books.Book[]> | void
      function insert({ AMId, book }: { AMId: number, book: books.Book | books.IBook }, callback?: Function): Promise<books.Book> | void
      function amend({ AMId, book, resourceId }: { AMId: number, book: books.Book | books.IBook, resourceId: string }, callback?: Function): Promise<books.Book> | void
      function retire({ AMId, resourceId }: { AMId: number, resourceId: string }, callback?: Function): Promise<books.Book> | void
      function reactivate({ AMId, resourceId }: { AMId: number, resourceId: string }, callback?: Function): Promise<books.Book> | void
    }
    namespace Fundamentals {
      function countries({ code }: { code: string }, callback?: Function): Promise<{ [key: string]: string | number }> | void
      function calcBusinessDate({ date, codes, offset, invalidDates }: { date: string, codes: string | string[], offset: number, invalidDates: any }, callback?: Function): Promise<{ businessDate: string }> | void
      function processDateInfo({ date, codes }: { date: string, codes: string | string[] }, callback?: Function): Promise<{ [countryCode: string]: any }> | void
      function holidays({ codes, years }: { codes: string | string[], years: string | string[] }, callback?: Function): Promise<{ [countryCode: string]: { calendar: string, holidays: any[], weekends: number[] } }> | void
    }
    namespace Monitor {
      function retrieveItems({ AMId, resourceId }: { AMId: number, resourceId?: string }, callback?: Function): Promise<monitor.Item | monitor.Item[]> | void
      function insertNewItem({ AMId, item }: { AMId: number, item: monitor.IMonitorItem | monitor.Item }, callback?: Function): Promise<monitor.Item> | void
      function resubmitItem({ AMId, resourceId }: { AMId: number, resourceId: string }, callback?: Function): Promise<monitor.Item> | void
      function searchItems({ AMId, query }: { AMId?: number, query: { assetManagerIds?: number[], itemIds: string[], assetBookIds: string[], itemStatuses: string[], itemClasses: string[], itemTypes: string[], itemLevels: string[], itemSources: string[], transactionIds: string[], assetIds: string[] } }, callback?: Function): Promise<monitor.Item | monitor.Item[]> | void
      function closeItem({ AMId, resourceId }: { AMId: number, resourceId: string }, callback?: Function): Promise<monitor.Item> | void
    }
    namespace Parties {
      function retrieve({ AMId, resourceId }: { AMId: number, resourceId?: string }, callback?: Function): Promise<parties.PartiesClassType[]> | void
      function insert({ AMId, party }: { AMId: number, party: parties.PartiesClassType | parties.PartiesInterfaceType }, callback?: Function): Promise<parties.PartiesClassType> | void
      function amend({ AMId, party, resourceId }: { AMId: number, party: parties.PartiesClassType | parties.PartiesInterfaceType, resourceId: string }): Promise<parties.PartiesClassType> | void
      function partialAmend({ AMId, changes, resourceId }: { AMId: number, changes: any, resourceId: string }, callback?: Function): Promise<parties.PartiesClassType> | void
      function search({ AMId, query }: { AMId: number, query: { assetManagerIds?: number[], clientIds?: number[], partyStatuses?: string[], partyIds?: string[], partyClasses?: string[], partyTypes?: string[] } }, callback?: Function): Promise<parties.PartiesClassType[]> | void
      function deactivate({ AMId, resourceId }: { AMId: number, resourceId: string }, callback?: Function): Promise<parties.PartiesClassType> | void
      function reactivate({ AMId, resourceId }: { AMId: number, resourceId: string }, callback?: Function): Promise<parties.PartiesClassType> | void
    }
    namespace Relationships {
      function retrieve({ AMId }: { AMId: number }, callback?: Function): Promise<relationships.Relationship[]> | void
      function requestRelationship({ AMId, options }: { AMId: number, options: { relationshipId: string, relationshipType: string } }, callback?: Function): Promise<relationships.Relationship> | void
      function insert({ AMId, relationship }: { AMId: number, relationship: relationships.Relationship | relationships.IRelationship }, callback?: Function): Promise<relationships.Relationship> | void
      function amend({ AMId, relationship }: { AMId: number, relationship: relationships.Relationship | relationships.IRelationship }, callback?: Function): Promise<relationships.Relationship> | void
    }
    namespace Positions {
      function retrieve({ AMId }: { AMId: number }, callback?: Function): Promise<transactions.Position> | void
      function search({ AMId, query }: { AMId: number, query: { assetManagerIds?: number[], bookIds?: string[], assetIds?: string[], clientIds?: number[], accountIds?: string[], accountingTypes?: string[], positionDate?: string[] } }, callback?: Function): Promise<transactions.Position> | void
    }
    function config({ stage, credentialsPath, token }: { stage: string, credentialsPath: string, token: string }): void
  }
  // CLASSES
  
  // assetManagers
  namespace assetManagers {

    interface IAssetManager {
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

    interface IDomain {
      assetManagerId: number
      domain: string
      isPrimary: boolean
      createdBy?: string
      updatedBy?: string
      createdTime?: string
      updatedTime?: string
      version?: number
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

    interface IEODBook {
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

    interface IBook {
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
    interface IAsset {
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
    interface IBondBase extends IAsset {
      maturityDate?: string
      defaulted: boolean
      coupon?: any
      par?: any
      payFrequency?: string
    }
    class BondBase extends Asset {
      maturityDate?: string
      defaulted: boolean
      coupon?: any
      par?: any
      payFrequency?: string
      constructor(props: IBondBase)
    }
    interface IBondCorporate extends IBondBase {}
    class BondCorporate extends BondBase {
      constructor(props: IBondCorporate)
    }
    interface IBondGovernment extends IBondBase {}
    class BondGovernment extends BondBase {
      constructor(props: IBondGovernment)
    }
    interface IBondMortgage extends IBondBase {}
    class BondMortgage extends BondBase {
      constructor(props: IBondMortgage)
    }

    // currency
    type ICurrencyTypes = ICurrency
    type CurrencyClassTypes = Currency
    interface ICurrency extends IAsset {
      deliverable?: boolean
      minorUnitPlaces?: string | number
    }
    class Currency extends Asset {
      deliverable?: boolean
      minorUnitPlaces?: string | number
      constructor(props: ICurrency)
    }

    // custom asset
    type ICustomAssetTypes = ICustomAsset
    type CustomAssetClassTypes = CustomAsset
    interface ICustomAsset extends IAsset {
      maturityDate?: string
      [propName: string]: any
    }
    class CustomAsset extends Asset {
      maturityDate?: string
      [propName: string]: any
      constructor(props: ICustomAsset)
    }

    // derivatives
    type IDerivativesType = IDerivative | IBondOption | IContractForDifference | IForeignExchangeOption
    type DerivativesClassType = Derivative | BondOption | ContractForDifference | ForeignExchangeOption
    interface IDerivative extends IAsset {}
    class Derivative extends Asset {
      constructor(props: IDerivative)
    }
    interface IBondOption extends IDerivative {
      optionStyle?: 'American' | 'Bermudan' | 'European'
      optionType?: 'Put' | 'Call'
      strike?: any
      expiryDate?: string
      underlyingAssetId?: string | number
    }
    class BondOption extends Derivative {
      optionStyle?: 'American' | 'Bermudan' | 'European'
      optionType?: 'Put' | 'Call'
      strike?: any
      expiryDate?: string
      underlyingAssetId?: string | number
      constructor(props: IBondOption)
    }
    interface IContractForDifference extends IDerivative {}
    class ContractForDifference extends Derivative {
      constructor(props: IContractForDifference)
    }
    interface IForeignExchangeOption extends IDerivative {
      optionStyle?: 'American' | 'Bermudan' | 'European'
      optionType?: 'Put' | 'Call'
      strike?: any
      expiryDate?: string
      underlyingAssetId?: string | number
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
    interface IEquity extends IAsset {}
    class Equity extends Asset {
      constructor(props: IEquity)
    }

    // funds
    type IFundTypes = IFund | IExchangeTradedFund
    type FundClassTypes = Fund | ExchangeTradedFund
    interface IFund extends IAsset {
      fundType?: 'Open' | 'Closed' | 'ETF'
      creationDate?: string
      nav?: any
      expenseRatio?: any
      netAssets?: any
    }
    class Fund extends Asset {
      fundType?: 'Open' | 'Closed' | 'ETF'
      creationDate?: string
      nav?: any
      expenseRatio?: any
      netAssets?: any
      constructor(props: IFund)
    }
    interface IExchangeTradedFund extends IFund {}
    class ExchangeTradedFund extends Fund {
      constructor(props: IExchangeTradedFund)
    }

    // foreign exchange
    type IForeignExchangeTypes = IForeignExchangeBase | IForeignExchange | INonDeliverableForward
    type ForeignExchangeClassTypes = ForeignExchangeBase | ForeignExchange | NonDeliverableForward
    interface IForeignExchangeBase extends IAsset {}
    class ForeignExchangeBase extends Asset {
      constructor(props: IForeignExchangeBase)
    }
    interface IForeignExchange extends IForeignExchangeBase {}
    class ForeignExchange extends ForeignExchangeBase {
      constructor(props: IForeignExchange)
    }
    interface INonDeliverableForward extends IForeignExchangeBase {}
    class NonDeliverableForward extends ForeignExchangeBase {
      constructor(props: INonDeliverableForward)
    }

    // index
    type IIndexTypes = IIndex
    type IndexClassTypes = Index
    interface IIndex extends IAsset {}
    class Index extends Asset {
      constructor(props: IIndex)
    }

    // listed derivative
    type IListedDerivativeTypes = IListedDerivative | IFuture | IBondFuture | IFutureOption | IBondFutureOption | IEnergyFuture | IEquityFuture | IIndexFuture | IInterestRateFuture | IListedContractForDifference
    type ListedDerivativeClassTypes = ListedDerivative | Future | BondFuture | FutureOption | BondFutureOption | EnergyFuture | EquityFuture | IndexFuture | InterestRateFuture | ListedContractForDifference
    interface IListedDerivative extends IAsset {}
    class ListedDerivative extends Asset {
      constructor(props: IListedDerivative)
    }
    interface IFuture extends IListedDerivative {
      settlementType?: 'Physical' | 'Cash'
      contractSize?: any
      pointValue?: any
      tickSize?: any
      quoteUnit?: any
      underlyingAssetId?: string
      expiryDate?: string
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
    interface IBondFuture extends IFuture {
      cheapestToDeliverId?: string | number
      underlyingBondTenor?: '1M' | '3M' | '6M' | '9M' | '1Y' | '2Y' | '5Y' | '10Y' | '15Y' | '20Y' | '30Y' | '40Y' | '50Y'
      underlyingBondCoupon?: any
    }
    class BondFuture extends Future {
      cheapestToDeliverId?: string | number
      underlyingBondTenor?: '1M' | '3M' | '6M' | '9M' | '1Y' | '2Y' | '5Y' | '10Y' | '15Y' | '20Y' | '30Y' | '40Y' | '50Y'
      underlyingBondCoupon?: any
    }
    interface IFutureOption extends IFuture {
      optionType?: 'Put' | 'Call'
      optionStyle?: 'American' | 'Bermudan' | 'European'
      strike?: any
    }
    class FutureOption extends Future {
      optionType?: 'Put' | 'Call'
      optionStyle?: 'American' | 'Bermudan' | 'European'
      strike?: any
      constructor(props: IFutureOption)
    }
    interface IBondFutureOption extends IFutureOption {}
    class BondFutureOption extends FutureOption {
      constructor(props: IBondFutureOption)
    }
    interface IEnergyFuture extends IFuture {}
    class EnergyFuture extends Future {
      constructor(props: IEnergyFuture)
    }
    interface IEquityFuture extends IFuture {}
    class EquityFuture extends Future {
      constructor(props: IEquityFuture)
    }
    interface IIndexFuture extends IFuture {}
    class IndexFuture extends Future {
      constructor(props: IIndexFuture)
    }
    interface IInterestRateFuture extends IFuture {}
    class InterestRateFuture extends Future {
      constructor(props: IInterestRateFuture)
    }
    interface IListedContractForDifference extends IListedDerivative {}
    class ListedContractForDifference extends ListedDerivative {
      constructor(props: IListedContractForDifference)
    }

    // private investment
    type IPrivateInvestmentTypes = IPrivateInvestment
    type PrivateInvestmentClassTypes = PrivateInvestment
    interface IPrivateInvestment extends IAsset {
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
    interface IRealAsset extends IAsset {
      ownership?: any
    }
    class RealAsset extends Asset {
      ownership?: any
      constructor(props: IRealAsset)
    }
    interface IRealEstate extends IRealAsset {}
    class RealEstate extends RealAsset {
      constructor(props: IRealEstate)
    }
    interface IWine extends IRealAsset {
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
    interface ISukuk extends IAsset {
      maturityDate?: string
    }
    class Sukuk extends Asset {
      maturityDate?: string
      constructor(props: ISukuk)
    }

    // synthetics
    type ISyntheticTypes = ISynthetic | ISynethticFromBook | ISyntheticMultiLeg
    type SyntheticClassTypes = Synthetic | SynethticFromBook | SyntheticMultiLeg
    interface ISynthetic extends IAsset {
      maturityDate?: string
    }
    class Synthetic extends Asset {
      maturityDate?: string
      constructor(props: ISynthetic)
    }
    interface ISynethticFromBook extends ISynthetic {
      bookId?: string
    }
    class SynethticFromBook extends Synthetic {
      bookId?: string
      constructor(props: ISynethticFromBook)
    }
    interface ISyntheticMultiLeg extends ISynthetic {
      legs?: any[]
    }
    class SyntheticMultiLeg extends Synthetic {
      legs?: any[]
      constructor(props: ISyntheticMultiLeg)
    }

  }

  // parties
  namespace parties {

    type PartiesClassType = parties.AssetManager | parties.Broker | parties.Company | parties.Exchange | parties.Fund | parties.GovernmentAgency | parties.Individual | parties.Organisation | parties.Party | parties.SubFund
    type PartiesInterfaceType = parties.IAssetManager | parties.IBroker | parties.ICompany | parties.IExchange | parties.IFund | parties.IGovernmentAgency | parties.IIndividual | parties.IOrganisation | parties.IParty | parties.ISubFund

    interface IParty {
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

    interface IIndividual extends IParty {
      givenNames?: string
      surname?: string
      dateOfBirth?: string
    }

    class Individual extends Party {
      givenNames?: string
      surname?: string
      dateOfBirth?: string
      constructor(props: IIndividual)
    }

    interface IOrganisation extends IParty {}

    class Organisation extends Party {
      constructor(props: IOrganisation)
    }

    interface ISubFund extends IParty {}

    class SubFund extends Party {
      constructor(props: ISubFund)
    }

    interface IGovernmentAgency extends IOrganisation {}

    class GovernmentAgency extends Organisation {
      constructor(props: IGovernmentAgency)
    }

    interface ICompany extends IOrganisation {}

    class Company extends Organisation {
      constructor(props: ICompany)
    }

    interface IFund extends ICompany {}

    class Fund extends Company {
      constructor(props: IFund)
    }

    interface IExchange extends ICompany {}

    class Exchange extends Company {
      constructor(props: IExchange)
    }

    interface IBroker extends ICompany {}

    class Broker extends Company {
      constructor(props: IBroker)
    }

    interface IAssetManager extends ICompany {}

    class AssetManager extends Company {
      constructor(props: AssetManager)
    }

  }

  // relationships
  namespace relationships {
    interface IRelationship {
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

    interface IMonitorItem {
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
  }

  // transactions
  namespace transactions {

    interface ITransaction {
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

    interface IPosition {
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