Cypress.Commands.add('getUserAll', () => {
  cy.api({
    method: 'GET',
    url: `${Cypress.env('url').user}/usuarios`,
    failOnStatusCode: false
  })
})

Cypress.Commands.add('getUserId', (id) => {
  cy.api('GET', `${Cypress.env('url').user}/usuarios/${id}`)
})

Cypress.Commands.add('postUser', (payload) => {
  cy.api({
    method: 'POST',
    url: `${Cypress.env('url').user}/usuarios`,
    headers: {
      accept: 'application/json'
    },
    body: payload
  })
})

Cypress.Commands.add('putUser', (id, payload) => {
  cy.api({
    method: 'PUT',
    url: `${Cypress.env('url').user}/usuarios/${id}`,
    headers: {
      accept: 'application/json'
    },
    body: payload

  })
})

Cypress.Commands.add('deleteUser', (id) => {
  cy.api('DELETE', `${Cypress.env('url').user}/usuarios/${id}`)
})