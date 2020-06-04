//show job listing, when fullfilled the requirement get Job listing
describe('Job Listing menu,saved job',()=>{
    it('login',()=>{
        cy.login({email:'rabbitempat@gmail.com',pass:'ekrut123'})
    })
    it('click Job listing menu',()=>{
        cy.get('.ant-menu-item').eq(1).click()
        cy.url().should('eq','https://stg.ekrut.com/talent/job-opportunities')
    })
    it('Saved job',()=>{
        cy.get('.col-lg-3 > .ant-btn').contains('Save Job').click({force: true})
    })
    it('successfully saved job',()=>{
        cy.get('.c-toast__text > .c-toast__text-title ').should('have.text','SUCCESS')
        cy.get('.c-toast__text > .c-toast__text-body ').should('have.text','Bookmark Success')
        cy.wait(200)
        cy.get('.c-tabs__header__label').contains('Interested').click()
        cy.get('.col-lg-3 > .ant-btn').contains('Unsave Job').should('have.text','Unsave Job')
    })
})

