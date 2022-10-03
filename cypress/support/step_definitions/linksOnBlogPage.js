/// <reference types="cypress-xpath" />
import {
  Given,
  When,
  Then
} from '@badeball/cypress-cucumber-preprocessor';

const blogPage = require("../../pages/blog.page");
const footerPage = require("../../pages/footer.page");
const commonPage = require("../../pages/common.page");
Given('Visit Telnyx main page and click the cookies if it present', () => {
  commonPage.checkAcceptCookie();
});

When('I click on the the Blog link in the footer and check that the page is opened', () => {
  footerPage.clickBlogInFooter();
  cy.url({ timeout: 20000 }).should('include', '/resources');
});
Then ('check request links on Blog page', () => {
  blogPage.getReadArtecleLinks()
         
});


