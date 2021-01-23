describe('Page admin', () => {
  beforeEach(() => {
    cy.init();
    cy.login();
    cy.visit('/admin/pages');
  });

  it('Page list sorting', () => {
    cy.cs('pages-list').children().first().contains('Frontpage');
    cy.cs('sort-pages').click();
    cy.contains('Title Descending').click();
    cy.cs('pages-list').children().first().contains('Testisivu 2');
  });

  it('Page list filtering', () => {
    cy.cs('filter-pages').click();
    cy.contains('Finnish').click();
    cy.contains('Test Page 1').should('not.exist');

    cy.cs('filter-pages').click();
    cy.contains('English').click();
    cy.contains('Testisivu 1').should('not.exist');
  });

  it('Add new page', () => {
    cy.cs('new-page-button').click();

    cy.get('#title').type('Cypress page');
    cy.get('#path').type('/cyp');
    cy.get('#language').click();
    cy.contains('English').click();
    cy.cs('page-form-submit').click();

    cy.cs('pages-list').children().contains('Cypress page');
  });
});
