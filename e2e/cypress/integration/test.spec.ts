/// <reference types="cypress" />

describe('My First Test', () => {
  it('Test custom commands', () => {
    cy.init();
    cy.login();
  });

  it('Does not do much!', () => {
    cy.visit('/');
    cy.contains('Here the freedom is yours.');
  });

  it('Login', () => {
    indexedDB.deleteDatabase('localforage');
    cy.visit('/admin');
    cy.get('#username').type('admin');
    cy.get('#password').type('1234');
      cy.cs('submit-login').click();
  });
});
