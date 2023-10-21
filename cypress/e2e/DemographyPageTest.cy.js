
import Demography from "../PageObjects/DemographyPage";
import {faker} from '@faker-js/faker'

describe ('demographygraphy Page Seperate Test',()=> {
 
    const randomNumber = faker.location.zipCode('#########')
    const fakeCompany = faker.company.name()
    const fakefirstName = faker.person.firstName()
    const fakelastName = faker.person.lastName()
    const fakenumber = faker.phone.number('+1 ### ###-####')
    const fakestate = faker.location.state()
    const fakenote = faker.lorem.word(10)
    const fakeaddress = faker.location.street()
    const fakecity = faker.location.city()
    const demography =  new Demography()
    beforeEach(() => {
        // Perform the login before running the test
        cy.visit('/');
     cy.loginWithCredentials(true);  
     cy.newpatient() 
      });
      
     // identity information
      it('identity Information',()=>{
        cy.fixture("identityinfo").then((data)=>{
        demography.getidentityBtn()
        demography.selectFromTypesdropdown(data.types)
        demography.typeidnumber(randomNumber)
        demography.clickAddIdentityBtn()
        demography.assertionToast()
        })
       
      })

    // insurance information
      it('insurance Information',()=>{
        demography.clickInsuranceBtn()
        demography.enterInsuranceDetails(fakeCompany)
        demography.enterMemberId(randomNumber)
        demography.clickDate()
      })

    // emergency information
      it('Emergency Information',()=>{
        demography.clickEmergencyBtn()
        demography.emergencyFirstName(fakefirstName)
        demography.emergencyLastName(fakelastName)
        demography.selectGender()
        demography.enterphoneNumber(fakenumber)
        demography.enteraddress(fakeaddress)
        demography.selectCity(fakecity)
        demography.enterZipcode(randomNumber)
        demography.clicksave()
        demography.verifyEmergencySaved()
      })

      // employment information
      it('Employment Information',()=>{
        demography.clickOnEmploymentBtn()
        demography.selectEmploymentType()
        demography.selectStudentEmployment()
        demography.enterAddress(fakeaddress)
        demography.selectState()
        demography.enterCity(fakecity)
        demography.enterZipCode(randomNumber)
        demography.clickSaveBtn()
        demography.verifyEmploymentSaved()
      })

      //patient consent
      it('Patient Consent',()=>{
        demography.clickOnPatientConsent()
        demography.clickOnAddPatientConsent()
      //   demography.selectConsentType()
      //  demography.enterFirstName(fakefirstName)
      //  demography.enterLastName(fakelastName)
      //  demography.selectConsentRelationship()
      //  demography.enterNote(fakenote)
      //  demography.clickOnCreateConsent()
      //  demography.verifyConsentSaved()
      })
})