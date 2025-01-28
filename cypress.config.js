const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportWidth: 1000,
  viewportHeight: 660,
  defaultCommandTimeout: 15000,
  requestTimeout: 5000,
  responseTimeout: 30000,
  video: false,
  videoCompression: 15,
  videoUploadOnPasses: false,
  screenshotOnRunFailure: true,
  screenshotsFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos',
  downloadsFolder: 'cypress/downloads',
  trashAssetsBeforeRuns: true,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
    timestamp: 'mmddyyyy_HHMMss',
    mochaFile: 'cypress/reports/xml/[hash].xml', 
  },
  retries: {
    runMode: 0,
    openMode: 0,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on); 
      require('./cypress/plugins/index.js')(on, config);
    },
    specPattern: 'cypress/integration/**/*.feature',
    slowTestThreshold: 10000,
    supportFile: 'cypress/support/e2e.js',
  }
})
