const AdminPage = require('../page_object/pages/admin_page')
const LoginForm = require('../page_object/components/loginForm')
const BookingManagement = require('../page_object/components/bookingManagement')

describe('0006', {
  tags: [
    '0006',
    'admin page',
    'boking managment',
    'valid data',
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

    bookingManagement
      .roomName()
      .type('113')

    bookingManagement
      .typeColumn()
      .select('Twin')

    bookingManagement
      .accessible()
      .select('true')

    bookingManagement
      .roomPrice()
      .type('200')

    cy.intercept('POST', '/room/')
      .as('apiRoom')

    cy.intercept('GET', '/room/')
      .as('getApiRoom')

    bookingManagement
      .submit()
      .click()

    cy.wait('@apiRoom')
      .should(({ request, response }) => {
        expect(response.statusCode).to.equal(201)
      })

    cy.wait('@getApiRoom')
      .should(({ request, response }) => {
        expect(response.statusCode).to.equal(200)
      })
      .then(()=>{
        bookingManagement
        .roomListing()
        .should('contain', '113')
        .should('contain', 'Twin')
        .should('contain', 'true')
        .should('contain', '200')
        .should('contain', 'No features added to the room')
      })


    })
  })