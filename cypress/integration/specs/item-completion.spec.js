/// <reference types="Cypress" />

describe('Item Completion', () => {
  beforeEach(() => {
    cy.seedAndVisit('fixture:mixed-todos')
  })

  it('Toggles active item to completed', () => {
    cy.route({
      method: 'PUT',
      url: '/api/todos/*',
      response: {
        "id": 1,
        "name": "one",
        "isComplete": true
      }
    }).as('completion')

    cy.get('.todo-list li')
      .first()
      .as('item')
      .find('.toggle')
      .click()

    cy.wait('@completion')

    cy.get('@item')
      .should('have.class', 'completed')
  })

  it('Toggles completed item to active', () => {
    cy.route({
      method: 'PUT',
      url: '/api/todos/*',
      response: {
        "id": 2,
        "name": "two",
        "isComplete": false
      }
    }).as('completion')

    cy.get('.todo-list li.completed')
      .first()
      .as('item')
      .find('.toggle')
      .click()

    cy.wait('@completion')

    cy.get('@item')
      .should('not.have.class', 'completed')
  })
})
