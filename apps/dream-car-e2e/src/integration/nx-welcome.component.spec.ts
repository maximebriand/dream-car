describe('dream-car', () => {
  beforeEach(() => cy.visit('/iframe.html?id=nxwelcomecomponent--primary'));
  it('should render the component', () => {
    cy.get('dream-car-nx-welcome').should('exist');
  });
});