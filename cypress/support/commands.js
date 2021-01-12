// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add('login',(user)=>{
    cy.visit('http://stg.ekrut.com/');
    cy.get('.eds-header__right > .ant-btn').eq(1).click();
    cy.get('.content__header--is-left >.ant-typography').contains('Login to Your Account');
    cy.get('input[name=email]').type(user.email);
    cy.get('input[name=password]').type(user.pass);
    cy.get('.content__body > .ant-btn-primary').click();
})