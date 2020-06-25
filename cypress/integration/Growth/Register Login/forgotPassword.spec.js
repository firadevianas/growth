describe('forgot password',()=>{
    it('navigate to the url',()=>{
        cy.visit('https://stg.ekrut.com')
    })
    it('click login button',()=>{
        cy.get('.eds-header__right > .ant-btn').eq(1).click()
    })
    it('Pop-up Login appear',()=>{
        cy.get('.content__header--is-left >.ant-typography').contains('Login to Your Account')
    })
    it('click Forgot password',()=>{
        cy.get('.ant-typography').contains('Forgot Password').click({force: true})
    })
    it('User Checks URL', () => {
        cy.wait(2000)
        cy.url()
        .should('eq','https://stg.ekrut.com/reset-password-email')
    })
    it('Verify Forgot password page',()=>{
        cy.get('.auth__title').should('have.text','Enter the E-mail address you use to sign in to').should('be.visible')
        cy.get('input[name=email]').should('be.visible')
        cy.get('button[type=submit]').should('have.text','Send My Password')
    })
})

describe('Successfully send forget password',()=>{
    it('filled email field with valid email',()=>{
        cy.get('input[name=email]').type('staging3@gmail.com')
        cy.get('button[type=submit]').click()
        cy.get('.c-toast__text-title').should('have.text','SUCCESS')
        cy.get('.c-toast__text-body').should('have.text','Instructions to reset your password have been sent to you. Please check your email.')
        cy.url().should('eq','https://stg.ekrut.com/')
        cy.wait(5000)
    })
})

const getIframeDocument = () => {
    return cy
    .get('iframe[title="Message HTML"]')
    .its('0.contentDocument')
}
const getIframeBody = () => {
   return getIframeDocument()
   .its('body').should('not.be.undefined')
   .then(cy.wrap)
}

describe('Reset password',()=>{
    it('visit mailtrap and login mailtrap',()=>{
        cy.visit('https://mailtrap.io/')
        cy.get('.signin_block > .button').eq(0).click()
        cy.get('input[id=user_email]').type('taufiq@ekrut.com')
        cy.get('input[type=password]').type('qwer1234')
        cy.get('input[name=commit]').click()
        cy.get('.inbox_name').contains('staging').click()
        cy.get('.subject').contains('Reset Password Instruction.').eq(0).click()
        cy.wait(2000)
    })
    it('click button change password',()=>{
        getIframeBody().find('.main').contains('Change My Password').click()
    })
})