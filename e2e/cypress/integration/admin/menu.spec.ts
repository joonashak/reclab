describe('Admin menu', () => {
  const checkMenuItem = (label: string, pathname: string) => {
    cy.visit('/admin');
    cy.cs('hamburger').click();
    cy.contains(label).click();
    cy.location('pathname').should('eq', pathname);
  };

  it('Dashboard', () => {
    checkMenuItem('Dashboard', '/admin');
  });

  it('Pages', () => {
    checkMenuItem('Pages', '/admin/pages');
  });
});
