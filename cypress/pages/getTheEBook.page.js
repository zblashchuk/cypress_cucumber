class GetTheBookPage {

  checkAcceptCookies = () => {
    cy.visit('https://telnyx.com/resources/ebook-the-better-twilio-alternative')
    /cy.get('div')
        .then(($el) => {
          let acceptCookie = $el.find('.sc-df34c536-1');
          if (acceptCookie.length > 0) {
            cy.contains('Accept and close').click()
          }
         })
  };
fillFormGetBook = () => {
  cy.fixture('loginUser').then((userData)=>{
  cy.get('#FirstName')
 //.click()
 //.type('{selectall}{backspace}')
 //.should('have.value', userData.login_data.email);

  .type(userData.form.firstName);
  cy.get('#LastName')
  .type(userData.form.lastName);
  cy.get('#Company')
  .type(userData.form.companyName);
  cy.get('#Email')
  .type(userData.login_data.email);
  cy.get('[type="submit"]')
  .click();
});
}
fillFormGetBookWithoutFirstName = () => {
  cy.fixture('loginUser').then((userData)=>{
  cy.get('#LastName')
  .type(userData.form.lastName);
  cy.get('#Company')
  .type(userData.form.companyName);
  cy.get('#Email')
  .type(userData.login_data.email);
  cy.get('[type="submit"]')
  .click();
});
}
fillFormGetBookWithoutLastName = () => {
  cy.fixture('loginUser').then((userData)=>{
    cy.get('#FirstName')
   .type(userData.form.firstName);
  cy.get('#Company')
  .type(userData.form.companyName);
  cy.get('#Email')
  .type(userData.login_data.email);
  cy.get('[type="submit"]')
  .click();
});
}
fillFormGetBookWithoutEmail = () => {
  cy.fixture('loginUser').then((userData)=>{
  cy.get('#FirstName')
  .type(userData.form.firstName);
  cy.get('#LastName')
  .type(userData.form.lastName);
  cy.get('#Company')
  .type(userData.form.companyName);
  cy.get('[type="submit"]')
  .click();
});
}
checkThanksPage = () => {
cy.get('.lpContentsItem > :nth-child(3)')
.should('contain', 'Check your inbox for an email')
}
CheckRequrefieldMessage = () => {
  cy.get('#mktoForm_1922')
  .should('contain', 'This field is required')
  }
  CheckRequrefieldEmailMessage = () => {
    cy.get('#mktoForm_1922')
    .should('contain', 'Must be valid email')
    }
}


module.exports = new GetTheBookPage();