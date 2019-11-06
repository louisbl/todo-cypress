/// <reference types="Cypress" />

describe('Smoke Tests', () => {
  beforeEach(() => {
    cy.request('DELETE', '/api/todos/all')
  })

  context('No Todos', () => {
    it('Adds a new item', () => {
      cy.visit('/')

      cy.get('.new-todo')
      .type('New Todo')
      .type('{enter}')

      cy.get('.todo-list li')
        .should('have.length', 1)
    })
  })

  context('With Todos', () =>{
    beforeEach(() => {
      cy.fixture('mixed-todos')
        .then(todos => {
          cy.request('POST', '/api/todos/bulkload', { todos })
        })
    })

    it('Deletes existing item', () => {
      cy.visit('/')

      cy.get('.todo-list li')
        .each(el => {

          // debugger

          // el is a raw html element
          cy.wrap(el) // wrap html element in cypress object
            .find('.destroy')
            .invoke('show')
            .click()
        })
    })
  })
})
