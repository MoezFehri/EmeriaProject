const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  //generate HTML report
  reporter: "cypress-mochawesome-reporter",

  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
      this.screenshotOnRunFailure=true;
      require ('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: "cypress/e2e/pro/*.feature",
  },
});
