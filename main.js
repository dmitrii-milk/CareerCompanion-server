'use strict';

const fsp = require('node:fs').promises;
const path = require('node:path');
const { transport } = require('./config');
const staticServer = require('./static');
const load = require('./load');
const db = require('./db');
const hash = require('./hash');
const logger = require('./logger');

const server = require(`./${transport}`);

const sandbox = {
  console: Object.freeze(logger),
  db: Object.freeze(db),
  common: { hash },
};

const apiPath = path.join(process.cwd(), './api');

const routing = {};

(async () => {
  const files = await fsp.readdir(apiPath);

  for (const fileName of files) {
    if (!fileName.endsWith('.js')) continue;

    const filePath = path.join(apiPath, fileName);
    const serviceName = path.basename(fileName, '.js');
    routing[serviceName] = await load(filePath, sandbox);
  }

  staticServer('./static', 8000);
  server(routing, 8001);
})();
