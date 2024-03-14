describe('resistor-calculator-e2e', () => {
  beforeEach(() => cy.visit('/'));

  it('should load components correctly', () => {

    cy.get('h1').should('be.visible');
    cy.get('button').contains('bands resistor');
    cy.get('h2').contains('Resistor Values');
  });
});
