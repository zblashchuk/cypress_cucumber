
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

Given('Visit calculator page Voice and click the cookies if it presents', () => {
  calculatorPage.checkAcceptCookieCalc();
});

When('choose Voice Api option then click continue', () => {
  calculatorPage.chooseVoiceApi()
  calculatorPage.clickContinue()
})
Then ('set all values to 0 and click continue', () => {
  calculatorPage.setZeroLocalNumbers()
  calculatorPage.setZeroTollNumbers()
  calculatorPage.clickContinue()
})
Then ('set value Make outbound to 0 and check that sum is 900$', () => {
  calculatorPage.setZeroMakeoutbound()
  calculatorPage.checkPriceSum1()
})
Then ('click + near Make outbound and check that sum is 2700$', () => {
  calculatorPage.clickPlusReceiveInbound()
  calculatorPage.checkPriceSum2()
})

