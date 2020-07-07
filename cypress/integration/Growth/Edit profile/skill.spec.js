describe('edit skill',()=>{
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
describe('edit skill',()=>{
    it('click on edit skill',()=>{
        cy.get('ul > li ').contains('Skills').click()
        cy.url().should('eq','https://stg.ekrut.com/talent/profile/skills')
    })
    it('add skill',()=>{
        cy.get('.css-1fr6j5e-control').eq(2).click().type('Html')
        cy.get('div[id="react-select-5-option-0"]').click()
    })
    it('Add language',()=>{
        cy.get('.css-1pcexqc-container').eq(3).click({force: true})
          .type('Indonesian')
          .get('.css-kj6f9i-menu').click()
    })
    it('Add language lavel',()=>{
        cy.get('.css-1pcexqc-container').eq(4).click({force: true})
          .type('Advance')
          .get('.css-11unzgr').click()
    })
    it('Click Save button',()=>{
        cy.get('button[type=submit]').click()
        cy.wait(1000)
        cy.get('.c-toast__text').should('be.visible')
          .get('.c-toast__text-title').should('have.text','SUCCESS')
          .get('.c-toast__text-body').should('have.text','Your profile has been successfully updated')
    })
})