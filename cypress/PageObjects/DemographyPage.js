
class Demography {

    patientName = "//p[normalize-space()='Kakulu, Ahmed']"
    patientsBtn = "//img[@alt='patient']"
    demography = "//span[normalize-space()='View Demography']"
    identitybtn = ".jss565 > :nth-child(4)>.MuiButtonBase-root"
    Typedropdown = "//div[@placeholder='Type']"
    IdNumber = "input[placeholder='ID Number/Value']"


    clickPatientNamebtn() {
      cy.debug()
        cy.xpath(this.patientsBtn).click();
      }

    pickPatient() {
        cy.xpath(this.patientName).click();
      }

    clickDemography() {
        cy.xpath(this.demography).click();
      }

    clickidentitybtn() {
      cy.wait(5000)
        cy.get(this.identitybtn).click();
      }
    
      typeDropdown(){
        cy.wait(3000)
        cy.xpath(this.Typedropdown).click()
      }

      entervalue(data){
        cy.wait(3000)
        cy.get(this.IdNumber).type(data)
      }

} export default Demography