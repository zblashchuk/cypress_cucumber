/// <reference types = "cypress-xpath" />
class ExpertPage {
  checkAcceptCookieExpert = () => {
    cy.visit('https://telnyx.com/contact-us')
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
    cy.get('div > #Reason_for_Contact__c')
    .select('Legal')
      
  cy.get('#FirstName')
  .type(userData.form.firstName)
      
  cy.get('#LastName')
  .type(userData.form.lastName);

  cy.get('#Email')
  .type(userData.login_data.email);
          
  cy.get('#Website')
  .type('http://www.example.com/');

  cy.get('.sc-fe4a45f0-6.jFCuMy')
  .then(($form) => {
  let caseForm = $form.find('#Use_Case_Form__c');
  if (caseForm.length !== 0) {
     cy.get('#Use_Case_Form__c')
    .select('Video')
  } })

   cy.get('.mktoButton')
    .click();
    cy.url().should('include', 'thank-you?userEmail=zblashchuk')
       })
 }
 submitEmptyFields = () => {
  cy.get('.mktoButton')
  .click();
  }
  checkerrorMessage = () => {
    cy.get('.sc-3efef034-0')
    .should('contain', 'required')
  }
}
module.exports = new ExpertPage();
