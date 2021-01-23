describe('Authentication', () => {
  it('Login', () => {
    cy.login();
  });

  it('Logout', () => {
    cy.login();
    cy.cs('logout').click();
    cy.visit('/admin');
    cy.contains('Enter your credentials to log in.');
  });
});
