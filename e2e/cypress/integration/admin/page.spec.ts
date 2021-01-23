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

    cy.contains('Page created!');
    cy.cs('pages-list').children().contains('Cypress page');
  });

  it('Edit a page', () => {
    cy.contains('Private page').click();

    cy.contains('Edit Page');
    cy.get('#title').type(' edited');
    cy.cs('page-form-submit').click();

    cy.contains('Page updated!');
    cy.cs('pages-list').children().contains('Private page edited');
  });

  it('Delete a page', () => {
    // Delete Test Page 1 and ensure that the translation relation is removed, too.
    cy.contains('Testisivu 1').click();
    cy.get('#translation').contains('Test Page 1');

    cy.go(-1);
    cy.contains('Test Page 1').click();
    cy.cs('delete-page').click();
    cy.cs('input-confirm-path').type('/page1');
    cy.cs('confirmation-submit').click();
    cy.contains('Page deleted!');
    cy.contains('Test Page 1').should('not.exist');

    cy.contains('Testisivu 1').click();
    cy.get('#translation').contains('Test Page 1').should('not.exist');
  });
});
