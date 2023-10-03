
import Demography from "../PageObjects/DemographyPage";


describe("Demography information Page",()=>{
  const demo =  new Demography()
    before(() => {
        // Perform the login before running the test
        cy.visit('/');
    cy.loginWithCredentials(true);   
      });
     
    it('identity Information',()=>{ 
      cy.fixture("identityinfo").then((data)=>{
        demo.clickPatientNameBtn()
        demo.pickPatient()
        demo.clickDemography()
        demo.clickIdentityBtn()
        demo.selectFromTypesdropdown(data.types)
        demo.enteridentityValue(data.Number)
        demo.fileUpload()
        demo.clickAddIdentityBtn()
        demo.assertionToast()
      }) 
   
 })


})


  