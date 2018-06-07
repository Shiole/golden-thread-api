'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db, done) {
  db.createTable('user', {
    id: {
      type: 'int',
      primaryKey: true
    },

    username: {
      type: 'string',
      length: 40
    },

    first_name: {
      type: 'string',
      length: 40
    },

    last_name: {
      type: 'string',
      length: 40
    },

    email: {
      type: 'string',
      length: 40
    },

    password: {
      type: 'int',
      length: 50
    },

    paymentID: {
      type: 'int'
    },

    addressID: {
      type: 'int'
    }
  }, done);
};

exports.down = function (db) {
  db.dropTable('user');
};

exports._meta = {
  "version": 1
};
