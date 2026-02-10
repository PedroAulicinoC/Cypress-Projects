describe('Role-Based Login Flow Challenge', () => {

  beforeEach(() => {
    cy.visit('https://www.cnarios.com/challenges/login-flow');
    })

    it('Validate login form input fields', () => {
        cy.get('#«r1»').type('Steve');
        cy.get('#«r2»').type('password');
    });

    it('Verify error message on invalid credentials', () => {
        cy.loginCnarios('4dmin', 'admin1234');
        cy.contains('Invalid username or password.').should('be.visible')
    });
})