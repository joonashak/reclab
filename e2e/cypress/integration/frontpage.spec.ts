describe('Frontpage', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Content smoke test', () => {
    cy.contains('Here the freedom is yours.');
  });

  it('Menu smoke test', () => {
    cy.cs('hamburger').click();
    cy.contains('Page 1').click();
    cy.contains('Lorem ipsum...');
  });

  it('Frontpage translation and language switching', () => {
    cy.cs('switch-language').click();
    cy.contains('Täällä vapaus on sinun.');
  });
});
