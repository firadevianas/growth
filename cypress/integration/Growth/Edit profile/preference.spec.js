describe('preference',()=>{
    it('login',()=>{
        cy.login({email:'poohempat@gmail.com',pass:'ekrut123'})
    })
    it('click icon pencil to change profile picture',()=>{
        cy.wait(100)
        cy.get('button[type=button]').eq(0).click()
        cy.url().should('eq','https://stg.ekrut.com/talent/profile')
        cy.get('.d-flex > .h2').should('have.text','Personal Information')
    })
})
describe('edit preference',()=>{
    it('click on preference',()=>{
        cy.get('ul > li ').contains('Preference').click()
        cy.url().should('eq','https://stg.ekrut.com/talent/profile/preferences')
    })
    it('input about your self',()=>{
        cy.get('textarea[name="about"]')
          .type('Information Technology')
    })
    it('input Compensation',()=>{
        cy.get('textarea[name="othercompensations"]')
          .type('BPJS Asuransi Bonus 2x')
    })
    it('input reason to leave',()=>{
        cy.get('textarea[name="reasontoleave"]').click()
          .type('Looking for new experience')
    })
    it('input Position level preference',()=>{
        cy.get('.css-9favbc-control').click()
          .type('Associate')
          .get('.css-11unzgr').eq(0).click()
    })
    it('Click Save button',()=>{
        cy.get('button[type=submit]').click()
        cy.wait(1000)
        cy.get('.c-toast__text').should('be.visible')
          .get('.c-toast__text-title').should('have.text','SUCCESS')
          .get('.c-toast__text-body').should('have.text','Your profile has been successfully updated')
    })
})