
const { defineConfig } = require('cypress');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  // Set the baseUrl for all tests
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl: 'https://dev-ehrpm.automedsys.net/', 
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      allureWriter(on, config);
      return config;
    },
  },
  screenshotOnRunFailure: true, // Enable screenshot capture on test failure
  video: true, // Enable video recording

 
});








