const AdminPage = require('../page_object/pages/admin_page')
const LoginForm = require('../page_object/components/loginForm')
const BookingManagement = require('../page_object/components/bookingManagement')

describe('0005', {
  tags: [
    '0005',
    'admin page',
    'boking managment',
    'invalid data',
  ],
}, () => {
  const adminPage = new AdminPage()
  const loginForm = new LoginForm()
  const bookingManagement = new BookingManagement()
  
  it('check if you do not fill in the data in Booking Management', function () {

    adminPage
    .visit()
    
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

    loginForm
      .userNameField()
      .type('admin')

    loginForm
      .passwordField()
      .type('password')

    cy.intercept('POST', '/auth/login')
      .as('apiLogin')

    loginForm
      .loginButton()
      .click()

    cy.wait('@apiLogin')
      .should(({ request, response }) => {
        expect(response.statusCode).to.equal(200)
      })

    cy.intercept('POST', '/room/')
      .as('apiRoom')

    bookingManagement
      .submit()
      .click()

    cy.wait('@apiRoom')
      .should(({ request, response }) => {
        expect(response.statusCode).to.equal(400)
      })

    bookingManagement
      .alertDanger()
      .should('contain', 'Room name must be set')
      .should('contain', 'must be greater than or equal to 1')

    })
})
