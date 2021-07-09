describe('test reusable', () => {
    it('login feature', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.login('himanshu.s3212@gmail.com', 'Rest@1234')

    });
});