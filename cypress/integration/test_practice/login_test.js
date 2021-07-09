describe('Test Login CRM PRO', () => {
    it('User Should be able to login', () => {
        cy.visit('https://classic.freecrm.com/');
        cy.get('input[name="username"]').type('testUser');
        cy.get('input[name="password"]').type('test@1234');
        cy.get('input[value="Login"]').click();
        console.log('*************************** Working Fine ***************************')
        cy.title().should('include', 'Free CRM')
        
    });
});