describe('My First Test', () => {
  it('Test custom commands', () => {
    cy.init();
    cy.login();
  });

  it('Does not do much!', () => {
    cy.visit('/');
    cy.contains('Here the freedom is yours.');
  });
});
