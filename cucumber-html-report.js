const report = require('multiple-cucumber-html-reporter');
report.generate({
    jsonDir: "./jsonlogs",
    reportPath: "./reports/cucumber-htmlreport",
    metadata:{
        browser:{
            name: "chrome",
            version: "XX",
        },
        device: "Local test machine",
        platform: {
            name: "Windows",
            version: "10",
        },
    },
})