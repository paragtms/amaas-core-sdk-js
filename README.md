# AMaaS Core SDK for JavaScript

This is the Asset Management as a Service ([AMaaS](https://amaas.com/)) Software Development Kit (SDK) for JavaScript.
This module can be used in Node.js (version >= 4.0) and in browsers.

## What is AMaaS?

AMaaS is a modular platform for Asset Managers with an open, RESTful API for programmatic access to its functionality.

AMaaS Core features a secure, encrypted database, which serves as the foundation for asset management platforms and FinTech solutions. AMaaS also provides portfolio visualizations and analytics through AMaaS Web, and exception management & financial event notification through AMaaS Monitor.


## Documentation
[Get the full documentation here.](docs/index.md)

## Numbers in the AMaaS Core SDK for JavaScript
Numbers are handled by the [decimal.js](https://github.com/MikeMcl/decimal.js/) package. All numbers in the classes are stored as Decimal instances. For a full list of functions available on these numbers please refer to the decimal.js documentation.

### Common functions
Note that the decimal.js functions return Decimal instances and are immutable (you will need to assign results of arithmetic operations to new variables).

```javascript
let x = new Decimal(5)
let y = new Decimal(10)

const a = x.plus(y) // a = 15, x = 5
const b = x.times(y) // b = 50
const c = y.minus(x) // c = 5
const d = y.dividedBy(x) // d = 2
```
Converting a Decimal to a string
```javascript
let x = new Decimal(3.14)

const a = x.toFixed(5) // a = '3.14000'
const b = x.toPrecision(5) // b = '3.1400'
```

## Tests

Install dependencies:
```
$ npm install
```

Running tests that do not require API access
```
$ npm test -- 'src\/(?!utils)'
```

Running full tests (requires authentication)
```
$ npm test
```
Authentication requires a username and password. This is currently restricted to AMaaS employees - unauthenticated users may test and contribute to non-API functionality.

## Contribution

If you would like to contribute, please fork the repo and send in a pull request.

## Support

For support with the SDKs, please raise issues on GitHub. The AMaaS team can be contacted at <support@amaas.com>. Customers who have purchased a support plan can find the contact details within AMaaS Admin.

## License

[Apache License](https://raw.githubusercontent.com/amaas-fintech/amaas-core-sdk-js/master/LICENSE)
