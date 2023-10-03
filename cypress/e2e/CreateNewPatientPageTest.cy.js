

import NewPatient from "../PageObjects/CreateNewPatientPage";
import {faker} from '@faker-js/faker'

describe("createPatient", () => {
    before(() => {
      // Perform the login before running the test
      cy.visit('/');
      cy.loginWithCredentials(true);  
    });

    
    it.only('createPatBtn', () => {
      cy.fixture("createpatient").then((info)=>{
        const newPatient = new NewPatient()
        const fakeFirstName = faker.person.firstName();
        const fakeLastName = faker.person.lastName();
        const fakeAddress = faker.location.streetAddress()
        const fakeGender = faker.person.gender()
        // const fakeState = faker.location.state()
        const fakeCity = faker.location.city()
        const fakeZipcode = faker.location.zipCode('#####')
        newPatient.clickpatientBtn()
        newPatient.clickpatientplusbtn()
        newPatient.setFirstName(fakeFirstName);
        newPatient.setLastName(fakeLastName)
        newPatient.selectGender()
        newPatient.selectMaritalStatus()
        newPatient.setDob()
        newPatient.setAddress(fakeAddress)
        newPatient.setCountry(info.contry)
        newPatient.selectState()
        newPatient.setCity(fakeCity)
        newPatient.setZipcode(fakeZipcode)
        newPatient.clickCreateBtn()
        newPatient.clickAcceptBtn()
        newPatient.verfiyCreatedpatient()
      })
      
    });
  });
  
