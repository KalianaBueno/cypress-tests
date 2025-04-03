const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "t1g7vr",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',     //diretório onde será gerado os relatórios
      overwrite: false,      // não vai sobrescrever
      html: true,      //modelo gerado
      json: false,      //modelo não gerado
      timestamp: "mmddyyyy_HHMMss" }    // formato de data
  },
});
