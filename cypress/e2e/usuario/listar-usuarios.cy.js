const allure = Cypress.Allure.reporter.getInterface();

describe('Deve listar todos os usuários', () => {
  allure.feature('Usuário');
  allure.story('Login');
  
  it('Deve listar todos os usuários', () => {
    cy.request({
      method: 'GET',
      url: `${Cypress.env('url')}/usuarios`,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.usuarios).to.be.an('array'); 
    });
  });
});
