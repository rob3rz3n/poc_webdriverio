import logger from '@wdio/logger';

import { createWebdriverioBaseConfig } from './webdriver.config.mjs';

import * as CHROME_SERVICE from './browser.chrome.service.mjs';

import { isEnabled } from './env.js';

const log = logger('SERVICE');
log.info('browser service');

const CHROME_IS_ENABLED = isEnabled(process.env.ENABLE_CHROME);
const DYNAMIC_INSTANCES_IS_ENABLED = isEnabled(process.env.ENABLE_DYNAMIC_INSTANCES);

const services = [
  CHROME_IS_ENABLED && CHROME_SERVICE.service,
].filter(Boolean);

const capabilities = [
  CHROME_IS_ENABLED && CHROME_SERVICE.capability,
].filter(Boolean);

const maxInstances = DYNAMIC_INSTANCES_IS_ENABLED ? capabilities.length : 1;

log.info('services', services);
log.info('capabilities', capabilities);
log.info('maxInstances', maxInstances);

export const config = {
  ...createWebdriverioBaseConfig(),
  services,
  capabilities,
  maxInstances,
};
