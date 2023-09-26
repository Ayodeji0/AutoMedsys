class DashBoard 
{
    companyLogo = "//img[@alt='COMPANY lOGO']"
    searchBox = "//input[@id='combo-box-demo']"
    searchButton ="//button[@aria-label='fullscreen']//span[1]//*[name()='svg']"
    patientBtn =".svg-inline--fa.fa-user.fa-sm"
    createPatientBtn = ".svg-inline--fa.fa-user-plus.fa-sm[data-icon='user-plus']"
    notificationbellIcon ="//header//button[3]//span[1]//*[name()='svg']"
    currentuser = "//button[@aria-label='account of current user']"
    profilebtn ="//li[normalize-space()='Profile']"
    signoutbtn = "//li[normalize-space()='Sign out']"
    

    verifyLogo() {
        cy.xpath(this.companyLogo).should('be.visible');
      }


     setSearchword(searchName) {
    cy.xpath(this.searchBox).type(searchName)
    cy.xpath(this.searchButton).should('be.visible').click();
    cy.url({ timeout: 5000 }).should('include', '/patient/demography')

   }  
   

   clickpatientBtn() {
    cy.get(this.patientBtn).click()
    cy.url({ timeout: 5000 }).should('include', '/patient')
    
   }


    clickcreatepatientBtn() {
    cy.get(this.createPatientBtn).click();
    cy.url({ timeout: 30000 }).should('include', '/patient/newPatient');
  }
  


   clicknotificationBellIconBtn() {
    cy.xpath(this.notificationbellIcon).should('be.visible').wait(2000).click()
    cy.url({ timeout: 5000 }).should('include', '/notifications')
   }


   clickprofileUser() {
    cy.xpath(this.currentuser).click()
    cy.xpath(this.profilebtn).click()
    cy.url({ timeout: 5000 }).should('include', '/profile')
   }


   clicksignoutBtn() {
    cy.xpath(this.currentuser).click()
    cy.xpath(this.signoutbtn).click()
    cy.url({timeout:5000}).should('eq', 'https://dev-ehrpm.automedsys.net/')
    
   }
   

}
export default DashBoard