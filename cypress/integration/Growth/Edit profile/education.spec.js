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
describe('add education',()=>{
    it('click on education',()=>{
        cy.get('ul > li ').contains('Education').click()
        cy.url().should('eq','https://stg.ekrut.com/talent/profile/education')
    })
    it('input School/univ name',()=>{
        cy.get('.css-1pcexqc-container').eq(0).click()
          .type('Taruma')
          .get('.css-11unzgr').click()
    })
    it('input degree',()=>{
        cy.get('.css-1pcexqc-container').eq(1).click()
          .type('S1')
          .get('.css-11unzgr').ep(0).click()
    })
    it('input major',()=>{
        cy.get('.css-1pcexqc-container').eq(2).click()
          .type('Computer')
          .get('.css-11unzgr').ep(0).click()
    })
    it('input GPA min',()=>{
        cy.get('input[name="education[0].GPA"]')
          .type('3.4')
    })
    it('input GPA max',()=>{
        cy.get('input[name="education[0].GPAOutOf"]').click()
          .type('4')
    })
    it('input Period start year',()=>{
        cy.get('.col-md-6').eq(0).click()
        cy.get('.rdtPrev').click()
          .get('td[data-value="2014"]').click()
    })
    it('input Period end year',()=>{
        cy.get('.col-md-6').eq(1).click()
        cy.get('.rdtPrev').click()
          .get('td[data-value="2018"]').click()
    })
    it('Click Save button',()=>{
        cy.get('button[type=submit]').click()
        cy.wait(1000)
        cy.get('.c-toast__text').should('be.visible')
          .get('.c-toast__text-title').should('have.text','SUCCESS')
          .get('.c-toast__text-body').should('have.text','Your profile has been successfully updated')
    })
})