describe('Cenário 2 - Login', () => {
    it('Deve realizar login com sucesso', () => {
      cy.request({
        method: 'POST',
        url: 'https://serverest.dev/login',
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: {
          email: "horadoqa@qa.com.br",
          password: "horadoqa"
        }
      }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('message', 'Login realizado com sucesso')
        expect(response.body).to.have.property('authorization')
      })
    })
  })
  