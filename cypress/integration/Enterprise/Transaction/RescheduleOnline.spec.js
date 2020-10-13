describe('User Set Reschedule Interview Online', () => {
    it('User Visits Ekrut Platform', () => {
    cy.visit('http://devel.ekrut.com/login')
    })

    it('User Inputs Email',() => {
        cy.wait(1000)
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
    })

    it('User Clicks Role Menu', () => {
        cy.wait(3000)
        cy.get('.ant-menu > :nth-child(4)')
        .should('be.visible')
        .click()
    })

    it('User select roles', () => {
        cy.get('[href="/employer/roles/9810"] > .emp-myrole-v2__card__container')
        .scrollIntoView()
        .click()
    })

    it('User click Tab Process', () => {
        cy.wait(4000)
        cy.get('.emp-tab__item-process')
        .click()
    })

    it('User Select Talent and click Action button', () => {
        cy.get(':nth-child(2) > .emp-role-talent__footer > .ant-row-space-between > .emp-role-talent__list-button > .ant-row > .w-sm-100 > .sc-kEYyzF > .btn')
        .click()
    })

    it('User click Reschedule', () => {
        cy.get('.emp-cta-7')
        .click()
        .wait(4000)
    })

    it('User select Interview Schedule', () => {
      //User click datefield
      cy.get(':nth-child(2) > .c-input-group-datepicker > .c-input-group-datepicker__cont > .rdt > .form-control').click()
      //User select schedule date
      cy.get(':nth-child(2) > .c-input-group-datepicker > .c-input-group-datepicker__cont > .rdt > .rdtPicker > .rdtDays > table > tbody > :nth-child(2) > [data-value="10"]').click()
     
       //user click time field
        cy.get(':nth-child(2) > .c-input-group-time > .form-group > .css-1pcexqc-container > .css-1fr6j5e-control > .css-1hwfws3').click()
        //user select schedule time
        cy.get('#react-select-7-option-4').click()
    })

    it('User select Interview Schedule 1', () => {
        //User click datefield
        cy.get(':nth-child(3) > .c-input-group-datepicker > .c-input-group-datepicker__cont > .rdt > .form-control')
        .click()
        
        //User select schedule date
        cy.get(':nth-child(3) > .c-input-group-datepicker > .c-input-group-datepicker__cont > .rdt > .rdtPicker > .rdtDays > table > tbody > :nth-child(2) > [data-value="10"]')
        .click()

        //user click time field
        cy.get(':nth-child(3) > .c-input-group-time > .form-group > .css-1pcexqc-container > .css-1fr6j5e-control > .css-1hwfws3')
        .click()
        //user select schedule time
        cy.get('#react-select-8-option-2').click()
    })

    it('User input attach link', () => {
        cy.get(':nth-child(9) > .ant-input').click()
        .should('be.visible')
        .type('http://ekrut.com/')
    })

    it('user input Important Notes',() => {
        cy.get(':nth-child(10) > .ant-input')
        .should('be.visible')
        .type('Phone Interview')
    })

    it('Input User',() => {
        cy.get(':nth-child(11) > .ant-input')
        .should('be.visible')
        .type('Automation Vira')
    })

    it('click YES button', () => {
        cy.get('.ml-4').click()
        
    })
    it('After success, role detail screen will be displayed', () => {
        cy.wait(1000)
        cy.url()
        .should('eq','http://devel.ekrut.com/employer/roles/8648')
    })
    
})