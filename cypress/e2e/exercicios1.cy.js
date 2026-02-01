describe('Exercícios 1', () => {
  it('Mudança de páginas', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/')
    cy.get('.button').click();
    cy.get('.header__home').click();
    cy.get('.header__message').click();
    cy.visit('https://adopet-frontend-cypress.vercel.app/login')
    cy.visit('https://adopet-frontend-cypress.vercel.app/home')
    cy.get('.header__message').click();
  })
})