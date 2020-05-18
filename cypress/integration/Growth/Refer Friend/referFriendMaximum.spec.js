//reach maximum limit to invite talent
describe('Login Success',()=>{
    
    it('navigate to the url',()=>{
        cy.visit('https://stg.ekrut.com')
    })

    it('click login button',()=>{
        cy.get('.eds-header__right > .ant-btn').eq(1).click()
    })
    it('Pop-up Login appear',()=>{
        cy.get('.content__header--is-left >.ant-typography').contains('Login to Your Account')
    })

    it('input valid user email',()=>{
        cy.get(':nth-child(1) > .ant-input')
        .should('be.visible')
        .type('firadevianas@gmail.com').should('have.value','firadevianas@gmail.com')
    })

    it('input valid password',()=>{
        cy.get('.ant-input-password > .ant-input')
        .should('be.visible')
        .type('ekrut123')
    })

    it('Click Submit form login',()=>{
        cy.get('form').submit()
    })
    it('User Checks URL', () => {
        cy.wait(1000)
        cy.url()
        .should('eq','https://stg.ekrut.com/talent/interviews')
    })

})
describe('Refer friend more than 5 times in one day',()=>{
    it('click menu refer',()=>{
        cy.get('.ant-menu-item').eq(2).click()
        cy.url().should('eq','https://stg.ekrut.com/talent/refer')
    })
    it('scroll to form refer friend',()=>{
        cy.scrollTo('center')
    })
    it('fill existing friend name',()=>{
        cy.get('.tl-refer-invitation__form > .form-group').eq(0).type(name)
    })
    it('fill existing friend email',()=>{
        cy.get('.tl-refer-invitation__form > .form-group').eq(1).type(email)
    })
    it('fill existing friend phone number',()=>{
        cy.get('.tl-refer-invitation__form > .form-group').eq(2).type(randomId)
    })
    it('click button sumbit form refer',()=>{
        cy.get('.text-left > .btn').click()
    })
    it('Appear toast failed',()=>{
        cy.get('.c-toast__text > .c-toast__text-title').should('have.text','FAILED')
        cy.get('.c-toast__text > .c-toast__text-body').should('Sorry. You have already reached maximum limit to invite a friend. You can invite your friend again tomorrow')
    })
})

const id = () => Cypress._.random(0, 1e6)
const randomId = id()
const email = `refer${randomId}` + '@testrefer.com'
const randomLastname = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 4);
const name = 'refer ' + randomLastname