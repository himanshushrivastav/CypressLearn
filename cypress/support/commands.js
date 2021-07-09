import 'cypress-file-upload';


// cypress-file-upload package installed to file upload through cypress


Cypress.Commands.add('login', (email, password)=>{
    cy.get('.login').click()
    cy.get('#email').type(email) 
    cy.get('#passwd').type(password)
    cy.get('#SubmitLogin').click()


})