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
  db.createTable('charities', {
    id: {
      type: 'int',
      primaryKey: true
    },

    name: {
      type: 'string',
      length: 40
    },

    mission: {
      type: 'text',
      length: 1000
    },

    projectID: {
      type: 'int'
    },

    addressID: {
      type: 'int'
    }
  }, done);
};

exports.down = function (db) {
  db.dropTable('charities');
};

exports._meta = {
  "version": 1
};
