const apiUrl = Cypress.env('API_URL') || '';

/**
 * Login directly through API.
 */
Cypress.Commands.add('login', () => {
  cy.request({
    method: 'POST',
    url: `${apiUrl}/auth/login`,
    body: { username: 'admin', password: '1234' },
  });
});

/**
 * Reset database.
 */
Cypress.Commands.add('init', () => {
  cy.request({
    method: 'GET',
    url: `${apiUrl}/seeder/reset`,
  });
})

/**
 * Shorthand for using "Cypress Selectors" (CS), i.e., `data-cy` attributes.
 */
Cypress.Commands.add('cs', (name) => {
  return cy.get(`[data-cy='${name}']`);
});
