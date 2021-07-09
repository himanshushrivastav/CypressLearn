describe('Hover Func SpiceJet', () => {
    it.skip('Test Hover on Login', () => {
        cy.visit('https://www.spicejet.com/')
        cy.contains('Login').trigger('mouseover')
        cy.contains('SpiceClub Members').trigger('mouseover')
        cy.contains('Sign up').click()
        
    });


    it('Hover using invoke method test', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.ajax_add_to_cart_button').first().click()
        cy.wait(2000)
        cy.get('.cross').click()
        cy.wait(3000)
        cy.get('.cart_block').should('be.hidden').invoke('show')
        cy.get('#button_order_cart').click()
        cy.url().should('include', 'controller=order')
        
    });


});