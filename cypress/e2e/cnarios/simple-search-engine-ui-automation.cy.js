describe('Simple Search Engine UI Automation Challenge', () => {

  beforeEach(() => {
    cy.visit('https://www.cnarios.com/challenges/simple-search-engine');
    })

    it('Locate and interact with the search input field', () => {
        cy.get('[data-testid="search-input"]').type('Minecraft Cool Builds');
    });

    //Review this code \/
    it('Trigger searches and validate mock results', () => {
        cy.get('[data-testid="search-input"]').type('Minecraft Cool Builds');
        cy.get('[data-testid="search-button"]').click();
        cy.contains('Minecraft Cool Builds').should('be.visible');
    });
})