//npx cypress run --spec "cypress/e2e/messages.cy.js"

//Importaçãoes
import Message_Validation from '../fixtures/pages/message_validation/index';
import { faker } from '@faker-js/faker';
import { elements as el } from "../fixtures/pages/message_validation/elements";

//Atribuição da classe 'Message_Validation'
const assertions = new Message_Validation();

//Geração de dados pelo Faker
const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const email = faker.internet.email();
const phone = faker.phone.number()
const password = faker.internet.password();

beforeEach('Carrega a Página', () => {
    cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/register', {
        timeout: 90000,
        failOnStatusCode: false
    });
})

// Casos de testes
//Consumo dos dados gerados pelo Faker em cada caso de teste
it('TC01 - Campo "First-Name" em branco', () => {
    assertions.lastName(lastName);
    assertions.email(email);
    assertions.phone(phone);
    assertions.password(password);
    assertions.confirmPassword(password);
    assertions.agree();
    assertions.continue();
    assertions.validateFieldError(el.errorName, 'First Name must be between 1 and 32 characters!');
});

it('TC02 - Campo "Last-Name" em branco', () => {
    assertions.name(firstName);
    assertions.email(email);
    assertions.phone(phone);
    assertions.password(password);
    assertions.confirmPassword(password);
    assertions.agree();
    assertions.continue();
    assertions.validateFieldError(el.errorLastName, 'Last Name must be between 1 and 32 characters!');
});

it('TC03 - Campo "E-mail" em branco', () => {
    assertions.name(firstName);
    assertions.lastName(lastName);
    assertions.phone(phone);
    assertions.password(password);
    assertions.confirmPassword(password);
    assertions.agree();
    assertions.continue();
    assertions.validateFieldError(el.errorEmail, 'E-Mail Address does not appear to be valid!');
});

it('TC04 - Campo "Phone" em branco', () => {
    assertions.name(firstName);
    assertions.lastName(lastName);
    assertions.email(email);
    assertions.password(password);
    assertions.confirmPassword(password);
    assertions.agree();
    assertions.continue();
    assertions.validateFieldError(el.errorPhone, 'Telephone must be between 3 and 32 characters!');
});

it('TC05 - Campo "Password" em branco', () => {
    assertions.name(firstName);
    assertions.lastName(lastName);
    assertions.email(email);
    assertions.phone(phone);
    assertions.confirmPassword(password);
    assertions.agree();
    assertions.continue();
    assertions.validateFieldError(el.errorPassword, 'Password must be between 4 and 20 characters!');
});

it('TC06 - Campo "Confirm Password" em branco', () => {
    assertions.name(firstName);
    assertions.lastName(lastName);
    assertions.email(email);
    assertions.phone(phone);
    assertions.password(password);
    assertions.agree();
    assertions.continue();
    assertions.validateFieldError(el.errorConfirm, 'Password confirmation does not match password!');
});

it('TC07 - Checkbox "Agree" em branco', () => {
    assertions.name(firstName);
    assertions.lastName(lastName);
    assertions.email(email);
    assertions.phone(phone);
    assertions.password(password);
    assertions.confirmPassword(password);
    assertions.continue();
    assertions.scrollTop();
    assertions.validateFieldError(el.errorAgree, ' Warning: You must agree to the Privacy Policy!');
});