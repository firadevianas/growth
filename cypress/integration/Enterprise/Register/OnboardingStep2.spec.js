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
        
    //ONBOARDING STEP 2
    it('User Verify URL Link', () => {
        cy.wait(5000)
        cy.url()
        .should('eq','https://stg.ekrut.com/talent/onboarding/2')
    })

    it('User Select Job Category', () => {
        cy.get('.ant-radio-group > :nth-child(1)')
        .should('be.visible')
        .click()
    })

    it('User Select Position', () => {
        cy.get(':nth-child(2) > .ant-radio-group > :nth-child(1)')
        .should('be.visible')
        .click()
    })

    it('User select Business Fields', () => {
        cy.get('.css-1hwfws3')
        .should('be.visible')
        .click()
        cy.get('#react-select-2-option-0')
        .click()

        cy.get('.c-react-select__dropdown-indicator')
        .click()
        cy.get('#react-select-2-option-1')
        .click()

        cy.get('.c-react-select__dropdown-indicator')
        .click()
        cy.get('#react-select-2-option-2')
        .click()
    })

    it('User Select Job Type', () => {
        cy.get(':nth-child(1) > .ant-checkbox > .ant-checkbox-input')
        .should('be.visible')
        .click()
    })

    it('User Select Company Size', () => {
        cy.get(':nth-child(5) > .ant-checkbox-group > :nth-child(3) > .ant-checkbox > .ant-checkbox-input')
        .should('be.visible')
        .click()
    })

    it('User Select Work Location', () => {
        cy.get(':nth-child(6) > .ant-checkbox-group > :nth-child(1) > .ant-checkbox > .ant-checkbox-input')
        .should('be.visible')
        .click()
    })

    it('User input My Current Salary', () => {
        cy.get('.tl-onboardingv2-field__input--currency > .ant-input-group-wrapper > #company-url > .ant-input')
        .should('be.visible')
        .type('10000000')
    })

    it('User input My Expected Salary', () => {
        cy.get('.tl-onboardingv2-field__multi-input > .ant-input-group-wrapper > #company-url > .ant-input')
        .should('be.visible')
        .type('12000000')

        cy.get(':nth-child(3) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input')
        .should('be.visible')
        .click()
    })
    it('User select Top Skill In Your Position', () => {

        cy.get('.tl-select-recommendation__container > :nth-child(1)')
        .should('be.visible')
        .click()

        cy.get('.tl-select-recommendation__container > :nth-child(2)')
        .should('be.visible')
        .click()

        cy.get('.tl-select-recommendation__container > :nth-child(3)')
        .should('be.visible')
        .click()

        cy.get(':nth-child(1) > .tl-select-recommendation__icon > .img-fluid')
        .should('be.visible')
        .click()

        cy.get('.tl-select-recommendation__button')
        .should('be.visible')
        .click()
    })
    
    it('User click Submit button', () => {
        cy.get('.btn')
        .should('be.visible')
        .click()
    })
})