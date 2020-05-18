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
        cy.get(':nth-child(1) > .ant-input')
        .should('be.visible')
        .type('firadevianas@gmail.com').should('have.value','firadevianas@gmail.com')
    })

    it('input valid password',()=>{
        cy.get('.ant-input-password > .ant-input')
        .should('be.visible')
        .type('ekrut123')
    })
    it('Click button login',()=>{
        cy.get('.content__body > .ant-btn').click()
    })
    it('User Checks URL', () => {
        cy.wait(10000)
        cy.url()
        .should('eq','https://stg.ekrut.com/talent/interviews')
    })

})
describe('logout',()=>{
    it('Signout',()=>{
        cy.wait(1000)
        cy.get('.eds-navheader__profile').click()
          .get('.ant-dropdown-menu-item').eq(2).click()
        cy.url().should('eq','https://stg.ekrut.com/login')
    })
})