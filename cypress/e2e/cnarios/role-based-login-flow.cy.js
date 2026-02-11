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
        cy.contains('Invalid username or password.').should('be.visible');
    });

    it('Login as user and validate user dashboard', () => {
        cy.loginCnarios('user', 'user123');
        cy.contains('User Dashboard').should('be.visible');
    });

    it('Login as admin and validate admin dashboard', () => {
        cy.loginCnarios('admin', 'admin123');
        cy.contains('Admin Dashboard').should('be.visible');
    });

    it('Verify logout functionality resets the session', () => {
        cy.loginCnarios('admin', 'admin123');
        cy.get('.MuiCardContent-root > .MuiButtonBase-root').click();
        cy.contains('Login').should('be.visible');
    });
})