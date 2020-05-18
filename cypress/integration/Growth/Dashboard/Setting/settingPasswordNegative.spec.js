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
describe('leave field empty on form setting password',()=>{
    it('click on setting menu',()=>{
        cy.get('.eds-navheader__profile').click()
          .get('.ant-dropdown-menu-item').eq(1).click()
        cy.url().should('eq','https://stg.ekrut.com/talent/settings')
    })
    it('click button save changes without fill any field',()=>{
        cy.get('.col-md-7 > .btn').click()
    })
    it('toast appear',()=>{
        cy.get('.c-toast__text > .c-toast__text-title').should('have.text','FAILED')
        cy.get('.c-toast__text > .c-toast__text-body').should('have.text','Please fill all the required input to proceed')
    })
    it('validation empty current password field',()=>{
        cy.get('.form-group > .form-invalid-feedback').eq(0).should('have.text','This field is required*')
    })
    it('validation empty new password field',()=>{
        cy.get('.form-group > .form-invalid-feedback').eq(1).should('have.text','This field is required*')
    })
    it('validation empty confirm password field',()=>{
        cy.get('.form-group > .form-invalid-feedback').eq(2).should('have.text','This field is required*')
    })
})