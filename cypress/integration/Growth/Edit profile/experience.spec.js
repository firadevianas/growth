describe('experience',()=>{
    it('login',()=>{
        cy.login({email:'poohtiga@gmail.com',pass:'ekrut123'})
    })
    it('click icon pencil to change profile picture',()=>{
        cy.wait(100)
        cy.get('button[type=button]').eq(0).click()
        cy.url().should('eq','https://stg.ekrut.com/talent/profile')
        cy.get('.d-flex > .h2').should('have.text','Personal Information')
    })
})
describe('edit experience',()=>{
    it('click on experience',()=>{
        cy.get('ul > li ').contains('Experiences').click()
        cy.url().should('eq','https://stg.ekrut.com/talent/profile/experiences')
    })
    it('Add work location',()=>{
        cy.get('.w-100 > input[type=text]').click()
          .type('Jakarta')
    })
    it('Add description',()=>{
        cy.get('textarea[name="experiences[0].description"]').click()
          .type('Working as data to do blablablabla')
    })
})
describe('add new experience',()=>{
    it('click button add',()=>{
        cy.get('.addmore > button[type=button]').click()
    })
    it('verify form add new experience is visible',()=>{
        cy.get('.c-react-select__input').should('be.visible')
        cy.get('.c-react-select__input').should('be.visible')
        cy.get('.c-react-select__input').should('be.visible')
        cy.get('.c-react-select__input').should('be.visible')
        cy.get('.c-react-select__input').should('be.visible')
        cy.get('.rdt > input[type=text]').eq(2).should('be.visible')
        cy.get('.rdt > input[type=text]').eq(3).should('be.visible')
        cy.get('.w-100 > input[type=text]').eq(1).should('be.visible')
        cy.get('textarea[name="experiences[1].description"]').click()
        cy.get('.c-button--remove').should('be.visible')
    })
    it('input other experience company name',()=>{
        cy.get('input[id="react-select-4-input"]').click().type('terra')
        cy.get('div[id="react-select-4-option-1"]').click()
    })
    it('input business field',()=>{
        cy.get('input[id="react-select-5-input"]').click().type('cunsulting')
        cy.get('div[id="react-select-5-option-12"]').click()
        cy.get('input[id="react-select-5-input"]').click().type('enterprise')
        cy.get('div[id="react-select-5-option-12"]').click()
    })
    it('input position level',()=>{
        cy.get('input[id="react-select-6-input"]').click()
        cy.get('div[id="react-select-6-option-1"]').click()
    })
    it('input position name',()=>{
        cy.get('input[id="react-select-7-input"]').click().type('business')
        cy.get('div[id="react-select-5-option-2]').click()
    })
    it('input position function',()=>{
        cy.get('input[id="react-select-8-input"]').click().type('business')
        cy.get('div[id="react-select-7-option-3"]').click()
    })
    it('input working duration start',()=>{
        cy.get('input[placeholder="Month/year"]').eq(2).click()
        cy.get('.rdtPrev').click()
        cy.get('.rdtPrev').click()
        cy.get('td[data-value="2"]').click()
    })
    it('input working duration start',()=>{
        cy.get('input[placeholder="Month/year"]').eq(2).click()
        cy.get('.rdtPrev').click()
        cy.get('.rdtPrev').click()
        cy.get('td[data-value="2"]').click()
    })
    it('Click Save button',()=>{
        cy.get('button[type=submit]').click()
        cy.wait(1000)
        cy.get('.c-toast__text').should('be.visible')
          .get('.c-toast__text-title').should('have.text','SUCCESS')
          .get('.c-toast__text-body').should('have.text','Your profile has been successfully updated')
    })
})