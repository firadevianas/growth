describe('Onboarding step 1',()=>{
    it('login',()=>{
        cy.login({email:'autoyttrl@yttrl.com',pass:'qwerty123'})
    })
    it('Check url',()=>{
        cy.wait(1000)
        cy.url().should('eq','http://devel.ekrut.com/employer/onboarding/1')
    })
    it('upload profile picture',()=>{
        const fileName = 'images.png';
        cy.fixture(fileName).then(fileContent => {
        cy.get('.c-upload-profile__input').upload({ fileContent, fileName, mimeType: 'image/jpeg' });
        });
    })
    it('choose Job title',()=>{
        cy.findByText('Your position in the company').click()
        cy.findByText('Human Resource Development').click()
    })
    it('click button next',()=>{
        cy.get('.emp-onboarding-btn__item').click()
    })
    
    
    
})