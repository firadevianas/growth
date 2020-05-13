//Onboarding Experience success
describe('Login Success',()=>{
    
    it('navigate to the url',()=>{
        cy.visit('https://stg.ekrut.com')
    })

    it('click login button',()=>{
        cy.xpath('/html/body/div[1]/header/div/div[2]/button[2]').click()
    })
    it('Pop-up Login appear',()=>{
        cy.get('.content__header--is-left >.ant-typography').contains('Login to Your Account')
    })

    it('input valid user email',()=>{
        cy.get(':nth-child(1) > .ant-input')
        .should('be.visible')
        .type('eeyoreempat@gmail.com').should('have.value','eeyoreempat@gmail.com')
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
        cy.wait(10000)
        cy.url()
        .should('eq','https://stg.ekrut.com/talent/onboarding/1')
    })

})
// //Onboarding experience success submit

describe('Submit Onboarding experience success',()=>{
    it('fill up company name',()=>{
        cy.wait(2000)
        cy.xpath('/html/body/div[1]/div[1]/div/div/div[2]/form/div[1]/div[2]/div/div[1]/div/div[1]').click()
          .type('progresstech')
    })
    it('select company name',()=>{
        cy.wait(2000)
        cy.get('.css-11unzgr').eq(0).click()
    })
    it('fill up position name',()=>{
        cy.xpath('/html/body/div[1]/div[1]/div/div/div[2]/form/div[2]/div[2]/div/div[1]/div[1]/div[1]').click()
          .type('frontend')
    })
    it('select position name',()=>{
        cy.wait(2000)
        cy.xpath('//*[@id="react-select-3-option-0"]').eq(0).click()
    })
    it('fill up position function',()=>{
        cy.xpath('/html/body/div[1]/div[1]/div/div/div[2]/form/div[3]/div[2]/div/div[1]/div/div[1]').click()
          .type('frontend')
    })
    it('select position fuction',()=>{
        cy.wait(2000)
        cy.xpath('//*[@id="react-select-2-option-0"]').click()
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
        cy.xpath('/html/body/div[1]/div[1]/div/div/div[2]/form/div[5]/div[2]/div/div[1]/div[1]/div[1]').click()
    })
    it('select position level',()=>{
        cy.get('.css-fk865s-option').eq(10).click()
    })
    it('click business fields',()=>{
        cy.xpath('/html/body/div[1]/div[1]/div/div/div[2]/form/div[6]/div[2]/div/div[1]').click()
          .type('Careers and Recruiting')
    })
    it('select Business fields',()=>{
        cy.get('.css-kj6f9i-menu').eq(0).click()
        cy.wait(10000)
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
        cy.wait(10000)
        cy.url()
        .should('eq','https://stg.ekrut.com/talent/onboarding/2')
    })
})
//Onboarding Preference success submit
describe('Submit Onboarding preference success',()=>{
    it('Static Title Job category',()=>{
        cy.wait(3000)
        cy.get('.tl-onboardingv2-text--title').should('have.text','Tell us about your job preferences!')   
    })
    it('Choose Job Category',()=>{
        cy.get('.tl-onboardingv2-field__radio').eq(2).click()
          .wait(1000)
    })
    it('Choose position',()=>{
        cy.scrollTo('bottom')
          .get('.tl-onboardingv2-radio').eq(1).click()
          .wait(1000)
    })
    it('Click Business field',()=>{
        cy.scrollTo('bottom')
          .get('.css-1pcexqc-container').click()
          .type('Consulting')
          .get('.css-kj6f9i-menu').eq(0).click()
          .wait(1000)
          .get('.css-1pcexqc-container').click()
          .type('E-Commerce')
          .get('.css-kj6f9i-menu').eq(0).click()
          .wait(1000)
    })
    it('Choose Job type',()=>{
        cy.scrollTo('bottom')
          .get('.ant-checkbox-group-item').eq(0).click()
          .get('.ant-checkbox-group-item').eq(1).click()
    })
    it('Choose Company Size',()=>{
        cy.scrollTo('bottom')
        cy.xpath('/html/body/div[1]/div[1]/div/div/div[2]/form/div[5]/div[2]/label[3]/span[2]').click()
        cy.xpath('/html/body/div[1]/div[1]/div/div/div[2]/form/div[5]/div[2]/label[2]/span[2]').click()
    })
    it('Choose Work Location',()=>{
        cy.scrollTo('bottom')
        cy.xpath('/html/body/div[1]/div[1]/div/div/div[2]/form/div[6]/div[2]/label[5]/span[2]').click()
        cy.xpath('/html/body/div[1]/div[1]/div/div/div[2]/form/div[6]/div[2]/label[4]/span[2]').click()
        cy.xpath('/html/body/div[1]/div[1]/div/div/div[2]/form/div[6]/div[2]/label[3]/span[2]').click()
    })
    it('input current Salary',()=>{
        cy.scrollTo('bottom')
        cy.xpath('/html/body/div[1]/div[1]/div/div/div[2]/form/div[7]/div[2]/div[1]/span/input').click()
          .type('12000000')  
    })
    it('input expected Salary',()=>{
        cy.scrollTo('bottom')
        cy.xpath('/html/body/div[1]/div[1]/div/div/div[2]/form/div[8]/div[2]/div[1]/div[1]/span/input').click()
          .type('16000000')
          .get('.tl-onboardingv2-checkbox__iscurrent').eq(1).click()  
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
        cy.xpath('/html/body/div[1]/div[1]/div/div/div[2]/form/div[9]/div[2]/div[3]/div[1]/div[1]/div[1]').click()
          .type('PostgreSQL')
          .wait(1000)
          .get('.css-11unzgr').click()
          .wait(10000)
    })
    it('Submit form onboarding preference',()=>{
        cy.get('form').submit()
        cy.url().should('eq','https://stg.ekrut.com/talent/interviews')
    })
    it('Pop-up Education form',()=>{
        cy.get('.sc-AxheI').should('have.text','Education')
        cy.wait(10000)
    })
})

