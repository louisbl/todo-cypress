describe('Footer', () => {
  beforeEach(() => {
    cy.fixture('mixed-todos')
      .then(todos => {
        cy.request('POST', '/api/todos/bulkload', { todos })
      })
  })

  it('Displays active todos number', () => {
    cy.visit('/')

    cy.get('.footer')
      .get('.todo-count')
      .contains('2 todos left')
  })

  it('Update active todos number on completion', () => {
    cy.visit('/')

    cy.get('.todo-list li')
      .first()
      .find('.toggle')
      .click()

    cy.get('.footer')
      .get('.todo-count')
      .contains('1 todo left')
  })

  it('Filters todos', () => {
    cy.contains('Active')
      .click()

    cy.get('.todo-list li')
      .should('have.length', 1)

    cy.url().should('contain', '/active')

    })
})
