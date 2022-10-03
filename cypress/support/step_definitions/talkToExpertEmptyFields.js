import {
  Given,
  When,
  Then
} from '@badeball/cypress-cucumber-preprocessor';



const expertPage = require("../../pages/talkToExpert.page");
Given('Go to talk to expert page and click the cookies if it presents', () => {
  expertPage.checkAcceptCookieExpert();
});

When('click submit with empty fields? expect error message', () => {
  expertPage.submitEmptyFields()
  expertPage.checkerrorMessage()
})
