const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const createEsbuildPlugin = 
require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;


  module.exports = defineConfig({
    projectId: "vwknkz",
    e2e: {
      async setupNodeEvents(on, config) {
        const bundler = createBundler({
          plugins: [createEsbuildPlugin(config)],
        });
        on("file:preprocessor", bundler);
        await addCucumberPreprocessorPlugin(on, config);
  
        return config;
      },
      specPattern: '**/*.feature',
      supportFile: false,
      baseUrl: "https://telnyx.com",
      chromeWebSecurity: false,
    },
    watchForFileChanges:true,
    viewportWidth: 1920,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 20000,
    viewportHeight: 1080,
    downloadsFolder: "./trash/downloads",
    screenshotsFolder: "./trash/screenshots",
    videosFolder: "./trash/videos",
    video: false,
    screenshotOnRunFailure: true,
    taskTimeout: 50000,
    projectId: "879fh9",
  });
