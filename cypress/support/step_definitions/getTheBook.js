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
Given('click the cookies if it present on Telnyx home page', () => {
  commonPage.checkAcceptCookie();
});

When('I click on the the Blog link in the footer and checked that the page is opened', () => {
  footerPage.clickBlogInFooter();
  cy.url({ timeout: 20000 }).should('include', '/resources');
});
Then ('I should be redirected to page for eBook Download by click on get the book', () => {
  blogPage.clickGetTheBook()
  cy.url({ timeout: 20000 }).should('include', '/ebook-the-better-twilio-alternative');
  });

Then ('I fill all required fields and click Send my content', () => {
  getTheBookPage.fillFormGetBook()
})

Then ('I expect to see message that book was send', () => {
  cy.url().should('include', '/email_follow_up.html')
  getTheBookPage.checkThanksPage()
    
});



