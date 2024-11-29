const { defineConfig } = require("cypress");
module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  watchForFileChanges: false,
  experimentalStudio: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      USERNAME: "nusadua", // Tambahkan variabel lingkungan USERNAME
      PASSWORD: "password" // Tambahkan variabel lingkungan PASSWORD
    },
  },
});
