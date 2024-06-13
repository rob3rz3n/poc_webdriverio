import dotenv from 'dotenv';
import logger from '@wdio/logger';

import { createWebdriverioBaseConfig } from './webdriver.config.mjs';
import { createAndroidCapability } from './capabilities/android.appium.mjs';

dotenv.config({});

const log = logger('SERVICE');
log.info('appium android service');

/**
 * @type { import('@wdio/types').Options.Testrunner }
 */
export const config = {
  ...createWebdriverioBaseConfig(),
  services: [
    [
      'appium',
      {
        args: {
          relaxedSecurity: true,
          log: './logs/appium.log',
        },
      },
    ],
  ],
  capabilities: [
    createAndroidCapability(),
  ],
};
