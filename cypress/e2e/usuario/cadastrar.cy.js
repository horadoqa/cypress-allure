const allure = Cypress.Allure.reporter.getInterface();

describe('Cadastrar usuário', () => {
  allure.feature('Usuário');
  allure.story('Cadastro');
  
  it('Deve criar um novo usuário', () => {

      // 1️⃣ Cadastro do usuário
      cy.request({
        method: 'POST',
        url: `${Cypress.env('url')}/usuarios`,
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: {
          nome: "Hora do QA",
          email: Cypress.env('userEmail'),
          password: Cypress.env('userPassword'),
          administrador: "true"
        }
      }).then((response) => {
        expect(response.status).to.eq(201)
        expect(response.body).to.have.property('message')
      })
    })
  })
  