declare module '@amaas/amaas-core-sdk-js' {
  // API

  namespace api {
    namespace AssetManagers {
      export function retrieve({ AMId }: { AMId: number }, callback?: Function): Promise<any> | void
      export function insert({ assetManager }: { assetManager: assetManagers.AssetManager | assetManagers.IAssetManager }, callback?: Function): Promise<assetManagers.AssetManager> | void
      export function amend({ AMId, assetManager }: { AMId: number, assetManager: assetManagers.AssetManager | assetManagers.IAssetManager }, callback?: Function): Promise<assetManagers.AssetManager> | void
      export function deactivate({ AMId }: { AMId: number }, callback?: Function): Promise<assetManagers.AssetManager> | void
      export function reactivate({ AMId }: { AMId: number }, callback?: Function): Promise<assetManagers.AssetManager> | void
    }
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

    export class AssetManager {
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
      constructor({
        assetManagerId,
        assetManagerType,
        assetManagerStatus,
        accountType,
        clientId,
        partyId,
        defaultBookOwnerId,
        defaultTimezone,
        defaultBookCloseTime,
        createdBy,
        updatedBy,
        createdTime,
        updatedTime,
        version
      }: IAssetManager)
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

    export class Book {
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
      constructor({
        assetManagerId,
        bookId,
        bookType,
        bookStatus,
        ownerId,
        partyId,
        closeTime,
        timezone,
        baseCurrency,
        businessUnit,
        description,
        positions,
        createdBy,
        updatedBy,
        createdTime,
        updatedTime,
        version
      }: IBook)
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
      constructor({
        assetManagerId,
        assetBookId,
        counterpartyBookId,
        transactionAction,
        assetId,
        quantity,
        transactionDate,
        settlementDate,
        price,
        transactionCurrency,
        settlementCurrency,
        asset,
        executionTime,
        transactionType,
        transactionId,
        transactionStatus,
        charges,
        codes,
        comments,
        links,
        parties,
        rates,
        references,
        postings,
        createdBy,
        updatedBy,
        createdTime,
        updatedTime,
        version
      }: ITransaction)
    }
  }
}