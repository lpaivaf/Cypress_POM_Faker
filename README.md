# Casos de Testes com Cypress, POM e Faker

Este projeto contém a automação de testes de cadastro de usuários **Cypress**, aplicando o padrão **Page Object Model (POM)** e a biblioteca **Faker** para geração de dados dinâmicos.
O objetivo é validar o formulário de cadastro no site [Ecommerce Playground](https://ecommerce-playground.lambdatest.io/index.php?route=account/register) con sucesso e também validações negativas.

---

## Tecnologias Utilizadas

* [Cypress](https://www.cypress.io/) – Framework de testes E2E.
* [Faker.js](https://fakerjs.dev/) – Geração de dados aleatórios (nomes, e-mails, telefones, senhas).
* **Page Object Model (POM)** – Organização dos testes em classes e métodos reutilizáveis.

---

## Estrutura do Projeto

```
cypress/
 ├─ e2e/
 │   └─ messages.cy.js
 │   └─ register.cy.js    # Arquivos principais com os casos de teste
 ├─ fixtures/
 │   └─ pages/
 │       └─ message_validation/
 │       │   ├─ index.js   # Classe
 │       │   └─ elements.js  # Mapeamento dos seletores dos elementos
 │       └─ successfull_register/ 
 │           ├─ index.js    
 │           └─ elements.js 
```

---

## Casos de Teste Implementados

### register.cy.js

* **TC01** Realiza cadastro com sucesso!

### messages.cy.js

* **TC01** – Validação campo "First Name" em branco.
* **TC02** – Validação campo "Last Name" em branco.
* **TC03** – Validação campo "E-mail" em branco.
* **TC04** – Validação campo "Phone" em branco.
* **TC05** – Validação campo "Password" em branco.
* **TC06** – Validação campo "Confirm Password" em branco.
* **TC07** – Validação checkbox "Agree" em branco.

Cada caso de teste consome dados gerados dinamicamente pelo **Faker**, garantindo que os testes não fiquem dependentes de dados fixos.

---

## ▶️ Como Executar o Projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### 2. Instalar as dependências

```bash
npm install
```

### 3. Executar os testes

* Modo interativo (Cypress UI):

```bash
npx cypress open
```

* Modo headless (terminal):

```bash
npx cypress run --spec "cypress/e2e/messages.cy.js"
```

---

## Observações

* Os seletores estão centralizados no arquivo `elements.js`, facilitando manutenção.
* A classe `Message_Validation` contém métodos que encapsulam interações e validações.
* O uso do **Faker** garante maior robustez e realismo nos cenários de teste.

---

## 📄 Licença

Este projeto é de uso livre para fins de estudo e prática em automação de testes.
