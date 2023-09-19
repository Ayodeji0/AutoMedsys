import Login from "../PageObjects/LoginPage";
describe('Login Page Tests', () => {
  it('LoginPageTest', () => {
    // Visit the login page
    cy.visit('/');
   
    cy.fixture("logindetails").then((user)=>{
    
      const login = new Login()
      login.setUserName(user.username)
      login.setPassword(user.password)
      login.setPracticeId(user.practiceId)
      login.clickLogin()
      login.verifyLogin()
    })  
  });
});
