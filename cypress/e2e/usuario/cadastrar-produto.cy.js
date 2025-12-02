describe('Fluxo encadeado: Cadastro → Login → Cadastro de Produto', () => {

    it('Cadastro de usuário, login e cadastro de produto', () => {
  
      // Primeiro: Cadastro do usuário
      cy.request({
        method: 'POST',
        url: 'https://serverest.dev/usuarios',
        body: {
          nome: "Hora do QA",
          email: `horadoqa${Date.now()}@qa.com.br`, // email único a cada teste
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
            email: responseCadastro.body.email || `horadoqa${Date.now()}@qa.com.br`,
            password: "horadoqa"
          }
        }).then((responseLogin) => {
  
          // EXPECTS DO LOGIN
          expect(responseLogin.status).to.eq(200)
          expect(responseLogin.body).to.have.property('message', 'Login realizado com sucesso')
          expect(responseLogin.body).to.have.property('authorization')
  
          const token = responseLogin.body.authorization
  
          // Cadastro do produto
          const nomeProdutoUnico = `Logitech MX Vertical ${Date.now()}` // garante nome único
  
          cy.request({
            method: 'POST',
            url: 'https://serverest.dev/produtos',
            headers: {
              Authorization: token // passa o token
            },
            body: {
              nome: nomeProdutoUnico,
              preco: 470,
              descricao: "Mouse",
              quantidade: 381
            }
          }).then((responseProduto) => {
            // EXPECTS DO CADASTRO DO PRODUTO
            expect(responseProduto.status).to.eq(201)
            expect(responseProduto.body).to.have.property('message', 'Cadastro realizado com sucesso')
            expect(responseProduto.body).to.have.property('_id')
          })
  
        })
  
      })
  
    })
  
  })
  