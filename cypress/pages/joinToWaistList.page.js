/// <reference types = "cypress-xpath" />
class WaitListPage {
  checkAcceptCookieWaistlist = () => {
    cy.visit('https://telnyx.com/products/storage#form')
    cy.get('div')
        .then(($div) => {
          let acceptCookie = $div.find('.sc-df34c536-1');
          if (acceptCookie.length !== 0) {
            cy.contains('Accept and close').click()
          }
         })
        }

 fillFieldsExpertPage = () => {
  cy.fixture('loginUser').then((userData)=>{
    cy.get('div > #FirstName')
    .type(userData.form.firstName)
        
    cy.get('#LastName')
            .type(userData.form.lastName);
  
    cy.get('#Email')
    .type(userData.login_data.email);
            
    cy.get('[ type="submit"]')
            .click();
      
  })
 }
}
module.exports = new WaitListPage();
