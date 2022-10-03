/// <reference types = "cypress-xpath" />
class HeaderPage {
  
  clickTopMemuElement = () => {
    cy.get('.sc-ee0ec023-2 > :nth-child(4)')
    .click()
    //TopMemuElement cy.xpath(`// a[@class="sc-f97529d6-0 bjUuRN Text-sc-5o8owa-0 sc-28d89a84-0 frufKM blLdCs mchNoDecorate"][contains(.,"${TopMemuElement}")]`).click();
    // cy.get('button[type="submit"]').trigger("mouseover");
    cy.wait(5000);
  };
  clickSignUp = () => {
    cy.get('[class="sc-14c941d7-5 dGPYWM sc-14c941d7-7 hhCIhu"] [href="/sign-up"]')
    .click()
  }
  getMainMemuElementResourses = () => {
    cy.get(':nth-child(6) > .sc-7b3980dc-6 > span')
    .click()
    //cy.xpath('// header // div // ul // li [contains(.,"Resources"]');
}
  /*checkRedirectionToVerifyEmailPage = () => {
    cy.url({ timeout: 20000 }).should('include', '/verify-email');
  };

  checkMessageOnVerifyEmailPage = () => {
    cy.get('div>h1').should(
      'not.contain.text',
      "We've sent you an email to activate your account"
    );
  };

  // TC-006
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
}

module.exports = new HeaderPage();