/// <reference types="cypress-xpath" />
import {
  Given,
  When,
  Then
} from '@badeball/cypress-cucumber-preprocessor';


const blogPage = require("../../pages/blog.page");
const waitListPage = require("../../pages/joinToWaistList.page");
const commonPage = require("../../pages/common.page");
const getTheBookPage = require("../../pages/getTheEBook.page");
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
