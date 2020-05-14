describe('Login Success',()=>{
    
    it('navigate to the url',()=>{
        cy.visit('https://stg.ekrut.com')
    })

    it('click register button',()=>{
        cy.get('.eds-header__right > .ant-btn').eq(0).click()
    })
    it('Pop-up register appear',()=>{
        cy.get('.content__header--is-left >.ant-typography').contains('Register as Talent')
    })

    it('input valid talent name',()=>{
        cy.get('.content__body > .eds-input-group').eq(0)
        .should('be.visible')
        .type('Rabbit Satu')
    })

    it('input valid email',()=>{
        cy.get('.content__body > .eds-input-group').eq(1)
        .should('be.visible')
        .type('rabbitsatu@gmail.com')
    })
    it('input valid password > 6 char',()=>{
        cy.get('.content__body > .eds-input-group').eq(2)
        .should('be.visible')
        .type('ekrut123')
    })
    it('input valid confirm password',()=>{
        cy.get('.content__body > .eds-input-group').eq(3)
        .should('be.visible')
        .type('ekrut123')
    })
    it('input valid phone number',()=>{
        cy.get('.content__body > .eds-input-group').eq(4)
        .should('be.visible')
        .type('568279921')
    })
    it('agree to term and condition',()=>{
        cy.wait(1000)
        cy.get('.content__body > .eds-input-group').eq(5).click()
    })
    it('Click Submit form login',()=>{
        cy.get('form').submit()
    })
    it('Modal Thankyou for register appear',()=>{
        cy.get('.gst-verify-modal__content > .container').eq(0).should('have.text','Thank You for Registering!')
    })
    it('click button done on modal',()=>{
        cy.get('.container > .btn').click()
    })
})