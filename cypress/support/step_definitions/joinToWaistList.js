/// <reference types="cypress-xpath" />
import {
  Given,
  When,
  Then
} from '@badeball/cypress-cucumber-preprocessor';


const blogPage = require("../../pages/blog.page");
const waitListPage = require("../../pages/joinToWaistList.page");
const commonPage = require("e:/Zoryana/cypress-cucamber/cypress/pages/common.page");
const getTheBookPage = require("e:/Zoryana/cypress-cucamber/cypress/pages/getTheEBook.page");
Given('click the cookies if it present on Waist List page', () => {
  waitListPage.checkAcceptCookieWaistlist();
});

When('I fill all require fields and click Apply Now', () => {
  waitListPage.fillFieldsExpertPage();
  //cy.url()
    //  .should('include', '/products/storage-waitlist')
});
Then ('I should be on storage-waitlist page', () => {
  cy.url()
      .should('include', '/products/storage-waitlist')
});
