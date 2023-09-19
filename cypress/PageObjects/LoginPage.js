
class Login

 {
    txtUserName = '#Username'
    txtPassword = "//input[@id='Password']"
    txtPractice = '#PracticeRefNumber'
    txtbutton = '.MuiButton-label'

   setUserName(username)
   {
    cy.get(this.txtUserName).type(username);
   }

   setPassword(password)
   {
    cy.xpath(this.txtPassword).type(password);
   }

   setPracticeId(practiceid)
   {
    cy.get(this.txtPractice ).type(practiceid);
   }

   clickLogin()
   {
    cy.get(this.txtbutton).click();
   }

   verifyLogin()
   {
    cy.url({ timeout: 5000 }).should('include', '/dashboard');
   }

} 
export default Login