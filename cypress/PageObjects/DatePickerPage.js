

class DatePicker {
    dateOfBirthInputField = "//input[@aria-label='Choose date']"
    calendar = ".MuiDateCalendar-root"
    prevBtn = "button[title='Previous month']"
    nextBtn = "button[title='Next month']"


    getDatePicker(){
        cy.xpath(this.dateOfBirthInputField)
    }

    getCalendar(){
        cy.get(this.calendar)
    }
    getprevbutton(){
        cy.get(this.prevBtn)
    }

    getnextbutton(){
        cy.get(this.nextBtn)
    }
    
    getMonthName(){
        cy.get(this.nextBtn)
    }

    getYearName(){
        cy.get(this.nextBtn)
    }

    getCalendarDays(){
        cy.get(this.nextBtn)
    }
}