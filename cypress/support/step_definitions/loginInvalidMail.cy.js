/// <reference types="cypress-xpath" />
import {
  Given,
  When,
  Then,
  And,
} from '@badeball/cypress-cucumber-preprocessor';

const headerPage = require("../../pages/header.page");
const loginPage = require("../../pages/login.page");
const commonPage = require("../../pages/common.page");
Given('I am on the Telnyx home page and click the cookies', () => {
  //cy.viewport(1920, 1080);
  commonPage.checkAcceptCookie();
});

When('I click on the Login link in the header', () => {
  headerPage.clickTopMemuElement();
});
Then ('Check that the Login page opened', () => {
      cy.url().should('include', '/login/sign-in');
});
Then('I fill login form field by invalid email and valid password and click login', () => {
  loginPage.fillFieldsByInValidEmail();
});
Then('Expect error message', () => {
  loginPage.checkErrorMessage();
});


