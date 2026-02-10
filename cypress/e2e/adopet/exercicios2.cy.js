describe('Exercícios 2', () => {

  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    })

  it('Verificar texto na main page', () => {
    cy.title().should('eq', 'AdoPet');
    cy.contains('Quem ama adota!').should('be.visible');
    cy.contains('Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible');
  })

    it('Fazer login por outro caminho', () => {
      cy.get('.header__message').click();
      cy.get('[data-test="input-loginEmail"]').type('steve.craft@gmail.com');
      cy.get('[data-test="input-loginPassword"]').type('Senha123');
      cy.get('[data-test="submit-button"]').click();  
  })
})