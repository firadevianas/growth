describe('User do Onboarding Step 2', () => {
    it('User Visits Ekrut Platform', () => {
    cy.visit('http://stg.ekrut.com/login')
    })

    it('User Inputs Email',() => {
        cy.get(':nth-child(1) > .ant-input')
        .should('be.visible')
        .type('tes@vira.com')
    })

    it('User Inputs Password', () => {
        cy.get('.ant-input-password > .ant-input')
        .should('be.visible')
        .type('qwerty123')
    })

    it('User Clicks Login Button', () => {
        cy.get('.content__body > .ant-btn-primary')
        .should('be.visible')
        .click()
     })
        
    //ONBOARDING STEP 3
    it('User Verify URL Link', () => {
        cy.wait(5000)
        cy.url()
        .should('eq','https://stg.ekrut.com/talent/interviews')
    })

    it('User input School / University', () => {
        cy.get('.css-3ms4ro-control > .css-1hwfws3')
        .should('be.visible')
        .type('Pakuan University')
    })
    

})