'use strict';

let expect              = require('chai').expect;
let isVcardDateTimeType = require('../lib/is-vcard-date-time-type');

describe('Is vCard Date/Time Type', () => {
    it('should verify that "date" is a valid type', () => {
        expect(isVcardDateTimeType('date')).to.equal(true);
    });

    it('should verify that "date-and-or-time" is a valid type', () => {
        expect(isVcardDateTimeType('date-and-or-time')).to.equal(true);
    });

    it('should verify that "date-time" is a valid type', () => {
        expect(isVcardDateTimeType('date-time')).to.equal(true);
    });

    it('should verify that "time" is a valid type', () => {
        expect(isVcardDateTimeType('time')).to.equal(true);
    });
});
