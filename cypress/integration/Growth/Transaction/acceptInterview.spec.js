describe('Accept interview',()=>{
    it('login',()=>{
        cy.login({email:'poohsatu@gmail.com',pass:'ekrut123'})
    })
    it('click active transaction Button see detail',()=>{
        cy.wait(100)
        cy.get('button[type=button]').eq(1).contains('See detail').click({force: true})
    })
    it('choose date',()=>{
        cy.get('.ant-radio-group > .sc-fznWqX').eq(0).click()
        //confirm
        cy.get('button[type=submit]').eq(1).contains('Confirm').click({force: true})
    })
})