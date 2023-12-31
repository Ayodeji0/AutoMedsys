
class Demography {
  // Define selectors
  patientName = "//p[normalize-space()='Wehner, Kiarra']";
  patientsBtn = "//img[@alt='patient']";
  demography = "//span[normalize-space()='View Demography']";
  identityBtn = ".jss565 > :nth-child(4) > .MuiButtonBase-root";
  dropdownfirstbtn= "input[placeholder='Type']"
  Dropdownullist = ".MuiAutocomplete-listbox[role='listbox']";
  idNumber = "input[placeholder='ID Number/Value']";
  browseBtn = ":nth-child(1) > .jss628 > .jss631 > :nth-child(2)"
  identityinformationBtn = "//span[normalize-space()='Add Patient Identity Information']"
  identitysavetoast = "//p[normalize-space()='Identity Saved']"
  input= 'input[placeholder="Type"]'
  typeOptions= ".MuiAutocomplete-option"
  // end to end testing
  identityBtn2= ':nth-child(4) > .MuiButtonBase-root > .MuiFab-label > .MuiSvgIcon-root'
  typefield = 'input[placeholder = "Type"]'
  typeselected = "//li[.='Social Security Number']"
  idNumber = 'input[placeholder="ID Number/Value"]'
   // end to end test

   // Insurance Page Selector
   clickInsurance = "//button[.='Insurance']"
   insuranceAddBtn = ":nth-child(4) > .MuiButtonBase-root > .MuiFab-label > .MuiSvgIcon-root"
   insuranceCompany = "//input[@placeholder='Insurance Company']"
   memberfield = "//input[@name='memId']"
   assignmentfield = "//input[@placeholder='Accept Assignment']"
   effectiveDate = "//body[1]/div[1]/div[1]/div[2]/main[1]/div[3]/div[1]/div[2]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[2]/div[2]/div[3]/div[2]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/button[1]"
   calendarDropDown = '//button[@aria-label="calendar view is open, switch to year view"]//*[name()="svg"]'
   yearDropDown = "//button[normalize-space()='2023']"
   datedropDown = "//button[normalize-space()='13']"
   addInsuranceBtn = '//span[normalize-space()="Add Insurance"]'

   // Emergency Contact Selectors
   emergencyBtn = "//p[normalize-space()='Emergency Contact']"
   emergencyAddBtn = "//button[contains(@class,'MuiButtonBase-root MuiFab-root fadeInUp animated fast delay-0-3s MuiFab-primary')]"
   emergencyfirstName = '//div[@class="viewLayout-viewInput"]//input[@placeholder="First Name"]'
   emergencylastName = '//div[@class="viewLayout-viewInput"]//input[@placeholder="Last Name"]'
   emegencyGender = '//div[@class="viewLayout-viewInput"]//div[@placeholder="Gender"]//button[@title="Open"]//span[@class="MuiIconButton-label"]//*[name()="svg"]'
   emegencyCellPhone = '#cphone'
   emergencyStatedropdown = 'div[placeholder="State"] button[title="Open"]'
   emergencyCity = '//input[@placeholder="City"]'
   emergencyZipCode = '//input[@placeholder="Zip Code"]'
   emergencyAddress = "//div[@placeholder='Address']"
   emergencySaveBtn = "//button[contains(.,'SAVE')]"
   emergencyassertion = "//p[normalize-space()='Emergency Contact Saved']"

   // Employment Information Selectors
   employmentBtn = '//p[normalize-space()="Employment Information"]'
   employmentaddBtn = ":nth-child(4) > .MuiButtonBase-root > .MuiFab-label > .MuiSvgIcon-root > path"
   employmentTypedropdownBtn = "//input[@placeholder='Employment Type']"
   employmentTypeStudentdropdownBtn = "//input[@placeholder='Student']"
   employmentAddress = '//div[@placeholder="Address"]'
   employmentStatedropdown = "//input[@placeholder='State']"
   employmentCity = '//input[@placeholder="City"]'
   employmentZipcode = '//input[@placeholder="Zip Code"]'
   employmentSaveBtn = "(//button[normalize-space(.)='Save'])[2]"
   employmentAssertion = "//p[normalize-space()='Employment Information Saved']"

