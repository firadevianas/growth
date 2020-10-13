describe('My first test', function(){
    it('Visit the Ekrut Website', function(){
        cy.visit('https://www.ekrut.com/')

        cy.contains('Employer').click()

        cy.url()
        .should('include','/employers/how-it-works')

        cy.contains("I'm Interested").click()
        cy.url()
        .should('include','/employer-signup')
    })

        it('.type() - type into a DOM element', () => {
        cy.get('form > :nth-child(1) > .form-control')
          .type('Test')
          .should('have.value', 'Test')
        })

          it('.type() - Entry Email',() => {
            cy.get(':nth-child(2) > .form-control')
            .type('testinggg@test.com')
            .should('have.value','testinggg@test.com')
          })

          it('.type() - Entry Password',() => {
            cy.get(':nth-child(3) > .password > .form-control')
            .type('1234567')
          })
          

          it('.type() - Entry Confirm Password',() => {
            cy.get(':nth-child(4) > .password > .form-control')
            .type('1234567')
          })

          it('.type() - Entry Phone Number',() => {
            cy.get('#phone')
            .type('9800878787')
          })

          it('.type() - Entry Company Name',() => {
          cy.get(':nth-child(6) > .form-control')
            .type('Testing corp')
          })

          it('.click() - click on a DOM element', () => {
            cy.get('.c-checkbox__checkmark').click()
            })

          it('.click() - click on a DOM element', () => {
            cy.get('.btn').click()
          })
          it('.focus() - focus on a DOM element', () => {
          cy.get('.gst-verify-email__title').focus()
            .should('have.value','Thank You For Registering!')
          })

          
        
        
        // cy.get('.action-email')
        // .type('fake@gmail.com')
    
        // Arrange - setup initial app state
        // - visit a web page
        // - query for an element
        // Act - take an action
        // - interact with that element
        // Assert - make an assertion
        // - make an assertion about page content
    })
