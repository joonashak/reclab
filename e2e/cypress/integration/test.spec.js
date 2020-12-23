/// <reference types="Cypress" />

describe("My First Test", () => {
  it("Does not do much!", () => {
    cy.visit("/");
    cy.contains("CURIOUS.");
  });

  it("Login", () => {
    indexedDB.deleteDatabase("localforage");
    cy.visit("/admin");
    cy.get('#username').type('admin')
    cy.get('#password').type('1234')
    cy.get('[data-cy="submit-login"]').click()
  });
});