   // Patient Consent Selectors
   patientConsentBtn = "//p[.='Patient Consent']"
   patientConsentAddBtn = '//div[@role="presentation"]//button[2]//span[1]//*[name()="svg"]'
   patientConsentTypeField = "//div[@id='mui-component-select-ConsentType']"
  //  patientConsentFirstName = "(//input[@placeholder='First Name'])[2]"
   patientConsentLastName = "input[placeholder='Last Name'][name='GrantedByLastName']"
   patientConsentRelationship = "//div[@id='mui-component-select-Relationship']"
   patientConsentnotefield = "//textarea[@placeholder='Enter Note...']"
   patientCreateConsent = "//p[normalize-space()='Create Consent']"
   patientAssert = "//div[@role='alert']"
   test = '[data-value="INF"]'


 // identity information

  getidentityBtn(){
    cy.wait(3000)
    cy.get(this.identityBtn2).click()
  }

  selectFromTypesdropdown(types){  
    cy.wait(1000)
    cy.get(this.input).type('Social')
    cy.get(this.Dropdownullist).find(this.typeOptions).eq(0).contains(types).click()
 }

  typeidnumber(randomNumber) {
    cy.get(this.idNumber).type(randomNumber)
  }

  clickAddIdentityBtn() {
    cy.xpath(this. identityinformationBtn).click()
   }

  assertionToast() {
    cy.xpath(this.identitysavetoast).should('have.text', 'Identity Saved');
  }

  // Insurance Module
  clickInsuranceBtn(){
    cy.xpath(this.clickInsurance).click()
    cy.wait(3000)
    cy.get(this.insuranceAddBtn).click()
  }

  enterInsuranceDetails(company){
    cy.xpath(this.insuranceCompany).type(company)
  }

  enterMemberId(membernum){
    cy.xpath(this.memberfield).type(membernum)
  }

  clickDate(){
    cy.xpath(this.effectiveDate).click()
    cy.xpath(this.calendarDropDown).click()
    cy.xpath(this.yearDropDown).click()
    cy.xpath(this.datedropDown).click()
    cy.xpath(this.addInsuranceBtn).scrollIntoView().click();
   }
  
  
   //Emergency Module
  clickEmergencyBtn(){
    cy.wait(3000)
    cy.xpath(this.emergencyBtn).click()
    cy.xpath(this.emergencyAddBtn).click()
  }

 emergencyFirstName(firstname){
  cy.xpath(this.emergencyfirstName).type(firstname)
 }

 emergencyLastName(lastname){
  cy.xpath(this.emergencylastName).type(lastname)
 
}

 selectGender(){
  const genderOptions = ['Male', 'Female', 'Unknown'];
  const randomIndex = Cypress._.random(0, genderOptions.length - 1);
  const selectedOption = genderOptions[randomIndex];
  cy.xpath(this.emegencyGender).click()
  cy.contains(selectedOption).click({ force: true })
}

enterphoneNumber(phone){
 cy.get(this.emegencyCellPhone).clear().type(phone)
}

enteraddress(address){
 cy.xpath(this.emergencyAddress).clear().type(address)
}

selectState() {
  const randomIndex = Cypress._.random(0, 49);
  cy.xpath(this.emergencyStatedropdown)
    .click() 
    .focus()
    .type('{downarrow}'.repeat(randomIndex)) 
    .type('{enter}');
  cy.get('body').click(); 
}


selectCity(city){
  cy.xpath(this.emergencyCity).clear().type(city, { force: true });
}


enterZipcode(zcode){
  cy.xpath(this.emergencyZipCode).clear().type(zcode)
}

clicksave() {
  cy.xpath(this.emergencySaveBtn).click({ force: true });
}

verifyEmergencySaved(){
  cy.wait(2000)
  cy.xpath(this.emergencyassertion, { timeout: 10000 }).should('contain.text', 'Emergency Contact Saved');
}


// Employement Information

clickOnEmploymentBtn(){
  cy.wait(3000)
  cy.xpath(this.employmentBtn).click()
  cy.get(this.employmentaddBtn).click()
}

selectEmploymentType() {
  const randomIndex = Cypress._.random(1, 5);
  cy.xpath(this.employmentTypedropdownBtn)
    .click() 
    .focus()
    .type('{downarrow}'.repeat(randomIndex)) 
    .type('{enter}');
  cy.get('body').click(); 
}

