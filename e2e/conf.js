const Data = require('./environments_parameters.json')

const TEST_ENV = process.env.TEST_ENV || 'local'
let environmentParameters

switch (TEST_ENV) {
  case 'local':
    environmentParameters = Data[0].local
    break
  case 'localDev':
    environmentParameters = Data[0].localDev
    break
  case 'localHom':
    environmentParameters = Data[0].localHom
    break
}

exports.config = {
  seleniumAddress: environmentParameters.seleniumAddress,
  ignoreUncaughtExceptions: true,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  restartBrowserBetweenTests: false, //mata as instâncias a cada cenário que roda
  getPageTimeout: 50000,
  allScriptsTimeout: 30000,
  highlightDelay: 1600, //diminuir a velocidade dos testes e faz um debug préveo visualmente de onde ele vai fazer a ação
  rootElement: '*[ng-app]',
  baseUrl: environmentParameters.baseUrl,
  params: {
    // Aqui posso criar credenciais de login

    // loginCredentials: {
    //   'userxx': 'xxx.zzz.yyy-tt',
    //   'passwordAA': 'senha01',

    //   'userxy': 'xxx.zzz.yyy-tt',
    //   'passwordAF': 'senha02'
    // }
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
        '--no-sandbox',
        '--disable-gpu',
        '--window-size=1280x1024',
        // '--headless'
      ]
    }
  },

  cucumberOpts: {
    require: '../features/step_definitions/*.js',
    // require: '../features/support/*.js',
    tags: ['~@notImplemented', '~@backLog', '~@notRun', '@automated'],
    format: ['json:results.json'],
    profile: false,
    'no-source': true
  },

  onPrepare: function () {
    // Use only for angular applications
    // False: app Angular
    // True: app not Angular
    browser.ignoreSynchronization = true
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
