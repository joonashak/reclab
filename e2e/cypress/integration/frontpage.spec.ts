describe('Frontpage', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Content smoke test', () => {
    cy.contains('Hello, this is the frontpage.');
  });

  it('Menu smoke test', () => {
    cy.cs('hamburger').click();
    cy.contains('Page 1').click();
    cy.contains('Lorem ipsum...');
  });

  // FIXME: Seed data does not include a frontpage translation.
  /*
  it('Frontpage translation and language switching', () => {
    cy.cs('switch-language').click();
    cy.contains('Täällä vapaus on sinun.');
  });
  */
});
