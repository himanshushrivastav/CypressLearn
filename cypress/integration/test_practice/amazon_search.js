describe('amazon search', () => {
    it('should search on amazon', () => {

        cy.visit('https://www.amazon.in/')
        cy.get('.nav-search-field ').within(
            ()=>{
                cy.get('#twotabsearchtextbox').type('Apple Mac laptops')
            }
        )
        
    });
});