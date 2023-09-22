
import Login from "../PageObjects/LoginPage";
import NewPatient from "../PageObjects/CreateNewPatientPage";

describe("createPatient", () => {
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

    
    it.only('createPatBtn', () => {
      cy.fixture("createpatient").then((info)=>{
        const newPatient = new NewPatient()
        newPatient.clickpatientBtn()
        newPatient.clickpatientplusbtn()
        newPatient.setFirstName(info.fName)
        newPatient.setLastName(info.lName)
        newPatient.setGender()
        newPatient.setMarriage()
        newPatient.setDob(info.dob)
        newPatient.setAddress(info.Add)
        // newPatient.setCountry(info.contry)
        // newPatient.setState(info.sta)
        newPatient.setCity(info.city)
        newPatient.setZipcode(info.zcode)
        newPatient.clickCreateBtn()
        // newPatient.clickAcceptBtn()
      })
      
    });
  });
  
