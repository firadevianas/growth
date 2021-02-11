describe('Login Success',()=>{
    
    it('navigate to the url',()=>{
        cy.visit('http://devel.ekrut.com')
    })

    it('click register button',()=>{
        cy.get('.eds-header__right > .ant-btn').eq(0).click()
    })
    it('Pop-up register appear',()=>{
        cy.get('.content__header--is-left >.ant-typography').contains('Register as Talent')
    })

    it('input valid talent name',()=>{
        cy.get('.content__body > .eds-input-group').eq(0)
        .should('be.visible')
        .type(name)
    })

    it('input valid email',()=>{
        cy.get('.content__body > .eds-input-group').eq(1)
        .should('be.visible')
        .type(email)
    })
    it('input valid password > 6 char',()=>{
        cy.get('.content__body > .eds-input-group').eq(2)
        .should('be.visible')
        .type('ekrut123')
    })
    it('input valid confirm password',()=>{
        cy.get('.content__body > .eds-input-group').eq(3)
        .should('be.visible')
        .type('ekrut123')
    })
    it('input valid phone number',()=>{
        cy.get('.content__body > .eds-input-group').eq(4)
        .should('be.visible')
        .type(phonenum)
    })
    it('input position category',()=>{
        cy.get('.css-1hwfws3').click()
        cy.get('.css-11unzgr > .css-fk865s-option').its('length').then(($lenght)=>{
            const randSelect = Cypress._.random(0, $lenght - 1);
            cy.get('.css-11unzgr > .css-fk865s-option').eq(randSelect).click()
        })
        // cy.get('input[id="react-select-2-input"]').click({force: true})
        // cy.get('.css-dpec0i-option').click()
    })
    it('Click button Register',()=>{
        cy.get('.content__body > .ant-btn').click()
    })
    it('agree to term and condition',()=>{
        cy.scrollTo('bottom')
        cy.get('input[type=checkbox]').check()
    })
    it('Click button Register',()=>{
        cy.get('.content__body > .ant-btn').click()
        cy.wait(500)
    })
    it('Modal Thankyou for register appear',()=>{
        cy.get('.gst-verify-email__title').should('have.text','Thank You for Registering!')
    })
    it('click button done on modal',()=>{
        cy.get('.container > .btn').click()
    })
})

const getIframeDocument = () => {
    return cy
    .get('iframe[title="Message view"]')
    .its('0.contentDocument')
}
const getIframeBody = () => {
   return getIframeDocument()
   .its('body').should('not.be.undefined')
   .then(cy.wrap)
}

describe('verify email mailtrap',()=>{
    it('visit mailtrap and login mailtrap',()=>{
        cy.visit('https://mailtrap.io/')
        cy.get('.signin_block > .button').eq(0).click()
        cy.get('input[id=user_email]').type('taufiq@ekrut.com')
        cy.get('input[type=password]').type('')
        cy.get('input[name=commit]').click()
        cy.get('.inbox_name').contains('dev').click()
        cy.get('.subject').contains('Welcome to EKRUT').eq(0).click()
        cy.wait(1000)
    })
    it('click verify account',()=>{
       getIframeBody().find('.main').contains('Verify my account').click()      
    })
})
const id = () => Cypress._.random(0, 1e6)
const randomId = id()
const email = `testing${randomId}` + '@testing.com'
const randomLastname = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 4);
const name = 'testing ' + randomLastname
const phonenum = `81${randomId}`