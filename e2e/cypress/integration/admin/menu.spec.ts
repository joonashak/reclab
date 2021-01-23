const checkMenuItem = (label: string, pathname: string) => {
  cy.visit('/admin');
  cy.cs('hamburger').click();
  cy.contains(label).click();
  cy.location('pathname').should('eq', pathname);
};

describe('Admin menu', () => {
  before(() => {
    cy.login();
  });

  it('Dashboard', () => {
    checkMenuItem('Dashboard', '/admin');
  });

  it('Pages', () => {
    checkMenuItem('Pages', '/admin/pages');
  });
});
