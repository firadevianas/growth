
describe('Refer friend',()=>{
    it('login',()=>{
        cy.login({email:'staging2@gmail.com',pass:'ekrut123'})
    })
    it('click menu refer',()=>{
        cy.get('.ant-menu-item').eq(2).click()
        cy.url().should('eq','https://stg.ekrut.com/talent/refer')
    })
    it('scroll to form refer friend',()=>{
        cy.scrollTo('center')
    })
    it('fill friend name',()=>{
        cy.get('.tl-refer-invitation__form > .form-group').eq(0).type(name)
    })
    it('fill friend email',()=>{
        cy.get('.tl-refer-invitation__form > .form-group').eq(1).type(email)
    })
    it('fill friend phone number',()=>{
        cy.get('.tl-refer-invitation__form > .form-group').eq(2).type(randomId)
    })
    it('click button sumbit form refer',()=>{
        cy.get('form').submit()
    })
    it('Appear toast success',()=>{
        cy.get('.c-toast__text > .c-toast__text-title').should('have.text','SUCCESS')
        cy.get('.c-toast__text > .c-toast__text-body').should('have.text','Invitation email send')
    })
    it('List Referrer friend appear in Tab Invited',()=>{
        cy.get('.c-tabs__header__label').contains('Invited').click()
        //cy.get('.tl-dashboard__pagination > .page-item').eq(6).click()
        cy.get('.c-tabs__content >.row >.col-12').contains(email).should('have.text',email)
    })
})
const id = () => Cypress._.random(0, 1e6)
const randomId = id()
const email = `refer${randomId}` + '@testrefer.com'
const randomLastname = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 4);
const name = 'refer ' + randomLastname