describe('User open Review Talent in Dashboard screen', () => {
    it('User Visits Ekrut Platform', () => {
    cy.visit('http://devel.ekrut.com/login')
    })

    it('User Inputs Email',() => {
        cy.get(':nth-child(1) > .ant-input')
        .should('be.visible')
        .type('dono@ekrut.com')
    })

    it('User Inputs Password', () => {
        cy.get('.ant-input-password > .ant-input')
        .should('be.visible')
        .type('kazuchan')
    })

    it('User Clicks Login Button', () => {
        cy.get('.content__body > .ant-btn-primary')
        .should('be.visible')
        .click()
    })

    it('User Checks URL', () => {
        cy.wait(10000)
        cy.url()
        .should('eq','http://devel.ekrut.com/employer/dashboard')
    })

    it('User verify text Review Talents', () => {
        cy.get('.order-3 > .sc-bdVaJa > .sc-bwzfXH > .sc-htpNat')
        cy.contains('Review Talents')
    })

    
    it('User click Review Talents', () => {
        cy.get(':nth-child(1) > .ant-col-24 > .ant-btn')
        .click()
    })

    it('Popup Review Talents will be displayed',() => {
        cy.get('.f-18')
        cy.contains('Review Talents')
    })
    

    it('User click Yes Button', () => {
        cy.get('.f-18')
        cy.contains('Review Talents')

        cy.get('.mr-4 > label > .c-checkmark')
        .should('be.visible')
        .click()
    })

    it('User Input text answer how did interview go', () => {
        cy.get('.form-control')
        .should('be.visible')
        .type(randomtext)
    })

    it('User click Cancel button on popup',() => {
        cy.get('.c-button--ghost')
        .should('be.visible')
        .click()
    })

    it('User click Next button on popup',() => {
        cy.get(':nth-child(1) > .ant-col-24 > .ant-btn')
        .click()

        cy.get('.mr-4 > label > .c-checkmark')
        .should('be.visible')
        .click()

        cy.get('.form-control')
        .should('be.visible')
        .type(randomtext)

        cy.get('.emp-modal-actions__cta > :nth-child(2)')
        .should('be.visible')
        .click()
    })

    it('User verify rating on popup', () => {
        cy.get('.emp-review__rating > :nth-child(4)')
        .should('be.visible')
        .click()
    })

    it('User checklist rating value', () => {
        cy.get(':nth-child(3) > .c-checkbox-array__label > .c-checkbox-array__checkmark')
        .should('be.visible')
        .click()
    })
    
    // it('User click YES on Will you proceed the talent to the next stage', () => {
    //     cy.get(':nth-child(2) > .form-group > .mr-4 > label > .c-checkmark')
    //     .should('be.visible')
    //     .click()
    // })

    //Flow if User choose NO
    it('User click NO on Will you proceed the talent to the next stage', () => {    
        cy.get(':nth-child(2) > .form-group > :nth-child(2) > label > .c-checkmark')
        .should('be.visible')
        .click()
    })
    
    it('User input reason', () => {    
        cy.get(':nth-child(15) > .form-control')
        .scrollIntoView()
        .click()
        .type(randomtext)
    })
    
    it('User click SUBMIT button', () => {
        cy.get('.ml-4')
        .should('be.visible')
        .scrollIntoView()
        .click()
        
    })
    


})

const randomtext = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
const fullname = 'Auto ' + randomtext
const email = 'auto' +randomtext + '@' + randomtext + '.com'