 selectStudentEmployment() {
  const randomIndex = Cypress._.random(1, 4);
  cy.xpath(this.employmentTypeStudentdropdownBtn)
    .click() 
    .focus()
    .type('{downarrow}'.repeat(randomIndex)) 
    .type('{enter}');
  cy.get('body').click(); 
}


 enterAddress(address){
 cy.xpath(this.employmentAddress).type(address)
 }

 selectState() {
  const randomIndex = Cypress._.random(0, 49);

  cy.xpath(this.employmentStatedropdown)
    .click({force:'true'})
    .focus()
    .type('{downarrow}'.repeat(randomIndex))
    .type('{enter}');
  cy.get('body').click(); 
}


enterCity(city) {
  cy.xpath(this.emergencyCity)
    .clear()
    .type(city);
}


enterZipCode(zipcode) {
  cy.xpath(this.employmentZipcode)
    .clear()
    .type(zipcode);
}



clickSaveBtn() {
  cy.xpath(this.employmentSaveBtn).click();
}


  verifyEmploymentSaved(){
    cy.wait(3000)
    cy.xpath(this.employmentAssertion, { timeout: 10000 }).should('contain.text','Employment Information Saved');
  }

  // Patient Consent

  clickOnPatientConsent(){
    cy.wait(1000)
    cy.xpath(this.patientConsentBtn).click({force:true})
  }

  clickOnAddPatientConsent(){
    cy.wait(3000)
    cy.xpath(this.patientConsentAddBtn).click({force:true})
    
  }

  

  selectConsentType() {
    // Find the <ul> element containing the list items
    cy.xpath(this.patientConsentTypeField).each(($element) => {
      cy.wrap($element).click({ force: true });
    });
    
  }

  

  enterFirstName(Fname) {
    cy.wait(2000)
    cy.get().type(Fname);
  }
  

  enterLastName(Lname) {
    cy.get(this.patientConsentLastName).should('be.visible').type(Lname)
  }

 
//   selectConsentRelationship() {
//     const randomIndex = Cypress._.random(1, 5);
//     cy.xpath(this.patientConsentRelationship)
//       .click() 
//       .focus()
//       .type('{downarrow}'.repeat(randomIndex)) 
//       .type('{enter}');
//     cy.get('body').click(); 
//   }

//   enterNote(notes) {
//     cy.xpath(this.patientConsentnotefield).type(notes)
//   }


//  clickOnCreateConsent(){
//   cy.wait(2000)
//   cy.xpath(this.patientCreateConsent).click()
//  }

//   verifyConsentSaved(){
//     cy.wait(2000)
//     cy.xpath(this.emergencyassertion, { timeout: 10000 }).should('contain.text', 'Consent successfully created');
//   }



  // enteridentityValue(Number) {
  //   cy.get(this.idNumber).type(Number);
  // }

  // // Upload a file
  // fileUpload() {
  //   cy.wait(4000);
  //   cy.get(this.browseBtn).click();
  //   cy.wait(3000);
  //   cy.get(this.browseBtn).attachFile('identity.png');
  // }

  //  click on the add patient identity button



  
}

export default Demography;
