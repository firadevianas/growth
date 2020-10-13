describe('regis',()=>{
    it('navigate url',()=>{
        cy.visit('https://accounts.google.com/signup')
    })
    it('fill first name',()=>{
        cy.get('input[name="firstName"]').type('Fira')
    })
    it('fill last name',()=>{
        cy.get('input[name="lastName"]').type('testingfira')
    })
    it('username',()=>{
        cy.get('input[name="Username"]').type(email)
    })
    it('pass',()=>{
        cy.get('input[name="Passwd"]').type('ekrut123')
    })
    it('confirm pass',()=>{
        cy.get('input[name="ConfirmPasswd"]').type('ekrut123')
    })
    it('click next',()=>{
        cy.get('.RveJvd').click()
        cy.wait(200)
    })
})

describe('step2',()=>{
    it('fill phone num',()=>{
        cy.get('input[id="phoneNumberId"]').type('082829893839')
    })
    it('click next',()=>{
        cy.get('.VfPpkd-RLmnJb').eq(0).click()
    })
    it('month date',()=>{
        cy.get('.CuHakb').click()
        cy.get('.xxcVG').eq(3).click()
    })
    it('day',()=>{
        cy.get('input[name="day"]').type('11')
    })
    it('year',()=>{
        cy.get('input[name="year"]').type('1999')
    })
    it('gender',()=>{
        cy.get('class[id="gender"]').click()
        cy.get('.xxcVG').eq(3).click()
    })
    it('click button next',()=>{
        cy.get('.VfPpkd-vQzf8d').click()
    })
    it('click i agree',()=>{
        cy.findByText('I agree').click()
    })
})

const id = () => Cypress._.random(0, 1e6)
const randomId = id()
const email = `testing${randomId}` + 'testing'
const randomLastname = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 4);
const name = 'testing ' + randomLastname 