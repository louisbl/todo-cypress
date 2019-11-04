/// <reference types="Cypress" />

describe('App init', () => {
  it('Lists todos from API on load', () => {
    cy.seedAndVisit()

    cy.get('.todo-list li')
      .should('have.length', 4)
  })

  it('List is empty with API emtpy response', () => {
    // seed and visit with empty fixture
    cy.seedAndVisit('fixture:empty')

    // test todo lists is empty
    cy.get('.todo-list li')
      .should('have.length', 0)
  })
})
