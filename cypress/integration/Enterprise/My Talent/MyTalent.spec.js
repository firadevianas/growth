describe('My Talent', () => {
    beforeEach(() => {
        // run these tests as if in a desktop
        // browser with a 720p monitor
        cy.viewport(1100, 720)
      })

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
        
        cy.wait(1000)
        cy.get('.ant-modal-footer > .drTcoC')
        .should('be.visible')
        .click()
    })
    
    it('User Clicks My Talent Menu', () => {
        cy.wait(2000)
        cy.get('.ant-menu > :nth-child(8)')
        .should('be.visible')
        .click()
    })

    //Add to Position
    it('User Clicks Add to Position button', () => {
        cy.get(':nth-child(1) > .ant-card > .ant-card-body > .mt-1 > .ant-btn')
        .click()
    })
    it('User select Position', () => {
        cy.get('.emp-modal-position-body > :nth-child(1) > :nth-child(2)')
        .click()
    })
    it('Success Add to position, page will be direct to Roles screen', () => {
        cy.wait(2000)
        cy.url()
        .should('eq','http://devel.ekrut.com/employer/roles')
    })
})