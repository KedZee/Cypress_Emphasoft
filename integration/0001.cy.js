const MainPage = require('../page_object/pages/main_page')
const MessageForm = require('../page_object/components/messageForm')

describe('0001', {
  tags: [
    '0001',
    'main page',
    'massage form',
    'valid data',
  ],
}, () => {
  const mainPage = new MainPage()
  const messageForm = new MessageForm()
  
  it('verify that a message with valid data has been sent', function () {
    mainPage
      .visit()

    messageForm
      .contactName()
      .type('Marta Krutta')

    messageForm
      .contactEmail()
      .type('martatest@gmail.com')

    messageForm
      .contactPhone()
      .type('+12345678900000')

    messageForm
      .contactSubject()
      .type('test subject 123')

    messageForm
      .contactDescription()
      .type('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry')

    cy.intercept('POST', '/message')
      .as('apiMessageCheck')

    messageForm
      .submitButton()
      .click()

    cy.wait('@apiMessageCheck')
      .should(({ request, response }) => {
        expect(response.statusCode).to.equal(201)
        expect(response.body.email).to.equal('martatest@gmail.com')
        expect(response.body.name).to.equal('Marta Krutta')
        expect(response.body.phone).to.equal('+12345678900000')
        expect(response.body.subject).to.equal('test subject 123')
        expect(response.body.description).to.equal('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry')
      })

    messageForm
      .gettingInTouch()
      .should('contain', 'Thanks for getting in touch Marta Krutta')
      // eslint-disable-next-line quotes
      .should('contain', `We'll get back to you about`)
      .should('contain', 'as soon as possible.')
      .should('contain', 'test subject 123')
  })
})
