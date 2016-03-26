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

    it('should verify that "timestamp" is a valid type', () => {
        expect(isVcardDateTimeType('timestamp')).to.equal(true);
    });

    it('should verify that "moment" is an invalid type', () => {
        expect(isVcardDateTimeType('moment')).to.equal(false);
    });

    it('should verify that "period" is an invalid type', () => {
        expect(isVcardDateTimeType('period')).to.equal(false);
    });
});
