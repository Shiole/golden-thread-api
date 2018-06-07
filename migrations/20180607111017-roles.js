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
  db.createTable('roles', {
    id: {
      type: 'int',
      primaryKey: true
    },

    type: {
      type: 'string',
      length: 5
    }
  }, done);
};

exports.down = function (db) {
  db.dropTable('roles');
};

exports._meta = {
  "version": 1
};
