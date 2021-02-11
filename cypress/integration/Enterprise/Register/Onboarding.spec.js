describe('User do Onboarding', () => {

    it('login',()=>{
        cy.visit('http://devel.ekrut.com/employers')
        cy.login({email:'autougfyh@ugfyh.com',pass:'ekrut123'})
    })

    //ONBOARDING STEP 1
    it('Input Company Name', () => {
        cy.get(':nth-child(1) > .tl-onboardingv2-field__input > :nth-child(1) > .css-1pcexqc-container > .css-1fr6j5e-control > .css-1hwfws3')
        .should('be.visible')
        .type('CORVIRA')

        cy.get('#react-select-2-option-0')
        .click()
    })

    it('Input Position', () => {
        cy.get(':nth-child(2) > .tl-onboardingv2-field__input > :nth-child(1) > .css-1pcexqc-container > .css-1fr6j5e-control > .css-1hwfws3')
        .should('be.visible')
        .type('Human Resources Consultant')

        cy.get('#react-select-3-option-0')
        .click()
    })

    

    it('User Input Position Function', () => {
        cy.get(':nth-child(3) > .tl-onboardingv2-field__input > :nth-child(1) > .css-1pcexqc-container > .css-1fr6j5e-control > .css-1hwfws3')
        .should('be.visible')
        .type('Human Resources - Consulting')

        cy.get('#react-select-2-option-0')
        .click()
    })
    it('User Input Time of Employment', () => {
        cy.get(':nth-child(1) > .ant-picker')
        .should('be.visible')
        .type('January 2020')

        cy.get('.ant-checkbox-wrapper')
        .click()
    })
    it('User select Level', () => {
        cy.get(':nth-child(5) > .tl-onboardingv2-field__input > :nth-child(1) > .css-1pcexqc-container > .css-1fr6j5e-control > .css-1hwfws3')
        .should('be.visible')
        .click()

        cy.get('#react-select-3-option-0')
        .click()
    })

    it('User select Bussiness field', () => {
        cy.get(':nth-child(6) > .tl-onboardingv2-field__input > :nth-child(1) > .css-1pcexqc-container > .css-1fr6j5e-control > .css-1hwfws3')
        .should('be.visible')
        .click()

        cy.get('#react-select-4-option-0')
        .click()
    })

    it('User click Submit button', () => {
        cy.get('.btn')
        .should('be.visible')
        .click()
    })

//ONBOARDING STEP 2
    it('User Select Job Category', () => {
        cy.get(':nth-child(9) > :nth-child(2)')
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
})