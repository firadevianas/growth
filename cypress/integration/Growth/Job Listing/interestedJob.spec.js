describe('Job Listing menu,saved job',()=>{
    it('login',()=>{
        cy.login({email:'rabbitempat@gmail.com',pass:'ekrut123'})
    })
    it('click Job listing menu',()=>{
        cy.get('.ant-menu-item').eq(1).click()
        cy.url().should('eq','https://stg.ekrut.com/talent/job-opportunities')
    })

    it('interested job',()=>{
        cy.scrollTo('bottom')
        cy.wait(3000)
        cy.get('.tl-dashboard__pagination > .page-item ').last().click()
        cy.get('.col-lg-3 > .ant-btn').contains('I am Interested').click({force: true})
            
    })
    it('successfully interested job',()=>{
        cy.get('.c-toast__text > .c-toast__text-title ').should('have.text','SUCCESS')
        cy.get('.c-toast__text > .c-toast__text-body ').should('have.text','Success')
        cy.wait(200)
        cy.get('.c-tabs__header__label').contains('Interested').click()
        cy.get('.tl-opportunities-card__label-text').contains('Interested')
    })
   
})

