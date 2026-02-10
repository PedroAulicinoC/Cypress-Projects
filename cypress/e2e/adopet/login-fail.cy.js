describe('Login Page Fail', () => {

  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="login-button"]').click();
    cy.intercept('POST', 'https://adopet-api-i8qu.onrender.com/adotante/login', {
      statusCode: 400, }).as('stubPost')
    });

  it('Fill out all the necessary fields for logging in', () => {
    cy.get('[data-test="input-loginEmail"]').type('steve.craft');
    cy.get('[data-test="input-loginPassword"]').type('123');
    cy.get('[data-test="submit-button"]').click();

    cy.contains('Por favor, verifique o email digitado').should('be.visible');
    cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible');
  })

  it('It fails the login even though all the necessary fields are correctly filled in', () => {
    cy.login('steve.craft@gmail.com', 'Senha123');
    cy.wait('@stubPost');
    cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible');
  })
})