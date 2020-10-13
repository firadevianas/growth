describe('Chat menu', () => {
    beforeEach(() => {
        // run these tests as if in a desktop
        // browser with a 720p monitor
        cy.viewport(1300, 720)
      })
    it('User Visits Ekrut Platform', () => {
    cy.visit('http://devel.ekrut.com/login')
    })

    it('User Inputs Email',() => {
        cy.wait(2000)
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
    
    it('User Clicks Chat Menu', () => {
        cy.wait(2000)
        cy.get(':nth-child(10) > .nav-link')
        .should('be.visible')
        .click()
    })

    it('User Input Text on Chat Tab', () => {
    cy.get('div > iframe')
    .type('test')
    .type('{enter}')
    })
})