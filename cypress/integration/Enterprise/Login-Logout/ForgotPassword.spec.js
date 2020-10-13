describe('User do Forgot Password', () => {
    it('User Visits Ekrut Platform', () => {
        cy.visit('http://devel.ekrut.com/login')
    })

    it('User Click Forgot Password button',() => {
        cy.get('.Flex-sc-5cz5s1 > .ant-btn')
        .click()
    })

    it('User in Forgot Password screen', () =>{
        cy.wait(10000)
        cy.url()
        .should('eq','http://devel.ekrut.com/reset-password-email')
    })
    it('User Inputs Email',() => {
        cy.get('.form-control')
        .should('be.visible')
        .type('dono@ekrut.com')
    })

    it('User Inputs Email',() => {
        cy.get('.btn')
        .should('be.visible')
        .click()
    })
})