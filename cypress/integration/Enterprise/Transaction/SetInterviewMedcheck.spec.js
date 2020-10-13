describe('User Set Interview Medical Checkup', () => {
    it('User Visit Ekrut Platform', () => {
    cy.visit('http://devel.ekrut.com/login')
    })

    it('User Inputs Email',() => {
        cy.wait(10000)
        cy.get(':nth-child(1) > .ant-input')
        .should('be.visible')
        .type('eka@xurya.com')
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
        .wait(11000)
    })
    it('User Clicks Role Menu', () => {
        cy.get('.ant-menu > :nth-child(4)')
        .should('be.visible')
        .click()
    })

    it('User select roles', () => {
        cy.get('[href="/employer/roles/6156"] > .emp-myrole-v2__card__container')
        .scrollIntoView()
        .click()
    })
    it('User click Tab FCV', () => {
        cy.get('.emp-tab__item-fcv')
        .click()
        .wait(2000)
    })

    it('User Select Talent and click Action button', () => {
        cy.get(':nth-child(2) > .emp-role-talent__footer > .ant-row-space-between > .emp-role-talent__list-button > .ant-row > .w-sm-100 > .sc-dxgOiQ > .btn')
        .click()
    })

    it('User click Set Interview', () => {
        cy.get('.emp-cta-6')
        .click()
    })

    it('User Click Invitation Type', () => {
        cy.get('.col-sm-6 > .form-group > .css-1pcexqc-container > .css-1fr6j5e-control > .css-1hwfws3')
        .click()
    })

    it('User select Medical Checkup Invitation', () => {
        cy.get('#react-select-6-option-7')
        .click()
    })

    
    it('User select Interview Schedule', () => {
        //User click datefield
        cy.get(':nth-child(2) > .c-input-group-datepicker > .c-input-group-datepicker__cont > .rdt > .form-control')                                                      
        
        .click()
        //User select schedule date
        cy.get(':nth-child(2) > .c-input-group-datepicker > .c-input-group-datepicker__cont > .rdt > .rdtPicker > .rdtDays > table > tbody > :nth-child(3) > [data-value="18"]')
        .click()
        //user click time field
        cy.get(':nth-child(2) > .c-input-group-time > .form-group > .css-1pcexqc-container > .css-1fr6j5e-control > .css-1hwfws3').click()
        //user select schedule time
        cy.get('#react-select-7-option-5').click()
    })

    
    it('User select Interview Schedule 1', () => {
        //User click datefield
        cy.get(':nth-child(3) > .c-input-group-datepicker > .c-input-group-datepicker__cont > .rdt > .form-control').click()
        //User select schedule date
        cy.get(':nth-child(3) > .c-input-group-datepicker > .c-input-group-datepicker__cont > .rdt > .rdtPicker > .rdtDays > table > tbody > :nth-child(3) > [data-value="19"]')
        .scrollIntoView()
        .click()
        //user click time field
        cy.get(':nth-child(3) > .c-input-group-time > .form-group > .css-1pcexqc-container > .css-1fr6j5e-control > .css-1hwfws3').click()
        //user select schedule time
        cy.get('#react-select-8-option-0').click()
    })

    it('User Select Location', () => {
        cy.get(':nth-child(1) > .ant-card-body')
        .click()
    })
    //Add new location
    it('User Input New Location', () => {
        cy.get('.ant-row-end > .ant-btn').click()
        //Input Venue name
        cy.get(':nth-child(1) > .eds-input-group > .ant-input')
        .should('be.visible')
        .type('automation vr')
        
        //input address
        cy.get(':nth-child(2) > :nth-child(2) > .eds-input-group > .ant-input')
        .should('be.visible')
        .type('automation address')
        //checklist use as default address
        cy.get('.ant-checkbox-group-item > :nth-child(2)').click()
        
        //user click save button
        cy.get(':nth-child(2) > .ant-col-24 > .ant-row > :nth-child(2) > .ant-btn').click()
         // user click cancel button
        // cy.get(':nth-child(2) > .ant-col-24 > .ant-row > :nth-child(1) > .ant-btn').click()
    })

    it('User Input Important Notes', () => {
        cy.get(':nth-child(10) > .ant-input')
        .type('Automation Medcheck')
    })
    
    it('Click Yes Button', () => {
        cy.get('.ml-4').click()
    })

    // it('Click No Button', () => {
    //     cy.get('.c-button--ghost')
    // })

})