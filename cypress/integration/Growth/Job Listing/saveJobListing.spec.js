describe('Login Success',()=>{
    
    it('navigate to the url',()=>{
        cy.visit('https://stg.ekrut.com')
    })

    it('click login button',()=>{
        cy.get('.eds-header__right > .ant-btn').eq(1).click()
    })
    it('Pop-up Login appear',()=>{
        cy.get('.content__header--is-left >.ant-typography').contains('Login to Your Account')
    })

    it('input valid user email',()=>{
        cy.get(':nth-child(1) > .ant-input')
        .should('be.visible')
        .type('rabbitenam@gmail.com').should('have.value','rabbitenam@gmail.com')
    })

    it('input valid password',()=>{
        cy.get('.ant-input-password > .ant-input')
        .should('be.visible')
        .type('ekrut123')
    })

    it('Click Submit form login',()=>{
        cy.get('form').submit()
    })
    it('User Checks URL', () => {
        cy.wait(10000)
        cy.url()
        .should('eq','https://stg.ekrut.com/talent/interviews')
    })

})
//show job listing, when fullfilled the requirement get Job listing
describe('Job Listing menu,saved job',()=>{
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

