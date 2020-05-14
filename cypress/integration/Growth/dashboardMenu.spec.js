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
        .type('firadevianas@gmail.com').should('have.value','firadevianas@gmail.com')
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
        .should('eq','https://stg.ekrut.com/talent/interviews')
    })

})
describe('Click Header',()=>{
    it('click on EKRUT logo',()=>{
        cy.wait(2000)
        cy.get('.eds-navheader-brand').click()
        cy.url().should('eq','https://stg.ekrut.com/talent/interviews')
        cy.get('.tl-dashboard-indicator__title').should('have.text','Welcome to your dashboard')
    })
    it('click on Dashboard',()=>{
        cy.wait(1000)
        cy.get('.ant-menu-item').eq(0).click()
        cy.url().should('eq','https://stg.ekrut.com/talent/interviews')
        cy.get('.tl-dashboard-indicator__title').should('have.text','Welcome to your dashboard')
    })
    it('click on Joblisting',()=>{
        cy.wait(1000)
        cy.get('.ant-menu-item').eq(1).click()
        cy.url().should('eq','https://stg.ekrut.com/talent/job-opportunities')
    })
    it('click on Refer friend',()=>{
        cy.wait(1000)
        cy.get('.ant-menu-item').eq(2).click()
        cy.url().should('eq','https://stg.ekrut.com/talent/refer')
        cy.xpath('/html/body/div[1]/div[1]/div[1]/div/div/ul/li[2]/div/div/div/div[1]').should('have.text','Referral and Rewards Program')
    })
    // it('click on Media',()=>{
    //     cy.wait(1000)
    //     cy.get('.ant-menu-item').eq(3).click()
    //     cy.location().should((location)=>{
    //         expect(location.href).to.eq('https://stg.ekrut.com/media')
    //     })
    // })
    it('click on Chat',()=>{
        cy.xpath('/html/body/div[1]/header/div/div[1]/a').click()
        cy.url().should('eq','https://stg.ekrut.com/talent/chat')
        cy.wait(2000)
    })
    it('click on Notification',()=>{
        cy.wait(1000)
        cy.get('.tl-header-notification').click()
        cy.xpath('/html/body/div[1]/div[1]/div[2]/div/div[2]/div/div/div[1]/div[1]').should('have.text','Notification')
        cy.scrollTo('center')
        cy.get('.tl-header-notification__modal-new__link').click()
        cy.url().should('eq','https://stg.ekrut.com/talent/notifications')
        cy.xpath('/html/body/div[1]/div[1]/div/div/div[1]/div[1]').should('have.text','Notification')
    })
    it('View profile talent',()=>{
        cy.wait(1000)
        cy.get('.eds-navheader__profile').click()
          .get('.ant-dropdown-menu-item').eq(0).click()
        cy.url().should('eq','https://stg.ekrut.com/talent/profile/show')
    })
    it('View Change password page',()=>{
        cy.wait(1000)
        cy.get('.eds-navheader__profile').click()
          .get('.ant-dropdown-menu-item').eq(1).click()
        cy.url().should('eq','https://stg.ekrut.com/talent/settings')
    })
    // it('Signout',()=>{
    //     cy.wait(1000)
    //     cy.get('.eds-navheader__profile').click()
    //       .get('.ant-dropdown-menu-item').eq(3).click()
    //     cy.url().should('eq','https://stg.ekrut.com/login')
    // })
})
