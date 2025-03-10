describe('login', () => {
  it('Deve fazer login com sucesso', () => {
    cy.Start()

    cy.SubmitLoginForm('papito@webdojo.com', 'katana123')

    cy.get('[data-cy="welcome-message"]')
      .should('be.visible')
      .and('have.text', 'Olá QA, esse é o seu Dojo para aprender Automação de Testes.')

  })

  it('Não deve fazer login com senha errada', () => {
    cy.Start()

    cy.SubmitLoginForm('papito@webdojo.com', 'katana12345')

    cy.contains('Acesso negado! Tente novamente.')
      .should('be.visible')

  })

  it('Não deve fazer login com email não cadastrado', () => {
    cy.Start()

    cy.SubmitLoginForm('papitodev@webdojo.com', 'katana123')

    cy.contains('Acesso negado! Tente novamente.')
    .should('be.visible')
  })
})