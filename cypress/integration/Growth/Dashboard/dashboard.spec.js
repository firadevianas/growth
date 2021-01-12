describe('test with api',()=>{

    
    beforeEach('login ekrut',()=>{
        cy.server()
        cy.route('GET','**/opportunities/261504?filter=dashboard&size=5&page=1','fixture:joblist.json')
        cy.route('GET','**/activities?filter=active_transaction&size=-1','fixture:transaction.json')
        cy.login({email:'firadevianas@gmail.com',pass:'ekrut123'})
    })
    it('click on EKRUT logo',()=>{
        cy.wait(2000)
        cy.get('.eds-navheader-brand').click()
        cy.url().should('eq','https://devel.ekrut.com/talent/interviews')
        cy.get('.tl-dashboard-indicator__title').should('have.text','Welcome to your dashboard')
    })
})