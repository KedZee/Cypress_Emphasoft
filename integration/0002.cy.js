const MainPage = require('../page_object/pages/main_page')
const MessageForm = require('../page_object/components/messageForm')

describe('0002', {
  tags: [
    '0002',
    'main page',
    'massage form',
    'invalid data',
  ],
}, () => {
  const mainPage = new MainPage()
  const messageForm = new MessageForm()
  
  it('check if a message is sent if no data is entered', function () {
    mainPage
      .visit()

    cy.intercept('POST', '/message')
      .as('apiMessageCheck')

    messageForm
      .submitButton()
      .click()
      
    cy.wait('@apiMessageCheck')
      .should(({ request, response }) => {
        expect(response.statusCode).to.equal(400)
      })

    messageForm
      .messageForm()
      .should('contain', 'Message must be between 20 and 2000 characters.')
      .should('contain', 'Phone may not be blank')
      .should('contain', 'Phone must be between 11 and 21 characters.')
      .should('contain', 'Subject must be between 5 and 100 characters.')
      .should('contain', 'Email may not be blank')
      .should('contain', 'Message may not be blank')
      .should('contain', 'Name may not be blank')
      .should('contain', 'Subject may not be blank')
  })
})
