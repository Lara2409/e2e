import 'dotenv/config';

const {ENV} = process.env;
const url = process.env[`BASE_URL_${ENV}`];

exports.config = {
  specs: ['../features/**/*.feature'],
  capabilities: [
    {
      maxInstances: 5,
      browserName: 'chrome',
      'goog:chromeOptions': {
        args: process.env.CI
          ? ['--headless', '--disable-gpu', '--no-sandbox'] : ['--start-maximized'],
      },
    },
  ],
  logLevel: 'error',
  bail: 0,
  baseUrl: url,
  waitforTimeout: 100000,
  connectionRetryTimeout: 100000,
  connectionRetryCount: 3,
  services: ['chromedriver', 'shared-store', 'devtools'],
  framework: 'cucumber',
  specFileRetries: 0,
  specFileRetriesDelay: 1,
  reporters: [
    [
      'allure',
      {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
        useCucumberStepReporter: true,
      },
    ],
    'spec',
  ],
  cucumberOpts: {
    require: ['./step-definitions/*.js'],
    backtrace: false,
    requireModule: [],
    dryRun: false,
    failFast: false,
    colors: true,
    snippets: true,
    source: true,
    strict: false,
    tagExpression: '(not @ignore)',
    timeout: 100000,
    ignoreUndefinedDefinitions: false,
  },

  async beforeScenario() {
    await browser.setNetworkConditions({}, 'Regular 3G');
  },

  async afterScenario() {    
    await browser.deleteAllCookies();
  },

  async afterStep(step, scenario, result) {
    if (result.error) {
      await browser.takeScreenshot();
    }
  },
};
