describe('Testing the hero dashboard page', function() {

  it('should contain the word heroes', function() {
    cy.visit('http://localhost:5000');
    cy.contains("Heroes");
  })

});
