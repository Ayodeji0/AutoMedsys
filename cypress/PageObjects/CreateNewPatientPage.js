
class NewPatient {
    patientsBtn = "//img[@alt='patient']"
    patientManagementAddBtn = ".svg-inline--fa.fa-plus"
    firstName ="#firstname"
    lastName = "#lastname"
    genderDropdown = '//div[@placeholder="Gender"]//button[@title="Open"]'
    maritalDropDown = 'div[placeholder="Marital Status"] button[title="Open"]'
    country = "#country"
    state = "#pstate"
    stateDropdown = 'div[placeholder="State"] button[title="Open"]'
    city = "#city"
    address = 'input[name="addr1"]'
    zipCode = "//input[@id='zip']"
    createBtn = "//span[normalize-space()='Create Patient']"
    acceptBtn = "//span[normalize-space()='Accept']"
    maritalStatus = "#maritalstatus"
    dateofBirth = "//button[@aria-label='Choose date']//*[name()='svg']"
    calendarbtn = "//button[@aria-label='calendar view is open, switch to year view']"
    createToastBtn = "//div[contains(text(),'Created Patient')]"
    countrydropdown = '//div[@placeholder="Country"]//button[@title="Open"]'
    countryOfChoice = "//li[@id='country-option-239']"
    stateOfChoice = "//li[@id='pstate-option-47']"
    dateOfBirthInputField = "//input[@aria-label='Choose date']"
    calendaropenbtn = ".MuiInputAdornment-root > .MuiButtonBase-root"
    calendar = ".MuiDateCalendar-root"
    getYearBtn = "//button[normalize-space()='1994']"
    getDateBtn = "//button[normalize-space()='7']"
   
    // This is for dynamic calenar

    



    clickpatientBtn(){
      cy.xpath(this.patientsBtn ).click();
    }

    clickpatientplusbtn(){
      cy.get(this.patientManagementAddBtn).click()
    }

    setFirstName(fName){
      cy.get(this.firstName).clear().type(fName)
    }

    setLastName(lName){
      cy.get(this.lastName).clear().type(lName)
    }


    selectGender(){
      const genderOptions = ['Male', 'Female', 'Unknown'];
      const randomIndex = Cypress._.random(0, genderOptions.length - 1);
      const selectedOption = genderOptions[randomIndex];
      cy.xpath(this.genderDropdown).click()
      cy.contains(selectedOption).click()
    }


    setCountry(){
      cy.xpath(this.countrydropdown)
  .should('be.visible')
  .should('be.enabled')
  .click({ force: true });
      cy.xpath(this.countryOfChoice).click()
       
    }
   

    selectState() {
      const randomIndex = Cypress._.random(0, 49);
      cy.get(this.stateDropdown)
        .click() 
        .focus()
        .type('{downarrow}'.repeat(randomIndex)) 
        .type('{enter}');
      cy.get('body').click(); 
    }


    selectMaritalStatus() {
      const randomIndex = Cypress._.random(0, 5);
      cy.get(this.maritalDropDown)
        .click() 
        .focus()
        .type('{downarrow}'.repeat(randomIndex)) // Use 'repeat' to simulate multiple arrow key presses
        .type('{enter}');
      cy.get('body').click(); 
    }
    

    // setMaritalStatus() {
    //   const randomIndex = Cypress._.random(0, 5);
    
    //   cy.get(this.stateDropdown)
    //     .click()
    //     .focus();
    
    //   // Simulate multiple arrow key presses to navigate to the selected option
    //   for (let i = 0; i < randomIndex; i++) {
    //     cy.get(this.stateDropdown).type('{downarrow}');
    //   }
    
    //   // Select the chosen option by pressing Enter
    //   cy.get(this.stateDropdown).type('{enter}');
        
    //   // Close the dropdown (if needed)
    //   cy.get('body').click(); // Click somewhere outside the dropdown to close it
    // }
    

  // Hard coded way of selecting from a dropdown
    // setMaritalStatus(){
    //   const maritalOptions = ["Married","Single","Divorced","Widow/Widower","Separated","Unknown"]
    //   const randomIndex = Cypress._.random(0, maritalOptions.length-1)
    //   const SelectedOptions = maritalOptions[randomIndex]
    //   cy.get(this.maritalDropDown).click()
    //   cy.contains(SelectedOptions).click()
    // }

    setCity(city){
      cy.get(this.city).clear({ force: true }).type(city, { force: true });
    }
    
 // date of birth 
    setDob(){
   cy.get(this.calendaropenbtn).click()
   cy.xpath(this.calendarbtn).click()
   cy.xpath(this.getYearBtn).click()
   cy.xpath(this.getDateBtn).click()
 
    }

    setAddress(Add){
      cy.get(this.address).clear().type(Add)
    }

    setZipcode(zcode){
      cy.xpath(this.zipCode).clear().type(zcode)
    }

    clickCreateBtn(){
      cy.xpath(this.createBtn).click()
    }

    clickAcceptBtn(){
      cy.xpath(this.acceptBtn, { timeout: 10000 }).click();
      cy.log(this.acceptBtn)

    }

    verfiyCreatedpatient(){
      cy.xpath(this.createToastBtn, { timeout: 10000 }).should('contain.text', 'Created Patient');
    }

}

export default NewPatient




