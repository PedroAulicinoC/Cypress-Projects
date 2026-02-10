describe('Exercícios 3', () => {
  it('Verificar imagens', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/home')
    cy.get('.card').should('be.visible');
  })
})