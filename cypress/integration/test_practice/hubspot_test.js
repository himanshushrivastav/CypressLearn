describe('hubspot app test', () => {
  it('hubspot home page test', () => {
      cy.visit('https://app.hubspot.com/login', {failOnStatusCode: false})
      cy.get("input[id='username']").type('test@123.in');
      cy.get("input[id='password']").type('test1234');
        
  });
})
