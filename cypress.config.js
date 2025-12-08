const { defineConfig } = require('cypress');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  env: {
    issuePrefix: 'https://your.domain.atlassian.net/browse/',
    tmsPrefix: 'https://some.testrail.instance/path/suite/caseID-'
  },

  e2e: {
    setupNodeEvents(on, config) {
      // inicializa o plugin do Allure
      allureWriter(on, config);

      return config;
    }
  }
});
