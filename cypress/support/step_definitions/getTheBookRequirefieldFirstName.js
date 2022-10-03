/// <reference types="cypress-xpath" />
import {
  Given,
  When,
  Then
} from '@badeball/cypress-cucumber-preprocessor';


const blogPage = require("../../pages/blog.page");
const footerPage = require("../../pages/footer.page");
const commonPage = require("../../pages/common.page");
const getTheBookPage = require("../../pages/getTheEBook.page");
Given('Go to Telnyx home page, click the cookies', () => {
  commonPage.checkAcceptCookie();
});

When('Click on the the Blog link in the footer and checked that the page is opened', () => {
  footerPage.clickBlogInFooter();
  cy.url({ timeout: 20000 }).should('include', '/resources');
});
Then ('I click on get the book', () => {
  blogPage.clickGetTheBook()
  cy.url({ timeout: 20000 }).should('include', '/ebook-the-better-twilio-alternative');
  });

Then ('I fill  required fields without First name and click Send my content', () => {
  getTheBookPage.fillFormGetBookWithoutFirstName()
})

Then ('I expect to see message about requre field First name', () => {
  getTheBookPage.CheckRequrefieldMessage()
    
});



