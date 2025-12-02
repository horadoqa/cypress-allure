describe('Cenário 2 - Cadastro → Login', () => {

    it('Cadastro → Login', () => {
  
      // 1️⃣ Cadastro do usuário
      const emailUnico = `horadoqa${Date.now()}@qa.com.br`
      cy.request({
        method: 'POST',
        url: 'https://serverest.dev/usuarios',
        body: {
          nome: "Hora do QA",
          email: emailUnico,
          password: "horadoqa",
          administrador: "true"
        }
      }).then((responseCadastro) => {
  
        // EXPECTS DO CADASTRO
        expect(responseCadastro.status).to.eq(201)
        expect(responseCadastro.body).to.have.property('message', 'Cadastro realizado com sucesso')
        expect(responseCadastro.body).to.have.property('_id')
  
        // 2️⃣ Login do usuário
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
  