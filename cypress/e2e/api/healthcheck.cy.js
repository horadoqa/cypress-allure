const allure = Cypress.Allure.reporter.getInterface();

describe('HealthCheck', () => {

    allure.feature('API');
    allure.story('Healthcheck');

    it('should return 200 OK when accessing serverest.dev', () => {
      cy.request({
        method: 'GET',
        url: `${Cypress.env('url')}`,
        failOnStatusCode: false
      }).should(({ status }) => {
        expect(status).to.equal(200)
      })
    })
  })