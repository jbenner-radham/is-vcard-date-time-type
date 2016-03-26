is-vcard-date-time-type
=======================
[![npm Version][NPM VERSION BADGE]][NPM PAGE]
[![GitHub License][LICENSE BADGE]][LICENSE PAGE]
[![Build Status][BUILD BADGE]][BUILD PAGE]

Determines if the supplied parameter is a valid vCard date/time type.

Install
-------
```sh
$ npm install is-vcard-date-time-type
```

Usage
-----
```js
var isVcardDateTimeType = require('is-vcard-date-time-type')

isVcardDateTimeType('date-and-or-time') // > true
isVcardDateTimeType('not-a-time-type')  // > false
```

Testing
-------
```sh
$ npm test
```

License
-------
The MIT License (Expat). See the [license file](LICENSE) for details.

[BUILD BADGE]: https://img.shields.io/travis/jbenner-radham/is-vcard-date-time-type.svg?style=flat-square
[BUILD PAGE]: https://travis-ci.org/jbenner-radham/is-vcard-date-time-type
[LICENSE BADGE]: https://img.shields.io/badge/license-MIT%20License-blue.svg?style=flat-square
[LICENSE PAGE]: https://github.com/jbenner-radham/is-vcard-date-time-type/blob/master/LICENSE
[NPM PAGE]: https://www.npmjs.com/package/is-vcard-date-time-type
[NPM VERSION BADGE]: https://img.shields.io/npm/v/is-vcard-date-time-type.svg?style=flat-square
