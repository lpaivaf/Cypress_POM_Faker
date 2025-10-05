//https://fakerjs.dev/guide/usage.html
//npx cypress run --spec "cypress/e2e/register.cy.js"

import RegisterPages from '../fixtures/pages/succesfull_register/index';
import { faker } from '@faker-js/faker';

//const recebe ações a se execultada nos métodos dentro da class RegisterPages
const registerpage = new RegisterPages()

//Faker gera a os dados
const randomName = faker.person.firstName();
const randomLastName = faker.person.lastName();
const randomEmail = faker.internet.email();
const randomPhone = faker.phone.number();
const randomPassword = faker.internet.password();

//Visita a página
beforeEach('Visita página de Cadastro', () => {
  cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');
});

//Os dados são consumidos pelo caso de teste
it('TC01 Realiza cadastro com sucesso!', () => {
  registerpage.name(randomName);
  registerpage.lastName(randomLastName);
  registerpage.email(randomEmail);
  registerpage.phone(randomPhone);
  registerpage.password(randomPassword);
  registerpage.confirmPassword(randomPassword);
  registerpage.agree();
  registerpage.continue();
  registerpage.successfull();
});


