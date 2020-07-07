describe('experience',()=>{
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
describe('edit experience',()=>{
    it('click on experience',()=>{
        cy.get('ul > li ').contains('Experiences').click()
        cy.url().should('eq','https://stg.ekrut.com/talent/profile/experiences')
    })
    it('Add work location',()=>{
        cy.get('input[placholder="Enter work location"]').click()
          .type('Jakarta')
    })
    it('Add description',()=>{
        cy.get('input[name="experiences[0].description"]').click()
          .type('Working as data to do blablablabla')
    })
    it('Click Save button',()=>{
        cy.get('button[type=submit]').click()
        cy.wait(1000)
        cy.get('.c-toast__text').should('be.visible')
          .get('.c-toast__text-title').should('have.text','SUCCESS')
          .get('.c-toast__text-body').should('have.text','Your profile has been successfully updated')
    })
})
describe('add new experience',()=>{
    it('click button add',()=>{
        
    })
})