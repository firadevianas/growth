describe('Accept interview',()=>{
    it('login',()=>{
        cy.login({email:'poohsatu@gmail.com',pass:'ekrut123'})
    })
    it('click active transaction Button see detail',()=>{
        cy.wait(100)
        cy.get('button[type=button]').eq(1).contains('See detail').click({force: true})
    })
    it('click button reject',()=>{
        cy.get('button[type=submit]').eq(0).scrollIntoView().click()
        cy.get('.css-1hwfws3').click()
        cy.get('div[id=react-select-2-option-1]').click()
    })
    it('choose reject reason',()=>{
        cy.get('.css-1hwfws3').click()
        cy.get('div[id=react-select-2-option-1]').click()
        cy.get('.css-1hwfws3').click()
        cy.get('div[id=react-select-2-option-5]').click()
        cy.get('.ant-input').should('be.visible').type('not match')
    })
    it('click button confirm reject',()=>{
        cy.wait(1000)
        cy.get('.c-modal-transaction__button--submit').click()
    })
    
})