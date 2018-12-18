const Data = require('./environments_parameters.json')

const TEST_ENV = process.env.TEST_ENV || 'local'
let environmentParameters

switch (TEST_ENV) {
  case 'local':
    environmentParameters = Data[0].local
    break
}

exports.config = {
  seleniumAddress: environmentParameters.seleniumAddress,
  ignoreUncaughtExceptions: true,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  restartBrowserBetweenTests: false,
  getPageTimeout: 50000,
  allScriptsTimeout: 30000,
  rootElement: '*[ng-app]',
  baseUrl: environmentParameters.baseUrl,
  params: {

  },

  specs: [
    'features/*.feature'
  ],

  exclude: [
  ],

  capabilities: {
    'browserName': 'chrome',
    chromeOptions: {
      args: [
        '--disable-gpu',
        '--start-fullscreen'
      ]
    }
  },

  cucumberOpts: {
    require: '../features/step_definitions/*.js',
    tags: ['@run'],
    format: ['json:results.json'],
    profile: false,
    'no-source': true
  },

  onPrepare: function () {
    // Use only for angular applications
    // False: app Angular
    // True: app not Angular
    browser.ignoreSynchronization = false
  },

  afterLaunch: function () {
    var reporter = require('cucumber-html-reporter')

    var options = {
      theme: 'bootstrap',
      jsonFile: 'results.json',
      output: 'report/cucumber_report.html',
      reportSuiteAsScenarios: true,
      launchReport: true,
      storeScreenshots: false,
      metadata: {
        'App Version': '0.0.1',
        'Test Environment': 'STAGING',
        'Browser': 'Chrome  69.0.3497.100',
        'Platform': 'OSX',
        'Parallel': 'Scenarios',
        'Executed': 'Remote'
      }
    }
    reporter.generate(options)
  }
}