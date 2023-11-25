const crypto = require('node:crypto');
const { keyLength, saltLength } = require('./config').hash;

const hash = (password) =>
  new Promise((resolve, reject) => {
    const salt = crypto.randomBytes(saltLength).toString('base64');

    crypto.scrypt(password, salt, keyLength, (err, result) => {
      if (err) reject(err);
      resolve(salt + ':' + result.toString('base64'));
    });
  });

module.exports = hash;
