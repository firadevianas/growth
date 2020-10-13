describe('onboarding step 3',()=>{
    it('login',()=>{
        cy.login({email:'autoyttrl@yttrl.com',pass:'qwerty123'})
    })
    it('Check url',()=>{
        cy.wait(1000)
        cy.url().should('eq','http://devel.ekrut.com/employer/onboarding/3')
    })
    it('fill about company',()=>{
        cy.get('textarea[name="about"]').type('Company Vision to reach blabla mission')
    })
    it('choose company culture',()=>{
        cy.findByText('What kind of culture does your company embrace?').click()
        cy.findByText('Balance').click()
    })
    it('choose perk and benefit',()=>{
        cy.findByText('Remote Working').click()
        cy.findByText('Sport Day').click()
        cy.findByText('Health Insurance').click()
        cy.findByText('Flexible Hours').click()
    })
    it('click button next',()=>{
        cy.get('.emp-onboarding-btn__item').eq(1).click()
    })
    it('verify url dashboard employer',()=>{
        cy.get('').should('have.text','')
        cy.url.should('eq','')
    })

})