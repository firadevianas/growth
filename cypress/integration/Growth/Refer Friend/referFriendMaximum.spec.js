//reach maximum limit to invite talent
describe('Refer friend more than 5 times in one day',()=>{
    it('login',()=>{
        cy.login({email:'rabbitempat@gmail.com',pass:'ekrut123'})
    })
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