require('dotenv').config();
/**
 * @typedef {Object} Config
 * @property {number} port
 * @property {'http' | 'ws'} transport
 *
 * @property {Object} database
 * @property {string} database.host
 * @property {number} database.port
 * @property {string} database.database
 * @property {string} database.user
 * @property {string} database.password
 *
 * @property {Object} hash
 * @property {number} hash.saltLength
 * @property {number} hash.keyLength
 *
 * @property {Object} runOptions
 * @property {number} runOptions.timeout
 * @property {boolean} runOptions.displayErrors
 *
 * @property {Object} logger
 * @property {Object} logger.colors
 * @property {string} logger.colors.info
 * @property {string} logger.colors.debug
 * @property {string} logger.colors.error
 * @property {string} logger.colors.system
 * @property {string} logger.colors.access
 * @property {number} logger.datetimeLength
 * */
const config = {
  port: process.env.PORT || 3000,
  transport: process.env?.API_TRANSPORT || 'http',

  // TODO
  database: {
    host: process.env.DB_HOST ,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },

  hash: {
    saltLength: process.env.HASH_SALT || 16,
    keyLength: process.env.HASH_LENGTH || 64,
  },

  runOptions: { timeout: 5000, displayErrors: false },

  logger: {
    colors: {
      info: '\x1b[1;37m',
      debug: '\x1b[1;33m',
      error: '\x1b[0;31m',
      system: '\x1b[1;34m',
      access: '\x1b[1;38m',
    },

    datetimeLength: 19,
  },
};

module.exports = config;
