'use strict';
var specifications = require('base.specifications'),
    logger = require('base.logger')('components/privilege/datastore');
module.exports = specifications.components.PrivilegeProvider.extend(
    /**
     * @lends components/privilege-datastore.prototype
     */
    {
        /**
         * @classDesc privilege-datastore
         * @exports components/privilege-datastore
         * @extends components/PrivilegeProvider
         * @constructor
         * @abstract
         */
        init: function (settings, resolver) {
            logger.info('initializing...');
            return;
        },
        serialize: specifications.base.Class.abstract,
        deserialize: specifications.base.Class.abstract
    }
);
