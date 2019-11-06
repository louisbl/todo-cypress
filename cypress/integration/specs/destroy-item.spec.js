/// <reference types="Cypress" />

describe('Destroy items', () => {
  beforeEach(() => {
    cy.seedAndVisit('fixture:mixed-todos')

    cy.route({
      method: 'DELETE',
      url: '/api/todos/*',
      response: {}
    }).as('delete')
  })

  it('shows a button to destroy an item', () => {
    cy.get('.todo-list li')
    .first()
    .find('.destroy')
  })

  it('clicks the red cross to destroy an active item', () => {
    cy.get('.todo-list li')
      .first()
      .find('.destroy')
      .invoke('show')
      .click()

    cy.wait('@delete')

    cy.get('.todo-list li')
      .should('have.length', 3)
  })

  it('clicks the red cross to destroy a completed item', () => {
    cy.get('.todo-list li.completed')
      .first()
      .find('.destroy')
      .invoke('show')
      .click()

    cy.wait('@delete')

    cy.get('.todo-list li')
      .should('have.length', 3)
  })
})
