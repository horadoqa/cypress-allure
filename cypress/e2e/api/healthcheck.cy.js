const allure = Cypress.Allure.reporter.getInterface();

describe('Cenário 1 - HealthCheck', () => {

    allure.feature('API');
    allure.story('Healthcheck');
    
    it('should return 200 OK when accessing serverest.dev', () => {
      cy.request({
        method: 'GET',
        url: 'https://serverest.dev',
        failOnStatusCode: false
      }).should(({ status }) => {
        expect(status).to.equal(200)
      })
    })
  })