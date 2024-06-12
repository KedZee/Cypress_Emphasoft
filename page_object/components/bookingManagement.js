class BookingManagement {
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

  // region Room Name

  /**
   * @param {CommandOptions} [options={}] Command options
   * @return {Cypress.Chainable<JQuery<HTMLElementTagNameMap[]>>}
   */
  roomName(options = {}) {
    const {log = true} = options

    return this.component({log: true})
      // language=CSS
      .find('[data-testid="roomName"]', {log: true})
      .then(($element) => {
        if (log) {
          Cypress.log({
            $el: $element,
            message: '',
            name: 'Room Name',
            type: 'parent',
          })
        }

        return $element
      })
  }

  // endregion Login button

  // region Type

  /**
   * @param {CommandOptions} [options={}] Command options
   * @return {Cypress.Chainable<JQuery<HTMLElementTagNameMap[]>>}
   */
  typeColumn(options = {}) {
    const {log = true} = options

    return this.component({log: true})
      // language=CSS
      .find('#type', {log: true})
      .then(($element) => {
        if (log) {
          Cypress.log({
            $el: $element,
            message: '',
            name: 'typeColumn',
            type: 'parent',
          })
        }

        return $element
      })
  }

  // endregion Type

  // region Accessible

  /**
   * @param {CommandOptions} [options={}] Command options
   * @return {Cypress.Chainable<JQuery<HTMLElementTagNameMap[]>>}
   */
  accessible(options = {}) {
    const {log = true} = options

    return this.component({log: true})
      // language=CSS
      .find('#accessible', {log: true})
      .then(($element) => {
        if (log) {
          Cypress.log({
            $el: $element,
            message: '',
            name: 'Accessible',
            type: 'parent',
          })
        }

        return $element
      })
  }

  // endregion Accessible

  // region Room price

  /**
   * @param {CommandOptions} [options={}] Command options
   * @return {Cypress.Chainable<JQuery<HTMLElementTagNameMap[]>>}
   */
  roomPrice(options = {}) {
    const {log = true} = options

    return this.component({log: true})
      // language=CSS
      .find('#roomPrice', {log: true})
      .then(($element) => {
        if (log) {
          Cypress.log({
            $el: $element,
            message: '',
            name: 'Room price',
            type: 'parent',
          })
        }

        return $element
      })
  }

  // endregion Room price

  // region Room details

  /**
   * @param {CommandOptions} [options={}] Command options
   * @return {Cypress.Chainable<JQuery<HTMLElementTagNameMap[]>>}
   */
  roomDetails(value, options = {}) {
    const {log = true} = options

    return this.component({log: true})
      // language=CSS
      .find(`[value=`+value+`]`)
      .then(($element) => {
        if (log) {
          Cypress.log({
            $el: $element,
            message: '',
            name: 'Room details',
            type: 'parent',
          })
        }

        return $element
      })
  }

  // endregion Room details

  // region Submit

  /**
   * @param {CommandOptions} [options={}] Command options
   * @return {Cypress.Chainable<JQuery<HTMLElementTagNameMap[]>>}
   */
  submit(options = {}) {
    const {log = true} = options

    return this.component({log: true})
      // language=CSS
      .find('#createRoom')
      .then(($element) => {
        if (log) {
          Cypress.log({
            $el: $element,
            message: '',
            name: 'submit',
            type: 'parent',
          })
        }

        return $element
      })
  }

  // endregion submit

  // region Room listing

  /**
   * @param {CommandOptions} [options={}] Command options
   * @return {Cypress.Chainable<JQuery<HTMLElementTagNameMap[]>>}
   */
  roomListing(options = {}) {
    const {log = true} = options

    return this.component({log: true})
      // language=CSS
      .find('[data-testid="roomlisting"]')
      .last()
      .then(($element) => {
        if (log) {
          Cypress.log({
            $el: $element,
            message: '',
            name: 'Room listing',
            type: 'parent',
          })
        }

        return $element
      })
  }

  // endregion Room listing

  // region alertDanger

  /**
   * @param {CommandOptions} [options={}] Command options
   * @return {Cypress.Chainable<JQuery<HTMLElementTagNameMap[]>>}
   */
  alertDanger(options = {}) {
    const {log = true} = options

    return this.component({log: true})
      // language=CSS
      .find('.alert.alert-danger')
      .last()
      .then(($element) => {
        if (log) {
          Cypress.log({
            $el: $element,
            message: '',
            name: 'Alert danger',
            type: 'parent',
          })
        }

        return $element
      })
  }

  // endregion alertDanger
}

module.exports = BookingManagement
