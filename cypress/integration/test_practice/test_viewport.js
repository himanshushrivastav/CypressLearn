describe('Test Diffrent View port', () => {
    before(() => {
        console.log('running test')
    });

    beforeEach(() => {
        cy.visit('https://www.google.com')
        
    });

    it('open in Mac 13', () => {
        cy.viewport('macbook-13')
        cy.screenshot()
        cy.wait(200)
    });

    it('open in Mac 15', () => {
        cy.viewport('macbook-15')
        cy.screenshot()
        cy.wait(200)
    });

    it('open in iPhone', () => {
        cy.viewport('iphone-6')
        cy.screenshot()
        cy.wait(200)
    });

    it('open in custom viewport', () => {
        cy.viewport(550, 750)
        cy.screenshot()
        cy.wait(200)
    });

});