# Executando Testes com Cypress e Relatórios do Allure Plugin

Este projeto demonstra como integrar o [cypress-allure-plugin](https://github.com/Shelex/cypress-allure-plugin) para gerar relatórios Allure de testes automatizados com Cypress.

## Pré-requisitos

* [Allure](https://docs.qameta.io/allure/#_get_started)
  Você pode usar a versão clássica baseada em Java ([download aqui](https://github.com/allure-framework/allure2#download)) ou o pacote npm `allure-commandline` ([npm link](https://www.npmjs.com/package/allure-commandline)), que fornece o binário por baixo dos panos.

* [Node.js](https://nodejs.org/) e npm instalados

## Como executar

1. Clone este repositório:

   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd <NOME_DO_PROJETO>
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Execute os testes:

   ```bash
   npm run cy:run
   ```

4. Limpe outputs anteriores (opcional, mas recomendado):

   ```bash
   npm run allure:clear
   ```

5. Gere o relatório Allure:

   ```bash
   npm run allure:report
   ```

6. Abra o relatório em seu navegador:

   ```bash
   allure open
   ```

## Sobre o Allure Report

* O relatório é gerado automaticamente a cada push via GitHub Actions. Veja a configuração em [.github/workflows/allure.yaml](.github/workflows/allure.yaml).
* Dados históricos são preservados, permitindo visualizar tendências e gráficos detalhados.
* O relatório também está hospedado no GitHub Pages: [Allure Report](https://shelex.github.io/cypress-allure-plugin-example/allure-report)

---