describe('Formulário de consultoria', () =>{
  
  it('Deve solicitar consultoria individual', () => {
    cy.Start()
    cy.SubmitLoginForm('papito@webdojo.com', 'katana123')

    cy.goTo('Formulários', 'Consultoria')

    cy.get('input[placeholder="Digite seu nome completo"]').type('Fernando Papito')
    cy.get('input[placeholder="Digite seu email"]').type('papito@webdojo.com')

    cy.get('input[placeholder="(00) 00000-0000"]')
      .type("55 00934-6754")
      .should('have.value', '(55) 00934-6754')

    cy.contains('label', 'Tipo de Consultoria')
      .parent()
      .find('select')
      .select('inCompany')

    cy.contains('label', 'Pessoa Física')
      .find('input')
      .click()
      .should('be.checked')

    cy.contains('label', 'Pessoa Jurídica')
      .find('input')
      .should('be.not.checked')

    cy.contains('label', 'CPF')
      .parent()
      .find('input')
      .type('01234567537')
      .should('have.value', '012.345.675-37')
      //Check all checkboxes
      //cy.get('[type="checkbox"]').check()

    const discoverChannels = [
      "Instagram",
      "LinkedIn",
      "Udemy",
      "YouTube",
      "Indicação de Amigo"
    ]
    discoverChannels.forEach((channel) => {
      cy.contains('label', channel)
        .find('input' )
        .check()
        .should('be.checked')
    })

    cy.get('input[type=file]')
      .selectFile('./cypress/fixtures/Lorem_ipsum.pdf', {force:true})
    cy.readFile('./cypress/fixtures/Lorem_ipsum.pdf').should('exist')
  
    cy.get('textarea[placeholder="Descreva mais detalhes sobre sua necessidade"]').type('Lorem ipsum odor amet, consectetuer adipiscing elit. Rutrum torquent fames duis turpis tempor nibh auctor. Porttitor eu litora parturient molestie tortor netus auctor consequat ultricies. Maximus luctus nam imperdiet nisl a penatibus iaculis risus.')
  
    const techs = [
      'Cypress',
      'Playwright',
      'JavaScript',
      'Node.js'
    ]
    techs.forEach((tech)=>{
      
      cy.get('input[placeholder="Digite uma tecnologia e pressione Enter"]')
        .type(tech)
        .type('{enter}')
      
      cy.contains('label', 'Tecnologias')
        .parent()
        .contains('span', tech)
        .should('be.visible')
    })
    
    cy.contains('label', 'termos de uso')
      .find('input')
      .check()

    cy.contains('button', 'Enviar formulário')
      .click()

    cy.contains('Sua solicitação de consultoria foi enviada com sucesso! Em breve, nossa equipe entrará em contato através do email fornecido.').should('be.visible')
  })
})