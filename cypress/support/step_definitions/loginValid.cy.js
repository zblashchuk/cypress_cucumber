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
Given('I am on the Telnyx home page and click the cookies if it present', () => {
  //cy.viewport(1920, 1080);
  commonPage.checkAcceptCookie();
});

When('I click on the the Login button in the header', () => {
  headerPage.clickTopMemuElement();
});
Then ('Check that the Login page is opened', () => {
      cy.url().should('include', '/login/sign-in')
      cy.wait(500)
;
});
Then('I fill all fields with valid data and click login', () => {
  loginPage.fillFieldsByValidData();
});
Then('Check that I am in my Account', () => {
  loginPage.checkUserLogInAccount();
});
Then('Check that I can Logout', () => {
  loginPage.checkUserLogout();
  cy.url().should('include', '/login/sign-in')
  cy.clearCookies()
});

