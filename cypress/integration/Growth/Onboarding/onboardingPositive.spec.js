//Onboarding Experience success
describe('Submit Onboarding experience success',()=>{
    it('login',()=>{
        cy.login({email:'testing664569@testing.com',pass:'ekrut123'})
        cy.wait(5000)
    })
    it('fill up company name',()=>{
        cy.wait(2000)
        cy.findByText('Type your company').click().type('ab')
        cy.get('.css-11unzgr > .css-yt9ioa-option').its('length').then(($lenght)=>{
            const randSelect = Cypress._.random(0, $lenght - 1);
            cy.get('.css-11unzgr > .css-yt9ioa-option').eq(randSelect).click()
        })
    })
    it('fill up position name',()=>{
        cy.findByText('Select your position').click().type('frontend')
        cy.get('.css-11unzgr > .css-yt9ioa-option').its('length').then(($lenght)=>{
            const randSelect = Cypress._.random(0, $lenght - 1);
            cy.get('.css-11unzgr > .css-yt9ioa-option').eq(randSelect).click()
        })
    })
    
    it('fill up position function',()=>{
        cy.findByText('Select your position function').click().type('frontend')
        cy.findByText('Software Engineering - Frontend Engineer / Developer').click()
    })
    it('fill start date',()=>{
        cy.get('.tl-onboardingv2-field__multi-input').eq(0).click()
    })
    it('click previous year btn',()=>{
        cy.get('.ant-picker-header-super-prev-btn').click()
    })
    it('choose month',()=>{
        cy.get('.ant-picker-cell-inner').eq(2).click()
    })
    it('clik checkbox present',()=>{
        cy.get('.ant-checkbox-input').click()
    })
    it('clik position level',()=>{
        cy.findByText('Select your position level').click()
    })
    it('select position level',()=>{
        cy.get('.css-11unzgr > .css-yt9ioa-option').its('length').then(($lenght)=>{
            const randSelect = Cypress._.random(0, $lenght - 1);
            cy.get('.css-11unzgr > .css-yt9ioa-option').eq(randSelect).click()
        })
    })
    it('click business fields',()=>{
        cy.findByText(`Select your company's business fields`).click().type('Ca')
        cy.get('.css-11unzgr > .css-yt9ioa-option').its('length').then(($lenght)=>{
            const randSelect = Cypress._.random(0, $lenght - 1);
            cy.get('.css-11unzgr > .css-yt9ioa-option').eq(randSelect).click()
        })
    })
    
})
context('Cypress.Screenshot', function () {
    it('cy.screenshot() - take a screenshot', () => {
      // https://on.cypress.io/screenshot
      cy.screenshot('onboarding1')
    })

    it('Cypress.Screenshot.defaults() - change default config of screenshots', function () {
      Cypress.Screenshot.defaults({
        blackout: ['.foo'],
        capture: 'viewport',
        clip: { x: 0, y: 0, width: 200, height: 200 },
        scale: false,
        disableTimersAndAnimations: true,
        screenshotOnRunFailure: true,
        beforeScreenshot () { },
        afterScreenshot () { },
      })
    })
  })
