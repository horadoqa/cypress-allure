describe('Cenário 1 - Cadastrar usuário', () => {
    it('Deve criar um novo usuário', () => {

      // 1️⃣ Cadastro do usuário
      cy.request({
        method: 'POST',
        url: 'https://serverest.dev/usuarios',
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
  