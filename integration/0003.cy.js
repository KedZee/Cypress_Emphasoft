const MainPage = require('../page_object/pages/main_page')
const MessageForm = require('../page_object/components/messageForm')

describe('0003', {
  tags: [
    '0003',
    'main page',
    'massage form',
    'invalid data',
  ],
}, () => {
  const mainPage = new MainPage()
  const messageForm = new MessageForm()
  
  it('check if the message is sent if you enter invalid data', function () {
    mainPage
      .visit()

    messageForm
      .contactName()
      .type('csef3434')

    messageForm
      .contactEmail()
      .type('martatest')

    messageForm
      .contactPhone()
      .type('gfttg')

    messageForm
      .contactSubject()
      .type(' t')

    messageForm
      .contactDescription()
      .type('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry')

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
      .should('contain', 'Phone must be between 11 and 21 characters.')
      .should('contain', 'Subject must be between 5 and 100 characters.')
      .should('contain', 'Message must be between 20 and 2000 characters.')
      .should('contain', 'must be a well-formed email address')
  })
})
