class FooterPage {
  
 clickBlogInFooter = () => {
    cy.get('footer [href="/resources"]')
    .scrollIntoView()
    .click()
  
  
  };


}

module.exports = new FooterPage();