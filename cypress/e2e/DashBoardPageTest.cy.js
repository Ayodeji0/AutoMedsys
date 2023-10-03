
import Dashboard from "../PageObjects/DashBoardPage";

describe("DashboardPage", () => {

  beforeEach(() => {
    // Perform the login before running the test
    cy.visit('/');
    cy.loginWithCredentials(true); 
  });
  
// Create an instance of the Dashboard class
 const dashboard = new Dashboard();
  it("logo visibility", () => {
    dashboard.verifyLogo();
  });
  
  it("dashboard patient search", () => {
    cy.fixture("patientname").then((data)=>{
      dashboard.setSearchword(data.searchname);
    })
    
  });

  it("dashboard patientbtn", ()=>{
    dashboard.clickpatientBtn() 
  })
  
  it("dashboard createpatientbtn", ()=>{
    dashboard.clickcreatepatientBtn()
  })

  it('dashboard notificationbtn', ()=>{
    dashboard.clicknotificationBellIconBtn()
  })

  it('dashboard profile dropdowns',()=>{
    dashboard.clickprofileUser()
  })

  it('dashboard  signout dropdowns',()=>{
    dashboard.clicksignoutBtn()
    
  })
  
});
