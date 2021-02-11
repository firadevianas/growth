describe('Onboarding Step 2 company profile',()=>{
    it('login',()=>{
        cy.login({email:'autougfyh@ugfyh.com',pass:'ekrut123'})
    })
    it('check url',()=>{
        cy.wait(1000)
        cy.url().should('eq','http://devel.ekrut.com/employer/onboarding/2')
    })
    it('upload profile picture',()=>{
        const fileName = 'images.png';
        cy.fixture(fileName).then(fileContent => {
        cy.get('.c-upload-profile__input').upload({ fileContent, fileName, mimeType: 'image/jpeg' });
        });
    })
    it('fill company legal name',()=>{
        cy.get('input[name="legalName"]').type('PT Testing A')
    })
    it('fill company website',()=>{
        cy.get('input[id="company-url"]').type('https://abcsd.com')
    })
    it('fill company address',()=>{
        cy.get('textarea[name="address"]').type('Jalan Dermaga 1 no 30')
    })
    it('choose office location',()=>{
        cy.findByText('Your office location').click()
        cy.get('.css-11unzgr > .css-yt9ioa-option').its('length').then(($lenght)=>{
            const randSelect = Cypress._.random(0, $lenght - 1);
            cy.get('.css-11unzgr > .css-yt9ioa-option').eq(randSelect).click()
        })
    })
    it('fill phone number',()=>{
        cy.get('input[id="phone"]').type('822227743')
    })
    it('choose industry',()=>{
        cy.findByText('What industry is the company in?').click()
        cy.findByText('Electronics').click()
    })
    it('choose company size',()=>{
        cy.findByText('Company size').click()
        cy.findByText('Medium (200 - 1,000 people)').click()
    })
    it('click button next',()=>{
        cy.get('.emp-onboarding-btn__item').eq(1).click()
    })
})