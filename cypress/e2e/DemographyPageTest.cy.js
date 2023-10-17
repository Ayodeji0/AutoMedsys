
import Demography from "../PageObjects/DemographyPage";
import {faker} from '@faker-js/faker'


describe("Demography information Page",()=>{
  const demo =  new Demography()
    before(() => {
        // Perform the login before running the test
        cy.visit('/');
     cy.loginWithCredentials(true);  
     cy.newpatient() 
      });
     
    it('identity Information',()=> { 
      const randomNumber = faker.location.zipCode('#########')
      const fakeCompany = faker.company.name()
      const fakefirstName = faker.person.firstName()
      const fakelastName = faker.person.lastName()
      const fakenumber = faker.phone.number('+1 ### ###-####')
      const fakestate = faker.location.state()
      const fakeaddress = faker.location.street()
      const fakecity = faker.location.city()
      cy.fixture("identityinfo").then((data)=>{
        demo. getidentityBtn()
        demo.selectFromTypesdropdown(data.types)
        demo.typeidnumber(randomNumber)
        demo.clickAddIdentityBtn()
        demo.assertionToast()
        //insurance class
        demo.clickInsuranceBtn()
        demo.enterInsuranceDetails(fakeCompany)
        demo.enterMemberId(randomNumber)
        demo.clickDate()
        //emergency class
       demo.clickEmergencyBtn()
       demo.enterFirstName(fakefirstName)
       demo.enterLastName(fakelastName)
       demo.selectGender()
       demo.enterphoneNumber(fakenumber)
       demo.enteraddress(fakeaddress)
      //  demo.selectState(fakestate)
       demo.selectCity(fakecity)
       demo.enterZipcode(randomNumber)
       demo.clicksave()
       demo.verifyEmergencySaved()
       //Employment Information
       demo.clickOnEmploymentBtn()
       demo.selectEmploymentType()
       demo.selectStudentEmployment()
       demo.selectAddress(fakeaddress)
       demo.selectState()
       demo.enterCity(fakecity)
       demo.enterZipCode(randomNumber)
       demo.clickSaveBtn()
       demo.verifyEmploymentSaved()
      }) 
   
 })

//  it('insurance',()=>{
 
//  })


})


  //  demo.clickPatientNameBtn()
  //       demo.pickPatient()
  //       demo.clickDemography()
  //       demo.clickIdentityBtn()
  //       demo.selectFromTypesdropdown(data.types)
  //       demo.enteridentityValue(data.Number)
  //       demo.fileUpload()
        
  //       demo.assertionToast()