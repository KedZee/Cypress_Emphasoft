class MainPage {
  constructor() {
    this.url = `${Cypress.env('mainPageUrl')}`
  }

  // region visit

  /**
   */
  visit() {
    cy.visit(this.url)

  }

  // endregion

}

module.exports = MainPage
