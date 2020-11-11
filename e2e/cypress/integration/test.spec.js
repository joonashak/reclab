/// <reference types="Cypress" />

describe("My First Test", () => {
  it("Does not do much!", () => {
    cy.visit("/");
    cy.contains("Recover Laboratory is a Finnish multi-art company");
  });

  it("Login", () => {
    cy.visit("/admin");
    cy.get('#username').type('admin')
    cy.get('#password').type('1234')
    cy.get(':nth-child(5) > .MuiButtonBase-root').click()
  });
});
