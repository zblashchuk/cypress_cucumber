/// <reference types = "cypress-xpath" />
class SignUpPage {
  checkRedirectionToTermsPage = () => {
    cy.get('[href="/terms-and-conditions-of-service"]')
      .invoke('removeAttr', 'target')
      .click();
}
}
    /*
  

 
 checkRedirectionToTermsPage = () => {
  cy.get('[href="/terms-and-conditions-of-service"]')
    .invoke('removeAttr', 'target')
    .click();
};
checkMessagePresenceOnPage = () => {
  cy.get('h1[class*="Text"]').should(
    'have.text',
    'TELNYX TERMS AND CONDITIONS OF SERVICE'
  );
};*/

module.exports = new SignUpPage();