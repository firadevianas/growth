describe('Click Header',()=>{
    it('login',()=>{
        cy.login({email:'firadevianas@gmail.com',pass:'ekrut123'})
    })
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
        cy.wait(10000)
        cy.get('.col-12 > .tl-refer__title').eq(0).should('have.text','Refer your friend and get rewards')
        cy.get('.col-12 > .tl-refer__subtitle').eq(1).should('have.text','Help your friend and earnup to 5.000.000')
    })
    it('check on Media',()=>{
        cy.wait(1000)
        cy.get('.ant-menu-item > a').eq(3).should('have.prop','href').and('equal','https://stg.ekrut.com/media')
        
    })
    it('click on Chat',()=>{
        cy.get('.eds-navheader-mini-icon').contains('CHAT').click()
        cy.url().should('eq','https://stg.ekrut.com/talent/chat')
        cy.wait(2000)
    })
    it('click on Notification',()=>{
        cy.wait(1000)
        cy.get('.tl-header-notification').click()
        cy.get('.ant-row >.ant-col').eq(0).should('have.text','Notification')
        cy.scrollTo('center')
        cy.get('.tl-header-notification__modal-new__link').click()
        cy.url().should('eq','https://stg.ekrut.com/talent/notifications')
        cy.get('.ant-row > .ant-col').eq(0).should('have.text','Notification')
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
})
