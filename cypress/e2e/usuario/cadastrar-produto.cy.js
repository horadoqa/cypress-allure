describe('Fluxo encadeado: Cadastro → Login → Cadastro de Produto', () => {

    it('Cadastra usuário, faz login e cadastra produto', () => {
  
      // Variável para email único
      const emailUsuario = `horadoqa${Date.now()}@qa.com.br`;
  
      // 1️⃣ Cadastro do usuário
      cy.request({
        method: 'POST',
        url: 'https://serverest.dev/usuarios',
        body: {
          nome: "Hora do QA",
          email: emailUsuario,
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
            email: emailUsuario, // usa o mesmo email do cadastro
            password: "horadoqa"
          }
        }).then((responseLogin) => {
  
          // EXPECTS DO LOGIN
          expect(responseLogin.status).to.eq(200)
          expect(responseLogin.body).to.have.property('message', 'Login realizado com sucesso')
          expect(responseLogin.body).to.have.property('authorization')
  
          const token = responseLogin.body.authorization
  
          // 3️⃣ Cadastro do produto
          const nomeProdutoUnico = `Logitech MX Vertical ${Date.now()}` // garante nome único
  
          cy.request({
            method: 'POST',
            url: 'https://serverest.dev/produtos',
            headers: {
              Authorization: token
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
  