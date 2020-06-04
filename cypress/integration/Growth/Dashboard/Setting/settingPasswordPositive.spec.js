describe('Change password',()=>{
    it('login',()=>{
        cy.login({email:'firatest@gmail.com',pass:'ekrut123'})
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