import {
  Given,
  When,
  Then
} from '@badeball/cypress-cucumber-preprocessor';


const blogPage = require("../../pages/blog.page");
const talkToExpert = require("../../pages/talkToExpert.page");
const commonPage = require("../../pages/common.page");
const calculatorPage = require("../../pages/calculator.page");
const expertPage = require("../../pages/talkToExpert.page");
Given('Visit talk to exprt page and click the cookies if it presents', () => {
  expertPage.checkAcceptCookieExpert();
});

When('fill Fields Expert Page and check message send', () => {
  expertPage.fillFieldsExpertPage()
})
