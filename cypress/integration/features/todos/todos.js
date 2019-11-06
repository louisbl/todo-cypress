import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("j'ai des tâches", function() {
  cy.fixture('mixed-todos')
    .then(todos => {
      cy.request('POST', '/api/todos/bulkload', { todos })
    })
})

Given('je n\'ai aucune tâche', function() {
  cy.request('DELETE', '/api/todos/all')
})

When("j'ouvre l'app", function() {
  cy.visit("/")
})

Then('je devrais voir ma liste de tâches', function() {
  cy.get('.todo-list li')
    .should('be.visible')
})

Then('je devrais voir une liste vide', function() {
  cy.get('.todo-list li')
    .should('have.length', 0)
})

Then('je devrais voir toutes mes tâches', function() {
  cy.get('.todo-list li')
    .should('have.length', 4)
})

When('j\'ajoute une tâche nommée {string}', function(name) {
  cy.get('.new-todo')
    .type(name)
    .type('{enter}')
})

Then('la tâche {string} est ajoutée à la liste', function(name) {
  cy.get('.todo-list li')
    .contains(name)
})

Given("ces tâches existent", function(table) {
  const todos = table.hashes()
  cy.request('POST', '/api/todos/bulkload', { todos })
})

When('je rempli le champ avec', function (item) {
  //
})

When('je termine la tâche nommée {string}', function(name) {
  cy.get('.todo-list li')
    .contains(name)
    .siblings('.toggle')
    .click()
})

Then('la tâche nommée {string} est terminée', function(name) {
    cy.get('.todo-list li')
      .contains(name)
      .parents("li")
      .should('have.class', 'completed')
})
