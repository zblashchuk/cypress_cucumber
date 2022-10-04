const CommonPage = require("./common.page");
/// <reference types = "cypress-xpath" />
class LoginPage {
    
  // Valid data
  fillFieldsByValidData = () => {
    cy.fixture('loginUser').then((userData)=>{
    cy.get('.eSxLXo > .InlineForm__Container-sc-1r23z15-0 > .TextField__Container-sc-r5o2cn-0 > .TextField__InputWrapper-sc-r5o2cn-4 > .ui-reactv2-input')
   //.click()
   .type('{selectall}{backspace}')
   //.should('have.value', userData.login_data.email);

    .type(userData.login_data.email);
    cy.get('.flxMbT > .InlineForm__Container-sc-1r23z15-0 > .TextField__Container-sc-r5o2cn-0 > .TextField__InputWrapper-sc-r5o2cn-4 > .ui-reactv2-input')
    .type(userData.login_data.password);
    cy.get('.svg-inline--fa')
    .click();
    cy.get('.Button__StyledDefaultButton-sc-44gl5i-0')
    .click();
  });
  }
  checkUserLogInAccount = () => {
    cy.get('react-account-dropdown [class="Flex__FlexComponent-fGtahC jTwBWc tx-2aP2j0"]')
    .click()
    cy.fixture('loginUser').then((userData)=>{
      cy.get(':nth-child(1) > .text-truncate')
    .should('contain', 'zblashchuk@gmail.com')
    })
  }
  checkUserLogout = () => {
    cy.get('.tx-1Iv0kw')
    .click()
  }

  fillFieldsByInValidEmail= () => {
    cy.fixture('loginUser').then((userData)=>{
    cy.get('.eSxLXo > .InlineForm__Container-sc-1r23z15-0 > .TextField__Container-sc-r5o2cn-0 > .TextField__InputWrapper-sc-r5o2cn-4 > .ui-reactv2-input')
   //.click()
   .type('{selectall}{backspace}')
    .type(userData.login_data.invalidEmail);
    cy.get('.flxMbT > .InlineForm__Container-sc-1r23z15-0 > .TextField__Container-sc-r5o2cn-0 > .TextField__InputWrapper-sc-r5o2cn-4 > .ui-reactv2-input')
    .type(userData.login_data.password);
    cy.get('.svg-inline--fa')
    .click();
    cy.get('.Button__StyledDefaultButton-sc-44gl5i-0')
    .click();
  });
  }
  checkErrorMessage =() => {
cy.get('.Message__MessageCopy-sc-1lbs5ge-2')
.should('contain', 'That email and password combination is not valid, or your browser could not be authenticated via recaptcha. Please try again.')
  }
  
  fillFieldsByWrongEmailFormat = () => {
    cy.fixture('loginUser').then((userData)=>{
    cy.get('.eSxLXo > .InlineForm__Container-sc-1r23z15-0 > .TextField__Container-sc-r5o2cn-0 > .TextField__InputWrapper-sc-r5o2cn-4 > .ui-reactv2-input')
   //.click()
   .type('{selectall}{backspace}')
    .type(userData.login_data.wrongEmailFormat);
    cy.get('.flxMbT > .InlineForm__Container-sc-1r23z15-0 > .TextField__Container-sc-r5o2cn-0 > .TextField__InputWrapper-sc-r5o2cn-4 > .ui-reactv2-input')
    .type(userData.login_data.password);
    cy.get('.svg-inline--fa')
    .click();
    cy.get('.Button__StyledDefaultButton-sc-44gl5i-0')
    .click();
  });
}
  checkWrongEmailFormat =() => {
    cy.get('.TextField__ErrorMessage-sc-r5o2cn-5.iFEVFt')
    .should('contain', 'Please enter a valid email address.')
      }
  }

module.exports = new LoginPage();
