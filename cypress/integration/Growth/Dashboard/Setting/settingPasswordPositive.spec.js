describe('Change password',()=>{
    it('login',()=>{
        cy.login({email:'staging1@gmail.com',pass:'ekrut1234'})
    })
    it('click on setting menu',()=>{
        cy.get('.eds-navheader__profile').click()
          .get('.ant-dropdown-menu-item').eq(1).click()
        cy.url().should('eq','https://stg.ekrut.com/talent/settings')
    })
    it('fill valid old password',()=>{
        cy.get('.form-group > .password ').eq(0).type('ekrut1234')
    })
    it('fill new password',()=>{
        cy.get('.form-group > .password ').eq(1).type('ekrut123')
    })
    it('fill confirm password',()=>{
        cy.get('.form-group > .password ').eq(2).type('ekrut123') 
    })
    it('click button save changes',()=>{
        cy.get('.col-md-7 > .btn').click()
        cy.wait(300)
    })
    it('toast success appear',()=>{
        cy.get('.c-toast__text > .c-toast__text-title').should('have.text','SUCCESS')
        cy.get('.c-toast__text > .c-toast__text-body').should('have.text','Your password has been successfully updated')
    })
})