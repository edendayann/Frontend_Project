/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject = any> {
      login(email: string, password: string): Chainable<any>;
    }
  }

Cypress.Commands.add("login", (username:string, password) => {
    cy.visit('/login')
    cy.get('input[placeholder="User Name"]').type(username);
    // {enter} causes the form to submit
    cy.get('input[placeholder="Password"]').type(`${password}{enter}`, { log: false })
    // we should be redirected to /dashboard
    cy.url().should('include', '/')
    // our auth cookie should be present
    cy.getCookie('your-session-cookie').should('exist')
    // UI should reflect this user being logged in
    cy.get('className="right"').should('contain', username)
  })
  

// ***********************************************
// This example commands.ts shows you how to
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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
    // interface Chainable {
    //   login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
    // }
//   }
// }