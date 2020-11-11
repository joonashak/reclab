/// <reference types="Cypress" />

describe("My First Test", () => {
  it("Does not do much!", () => {
    cy.visit("/");
    cy.contains("frontpage");
  });

  it("Login", () => {
    cy.visit("/admin");
    cy.get('#username').type('admin')
    cy.get('#password').type('1234')
    cy.get(':nth-child(5) > .MuiButtonBase-root').click()
  });
});
