'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, done) {
  db.createTable('addresses', {
    id: {
      type: 'int',
      primaryKey: true
    },

    streetAddress: {
      type: 'string',
      length: 50
    },

    city: {
      type: 'string',
      length: 40
    },

    country: {
      type: 'string',
      length: 40
    },

    stateProvince: {
      type: 'string',
      length: 40
    },

    postalCode: {
      type: 'string',
      length: 10
    }
  }, done);
};

exports.down = function(db) {
  db.dropTable('addresses');
};

exports._meta = {
  "version": 1
};
