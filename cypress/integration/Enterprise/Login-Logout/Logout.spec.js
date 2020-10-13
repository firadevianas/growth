describe('User Logout', () => {
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

    it('User success Login and Dashboard screen will displayed', () =>{
        cy.wait(10000)
        cy.url()
        .should('eq','http://devel.ekrut.com/employer/dashboard')
    })


    it('User click arrow menu to Logout', () =>{
        cy.get('.eds-navheader-dropdown__button')
        .should('be.visible')
        .click()
        .wait(10000)
    })


    it('User Clicks Sign Out Button', () => {
        cy.get('[link="/logout"] > a')
        .wait(10000)
        .should('be.visible')
        .click()
        
    })
    
})