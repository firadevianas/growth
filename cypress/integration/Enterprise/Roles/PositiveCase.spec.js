describe('User Creates New Role', () => {
    it('User Visits Ekrut Staging Platform', () => {
    cy.visit('https://stg.ekrut.com/login')
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
        .should('eq','https://stg.ekrut.com/employer/dashboard')
    })

    it('User Clicks Role Menu', () => {
        cy.get('.ant-menu > :nth-child(4)')
        .should('be.visible')
        .click()
    })

    it('User Clicks +Create New Role', () => {
        cy.get('.text-sm-left > .btn')
        .should('be.visible')
        .click()    
    })

    it('User Checks URL', () => {
        cy.wait(4000)
        cy.url()
        .should('eq','https://stg.ekrut.com/employer/roles/new')
    })

    it('User Inputs Role Name', () => {
        cy.get(':nth-child(1) > .col-md-8 > .row > :nth-child(2) > .form-group > .css-1pcexqc-container > .css-1fr6j5e-control > .css-1hwfws3')
        .should('be.visible')
        .contains('Role Name')
        .type('Test Automation')
    })
    it('User Creates New Role', () => {
        cy.get('#react-select-2-option-0')
        .should('be.visible')
        .click()
    })


    it('User Selects Category', () => {
        cy.get(':nth-child(1) > .col-md-8 > .row > :nth-child(3) > .form-group > .css-1pcexqc-container > .css-1fr6j5e-control > .css-1hwfws3')
        .should('be.visible')
        .contains('Select Category')
        .click()

        cy.get('#react-select-4-option-3')
        // .scrollIntoView()
        .click()
    })

    it('User Selects Function', () => {
        cy.get(':nth-child(1) > .col-md-8 > .row > :nth-child(4) > .form-group > .css-1pcexqc-container > .css-1fr6j5e-control > .css-1hwfws3')
        .should('be.visible')
        .contains('Select Function')
        .click()
        cy.get('#react-select-5-option-0')
        // cy.get('select').select('Computer')
        .scrollIntoView()
        .click()
    })

    it('User Selects Level', () => {
        cy.get(':nth-child(5) > .form-group > .css-1pcexqc-container > .css-1fr6j5e-control > .css-1hwfws3')
        .should('be.visible')
        .contains('Select Level')
        .click()

        cy.get('#react-select-6-option-0') // Select Level Staff
        .scrollIntoView()
        .should('be.visible')
        .click()
    })

    it('User Selects Minimum Experience', () => {
        cy.get(':nth-child(6) > .form-group > .css-1pcexqc-container > .css-1fr6j5e-control > .css-1hwfws3')
        .should('be.visible')
        .click()

        cy.get('#react-select-7-option-2')
        .scrollIntoView()
        .should('be.visible')
        .click()
    })

    it('User Inputs Skills 1', () => {
        cy.get(':nth-child(8) > .form-group > .css-1pcexqc-container > .css-1fr6j5e-control > .css-1hwfws3')
        .scrollIntoView()
        .type('Mongo')

        cy.get('#react-select-8-option-0')
        .scrollIntoView()
        .click()
    })

    it('User Inputs Skills 2', () => {
        cy.get('.css-9favbc-control > .css-1hwfws3')
        .scrollIntoView()
        .type('sql')

        cy.get('#react-select-8-option-0')
        .scrollIntoView()
        .click()
    })

    it('User Inputs Skills 3', () => {
        cy.get('.css-9favbc-control > .css-1hwfws3')
        .scrollIntoView()
        .type('Product')

        cy.get('#react-select-8-option-0')
        .scrollIntoView()
        .click()
    })

    it('User Inputs Skills 4', () => {
        cy.get('.css-9favbc-control > .css-1hwfws3')
        .scrollIntoView()
        .type('Ruby')

        cy.get('#react-select-8-option-0')
        .scrollIntoView()
        .click()
    })

    it('User Inputs Skills 5', () => {
        cy.get('.css-9favbc-control > .css-1hwfws3')
        .scrollIntoView()
        .type('Postgre')

        cy.get('#react-select-8-option-0')
        .scrollIntoView()
        .click()
    })

    // Budget Type Nett
    it('User Checks Budget Type Nett', () => {
        cy.get(':nth-child(2) > .form-group > .mr-4 > label > .c-checkmark')
        .should('be.visible')
        .click()
    })

    // Show Budget Yes
    it('User Checks Show Budget', () => {
        cy.get(':nth-child(3) > .form-group > :nth-child(2) > label > .c-checkmark')
        .should('be.visible')
        .click()
    })

    it('User Inputs Minimum Budget', () => {
        cy.get(':nth-child(1) > .form-group > .input-group > .form-control')
        .scrollIntoView()
        .should('be.visible')
        .type('9000000')
    })

    it('User Inputs Maximum Budget', () => {
        cy.get(':nth-child(2) > .form-group > .input-group > .form-control')
        .should('be.visible')
        .type('15000000')
    })

    it('User Selects Location', () => {
        cy.get(':nth-child(3) > .col-md-8 > :nth-child(1) > :nth-child(2) > .form-group > .css-1pcexqc-container > .css-1fr6j5e-control > .css-1hwfws3')
        .scrollIntoView()
        .should('be.visible')
        .click()

        // cy.xpath("//div[contains(text(),'Anywhere in Jakarta')]")
        cy.get('#react-select-10-option-0')
        .scrollIntoView()
        .should('be.visible')
        .click()
    })

    it('User Inputs Role Description', () => {
        cy.get(':nth-child(2) > .c-ckeditor > .ck-editor > .ck-editor__main > .ck')
        .scrollIntoView()
        .should('be.visible')
        .type('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium.')
    })

    it('User Inputs Requirement', () => {
        cy.get(':nth-child(3) > .c-ckeditor > .ck-editor > .ck-editor__main > .ck-blurred')
        .scrollIntoView()
        .should('be.visible')
        .type('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium.')
    })

    it('User Inputs Preferred Industries', () => {
        cy.get(':nth-child(4) > .col-md-8 > .row > :nth-child(4) > .form-group > .css-1pcexqc-container > .css-1fr6j5e-control > .css-1hwfws3')
        .scrollIntoView()
        .should('be.visible')
        .click()

        cy.get('#react-select-14-option-1')
        .scrollIntoView()
        .should('be.visible')
        .click()
    })

    it('User click Button Save', () => {
        cy.get('.c-button')
        .click()
    })
})

const randomtext = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
const fullname = 'Auto ' + randomtext
const email = 'auto' +randomtext + '@' + randomtext + '.com'