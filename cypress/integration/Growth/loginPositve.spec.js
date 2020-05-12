//Onboarding Experience success
describe('Login Success',()=>{
    it('navigate to the url',()=>{
        cy.visit('https://stg.ekrut.com')
    })

    it('click login button',()=>{
        cy.xpath('/html/body/div[1]/header/div/div[2]/button[2]').click()
    })
    it('Pop-up Login appear',()=>{
        cy.get('.content__header--is-left >.ant-typography').contains('Login to Your Account')
    })

    it('input valid user email',()=>{
        cy.get(':nth-child(1) > .ant-input')
        .should('be.visible')
        .type('teststaging1@gmail.com').should('have.value','teststaging1@gmail.com')
    })

    it('input valid password',()=>{
        cy.get('.ant-input-password > .ant-input')
        .should('be.visible')
        .type('kazuchan')
    })

    it('Click Submit form login',()=>{
        cy.get('form').submit()
    })
    it('User Checks URL', () => {
        cy.wait(10000)
        cy.url()
        .should('eq','https://stg.ekrut.com/talent/interviews')
    })

})