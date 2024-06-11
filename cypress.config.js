const JsForce = require('jsforce')

const {defineConfig} = require('cypress')

function buildPassword(credentials) {
  return `${credentials.password}${credentials.token}`
}

module.exports = defineConfig({
  defaultCommandTimeout: 60_000,
  downloadsFolder: 'downloads',
  e2e: {
    experimentalMemoryManagement: true,
    experimentalModifyObstructiveThirdPartyCode: true,
    specPattern: 'integration/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'support/support.js',
  },
  env: {
    grepFilterSpecs: true,
  },
  fixturesFolder: 'fixtures',
  includeShadowDom: true,
  numTestsKeptInMemory: 1,
  pageLoadTimeout: 200_000,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: './multi_reporters.json',
  },
  requestTimeout: 60_000,
  responseTimeout: 60_000,
  retries: {
    openMode: 0,
    runMode: 1,
  },
  screenshotsFolder: 'screenshots',
  video: false,
  videosFolder: 'videos',
  viewportHeight: 720,
  viewportWidth: 1280,
  watchForFileChanges: false,
})
