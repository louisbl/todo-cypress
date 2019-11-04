/// <reference types="Cypress" />

describe('Smoke Tests', () => {
  it('Adds a new item', () => {
    cy.visit('/')

    cy.get('.new-todo')
      .type('One Todo')
      .type('{enter}')

    cy.get('.todo-list li')
      .its("length")
      .then(size => {
        cy.get('.new-todo')
          .type('New Todo')
          .type('{enter}')

        cy.get('.todo-list li')
          .should('have.length', size + 1)
      })
    })
})
