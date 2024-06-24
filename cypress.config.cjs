// cypress.config.cjs
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implementar node event listeners aqui
    },
    baseUrl: 'http://localhost:3002',
    testIsolation: false,
  },
});
