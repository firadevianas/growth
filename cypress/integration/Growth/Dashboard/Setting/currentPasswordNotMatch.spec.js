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
describe('new password not match with confirm password',()=>{
    it('click on setting menu',()=>{
        cy.get('.eds-navheader__profile').click()
          .get('.ant-dropdown-menu-item').eq(1).click()
        cy.url().should('eq','https://stg.ekrut.com/talent/settings')
    })
    it('fill invalid old password',()=>{
        cy.get('.form-group > .password ').eq(0).type('ekrut123')
    })
    it('fill new password',()=>{
        cy.get('.form-group > .password ').eq(1).type('ekrut1234')
    })
    it('fill confirm password',()=>{
        cy.get('.form-group > .password ').eq(2).type('ekrut1235')
    })
    it('click button save changes',()=>{
        cy.get('.col-md-7 > .btn').click()
    })
    it('validation confirm password not match with new password',()=>{
        cy.get('.form-group > .form-invalid-feedback').eq(0).should('have.text','New and confirm passwords doesn’t match')
    })
})