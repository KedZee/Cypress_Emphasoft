class LoginForm {
  // region component

  /**
   * @param {CommandOptions} [options={}] Command options
   * @return {Cypress.Chainable<JQuery<HTMLElementTagNameMap[]>>}
   */
  component(options = {}) {
    const {log = true} = options

    return cy
      // language=CSS
      .get('.container', {log: true})
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

  // region User Name Field 

  /**
   * @param {CommandOptions} [options={}] Command options
   * @return {Cypress.Chainable<JQuery<HTMLElementTagNameMap[]>>}
   */
  userNameField(options = {}) {
    const {log = true} = options

    return this.component({log: true})
      // language=CSS
      .find('[data-testid="username"]', {log: true})
      .then(($element) => {
        if (log) {
          Cypress.log({
            $el: $element,
            message: '',
            name: 'user name',
            type: 'parent',
          })
        }

        return $element
      })
  }

  // endregion User Name Field 

  // region Password Field 

  /**
   * @param {CommandOptions} [options={}] Command options
   * @return {Cypress.Chainable<JQuery<HTMLElementTagNameMap[]>>}
   */
  passwordField(options = {}) {
    const {log = true} = options

    return this.component({log: true})
      // language=CSS
      .find('[data-testid="password"]', {log: true})
      .then(($element) => {
        if (log) {
          Cypress.log({
            $el: $element,
            message: '',
            name: 'Password name',
            type: 'parent',
          })
        }

        return $element
      })
  }

  // endregion Password Field  

  // region Login button

  /**
   * @param {CommandOptions} [options={}] Command options
   * @return {Cypress.Chainable<JQuery<HTMLElementTagNameMap[]>>}
   */
  loginButton(options = {}) {
    const {log = true} = options

    return this.component({log: true})
      // language=CSS
      .find('[data-testid="submit"]', {log: true})
      .then(($element) => {
        if (log) {
          Cypress.log({
            $el: $element,
            message: '',
            name: 'Login button',
            type: 'parent',
          })
        }

        return $element
      })
  }

  // endregion Login button

  // region Room form

  /**
   * @param {CommandOptions} [options={}] Command options
   * @return {Cypress.Chainable<JQuery<HTMLElementTagNameMap[]>>}
   */
  roomForm(options = {}) {
    const {log = true} = options

    return this.component({log: true})
      // language=CSS
      .find('.row.room-form', {log: true})
      .then(($element) => {
        if (log) {
          Cypress.log({
            $el: $element,
            message: '',
            name: 'Room form',
            type: 'parent',
          })
        }

        return $element
      })
  }

  // endregion Login button

}

module.exports = LoginForm
