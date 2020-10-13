describe('User in Dashboard screen', () => {
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

    it('User verify text Upcoming Schedule', () => {
        cy.get('.order-2 > .sc-bdVaJa > .sc-bwzfXH > .sc-htpNat')
        cy.contains('Upcoming Schedule')
    })

    
    it('User verify text New Match Talents', () => {
        cy.get('.order-1 > :nth-child(1) > .sc-bwzfXH > .sc-htpNat')
        cy.contains('New Match Talents')
    })

    it('User verify text FCV Unlocked Talents', () => {
        cy.get(':nth-child(3) > .sc-bwzfXH > .sc-htpNat')
        cy.contains('FCV Unlocked Talents')
    })

    it('User verify text Review Talents', () => {
        cy.get('.order-3 > .sc-bdVaJa > .sc-bwzfXH > .sc-htpNat')
        cy.contains('Review Talents')
    })
})

const randomtext = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
const fullname = 'Auto ' + randomtext
const email = 'auto' +randomtext + '@' + randomtext + '.com'