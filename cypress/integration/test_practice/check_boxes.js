describe('Test Check Box', () => {
    it('Checkbox checked', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.sf-with-ul').first().click()

        // check all the check boxes and verify if checked
        cy.get('.checkbox').check().parent().should('have.class', 'checked')
    
        // uncheck the check boxes and verify
        cy.get('.checkbox').uncheck().parent().should('not.have.class', 'checked')

        // 14217375
    });
    it.only('Snapdeal Page', () => {
        cy.visit('https://www.snapdeal.com/')
        cy.get('#inputValEnter').type('laptop')
        cy.get('.searchTextSpan').click()
        cy.get('[data-displayname="Brand"] > .filter-content > .filter-inner > :nth-child(n) > input')
        .check({force: true})
        
    });

    
});