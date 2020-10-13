describe('User Creates New Role', () => {
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

    it('User Checks URL', () => {
        cy.wait(10000)
        cy.url()
        .should('eq','http://devel.ekrut.com/employer/dashboard')
    })

    it('User Clicks Role Menu', () => {
        cy.get('.ant-menu > :nth-child(4)')
        .should('be.visible')
        .click()
    })

    it('User select roles', () => {
        cy.get('[href="/employer/roles/7556"] > .emp-myrole-v2__card__container > .emp-myrole-v2__card__title > b')
        .scrollIntoView()
        .click()
    })

    it('User select talent card', () => {
        cy.get(':nth-child(2) > .emp-role-talent__footer > .ant-row-space-between > .ant-col-sm-14 > .ant-row > :nth-child(3) > .sc-kGXeez > .btn')
        .scrollIntoView()
        .click()
    })

    it('User click Unloack BCV', () => {
        cy.get('.emp-cta-3')
        .click()
    })

    it('User click YES button on Popup Confirmation Unlock BCV', () => {
        cy.get('.ml-4')
        .click()
    })
    
    it('User Checks URL', () => {
        cy.wait(1000)
        cy.url()
        .should('http://devel.ekrut.com/employer/roles/')
    })
})