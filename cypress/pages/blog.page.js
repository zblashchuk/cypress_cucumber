class BlogPage {
  
  chooseFilterByContentProductsFeature = () => {
  cy.get('[aria-labelledby="filter-by-content"] > .sc-afdc1d86-3 > :nth-child(1) > .Text-sc-5o8owa-0')
  .click()
  .should('have.focus')
  };
    checkResultFilterByContent = () => {
  const filterlist = [cy.get('[class="Text-sc-5o8owa-0 sc-a6f05a8b-0 ehIIpY RtUMH"]')]
  filterlist.forEach(item => {
    item.should('contain', 'New Products & Features')  
      })
    }

      getReadArtecleLinks = () => {
        cy.get('a').each(page => {
          cy.request(page.prop('href'))
      })
      }
     clickGetTheBook = () => {
      cy.get('[href="/resources/ebook-the-better-twilio-alternative"]')
      .scrollIntoView()
      .click()
    }
  };

module.exports = new BlogPage();