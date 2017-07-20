declare module '@amaas/amaas-core-sdk-js' {
  // CLASSES
  
  // assetManagers
  namespace assetManagers {
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
      }: {
        assetManagerId?: number,
        assetManagerType: string,
        assetManagerStatus?: string,
        accountType?: string,
        clientId?: number,
        partyId?: string,
        defaultBookOwnerId?: number,
        defaultTimezone?: string,
        defaultBookCloseTime?: string,
        createdBy?: string,
        updatedBy?: string,
        createdTime?: string,
        updatedTime?: string,
        version?: number
      })
    }
  }
}