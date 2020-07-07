describe('edit personal information',()=>{
    it('login',()=>{
        cy.login({email:'poohempat@gmail.com',pass:'ekrut123'})
    })
    it('click icon pencil to change profile picture',()=>{
        cy.wait(100)
        cy.get('button[type=button]').eq(0).click()
        cy.url().should('eq','https://stg.ekrut.com/talent/profile')
        cy.get('.d-flex > .h2').should('have.text','Personal Information')
    })
    it('click change password',()=>{
        cy.get('.link').click()
        cy.url().should('eq','https://stg.ekrut.com/talent/settings')
        cy.wait(500)
        cy.go('back')
    })
})

describe('fill personal information',()=>{
    it('click date',()=>{
        cy.xpath('/html/body/div[1]/div[1]/div[2]/div[2]/div[1]/div/form/div[4]/div[2]/div[1]/div[1]/div/input').click()
        cy.get('.rdtDays').should('be.visible')
    })
    //pick birthdate 20 june 1995
    it('pick birthdate',()=>{
        cy.get('.rdtSwitch').eq(0).click()
        cy.get('.rdtSwitch').eq(0).click()
        cy.get('.rdtPrev').eq(0).click()
        cy.get('.rdtPrev').eq(0).click() 
        cy.get('.rdtPrev').eq(0).click() 
        cy.get('td[data-value="1995"]').should('have.text', '1995').click()
        cy.get('td[data-value="5"]').eq(0).click()
        cy.get('td[data-value="20"]').eq(0).click()
        cy.get('.form-control').eq(3).should('have.value','20')
        cy.get('.form-control').eq(4).should('have.value','June')
        cy.get('.form-control').eq(5).should('have.value','1995')
    })
    it('fill address',()=>{
        cy.get('.form-group').eq(8).click()
          .type('Jalan satu dua tiga no 123')
    })
    it('upload image',()=>{
        const fileName = 'images.png';
        cy.fixture(fileName).then(fileContent => {
        cy.get('.c-upload-profile__input').upload({ fileContent, fileName, mimeType: 'image/jpeg' });
        });
    })
    it('upload pdf',()=>{
        const fileName = 'cv.pdf';
        cy.fixture(fileName).then(fileContent => {
        cy.get('.c-upload-file__input').upload({ fileContent, fileName, mimeType: 'application/pdf' });
        });
    })
    it('fill link linkedin',()=>{
        cy.get('input[name="Linkedin"]')
          .type('https://testyes')
    })
    it('Click Save button',()=>{
        cy.get('button[type=submit]').click()
        cy.wait(500)
        cy.get('.c-toast__text').should('be.visible')
          .get('.c-toast__text-title').should('have.text','SUCCESS')
          .get('.c-toast__text-body').should('have.text','Your profile has been successfully updated')
    })
})


