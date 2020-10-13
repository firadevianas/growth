describe('Find Talent List', () => {
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

    it('User click Find Talent button', () => {
        cy.get('.ant-btn')
        .click()
        .wait(2000)
    })
    
    it('User verify list of talent appearance',() => {
        cy.get('.ant-col-sm-16 > .djtHnC')
        cy.contains('recommended talents found')
    })
    
    it('User select talent and click Bookmarked icon', () => {
        cy.get(':nth-child(1) > .ant-card > .ant-card-body > .talent-card__bookmark > .card-talent-square__bookmarked > #Path_3')
        .click()
    })
    
    // it('Success bookmarked will be displayed',() => {
    //     cy.get('.c-toast__text-body')
    //     cy.contains('Employer bookmarked assigned')
    // })
    
    it('User click list of talent to view profile',() => {
        cy.get(':nth-child(1) > .ant-card > .ant-card-body > a > .talent-card__body')
        .click()
    })

    // it('User click Next Page',() => {
    //     cy.get('.ant-spin-container > .text-center > .ant-pagination > .ant-pagination-item-2')    
    //     .click()
    // })
})
