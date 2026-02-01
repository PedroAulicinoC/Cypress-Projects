describe('Exercícios 5', () => {

  beforeEach(() => {
    cy.visit('https://example.cypress.io/todo');
    cy.get(':nth-child(1) > .view > .toggle').click();
    })

  it('Consegue completar tarefa', () => {
    cy.get('.footer > .todo-button').click();
    cy.get('.todo-list')
        .should('have.length', 1)
        .should('not.have.text', 'Pay electric bill');
    cy.contains('Clear completed').should('not.exist');
  })

  it('Consegue filtrar tarefa', () => {
    cy.get('.filters > :nth-child(3) > a').click();
    cy.get('.todo-list')
        .should('have.length', 1)
        .should('have.text', 'Pay electric bill');
    cy.contains('Walk the dog').should('not.exist');
  })
})