
import Dashboard from "../PageObjects/DashBoardPage";
import Login from "../PageObjects/LoginPage";

describe("DashboardPage", () => {

  beforeEach(() => {
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
