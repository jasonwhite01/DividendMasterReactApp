  describe('Dashboard: Navigate to main dashboard', () => {
    it('Visits the DividendMaster site', () => {
      cy.visit('http://localhost:3000')
    })
  })

  describe('Dashboard: Navigate to Portfolios, Ensure accordion works as expected', () => {
    it('finds the content "Portfolios" in the left nav menu and clicks it', () => {
      cy.visit('http://localhost:3000')
  
      //page should contain left nav menu with text "Portfolios", and we click it
      cy.contains('Portfolios').click()

      //should add '/#' to the url
      cy.url().should('include', '/#')

      //find the first portfolio button in main window pain
      cy.get('[data-cy=portfolio1]')

      //first portfolio in accordion should have stonks displayed below it
      cy.get('[data-cy=portfolio1_stonk0]').should('have.class', 'show-description')
    
      //second portfolio in accordion should not have stonks displayed below it
      cy.get('[data-cy=portfolio2_stonk0]').should('not.have.class', 'show-description')
    })
  })