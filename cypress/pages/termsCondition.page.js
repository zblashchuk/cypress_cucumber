/// <reference types = "cypress-xpath" />
class TermConditionPage {

 
  checkMessagePresenceOnPage = () => {
    cy.get('h1[class*="Text"]').should(
      'have.text',
      'TELNYX TERMS AND CONDITIONS OF SERVICE'
    );
  };
}
  module.exports = new TermConditionPage();