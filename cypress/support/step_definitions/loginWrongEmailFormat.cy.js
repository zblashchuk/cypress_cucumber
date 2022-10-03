
     /*When I click on Login link in the header
     Then I check that the Login page is opened
     Then I fill login form field by wrong email format and valid password and click login
     And Expect message about wrong email format*/

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
Given('I am on the Telnyx home page, accept the cookies', () => {
  //cy.viewport(1920, 1080);
  commonPage.checkAcceptCookie();
});

When('I go to Login page by click on button in the header', () => {
  headerPage.clickTopMemuElement();
});
Then ('I am on Login page', () => {
      cy.url().should('include', '/login/sign-in');
});
Then('I fill login form field by wrong email format and valid password and click login', () => {
  loginPage.fillFieldsByWrongEmailFormat();
});
Then('Expect message about wrong email format', () => {
  loginPage.checkWrongEmailFormat();
});