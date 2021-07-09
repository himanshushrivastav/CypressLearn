describe('oragneHRM drop-dawn', () => {
    it('orangeHRM drop-dawn Handle and test', () => {
        cy.visit('https://www.orangehrm.com/orangehrm-30-day-trial')
        cy.get('#Form_submitForm_Country')
            .select('India')
            .should('have.value', 'India')
    });

    it('Search Google.com', () => {
        // Seach on google for spoecific value

        cy.visit('www.google.com')
        cy.get('[name="q"]').type('Cypress')
        cy.get('.erkvQe').find('li span')
        
    });
});