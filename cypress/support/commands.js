import 'cypress-file-upload';
import Login from '../PageObjects/LoginPage';

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

 // CUSTOM COMMANDS FOR LOGIN

//  Cypress.Commands.add('loginWithCredentials', (username, password, practiceId) => {
//     cy.fixture("logindetails").then((user) => {
//       const login = new Login();
//       login.setUserName(username || user.username);
//       login.setPassword(password || user.password);
//       login.setPracticeId(practiceId || user.practiceId);
//       login.clickLogin();
//       login.verifyLogin();
//     });
//   });


  Cypress.Commands.add('loginWithCredentials', (validLogin = true) => {
    cy.fixture("logindetails").then((user) => {
      const login = new Login();
  
      // Override username and password based on the 'validLogin' parameter
      if (validLogin) {
        login.setUserName(user.username);
        login.setPassword(user.password);
      } else {
        // Use invalid credentials
        login.setUserName(user.username1);
        login.setPassword(user.password1);
      }
      login.setPracticeId(user.practiceId);
      login.clickLogin();
      login.verifyLogin();
    });
  });


// cypress/support/commands.js

//   // Define a custom Cypress command for verifying the login
//   Cypress.Commands.add('verifyLogin', () => {
//     cy.url().should('include', '/dashboard'); // Adjust the URL as needed
//   });
  