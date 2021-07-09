describe('Element get method', () => {
    it('element get testing', () => {
        cy.visit('https://www.freshworks.com/')
        cy.contains('Customers')
            .click()

        cy.url().should('include', '/customers')
        cy.get('body > section.first-fold.align-center.pattern-gradient-light > div>h1')
        .should('be.visible')
        .and('contain', 'Exceptional experiences')

        cy.get('ul.footer-nav li').should('have.length', 31)
        cy.get('ul.footer-nav li').find("a[href*='footer']").should('have.length', 10)
    });
});