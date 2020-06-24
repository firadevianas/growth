//Onboarding Experience success
describe('Login Success',()=>{
    it('navigate to the url',()=>{
        cy.visit('https://stg.ekrut.com')
    })

    it('click login button',()=>{
        cy.get('.eds-header__right > .ant-btn').eq(1).click()
    })
    it('Pop-up Login appear',()=>{
        cy.get('.content__header--is-left >.ant-typography').contains('Login to Your Account')
    })

    it('input valid user email',()=>{
        cy.get('input[name=email]')
        .should('be.visible')
        .type('staging1@gmail.com').should('have.value','staging1@gmail.com')
    })

    it('input valid password',()=>{
        cy.get('input[name=password]')
        .should('be.visible')
        .type('ekrut123')
    })

    it('Click Submit form login',()=>{
        cy.get('.content__body > .ant-btn-primary').click();
    })
    it('User Checks URL', () => {
        cy.wait(10000)
        cy.url()
        .should('eq','https://stg.ekrut.com/talent/interviews')
    })

})