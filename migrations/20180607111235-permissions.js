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
  db.createTable('permissions', {
    id: {
      type: 'int',
      primaryKey: true
    },

    roleID: {
      type: 'int'
    },

    userID: {
      type: 'int'
    },

    duration: {
      type: 'string'
    }
  }, done);
};

exports.down = function(db) {
  db.dropTable('permissions');
};

exports._meta = {
  "version": 1
};
