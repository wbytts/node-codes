const { Client, LogLevel } = require('@notionhq/client');

const notion = new Client({
  auth: 'secret_73m9zLMIECUxfIBQxriXRUuDVIiQ7EdxxwqPulOdDmr',
  logLevel: LogLevel.DEBUG,
  timeoutMs: 6000,
});

const dbMap = {
  'test-db': '',
};

const pageMap = {};

module.exports = {
  notion,
  dbMap,
  pageMap,
};
