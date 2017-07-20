declare module '@amaas/amaas-core-sdk-js' {
  // API

  namespace api {
    namespace AssetManagers {
      function retrieve({ AMId }: { AMId: number }, callback?: Function): Promise<any> | void
      function insert({ assetManager }: { assetManager: assetManagers.AssetManager | assetManagers.IAssetManager }, callback?: Function): Promise<assetManagers.AssetManager> | void
      function amend({ AMId, assetManager }: { AMId: number, assetManager: assetManagers.AssetManager | assetManagers.IAssetManager }, callback?: Function): Promise<assetManagers.AssetManager> | void
      function deactivate({ AMId }: { AMId: number }, callback?: Function): Promise<assetManagers.AssetManager> | void
      function reactivate({ AMId }: { AMId: number }, callback?: Function): Promise<assetManagers.AssetManager> | void
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
  }

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

    export class Transaction {
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
  }
}