
describe("createPatient", () => {

  before(() => {
    // Perform the login before running the test
    cy.visit('/');
    cy.loginWithCredentials(true);  
  });

  it('createPatBtn', () => {
      cy.newpatient()   
  });
});


    

    
    
