'use strict';
var datasource = require('./injector')();
describe('privilege.datasource', function () {
    // it should return a module
    it('it should return a module', function () {
        expect(datasource).not.toBe(undefined);
    });
});
