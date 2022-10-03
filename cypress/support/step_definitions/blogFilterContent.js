
/// <reference types="cypress-xpath" />
import {
  Given,
  When,
  Then,
  And,
} from '@badeball/cypress-cucumber-preprocessor';

const blogPage = require("../../pages/blog.page");
const footerPage = require("../../pages/footer.page");
const commonPage = require("e:/Zoryana/cypress-cucamber/cypress/pages/common.page");
Given('Visit Telnyx home page and click the cookies if it present', () => {
  commonPage.checkAcceptCookie();
});

When('I click on the the Blog link in the footer', () => {
  footerPage.clickBlogInFooter();
});
Then ('Check that the Blog page is opened', () => {
      cy.url({ timeout: 20000 }).should('include', '/resources');
});


Then ('Choose in Filter By Content - ProductsFeature and check it focus', () => {
      blogPage.chooseFilterByContentProductsFeature()
});

Then('Check that result of filter is correct', () => {
  blogPage.checkResultFilterByContent();
});
