describe('File Upload', () => {
    it('File upload test', () => {

        cy.visit('http://automationpractice.com/index.php?controller=contact')
        cy.get('#fileUpload').attachFile('upload.txt');
    });

    it.only('Drag and Drop', () => {
        cy.visit('https://css-tricks.com/examples/DragAndDropFileUploading/')
        cy.get('#file').attachFile('file.jpg');
        // console.log('File Upload done')
        // // cy.wait(2000);
        cy.get('.box__success').should('contain.text', 'Done')
    });
});