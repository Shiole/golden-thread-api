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
  db.createTable('projects', {
    id: {
      type: 'int',
      primaryKey: true
    },

    name: {
      type: 'string',
      length: 40
    },

    details: {
      type: 'text',
      length: 1000
    }
  }, done);
};

exports.down = function(db) {
  db.dropTable('projects');
};

exports._meta = {
  "version": 1
};
