import { createWebdriverioBaseConfig } from './webdriver.config.mjs';
import { createChromeCapability } from './capabilities/chrome.chromedriver.mjs';

export const service = ['chromedriver',
  {
    logFileName: 'wdio-chromedriver.log',
    outputDir: 'driver-logs',
  },
];

export const capability = createChromeCapability();

const maxInstances = 1;

export const config = {
  ...createWebdriverioBaseConfig(),
  services: [
    service,
  ],
  capabilities: [
    capability,
  ],
  maxInstances,
};
