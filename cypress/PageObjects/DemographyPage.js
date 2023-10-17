
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
  identityBtn2= '.jss480 > :nth-child(4) > .MuiButtonBase-root'
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
   emergencyBtn = ".jss401 > :nth-child(4) > .MuiTypography-root"
   emergencyAddBtn = ".jss480 > :nth-child(4) > .MuiButtonBase-root"
   emegencyfirstName = '//div[@class="viewLayout-viewInput"]//input[@placeholder="First Name"]'
   emegencylastName = '//div[@class="viewLayout-viewInput"]//input[@placeholder="Last Name"]'
   emegencyGender = '//div[@class="viewLayout-viewInput"]//div[@placeholder="Gender"]//button[@title="Open"]//span[@class="MuiIconButton-label"]//*[name()="svg"]'
   emegencyCellPhone = '#cphone'
   emergencyStatedropdown = 'div[placeholder="State"] button[title="Open"]'
   emergencyCity = '//input[@placeholder="City"]'
   emergencyZipCode = '//input[@placeholder="Zip Code"]'
   emergencyAddress = "//div[@placeholder='Address']"
   emergencySaveBtn = "//button[contains(.,'SAVE')]"
   emergencyassertion = "//p[normalize-space()='Emergency Contact Saved']"


   // Employment Information
   employmentBtn = ".jss401 > :nth-child(5) > .MuiTypography-root"
   employmentaddBtn = ".jss502 > .MuiButtonBase-root"
   employmentTypedropdownBtn = '//div[@placeholder="Employment Type"]//button[@title="Open"]//span[@class="MuiIconButton-label"]'
   employmentTypeStudentdropdownBtn = '//div[@placeholder="Student"]//button[@title="Open"]//span[@class="MuiIconButton-label"]'
   employmentAddress = '//div[@placeholder="Address"]'
   employmentStatedropdown = "//div[@placeholder='State']//button[@title='Open']"
   employmentCity = '//input[@placeholder="City"]'
   employmentZipcode = '//input[@placeholder="Zip Code"]'
   employmentSaveBtn = "//button[contains(.,'SAVE')]"
   employmentAssertion = "//p[normalize-space()='Employment Information Saved']"


 // identity information

  getidentityBtn(){
    cy.wait(3000)
    cy.get(this.identityBtn2).click()
  }

  selectFromTypesdropdown(types){  
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
    cy.get(this.emergencyBtn).click()
    cy.get(this.emergencyAddBtn).click()
  }

 enterFirstName(fname){
  cy.xpath(this.emegencyfirstName).type(fname)
 }

 enterLastName(lname){
  cy.xpath(this.emegencylastName).type(lname)
 
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
  // const randomIndex = Cypress._.random(0, 49);
  cy.get(this.emergencyStatedropdown)
    .click() 
  //   .focus()
  //   .type('{downarrow}'.repeat(randomIndex)) 
  //   .type('{enter}');
  // cy.get('body').click(); 
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
  cy.get(this.employmentBtn).click()
  cy.get(this.employmentaddBtn).click()
}

selectEmploymentType() {
  const randomIndex = Cypress._.random(1, 5);
  cy.get(this.employmentTypedropdownBtn)
    .click() 
    .focus()
    .type('{downarrow}'.repeat(randomIndex)) 
    .type('{enter}');
  cy.get('body').click(); 
}

 selectStudentEmployment() {
  const randomIndex = Cypress._.random(1, 4);
  cy.get(this.employmentTypeStudentdropdownBtn)
    .click() 
    .focus()
    .type('{downarrow}'.repeat(randomIndex)) 
    .type('{enter}');
  cy.get('body').click(); 
}


 selectAddress(add){
 cy.xpath().clear().type(add)
 }

 selectState() {
  const randomIndex = Cypress._.random(0, 49);
  cy.get(this.employmentStatedropdown)
    .click() 
    .focus()
    .type('{downarrow}'.repeat(randomIndex)) 
    .type('{enter}');
  cy.get('body').click(); 
}

 enterCity(city) {
 cy.xpath(this.emergencyCity).clear().type(city)
 }

  enterZipCode(zipcode) {
    cy.xpath(this.employmentZipcode).type(zipcode)
  }


  clickSaveBtn() {
    cy.xpath(this.employmentSaveBtn).click()
  }

  verifyEmploymentSaved(){
    cy.wait(1000)
    cy.xpath(this.emergencyassertion, { timeout: 10000 }).should('contain.text','Employment Information Saved');
  }




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
