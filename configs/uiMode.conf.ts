export const config = {
  baseUrl: "https://telnyx.com/",
  runner: "local",
  tsConfigPath: "./tsconfig.json",

  specs: ["../test/specs/**/*.ts"],
  exclude: [],
  maxInstances: 10,
  capabilities: [
    {
      browserName: process.env.BROWSER || "chrome",
    },
  ],

  logLevel: "info",

  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,

  connectionRetryCount: 3,

  framework: "mocha",

  reporters: [
    "spec",
    [
      "allure",
      {
        outputDir: "allure-results",
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
      },
    ],
  ],

  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
};
