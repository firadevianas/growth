describe('Find Talent List - Active Roles', () => {
    it('User Visits Ekrut Platform', () => {
    cy.visit('http://devel.ekrut.com/login')
    })

    it('User Inputs Email',() => {
        cy.wait(1000)
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
    
    it('User Clicks Skip For Now on Popup Product Tour', () => {
        cy.wait(3000)
        cy.get('.ant-modal-footer > .drTcoC')
        .should('be.visible')
        .click()
    })
    
    it('User Clicks Find Talent Menu', () => {
        cy.wait(2000)
        cy.get('.ant-menu > :nth-child(6)')
        .should('be.visible')
        .click()
    })
    it('User Clicks Active Roles', () => {
        cy.get(':nth-child(1) > .sc-ckVGcZ')
        .click()
    })
    it('User select the Active roles', () => {
        cy.get(':nth-child(3) > .ant-col > .djtHnC')
        .click()
    })
})