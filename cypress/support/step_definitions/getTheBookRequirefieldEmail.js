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
Given('Go to the page get the book', () => {
  commonPage.checkAcceptCookie();
  footerPage.clickBlogInFooter();
  blogPage.clickGetTheBook()
});

When('I fill required fields without email and click Send my content', () => {
  getTheBookPage.fillFormGetBookWithoutEmail()
})

Then ('I expect to see message about require field email', () => {
  getTheBookPage.CheckRequrefieldEmailMessage()  
    
});



