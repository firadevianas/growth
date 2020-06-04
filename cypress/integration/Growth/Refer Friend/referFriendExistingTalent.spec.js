describe('Refer friend empty field',()=>{
    it('login',()=>{
        cy.login({email:'rabbitempat@gmail.com',pass:'ekrut123'})
    })
    it('click menu refer',()=>{
        cy.get('.ant-menu-item').eq(2).click()
        cy.url().should('eq','https://stg.ekrut.com/talent/refer')
    })
    it('scroll to form refer friend',()=>{
        cy.scrollTo('center')
    })
    it('fill existing friend name',()=>{
        cy.get('.tl-refer-invitation__form > .form-group').eq(0).type('pooh refer')
    })
    it('fill existing friend email',()=>{
        cy.get('.tl-refer-invitation__form > .form-group').eq(1).type('firadevianasari@gmail.com')
    })
    it('fill existing friend phone number',()=>{
        cy.get('.tl-refer-invitation__form > .form-group').eq(2).type('82280084068')
    })
    it('click button sumbit form refer',()=>{
        cy.get('.text-left > .btn').click()
    })
    it('Appear toast failed',()=>{
        cy.get('.c-toast__text > .c-toast__text-title').should('have.text','FAILED')
        cy.get('.c-toast__text > .c-toast__text-body').should('have.text','Sorry. Talent that you refer already become Ekrut Talent')
    })
})