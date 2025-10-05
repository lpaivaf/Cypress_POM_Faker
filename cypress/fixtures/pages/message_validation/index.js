import { cy } from "@faker-js/faker";
import { elements as el } from "./elements";

class Message_Validation {
    name(firstName) {
        cy.get(el.name).should('be.visible').type(firstName);
    }
    lastName(lastName) {
        cy.get(el.lastName).should('be.visible').type(lastName);
    }
    email(email) {
        cy.get(el.email).should('be.visible').type(email);
    }
    phone(phone) {
        cy.get(el.phone).should('be.visible').type(phone);
    }
    password(password) {
        cy.get(el.password).should('be.visible').type(password);
    }
    confirmPassword(password) {
        cy.get(el.confirm).should('be.visible').type(password);
    }
    agree() {
        cy.xpath(el.agree).should('be.visible').click();
    }
    continue() {
        cy.xpath(el.submmit).should('be.visible').click();
    }
    validateFieldError(selector, expectedText) {
        cy.get(selector, { timeout: 5000 })
            .should('contain.text', expectedText)
            .and('be.visible');
    }
    scrollTop() {
        cy.scrollTo('top');
        cy.wait(2000);
    }
};

export default Message_Validation