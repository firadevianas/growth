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

    it('Click Submit form login',()=>{
        cy.get('form').submit()
    })
    it('User Checks URL', () => {
        cy.wait(2000)
        cy.url()
        .should('eq','https://stg.ekrut.com/talent/interviews')
    })

})
describe('Change password',()=>{
    it('click on setting menu',()=>{
        cy.get('.eds-navheader__profile').click()
          .get('.ant-dropdown-menu-item').eq(1).click()
        cy.url().should('eq','https://stg.ekrut.com/talent/settings')
    })
    it('fill valid old password',()=>{
        cy.get('.form-group > .password ').eq(0).type('ekrut123')
    })
    it('fill new password',()=>{
        cy.get('.form-group > .password ').eq(1).type('ekrut1234')
    })
    it('fill confirm password',()=>{
        cy.get('.form-group > .password ').eq(2).type('ekrut1234')
    })
    it('click button save changes',()=>{
        cy.get('.col-md-7 > .btn').click()
    })
    it('toast success appear',()=>{
        cy.get('.c-toast__text > .c-toast__text-title').should('have.text','SUCCESS')
        cy.get('.c-toast__text > .c-toast__text-body').should('have.text','Your password has been successfully updated')
    })
})