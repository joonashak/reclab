/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Shorthand for using "Cypress Selectors" (CS), i.e., `data-cy` attributes.
     */
    cs(name: string): Chainable<Element>

    /**
     * Reset database.
     */
    init(): Chainable<Element>

    /**
     * Login directly through API.
     */
    login(): Chainable<Element>
  }
}