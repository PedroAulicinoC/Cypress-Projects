describe('Register Page Sucess', () => {

  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/')
    cy.get('[data-test="register-button"]').click();
    })

  it('Fill out all the necessary fields for creating an account', () => {
    cy.register('Steve Minecraft', 'steve.craft@gmail.com', 'Senha123');
  })
})