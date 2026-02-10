import { myUsers } from '../../fixtures/myUsers.json'

describe('Mass User Account Creation', () =>{
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/')
        cy.get('[data-test="register-button"]').click();
    })
    myUsers.forEach(user => {
        it('Fill out all the necessary fields for creating an account for each account in "users"', 
            () =>{
                cy.get('[data-test="input-name"]').clear().type(user.name);
                cy.get('[data-test="input-email"]').clear().type(user.email);
                cy.get('[data-test="input-password"]').clear().type(user.password);
                cy.get('[data-test="input-confirm-password"]').clear().type(user.password);
                cy.get('[data-test="submit-button"]').click();
            })
    })
})