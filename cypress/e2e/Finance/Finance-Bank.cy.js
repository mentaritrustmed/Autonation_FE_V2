describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://his-test.trustmedis.net/');

    cy.get('#login-username').type('nusadua');
    cy.get('#login-password').type('password');
    cy.get('#submit').click();

    cy.get(':nth-child(2) > #MENU_SETTING').click();
    cy.get('#ext-comp-1295 > .x-btn-large > :nth-child(2) > .x-btn-mc > .x-btn-arrow').click();
    cy.get('#ext-comp-1191').click();
    

  });
});