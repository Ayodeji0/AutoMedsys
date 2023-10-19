
import Demography from "../PageObjects/DemographyPage";
import {faker} from '@faker-js/faker'

describe ('Demography Page Seperate Test',()=> {
 
    const randomNumber = faker.location.zipCode('#########')
    const fakeCompany = faker.company.name()
    const fakefirstName = faker.person.firstName()
    const fakelastName = faker.person.lastName()
    const fakenumber = faker.phone.number('+1 ### ###-####')
    const fakestate = faker.location.state()
    const fakeaddress = faker.location.street()
    const fakecity = faker.location.city()
    const demography =  new Demography()
    beforeEach(() => {
        // Perform the login before running the test
        cy.visit('/');
     cy.loginWithCredentials(true);  
     cy.newpatient() 
      });

      it('identity Information',()=>{
        demography.getidentityBtn()
      })

      it('insurance Information',()=>{
        demography.clickInsuranceBtn()
      })

      it('Emergency Information',()=>{
        demography.clickEmergencyBtn()
      })
      
      it('Employment Information',()=>{
        demography.clickOnEmploymentBtn()
      })
})