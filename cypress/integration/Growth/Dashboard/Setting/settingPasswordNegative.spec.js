describe('leave field empty on form setting password',()=>{
    it('login',()=>{
        cy.login({email:'firatest@gmail.com',pass:'ekrut123'})
    })
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