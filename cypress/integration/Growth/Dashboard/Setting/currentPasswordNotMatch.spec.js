describe('new password not match with confirm password',()=>{
    it('login',()=>{
        cy.login({email:'staging1@gmail.com',pass:'ekrut123'})
    })
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
        cy.get('.form-group > .password ').eq(2).type('ekrut1235')
    })
    it('click button save changes',()=>{
        cy.get('.col-md-7 > .btn').click()
    })
    it('validation confirm password not match with new password',()=>{
        cy.get('.form-group > .form-invalid-feedback').eq(0).should('have.text','New and confirm passwords doesn’t match')
    })
})