class MessageForm {
  // region component

  /**
   * @param {CommandOptions} [options={}] Command options
   * @return {Cypress.Chainable<JQuery<HTMLElementTagNameMap[]>>}
   */
  component(options = {}) {
    const {log = true} = options

    return cy
      // language=CSS
      .get('[class="row contact"]', {log: true})
      .then(($element) => {
        if (log) {
          Cypress.log({
            $el: $element,
            message: '',
            name: 'component',
            type: 'parent',
          })
        }

        return $element
      })
  }

  // endregion

  // region message form

  /**
   * @param {CommandOptions} [options={}] Command options
   * @return {Cypress.Chainable<JQuery<HTMLElementTagNameMap[]>>}
   */
  messageForm(options = {}) {
    const {log = true} = options

    return this.component({log: true})
      // language=CSS
      .find('form', {log: false})
      .then(($element) => {
        if (log) {
          Cypress.log({
            $el: $element,
            message: '',
            name: 'message form',
            type: 'parent',
          })
        }

        return $element
      })
  }

  // endregion message form

  // region Contact Name

  /**
   * @param {CommandOptions} [options={}] Command options
   * @return {Cypress.Chainable<JQuery<HTMLElementTagNameMap[]>>}
   */
  contactName(options = {}) {
    const {log = true} = options

    return this.messageForm({log: true})
      // language=CSS
      .find('[data-testid="ContactName"]', {log: true})
      .then(($element) => {
        if (log) {
          Cypress.log({
            $el: $element,
            message: '',
            name: 'Contact Name',
            type: 'parent',
          })
        }

        return $element
      })
  }

  // endregion Contact Name

  // region Contact Email

  /**
   * @param {CommandOptions} [options={}] Command options
   * @return {Cypress.Chainable<JQuery<HTMLElementTagNameMap[]>>}
   */
  contactEmail(options = {}) {
    const {log = true} = options

    return this.messageForm({log: true})
      // language=CSS
      .find('[data-testid="ContactEmail"]', {log: true})
      .then(($element) => {
        if (log) {
          Cypress.log({
            $el: $element,
            message: '',
            name: 'Contact Email',
            type: 'parent',
          })
        }

        return $element
      })
  }

  // endregion Contact Email

  // region Contact Phone

  /**
   * @param {CommandOptions} [options={}] Command options
   * @return {Cypress.Chainable<JQuery<HTMLElementTagNameMap[]>>}
   */
  contactPhone(options = {}) {
    const {log = true} = options

    return this.messageForm({log: true})
      // language=CSS
      .find('[data-testid="ContactPhone"]', {log: true})
      .then(($element) => {
        if (log) {
          Cypress.log({
            $el: $element,
            message: '',
            name: 'Contact Email',
            type: 'parent',
          })
        }

        return $element
      })
  }

  // endregion Contact Phone

  // region Contact Subject

  /**
   * @param {CommandOptions} [options={}] Command options
   * @return {Cypress.Chainable<JQuery<HTMLElementTagNameMap[]>>}
   */
  contactSubject(options = {}) {
    const {log = true} = options

    return this.messageForm({log: true})
      // language=CSS
      .find('[data-testid="ContactSubject"]', {log: true})
      .then(($element) => {
        if (log) {
          Cypress.log({
            $el: $element,
            message: '',
            name: 'Contact Email',
            type: 'parent',
          })
        }

        return $element
      })
  }

  // endregion Contact Subject

  // region Contact Description

  /**
   * @param {CommandOptions} [options={}] Command options
   * @return {Cypress.Chainable<JQuery<HTMLElementTagNameMap[]>>}
   */
  contactDescription(options = {}) {
    const {log = true} = options

    return this.messageForm({log: true})
      // language=CSS
      .find('[data-testid="ContactDescription"]', {log: true})
      .then(($element) => {
        if (log) {
          Cypress.log({
            $el: $element,
            message: '',
            name: 'Contact Description',
            type: 'parent',
          })
        }

        return $element
      })
  }

  // endregion Contact Description

  // region Submit button

  /**
   * @param {CommandOptions} [options={}] Command options
   * @return {Cypress.Chainable<JQuery<HTMLElementTagNameMap[]>>}
   */
  submitButton(options = {}) {
    const {log = true} = options

    return this.messageForm({log: true})
      // language=CSS
      .find('[id="submitContact"]', {log: true})
      .then(($element) => {
        if (log) {
          Cypress.log({
            $el: $element,
            message: '',
            name: 'Submit Contact Button',
            type: 'parent',
          })
        }

        return $element
      })
  }

  // endregion Submit button

  // region Getting in touch

  /**
   * @param {CommandOptions} [options={}] Command options
   * @return {Cypress.Chainable<JQuery<HTMLElementTagNameMap[]>>}
   */
  gettingInTouch(options = {}) {
    const {log = true} = options

    return this.component({log: true})
      // language=CSS
      .find('.col-sm-5 > div', {log: true})
      .then(($element) => {
        if (log) {
          Cypress.log({
            $el: $element,
            message: '',
            name: 'Getting in touch',
            type: 'parent',
          })
        }

        return $element
      })
  }

  // endregion Getting in touch

}

module.exports = MessageForm
