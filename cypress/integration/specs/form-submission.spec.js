describe('Form subsmission', () => {
  it('Adds a new toto item', () => {
    const typedText = "Item to be added"

    cy.seedAndVisit()

    cy.get('.new-todo')
      .type(typedText)
      .type('{enter}')

    cy.get('.todo-list')
      .contains(typedText)

    cy.get('.new-todo')
      .should('not.have.value')
  })

  it('Shows an error when submit failed', () => {
    cy.server()
    cy.route({
      method: "POST",
      url: "/api/todos",
      status: 500,
      response: {}
    }).as('saveWithError')

    cy.seedAndVisit()

    const typedText = "new todo"
    cy.get('.new-todo').as('newTodo')
      .type(typedText)
      .type('{enter}')

    cy.wait('@saveWithError')

    // assert error message is visible
    cy.get('.error').should('be.visible')

    cy.get('.todo-list li')
      .should('have.length', 4)
      .should('not.contain', typedText)

    cy.get('@newTodo')
      .should('have.value', typedText)
  })
})
