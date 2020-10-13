describe('Find Talent Search', () => {
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

    // it('User Clicks Start Tour on Popup Product Tour', () => {
    //     cy.get('.ant-modal-footer > .jEuBAe')
    //     .should('be.visible')
    //     .click()
    // })

    it('User Clicks Skip For Now on Popup Product Tour', () => {
        cy.wait(1000)
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

    it('User Input Position', () => {
        cy.get('.joyride-findtalent-1 > .eds-input-group > .css-1pcexqc-container > .css-bg1rzq-control')
        .click()
        .type('Data - Engineer')
        .wait(1000)

        cy.get('#react-select-2-option-0')
        .click()
    })

    it('User Input Skill', () => {
        cy.get('.ant-row > .eds-input-group > .css-1pcexqc-container > .css-bg1rzq-control')
        .click()
        .type('Hadoop')
        .wait(1000)

        cy.get('#react-select-3-option-0')
        .click()
    })

    it('User Input Skill using Recommended Skills', () => {
        cy.get('.ant-col-xs-order-3 > :nth-child(3)')
        .click()

        cy.get('#react-select-3-option-0')
        .click()
    })

    it('User click Find Talent button', () => {
        cy.get('.ant-btn')
        .click()
        .wait(2000)
    })

    
})
