/// <reference types="Cypress" />

describe('My First Test', () => {
  it('Does not do much!', () => {
    cy.visit('/');
    cy.contains('Test Page 999');
    cy.contains('Test Page 2');
  });
});
