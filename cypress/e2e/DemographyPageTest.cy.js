
import Login from "../PageObjects/LoginPage";
import Demography from "../PageObjects/DemographyPage";


describe("identity information",()=>{
    before(() => {
        // Perform the login before running the test
        cy.visit('/');
        cy.fixture("logindetails").then((user) => {
          const login = new Login();
          login.setUserName(user.username);
          login.setPassword(user.password);
          login.setPracticeId(user.practiceId);
          login.clickLogin();
          login.verifyLogin();
        });   
      });
      const demo =  new Demography()
    it('test1',()=>{  
     demo.clickPatientNamebtn()
     demo.pickPatient()
     demo.clickDemography()
     demo.clickidentitybtn()
     demo.typeDropdown()
     demo.entervalue("78654589443")
 })


})