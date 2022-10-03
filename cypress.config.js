const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const createEsbuildPlugin = 
require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

  /*on(
    'file:preprocessor',
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}*/
//const cucumber = require('cypress-cucumber-preprocessor').default;
/*module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  on('file:preprocessor', cucumber());
};*/

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
  });