

 /*
 Then choose Voice Api and click continue 
 Then set values to 0 and click continue
 Then set all values to 0 and check that sum is 0$*/
 /// <reference types="cypress-xpath" />
import {
  Given,
  When,
  Then
} from '@badeball/cypress-cucumber-preprocessor';


const blogPage = require("../../pages/blog.page");
const footerPage = require("../../pages/footer.page");
const commonPage = require("../../pages/common.page");
const calculatorPage = require("../../pages/calculator.page");
const headerPage = require("../../pages/header.page");

Given('Visit calculator page and click the cookies if it presents', () => {
  calculatorPage.checkAcceptCookieCalc();
});

When('choose Voice Api and click continue', () => {
  calculatorPage.chooseVoiceApi()
  calculatorPage.clickContinue()
})
Then ('set values to 0 and click continue', () => {
  calculatorPage.setZeroLocalNumbers()
  calculatorPage.setZeroTollNumbers()
  calculatorPage.clickContinue()
})
Then ('set all values to 0 and check that sum is 0$', () => {
  calculatorPage.setZeroReceiveInbound()
  calculatorPage.setZeroMakeoutbound()
  calculatorPage.checkPrice()
})
