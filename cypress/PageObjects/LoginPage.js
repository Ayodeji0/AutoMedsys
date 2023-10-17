
class Login {
   // Define selectors
   txtUserName = '#Username';
   txtPassword = "//input[@id='Password']";
   txtPractice = '#PracticeRefNumber';
   txtButton = '.MuiButton-label';
 
   // Set the username in the input field
   setUserName(username) {
     cy.get(this.txtUserName).type(username);
   }
 
   // Set the password using an XPath selector
   setPassword(password) {
     cy.xpath(this.txtPassword).type(password);
   }
 
   // Set the practice ID in the input field
   setPracticeId(practiceid) {
     cy.get(this.txtPractice).type(practiceid);
   }
 
   // Click the login button
   clickLogin() {
     cy.get(this.txtButton).click();
   }
 
   // Verify that the URL includes '/dashboard'
   verifyLogin() {
    cy.wait(2000)
     cy.url({ timeout: 5000 }).should('include', '/dashboard');
   }
 }
 
 export default Login;
 