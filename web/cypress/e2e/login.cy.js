describe('login', () => {
  it('Deve fazer login com sucesso', () => {
    cy.viewport(1440, 900)
    cy.visit('http://localhost:3000/')
    cy.get('#email').type('gabspassos93@gmail.com')
    cy.get('#password').type('12345')
  })
})