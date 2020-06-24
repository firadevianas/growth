describe('current password same with new password',()=>{
    it('login',()=>{
        cy.login({email:'staging1@gmail.com',pass:'ekrut123'})
    })
    it('click on setting menu',()=>{
        cy.get('.eds-navheader__profile').click()
          .get('.ant-dropdown-menu-item').eq(1).click()
        cy.url().should('eq','https://stg.ekrut.com/talent/settings')
    })
    it('fill old password',()=>{
        cy.get('.form-group > .password ').eq(0).type('ekrut123')
    })
    it('fill same new password',()=>{
        cy.get('.form-group > .password ').eq(1).type('ekrut123')
    })
    it('fill confirm password',()=>{
        cy.get('.form-group > .password ').eq(2).type('ekrut123')
    })
    it('click button save changes',()=>{
        cy.get('.col-md-7 > .btn').click()
    })
    it('toast appear',()=>{
        cy.get('.c-toast__text > .c-toast__text-title').should('have.text','FAILED')
        cy.get('.c-toast__text > .c-toast__text-body').should('have.text','Your new password cannot be the same as current password')
    })
})