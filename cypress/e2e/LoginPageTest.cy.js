
describe('Login Page Tests', () => {
  it('LoginPageTest with Valid Credentials', () => {
    cy.visit('/');
    cy.loginWithCredentials(); 
  });



//   This is for negative test cases
//   it.only('With another test Credentials',()=>{
//     // Use the custom command to log in with other credentials
// cy.loginWithCredentials('Eugene@automedsys.com', 'P@rfect2', 'BDW20201001');
//   })
});
