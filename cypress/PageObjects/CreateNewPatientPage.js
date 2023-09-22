
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
    dateofBirth ='[aria-label="Choose date"]'
    createToastBtn = "//div[contains(text(),'Created Patient')]"



    clickpatientBtn(){
      cy.xpath(this.patientsBtn ).click();
    }

    clickpatientplusbtn(){
      cy.get(this.patientManagementAddBtn).click()
    }

    setFirstName(fName){
      cy.get(this.firstName).type(fName)
    }

    setLastName(lName){
      cy.get(this.lastName).type(lName)
    }

    setGender(){
      cy.get(this.gender).click()
      cy.xpath(this.genderOptions).click()

    }

    setCountry(contry){
      cy.get(this.country).type(contry)
    }
    setState(sta){
      cy.get(this.state).type(sta)
    }
    setMarriage(){
      cy.get(this.maritalStatus).click()
      cy.xpath(this.maritalOptions).click()
    }
    setCity(city){
      cy.get(this.city).type(city)
    }

    setDob(dob){
      cy.get(this.dateofBirth).type(dob)
    }

    setAddress(Add){
      cy.get(this.address).type(Add)
    }

    setZipcode(zcode){
      cy.xpath(this.zipCode).type(zcode)
    }

    clickCreateBtn(){
      cy.xpath(this.createBtn).click()
    }

    clickAcceptBtn(){
      // cy.xpath().wait(5000).click()
      cy.xpath(this.acceptBtn, { timeout: 10000 }).click();
      cy.log(this.acceptBtn)

    }

    verfiyCreatedpatient(){
      cy.xpath(this.createToastBtn, { timeout: 10000 }).should('contain.text', 'Created Patient');
    }

}

export default NewPatient




