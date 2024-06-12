class AdminPage {
  constructor() {
    this.url = `${Cypress.env('adminPageUrl')}`
  }

  // region visit

  /**
   */
  visit() {
    cy.visit(this.url)

  }

  // endregion

}

module.exports = AdminPage
