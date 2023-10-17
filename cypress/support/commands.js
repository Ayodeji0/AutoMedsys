
///  <reference types="Cypress"/>
/// <reference types="cypress-xpath"/>


import Login from '../PageObjects/LoginPage';
import NewPatient from '../PageObjects/CreateNewPatientPage'
import {faker} from '@faker-js/faker'

//  This is for Login page

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


// For creating new patient

Cypress.Commands.add('newpatient',()=>{
  const newpatient =  new NewPatient()
  // All faker Api data needed to run the test so as to generate datas randomly
  const fakeFirstName = faker.person.firstName();
  const fakeLastName = faker.person.lastName();
  const fakeAddress = faker.location.street();
  const fakeCity = faker.location.city();
  const fakeZipcode = faker.location.zipCode('#####')
  
  
  cy.fixture("createpatient").then((info) => {
    newpatient.clickpatientBtn()
    newpatient.clickpatientplusbtn()
    newpatient.setFirstName(fakeFirstName)
    newpatient.setLastName(fakeLastName)
    newpatient.selectGender()
    newpatient.selectMaritalStatus()
    newpatient.setDob()
    newpatient.setAddress(fakeAddress)
    newpatient.setCountry(info.contry)
    newpatient.selectState()
    newpatient.setCity(fakeCity)
    newpatient.setZipcode(fakeZipcode)
    newpatient.clickCreateBtn()
    newpatient.clickAcceptBtn()
    newpatient.verifyCreatedPatient()
   });
})



// cypress/support/commands.js

//   // Define a custom Cypress command for verifying the login
//   Cypress.Commands.add('verifyLogin', () => {
//     cy.url().should('include', '/dashboard'); // Adjust the URL as needed
//   });
  
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

// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
