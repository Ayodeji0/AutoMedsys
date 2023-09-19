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

///  <reference types="Cypress"/>
/// <reference types="cypress-xpath"/>
// Cypress.Commands.add('login', (username, password, practiceId) => {
//     cy.visit('/'); // Set the base URL as needed
//     cy.get('#Username').type(username);
//     cy.xpath("//input[@id='Password']").type(password);
//     cy.get('#PracticeRefNumber').type(practiceId);
//     cy.get('.MuiButton-label').click();
//   });
  
//   // Define a custom Cypress command for verifying the login
//   Cypress.Commands.add('verifyLogin', () => {
//     cy.url().should('include', '/dashboard'); // Adjust the URL as needed
//   });
  