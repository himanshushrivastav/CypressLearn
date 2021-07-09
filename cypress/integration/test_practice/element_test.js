describe('launch app', () => {
    it('app testing', () => {
        cy.visit('https://www.freshworks.com/')
        cy.contains('Customers')
        cy.contains('Customers').click()
        cy.url().should('include', '/customers')
    });
    
});