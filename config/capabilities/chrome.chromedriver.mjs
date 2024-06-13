/**
 * @return { import('@wdio/types').Options.WebdriverIO['capabilities'] }
 */
export const createChromeCapability = () => ({
  browserName: 'chrome',
  'bstack:options': {
    consoleLogs: 'verbose',
    debug: 'true',
    networkLogs: 'true',
    interactiveDebugging: 'false',
  },
  browserVersion: process.env.CHROME_BROWSER_VERSION,
  'goog:chromeOptions': {
    args: ['--remote-allow-origins=*', '--log-level=ALL'],
  },
  'goog:loggingPrefs': { // Habilitar la captura de logs de red
    performance: 'ALL',
    browser: 'ALL',
  },
});
