/* eslint-disable max-len */

import dotenv from 'dotenv';
import logger from '@wdio/logger';

dotenv.config({});

const log = logger('EXECUTION_INFO');

const paths = {
  reports: {
    jsonReportTempPath: './reports/jsonReport/temp',
    htmlReportTempPath: './reports/htmlReport/temp',
  },
};

global.log = log;

/**
 * @return { import('@wdio/types').Options.Testrunner }
 */
export const createWebdriverioBaseConfig = () => ({
  runner: 'local',

  specs: [
    '../features/*.feature',
  ],

  exclude: [
    // 'path/to/excluded/files'
  ],

  maxInstances: 1,
  logLevel: 'info',
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 1,
  framework: 'cucumber',
  reporters: [
    ['cucumberjs-json',
      {
        jsonFolder: paths.reports.jsonReportTempPath,
        outputName: 'cucumber.json',
      },
    ],
  ],

  cucumberOpts: {
    // <string[]> (file/dir) require files before executing features
    require: ['./stepDefinitions/*/*.js'],
    // <boolean> show full backtrace for errors
    backtrace: false,
    // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
    requireModule: [],
    // <boolean> invoke formatters without executing steps
    dryRun: false,
    // <boolean> abort the run on first failure
    failFast: false,
    // <boolean> hide step definition snippets for pending steps
    snippets: true,
    // <boolean> hide source uris
    source: true,
    // <boolean> fail if there are any undefined or pending steps
    strict: false,
    // <string> (expression) only execute the features or scenarios with tags matching the expression
    tagExpression: '',
    // <number> timeout for step definitions
    timeout: 60000,
    // <boolean> Enable this config to treat undefined definitions as warnings.
    ignoreUndefinedDefinitions: false,
  },

  // =====
  // Hooks
  // =====
  // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
  // it and to build services around it. You can either apply a single function or an array of
  // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
  // resolved to continue.

  // eslint-disable-next-line no-unused-vars
  async beforeStep(step) {
    // Used to print the steps name in console output
    log.info(`Step Started: ${step.text}`);
  },
  async afterStep(step, result) {
    // Used to print the steps name in console output
    log.info(`Step Completed: ${step.text}`);
  },

  beforeScenario(scenario) {
    // Used to print the scenario name in console output
    log.info(`Scenario Started: ${scenario.pickle.name}`);
  },

  afterScenario(scenario) {
    // Used to print the scenario name in console output
    log.info(`Scenario Completed: ${scenario.pickle.name}`);
  },

  beforeFeature(feature) {
    // Used to print the Feature file in console output
    log.info(`Feature Started: ${feature}`);
  },

  afterFeature(feature) {

    // Used to print the Feature file in console output
    log.info(`Feature Completed: ${feature}`);
  },

  async onComplete() {
    // Generate the HTML report from jsons reports. All in temp folders
  },
});
