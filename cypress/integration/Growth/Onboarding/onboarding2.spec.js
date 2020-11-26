describe('submit onboarding 2',()=>{
    it('login',()=>{
        cy.login({email:'testing656006@testing.com',pass:'ekrut123'})
    })
    it('Static Title Job category',()=>{
        cy.wait(1000)
        cy.get('.tl-onboardingv2-text--title').should('have.text','Tell us about your job preferences!')   
    })
    it('Choose Job Category',()=>{
        cy.findByText('Select your job category').click()
        cy.findByText('Software Engineering').click()
    })
    it('Choose position',()=>{
        cy.findByText('Type your position title').click()
        cy.findByText('Frontend Engineer / Developer').click()
    })
    it('Click Business field',()=>{
        cy.get('.css-1pcexqc-container').eq(2).click()
          .type('Consulting')
          .get('.css-kj6f9i-menu').eq(0).click()
          .wait(1000)
          .get('.css-1pcexqc-container').eq(2).click()
          .type('E-Commerce')
          .get('.css-kj6f9i-menu').eq(0).click()
          .wait(1000)
    })
    it('Choose Job type',()=>{
        cy.get('.ant-checkbox-group-item').eq(0).click()
          .get('.ant-checkbox-group-item').eq(1).click()
    })
    it('Choose Company Size',()=>{
        cy.xpath('/html/body/div[1]/div[1]/div/div/div[2]/form/div[5]/div[2]/label[3]/span[2]').click()
        cy.xpath('/html/body/div[1]/div[1]/div/div/div[2]/form/div[5]/div[2]/label[2]/span[2]').click()
    })
    it('Choose Work Location',()=>{
        cy.xpath('/html/body/div[1]/div[1]/div/div/div[2]/form/div[6]/div[2]/label[5]/span[2]').click()
        cy.xpath('/html/body/div[1]/div[1]/div/div/div[2]/form/div[6]/div[2]/label[4]/span[2]').click()
        cy.xpath('/html/body/div[1]/div[1]/div/div/div[2]/form/div[6]/div[2]/label[3]/span[2]').click()
    })
    it('input current Salary',()=>{
        cy.xpath('/html/body/div[1]/div[1]/div/div/div[2]/form/div[7]/div[2]/div[1]/span/input').click()
          .type('12000000')  
    })
    it('input expected Salary',()=>{
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
          .wait(1000)
    })
    it('Submit form onboarding preference',()=>{
        cy.get('form').submit()
        cy.url().should('eq','https://stg.ekrut.com/talent/interviews')
    })
    it('Pop-up Education form',()=>{
        cy.get('.sc-AxheI').should('have.text','Before you continue to the next step, please provide your education information')
        cy.wait(1000)
    })
})