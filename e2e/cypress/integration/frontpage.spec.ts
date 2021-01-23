describe('Frontpage', () => {
  it('Content smoke test', () => {
    cy.visit('/');
    cy.contains('Here the freedom is yours.');
  });

  it('Menu smoke test', () => {
    cy.visit('/');
    cy.cs('hamburger').click();
    cy.contains('Page 1').click();
    cy.contains('Lorem ipsum...');
  });
});
