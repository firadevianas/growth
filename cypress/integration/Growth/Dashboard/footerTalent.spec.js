describe('Verify Link footer',()=>{
    it('login',()=>{
        cy.login({email:'firadevianas@gmail.com',pass:'ekrut123'})
    })
    it('verify About',()=>{
        cy.get('.gst-footer__about--link').eq(0).should('have.prop','href').and('equal','https://stg.ekrut.com/about')
    })
    it('verify Career',()=>{
        cy.get('.gst-footer__about--link').eq(1).should('have.prop','href').and('equal','https://careers.ekrut.com/')
    })
    it('verify Event',()=>{
        cy.get('.gst-footer__about--link').eq(2).should('have.prop','href').and('equal','https://www.ekrut.com/media/category/events')
    })
    it('verify Contact us',()=>{
        cy.get('.gst-footer__about--link').eq(3).should('have.prop','href').and('equal','https://stg.ekrut.com/contactus')
    })
    it('verify Media',()=>{
        cy.get('.gst-footer__about--link').eq(4).should('have.prop','href').and('equal','https://www.ekrut.com/media')
    })
    it('verify FAQ',()=>{
        cy.get('.gst-footer__about--link').eq(5).should('have.prop','href').and('equal','https://stg.ekrut.com/faq')
    })
    it('verify FB',()=>{
        cy.get('.gst-footer__icon--link > a').eq(0).should('have.prop','href').and('equal','https://www.facebook.com/ekrutofficial/')
    })
    it('verify Instagram',()=>{
        cy.get('.gst-footer__icon--link > a').eq(1).should('have.prop','href').and('equal','https://www.instagram.com/ekrutofficial/')
    })
    it('verify linkedin',()=>{
        cy.get('.gst-footer__icon--link > a').eq(2).should('have.prop','href').and('equal','https://www.linkedin.com/company/ekrut')
    })
    it('verify youtube',()=>{
        cy.get('.gst-footer__icon--link > a').eq(3).should('have.prop','href').and('equal','https://www.youtube.com/channel/UC3StFFBdWVHQEAOLPAHiQOg')
    })
    it('verify twitter',()=>{
        cy.get('.gst-footer__icon--link > a').eq(4).should('have.prop','href').and('equal','https://twitter.com/ekrutofficial?lang=en')
    })
    it('verify Ekrut app download',()=>{
        cy.get('.gst-footer__icon > a').should('have.prop','href').and('equal','https://play.google.com/store/apps/details?id=com.ekrut.ekrut')
    })
})