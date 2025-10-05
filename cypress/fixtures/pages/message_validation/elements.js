export const elements = {
    // Mapeamento de seletores dos elementos
    name: '#input-firstname',
    lastName: '#input-lastname',
    email: '#input-email',
    phone: '#input-telephone',
    password: '#input-password',
    confirm: '#input-confirm',
    agree: "//label[@for='input-agree']",
    submmit: '//div[@class="float-right"]//input[@class="btn btn-primary"]',

    // Mensagens específicas de erro
    errorName: '#input-firstname + .text-danger',
    errorLastName: '#input-lastname + .text-danger',
    errorEmail: '#input-email + .text-danger',
    errorPhone: '#input-telephone + .text-danger',
    errorPassword: '#input-password + .text-danger',
    errorConfirm: '#input-confirm + .text-danger',
    errorAgree: 'label[for="input-agree"] + .alert-danger'
}