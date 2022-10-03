class CalculatorPage {
  // 
  checkAcceptCookieCalc = () => {
    cy.visit('https://telnyx.com/twilio-pricing-calculator')
    cy.get('div')
        .then(($div) => {
          let acceptCookie = $div.find('.sc-df34c536-1');
          if (acceptCookie.length !== 0) {
            cy.contains('Accept and close').click()
          }
         })
}
chooseVoiceApi = () => {
  cy.get('.sc-a87e7459-0 > :nth-child(3)')
.click()
}
clickContinue = () => {
  cy.get('.sc-8143a648-6.gMRGHv > .sc-5d3a275a-0 > .sc-5d3a275a-1')
  .click()
}
setZeroLocalNumbers= () => {
  cy.get('#local-numbers')
  .type('{selectall}{backspace}')
  .type(0)
}
setZeroTollNumbers= () => {
  cy.get('#toll-free-numbers')
  .type('{selectall}{backspace}')
  .type(0)
}
setZeroReceiveInbound= () => {
  cy.get('#receive-inbound-calls-with-call-control')
  .type('{selectall}{backspace}')
  .type(0)
}
setZeroMakeoutbound = () => {
  cy.get('#make-outbound-calls-with-call-control')
  .type('{selectall}{backspace}')
  .type(0)
}
checkPrice= () => {
  cy.get('.gBsjXt')
  .should('contain', '$0')
}
checkPriceSum1= () => {
  cy.get('.gBsjXt')
  .should('contain', '$900')
}
checkPriceSum2= () => {
  cy.get('.gBsjXt')
  .should('contain', '$2,700')
}
clickPlusReceiveInbound= () => {
  cy.get(':nth-child(3) > .sc-5588e253-4 > .sc-5588e253-6 > :nth-child(3)')
.click()
}

}

module.exports = new CalculatorPage();