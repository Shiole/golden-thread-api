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
  db.createTable('donations', {
    id: {
      type: 'int',
      primaryKey: true
    },

    userID: {
      type: 'int'
    },

    charityID: {
      type: 'int'
    },

    amount: {
      type: 'int',
      length: 40
    },

    date: {
      type: 'date'
    }
  }, done);
};

exports.down = function (db) {
  db.dropTable('donations');
};

exports._meta = {
  "version": 1
};
