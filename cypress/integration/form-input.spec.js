/// <reference types="Cypress" />

describe('Form Input', () => {
  it('Focuses the input on load', () => {
    cy.visit('/')

    cy.focused()
      .should('have.class', 'new-todo')
  })

  it('Accepts input', () => {
    const typedText = 'New todo'

    cy.visit('/')

    cy.get('.new-todo')
      .type(typedText)
      .should('have.value', typedText)
  })
})
