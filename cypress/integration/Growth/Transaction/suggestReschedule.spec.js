describe('Accept interview',()=>{
    it('login',()=>{
        cy.login({email:'poohsatu@gmail.com',pass:'ekrut123'})
    })
    it('click active transaction Button see detail',()=>{
        cy.wait(100)
        cy.get('button[type=button]').eq(1).contains('See detail').click({force: true})
    })
    it('click toggle set your own schedule yes',()=>{
        cy.get('.ant-switch').click()
        cy.wait(100)
        cy.get('input[id=date]').should('be.visible')
        cy.get('input[id=time]').should('be.visible')
    })
    it('input suggest schedule date',()=>{
        cy.get('input[id=date]').should('be.visible').click()
        cy.get('td[title=2020-07-09]').click()
    })
    it('input time',()=>{
        cy.get('input[id=time]').should('be.visible').click()
        cy.get('li[class=ant-picker-time-panel-cell]').eq(10).scrollIntoView().click()
        cy.get('.ant-picker-ok > .ant-btn').click()
    })
    it('click button confirm',()=>{
        cy.get('button[type=submit]').eq(1).contains('Confirm').click({force: true})
    })
})