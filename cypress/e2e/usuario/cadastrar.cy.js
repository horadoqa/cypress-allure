describe('Criar usuário via API', () => {
    it('Deve criar um novo usuário', () => {
      cy.request({
        method: 'POST',
        url: 'https://serverest.dev/usuarios',
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: {
          nome: "Hora do QA 2",
          email: "horadoqa2@qa.com.br",
          password: "horadoqa",
          administrador: "true"
        }
      }).then((response) => {
        expect(response.status).to.eq(201)
        expect(response.body).to.have.property('message')
      })
    })
  })
  