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
Given('Go to page get the book', () => {
  commonPage.checkAcceptCookie();
  footerPage.clickBlogInFooter();
  blogPage.clickGetTheBook()
});

When('I fill required fields without Last name and click Send my content', () => {

  getTheBookPage.fillFormGetBookWithoutLastName()
})

Then ('I expect to see message about requre field Last name', () => {
  getTheBookPage.CheckRequrefieldMessage()
    
});



