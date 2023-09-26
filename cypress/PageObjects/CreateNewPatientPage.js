
class NewPatient {
    patientsBtn = "//img[@alt='patient']"
    patientManagementAddBtn = ".svg-inline--fa.fa-plus"
    firstName ="#firstname"
    lastName = "#lastname"
    gender = "#gender"
    genderOptions = "//li[@id='gender-option-1']"
    maritalOptions = "//li[@id='maritalstatus-option-2']"
    country = "#country"
    state = "#pstate"
    city = "#city"
    address = 'input[name="addr1"]'
    zipCode = "//input[@id='zip']"
    createBtn = "//span[normalize-space()='Create Patient']"
    acceptBtn = "//span[normalize-space()='Accept']"
    maritalStatus = "#maritalstatus"
    dateofBirth = "//button[@aria-label='Choose date']//*[name()='svg']"
    createToastBtn = "//div[contains(text(),'Created Patient')]"
    countrydropdown = '//div[@placeholder="Country"]//button[@title="Open"]'
    countryOfChoice = "//li[@id='country-option-239']"
    stateOfChoice = "//li[@id='pstate-option-47']"



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

    setGender(){
      cy.get(this.gender).click()
      cy.xpath(this.genderOptions).click()

    }

    setCountry(){
      // cy.get(this.country).clear()
      cy.xpath(this.countrydropdown)
  .should('be.visible')
  .should('be.enabled')
  .click({ force: true });
      cy.xpath(this.countryOfChoice).click()
     
      
    }
    setState(){
      cy.get(this.state).click()
      cy.xpath(this.stateOfChoice).click()
    }
    setMarriage(){
      cy.get(this.maritalStatus).click()
      cy.xpath(this.maritalOptions).click()
    }
    setCity(city){
      cy.get(this.city).clear().type(city)
    }

    setDob(){
      cy.xpath(this.dateofBirth).click()
      cy.wait(2000)
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




