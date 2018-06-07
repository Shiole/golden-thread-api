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
  db.createTable('payment-methods', {
    id: {
      type: 'int',
      primaryKey: true
    },

    card_holder: {
      type: 'string',
      length: 40
    },

    card_number: {
      type: 'string',
      length: 40
    },

    exp_date: {
      type: 'string',
      length: 5
    },

    CVC: {
      type: 'int',
      length: 3
    }
  }, done);
};

exports.down = function(db) {
  db.dropTable('payment-methods');
};

exports._meta = {
  "version": 1
};
