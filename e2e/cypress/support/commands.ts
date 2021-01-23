const apiUrl = Cypress.env('API_URL') || '';

/**
 * Reset database.
 */
Cypress.Commands.add('init', () => {
  cy.request({
    method: 'GET',
    url: `${apiUrl}/seeder/reset`,
  });
});

/**
 * Shorthand for using "Cypress Selectors" (CS), i.e., `data-cy` attributes.
 */
Cypress.Commands.add('cs', (name) => cy.get(`[data-cy='${name}']`));

/**
 * Login through UI.
 */
Cypress.Commands.add('login', () => {
  indexedDB.deleteDatabase('localforage');
  cy.visit('/admin');
  cy.get('#username').type('admin');
  cy.get('#password').type('1234');
  cy.cs('submit-login').click();
  cy.contains('You were logged in!');
});
