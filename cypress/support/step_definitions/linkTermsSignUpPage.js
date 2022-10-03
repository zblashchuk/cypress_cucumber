/// <reference types="cypress-xpath" />
import {
  Given,
  When,
  Then
} from '@badeball/cypress-cucumber-preprocessor';
import headerPage from '../../pages/header.page';
const commonPage = require("../../pages/common.page");
const signUpPage = require("../../pages/SinUp.page");
const termConditionPage = require("../../pages/termsCondition.page");

Given('Go to signUp page and click the cookies if it present', () => {
  commonPage.checkAcceptCookie();
});
When('I click on SignUp link in the header', () => {
  headerPage.clickSignUp();
});
Then('I click on the Term Condition link', () => {
  signUpPage.checkRedirectionToTermsPage();
});
  Then('I check that the page is opened', () => {  
  termConditionPage.checkMessagePresenceOnPage()
});