describe('User Set Interview', () => {
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

    it('User click Tab FCV', () => {
        cy.get('.emp-tab__item-fcv')
        .click()
    })

    it('User Select Talent and click Action button', () => {
        cy.get(':nth-child(2) > .emp-role-talent__footer > .ant-row-space-between > .ant-col-sm-14 > .ant-row > :nth-child(4) > .sc-kGXeez > .btn')
        .click()
    })

    it('User click Set Interview', () => {
        cy.get('.emp-cta-6')
        .click()
    })

    it('User Select Invitation Type', () => {
        cy.get('.col-sm-6 > .form-group > .css-1pcexqc-container > .css-1fr6j5e-control > .css-1hwfws3')
        .click()
    })
    it('User select Phone Call Interview', () => {
        cy.get('#react-select-6-option-0')
        .click()
    })

    it('User select Interview Schedule', () => {
        cy.get(':nth-child(2) > .c-input-group-datepicker > .c-input-group-datepicker__cont > .rdt > .form-control').type('31-05-2020')
        

        // cy.get(':nth-child(2) > .c-input-group-datepicker > .c-input-group-datepicker__cont > .rdt > .rdtPicker > .rdtDays > table > tbody > :nth-child(6) > [data-value="31"]')
        // .click()

        // cy.get(':nth-child(2) > .c-input-group-time > .form-group > .css-1pcexqc-container > .css-1fr6j5e-control')
        // .click()
    })

    // it('User select Interview Schedule 1', () => {
    //     cy.get(':nth-child(3) > .c-input-group-datepicker > .c-input-group-datepicker__cont > .rdt > .form-control')
    //     .click()

    //     cy.get(':nth-child(3) > .c-input-group-time > .form-group > .css-1pcexqc-container > .css-1fr6j5e-control > .css-1hwfws3')
    //     .click()   
    // })
})