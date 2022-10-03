

class CommonPage {
  // 
  checkAcceptCookie = () => {
    cy.visit('https://telnyx.com/')
    cy.get('div')
        .then(($div) => {
          let acceptCookie = $div.find('.sc-df34c536-1');
          if (acceptCookie.length !== 0) {
            cy.contains('Accept and close').click()
          } })
          cy.clearCookies()
  };
}

module.exports = new CommonPage();