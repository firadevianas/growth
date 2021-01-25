describe('submit onboarding 2',()=>{
    it('login',()=>{
        cy.login({email:'testing63412@testing.com',pass:'ekrut123'})
    })
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
    // it('Submit form onboarding preference',()=>{
    //     cy.get('form').submit()
    //     cy.url().should('eq','https://stg.ekrut.com/talent/interviews')
    // })
    // it('Pop-up Education form',()=>{
    //     cy.get('.sc-AxheI').should('have.text','Before you continue to the next step, please provide your education information')
    //     cy.wait(1000)
    // })
})