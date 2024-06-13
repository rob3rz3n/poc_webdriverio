import logger from '@wdio/logger';

import { isEnabled } from './env.js';
import { createWebdriverioBaseConfig } from './webdriver.config.mjs';
import { createChromeCapability } from './capabilities/chrome.chromedriver.mjs';
import { createAndroidCapability } from './capabilities/android.browserstack.mjs';

const log = logger('SERVICE');
log.info('browserstack service');

const services = [
  ['browserstack'],
];

const capabilities = [
  isEnabled(process.env.ENABLE_CHROME) && createChromeCapability(),
  isEnabled(process.env.ENABLE_SAFARI) && createSafariCapability(),
  isEnabled(process.env.ENABLE_FIREFOX) && createFirefoxCapability(),
  isEnabled(process.env.ENABLE_ANDROID) && createAndroidCapability(),
  isEnabled(process.env.ENABLE_IOS) && createIOSCapability(),
].filter(Boolean);

const maxInstances = isEnabled(process.env.ENABLE_DYNAMIC_INSTANCES) ? capabilities.length : 1;

log.info('services', services);
log.info('capabilities', capabilities);
log.info('maxInstances', maxInstances);

/**
 * @type { import('@wdio/types').Options.Testrunner }
 */
export const config = {
  ...createWebdriverioBaseConfig(),
  services: [
    ['browserstack'],
  ],
  capabilities,
  maxInstances: capabilities.length || 1,
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,
};