describe('Submit onboarding 1',()=>{
    it('Submit Form onboarding Experience',()=>{
        cy.get('form').submit()
    })
    it('User Checks URL', () => {
        cy.wait(3000)
        cy.url()
        .should('eq','https://devel.ekrut.com/talent/onboarding/2')
    })
})
//Onboarding Preference success submit
describe('Submit Onboarding preference success',()=>{
    it('Static Title Job category',()=>{
        cy.wait(1000)
        cy.get('.tl-onboardingv2-text--title').should('have.text','Tell us about your job preferences!')   
    })
    it('choose availability status',()=>{
        cy.get('.css-1hwfws3').eq(0).click()
        cy.get('.css-11unzgr > .css-yt9ioa-option').its('length').then(($lenght)=>{
            const randSelect = Cypress._.random(0, $lenght - 1);
            cy.get('.css-11unzgr > .css-yt9ioa-option').eq(randSelect).click()
        })
    })
    it('Choose Job Category',()=>{
        cy.get('.css-1hwfws3').eq(1).click()
        cy.get('.css-11unzgr > .css-yt9ioa-option').its('length').then(($lenght)=>{
            const randSelect = Cypress._.random(0, $lenght - 1);
            cy.get('.css-11unzgr > .css-yt9ioa-option').eq(randSelect).click()
        })
    })
    it('Choose position',()=>{
        cy.findByText('Type your position title').click()
        cy.get('.c-react-select__menu-list > .css-yt9ioa-option').its('length').then(($lenght)=>{
            const randSelect = Cypress._.random(0, $lenght - 1);
            cy.get('.c-react-select__menu-list > .css-yt9ioa-option').eq(randSelect).click()
        })
    })
    it('Click Business field',()=>{
        cy.findByText('Select your preferred business fields').click()
        cy.get('.css-11unzgr > .css-yt9ioa-option').its('length').then(($lenght)=>{
            const randSelect = Cypress._.random(0, $lenght - 1);
            cy.get('.css-11unzgr > .css-yt9ioa-option').eq(randSelect).click()
        })
    })
    it('Choose Job type',()=>{
        cy.get('.ant-checkbox-group').its('length').then(($lenght)=>{
            const randSelect = Cypress._.random(0, $lenght - 1);
            cy.get('.ant-checkbox-group').eq(randSelect).click()
        })
    })
    it('Choose Company Size',()=>{
        cy.get(':nth-child(7) > .ant-checkbox-group').its('length').then(($lenght)=>{
            const randSelect = Cypress._.random(0, $lenght - 1);
            cy.get(':nth-child(7) > .ant-checkbox-group').eq(randSelect).click()
        })
    })
    it('Choose Work Location',()=>{
        cy.findAllByText('Type your preferred location').click()
        cy.get('.eds-select__menu-list > .css-yt9ioa-option').its('length').then(($lenght)=>{
            const randSelect = Cypress._.random(0, $lenght - 1);
            cy.get('.eds-select__menu-list > .css-yt9ioa-option').eq(randSelect).click()
        })
    })
    it('input current Salary',()=>{
        cy.get('input[placeholder="Type your current salary"]').type('11000000')  
    })
    it('input expected Salary',()=>{
        cy.get('input[placeholder="Type your expected salary"]').type('16000000')
        cy.get('.tl-onboardingv2-checkbox__iscurrent').eq(1).click()  
    })
    it('Show Expected salary Alert',()=>{
        cy.get('.tl-modal-expected__title').should('have.text','Expected Salary Alert!')
        cy.get('.btn').click()
    })
    it('click nett checkbox',()=>{
        cy.get('.tl-onboardingv2-checkbox__iscurrent').eq(1).click()
    })
    it('click recommendation skill',()=>{
        cy.get('.tl-select-recommendation__button').eq(0).click()
          .get('.tl-select-recommendation__button').eq(1).click()
          .get('.tl-select-recommendation__button').eq(2).click()
          .get('.tl-select-recommendation__button').eq(0).click()
          .get('.tl-select-recommendation__button').eq(0).click()
    })
    it('input skill',()=>{
        
        cy.get(':nth-child(3) > .c-react-select-container > .c-react-select__control > .c-react-select__value-container').type('Post')
        cy.get('.css-11unzgr > .css-yt9ioa-option').its('length').then(($lenght)=>{
            const randSelect = Cypress._.random(0, $lenght - 1);
            cy.get('.css-11unzgr > .css-yt9ioa-option').eq(randSelect).click()
        })
    })
    it('Submit form onboarding preference',()=>{
        cy.get('form').submit()
        cy.url().should('eq','https://devel.ekrut.com/talent/interviews')
    })
    it('Pop-up Education form',()=>{
        cy.get('.sc-AxheI').should('have.text','Before you continue to the next step, please provide your education information')
        cy.wait(1000)
    })
})

