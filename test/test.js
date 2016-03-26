'use strict';

let expect              = require('chai').expect;
let isVcardDateTimeType = require('../lib/is-vcard-date-time-type');

describe('Is vCard Date/Time Type', () => {
    it('should verify that "date" is a valid property', () => {
        expect(isVcardDateTimeType('date')).to.equal(true);
    });
});
