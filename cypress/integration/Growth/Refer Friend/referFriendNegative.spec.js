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
        cy.wait(1000)
        cy.url()
        .should('eq','https://stg.ekrut.com/talent/interviews')
    })

})
describe('Refer friend empty field',()=>{
    it('click menu refer',()=>{
        cy.get('.ant-menu-item').eq(2).click()
        cy.url().should('eq','https://stg.ekrut.com/talent/refer')
    })
    it('scroll to form refer friend',()=>{
        cy.scrollTo('center')
    })
    
    it('click button sumbit form refer',()=>{
        cy.get('.text-left > .btn').click()
    })
    it('Appear toast failed',()=>{
        cy.get('.c-toast__text > .c-toast__text-title').should('have.text','FAILED')
        cy.get('.c-toast__text > .c-toast__text-body').should('have.text','Please fill all the required input to proceed')
    })
    it('validation field friend name',()=>{
        cy.get('.tl-refer-invitation__form > .form-group >.form-invalid-feedback').eq(0).should('have.text',`* Please fill your friend's name`)
    })
    it('validation field friend email',()=>{
        cy.get('.tl-refer-invitation__form > .form-group > .form-invalid-feedback').eq(1).should('have.text',`* Please fill your friend's email`)
    })
    it('validation field friend phone number',()=>{
        cy.get('.tl-refer-invitation__form > .form-group > .form-invalid-feedback').eq(2).should('have.text',`* Please fill your friend's number`)
    })
})