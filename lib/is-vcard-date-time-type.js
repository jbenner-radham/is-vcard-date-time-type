'use strict';

let is = require('is_js');

module.exports = (type) => {
    let dateTimeTypes = [
        'date',
        'date-and-or-time',
        'date-time',
        'time',
        'timestamp'
    ];

    return is.inArray(type, dateTimeTypes);
};
