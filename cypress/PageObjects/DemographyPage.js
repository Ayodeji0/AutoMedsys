
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
  // Click the Patients button
  clickPatientNameBtn() {
    cy.xpath(this.patientsBtn).click();
  }

  // Pick a patient
  pickPatient() {
    cy.xpath(this.patientName).click();
  }

  // Click the View Demography button
  clickDemography() {
    cy.xpath(this.demography).click();
  }

  // Click the Identity button
  clickIdentityBtn() {
    cy.wait(5000);
    cy.get(this.identityBtn).click();

  }

  // Select a value from the Type dropdown



  // selectFromTypesdropdown() {
  //   cy.get(this.dropdownfirstbtn).click();
  //   cy.get(this.typeDropdown, { timeout: 20000 }).should('exist').should('be.visible').each(($li) => {
  //     const listItemText = $li.text().trim();
  //     cy.log(listItemText)
  //     if (listItemText == "Driver's") {
  //       cy.wrap($li).click(); 
  //     }
  //   });
  // }
  
   selectFromTypesdropdown(types){  
      cy.get(this.input).type('Social')
      cy.get(this.Dropdownullist).find(this.typeOptions).eq(0).contains(types).click()
   }

  // Enter an ID number or value

  enteridentityValue(Number) {
    cy.get(this.idNumber).type(Number);
  }

  // Upload a file
  fileUpload() {
    cy.wait(4000);
    cy.get(this.browseBtn).click();
    cy.wait(3000);
    cy.get(this.browseBtn).attachFile('identity.png');
  }

  //  click on the add patient identity button
  clickAddIdentityBtn() {
   cy.xpath(this. identityinformationBtn).click()
  }

  assertionToast() {
    cy.xpath(this.identitysavetoast).should('have.text', 'Identity Saved');
  }
  
}

export default Demography;
