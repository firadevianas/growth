describe('Partner menu', function(){
it('Visit Partner menu', function(){
    cy.visit('https://www.ekrut.com/')
    cy.contains('Partner').click()
    cy.url()
    .should('include','/ekrut-partners')
})

it('.scrollIntoView - scroll an element into view',() => {
    cy.get('#scroll-horizontal button')
    .should('not.be.visible')

})
})