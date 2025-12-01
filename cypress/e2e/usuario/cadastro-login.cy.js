describe('Fluxo encadeado', () => {

    it('Cadastro → Login', () => {
  
      // Primeiro: Cadastro
      cy.request({
        method: 'POST',
        url: 'https://serverest.dev/usuarios',
        body: {
          nome: "Hora do QA",
          email: "horadoqa@qa.com.br",
          password: "horadoqa",
          administrador: "true"
        }
      }).then((responseCadastro) => {
  
        // EXPECTS DO CADASTRO
        expect(responseCadastro.status).to.eq(201)
        expect(responseCadastro.body).to.have.property('message', 'Cadastro realizado com sucesso')
        expect(responseCadastro.body).to.have.property('_id')
  
        // Depois: Login
        cy.request({
          method: 'POST',
          url: 'https://serverest.dev/login',
          body: {
            email: "horadoqa@qa.com.br",
            password: "horadoqa"
          }
        }).then((responseLogin) => {
  
          // EXPECTS DO LOGIN
          expect(responseLogin.status).to.eq(200)
          expect(responseLogin.body).to.have.property('message', 'Login realizado com sucesso')
          expect(responseLogin.body).to.have.property('authorization')
  
        })
      })
    })
  
  })
  