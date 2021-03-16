/// <reference types="cypress" />

context('Window', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('verify the global window object', () => {
    // https://on.cypress.io/window
    cy.window().should('have.property', 'top')
  })

  it('verify the document object', () => {
    // https://on.cypress.io/document
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
  })

  it('verify the title', () => {
    // https://on.cypress.io/title
    cy.title().should('include', 'Dividend Master')
  })
})
