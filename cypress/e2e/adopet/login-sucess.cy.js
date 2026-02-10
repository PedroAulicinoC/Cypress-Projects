describe('Login Page Sucess', () => {

  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="login-button"]').click();
    })

  it('Fill out all the necessary fields for logging in', () => {
    cy.login('steve.craft@gmail.com', 'Senha123');
  })
})