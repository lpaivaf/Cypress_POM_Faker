//Importa os caminhos de 'elements' e renomeia 'el'.
import { elements as el } from "./elements";

//Classe onde serão desenvolvidos os métodos.
class RegisterPages {
    //Método 'name' declarado 'randomName' que busca pelo xpath 'firstname' em 'elements' e será populado com informações do Faker. (Todos os métodos a seguir segue a mesma lógica)
    name(randomName) {
        cy.xpath(el.firstname).should('be.visible').type(randomName)
    };
    lastName(randomLastName) {
        cy.xpath(el.lastname).should('be.visible').type(randomLastName)
    };
    email(randomEmail) {
        cy.xpath(el.email).should('be.visible').type(randomEmail)
    };
    phone(randomPhone) {
        cy.xpath(el.phone).should('be.visible').type(randomPhone)
    };
    password(randomPassword) {
        cy.xpath(el.password).should('be.visible').type(randomPassword)
    };
    confirmPassword(randomPassword) {
        cy.xpath(el.confirm).should('be.visible').type(randomPassword)
    };
    agree() {
        cy.xpath(el.agree).should('be.visible').click();
    }
    continue() {
        cy.xpath(el.submmit).should('be.visible').click({ waitForLoad: false });
    }
    successfull() {
        cy.url('eq', 'https://ecommerce-playground.lambdatest.io/index.php?route=account/success');
        cy.get(el.assertion).should('contain.text', 'Your Account Has Been Created!').and('be.visible');
    }
}

export default RegisterPages