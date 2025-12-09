const allure = Cypress.Allure.reporter.getInterface();

describe('Login Inválido', () => {
  
  before(() => {
    allure.feature('Usuário');
    allure.story('Login');

    // garantir que variáveis estão definidas
    expect(Cypress.env('emailInvalido')).to.be.a('string');
    expect(Cypress.env('passwordInvalido')).to.be.a('string');
  });
  
  it('Não deve realizar login', () => {

    allure.startStep('Enviar requisição com credenciais inválidas');

    const bodyRequest = {
      email: Cypress.env('emailInvalido'),
      password: Cypress.env('userPassword')
    };

    allure.attachment('Request Body', JSON.stringify(bodyRequest), 'application/json');

    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/login',
      failOnStatusCode: false,
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: bodyRequest
    }).should((response) => {

      allure.startStep('Validar resposta');
      allure.attachment('Response Body', JSON.stringify(response.body), 'application/json');

      expect(response.status).to.eq(401);
      expect(response.body).to.have.property('message', 'Email e/ou senha inválidos');

      allure.endStep();
    });

    allure.endStep();
  });
});
