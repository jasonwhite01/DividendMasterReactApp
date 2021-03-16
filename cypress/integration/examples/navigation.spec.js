/// <reference types="cypress" />

context('Navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.get('.w3-bar-item').contains('Overview').click()
    cy.get('[data-cy=portfolio1]').should('not.be.visible')
  })

  it('navigate to Portfolios part of screen', () => {
    ///page should contain left nav menu with text "Portfolios", and we click it
    cy.contains('Portfolios').click()

    //should add '/#' to the url
    cy.url().should('include', '/#')

    //find the first portfolio button in main window pain
    cy.get('[data-cy=portfolio1]')
  })

  //TODO: implement in react
  it('navigate to messages via envelope icon', () => {
    ///page should contain left nav menu with the envelope icon, and we click it
    cy.get('[data-cy=sidebar-envelope]').click()

    //should add '/#' to the url
    cy.url().should('include', '/#')

    //find the first message button in main window pain
    cy.get('[data-cy=message1]')
  })

  //TODO: implement in react
  it('navigate to user profile via avatar icon', () => {
    ///page should contain left nav menu with the envelope icon, and we click it
    cy.get('[data-cy=sidebar-user]').click()

    //should add '/#' to the url
    cy.url().should('include', '/#')

    //find the first message button in main window pain
    cy.get('[data-cy=user1]')
  })

  //TODO: implement in react
  it('navigate to config details via cog icon', () => {
    ///page should contain left nav menu with the envelope icon, and we click it
    cy.get('[data-cy=sidebar-config]').click()

    //should add '/#' to the url
    cy.url().should('include', '/#')

    //find the first message button in main window pain
    cy.get('[data-cy=config1]')
  })
})
