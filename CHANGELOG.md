# Change Log
All notable changes to this project will be documented in this file.

## Unreleased (v0.1.2)
### Added
- Added accountType field to the AssetManager class.
- Added a csv parser to convert csv strings into Assets, Books, Parties, Transactions. @JYL123
- Added PrivateInvestment class (with ownership property).
- Added ownership property to RealAsset and its subclasses.
- Added `apiVersion` option to the api config. This will default to the latest stable version.
- Added type declaration file for AssetManager class and api.AssetManagers.*
- Add monitor item class.
- Add monitor api calls (insertNewItem, resubmitItem, searchItems, closeItem).

### Changed
- Removed `maturityDate` from the Asset base class and set either maturityDate or expiryDate on the relevant subclasses.
- Removed `premium` from Asset classes.
- Changed `Retail` type for AssetManager class to `Individual`.
- Do not set the AMaaS Reference (ASset, Corporate Action, Transaction). This should be done server side where the default referenceValue can be generated.
- Allow api version to be set on the production api option.
- Subclass Link for the various classes that have them. This is because the properties vary depending on the parent class. E.g. Transaction Link has linkedTransactionId, Party Link has linkedPartyId.

## 0.0.2 - 2017-05-09
### Changed
- Renamed the two files in `src/transactions/Transaction/*` to start with lowercase letters. Import statement in the index file was looking for files starting with capitals which was causing NotFound in some systems.

## 0.0.1 - 2017-05-08
### Added
- Published amaas-core-sdk-js to npm.
