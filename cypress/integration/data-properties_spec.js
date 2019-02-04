import * as selectors from './../support/pages'; // import all objects from pages.js
import { newuser, messages } from './../support/data'; // import 2 objects from data.js
describe('The Cypress test should', function() { //describe is a Mocha function built into Cypress Mocha
    before(() => { // before() is a Mocha function that runs once before all tests 
        cy.visit('/');
    });
    it('identify first name field using data attribute', () => {
        cy.get(selectors.personaldetails.firstNameSelector).type(newuser.firstName);
    });
    it('identify last name field using data attribute', () => {
        cy.get(selectors.personaldetails.lastNameSelector).type(newuser.lastName);
    });
    it('identify email field using data attribute', () => {
        cy.get(selectors.personaldetails.emailSelector).type(newuser.email);
    });
    it('identify next button not disabled using data attribute', () => {
        cy.get(selectors.personaldetails.nextButtonSelector).should('not.have.attr', 'disabled');
    });
    it('be able to click on the next button to navigate to cards page', () => {
        cy.get(selectors.personaldetails.nextButtonSelector).click();
        cy.get(selectors.cardform.titleClassSelector).should('have.text', messages.cardFormTitle);
    })
});