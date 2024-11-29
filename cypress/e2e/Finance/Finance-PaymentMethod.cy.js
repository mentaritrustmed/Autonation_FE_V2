describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://his-test.trustmedis.net/');

    cy.get('#login-username').type('nusadua');
    cy.get('#login-password').type('password');
    cy.get('#submit').click();

    cy.get(':nth-child(2) > #MENU_SETTING').click();
    cy.get('#ext-comp-1295 > .x-btn-large > :nth-child(2) > .x-btn-mc > .x-btn-arrow').click();
    cy.get('#ext-comp-1193').click();
    
    // // menambah data
    // cy.get('#ext-gen262').click();
    // // mengisi data
    // cy.get('#ext-comp-1334').type('7482');
    // cy.get('#ext-comp-1335').type('TEST');
    // cy.get('#ext-comp-1337').type('PERSONAL');
    // cy.get('#ext-comp-1336').type('CASH');
    // cy.get('#ext-gen332').click();
    // cy.get(':nth-child(2) > span > b').click();

    // cy.get('#ext-comp-1345 > .x-btn-small > :nth-child(2) > .x-btn-mc').click();
    // cy.get('#ext-comp-1032 > .x-btn-small > :nth-child(2) > .x-btn-mc').click();

    // cy.get('.x-grid3-row-first > .x-grid3-row-table > tbody > tr > .x-grid3-td-0 > .x-grid3-cell-inner > .x-action-col-1').click();
    // cy.get('#ext-comp-1033 > .x-btn-small > :nth-child(2) > .x-btn-mc').click();

    // cy.get('#ext-comp-1032 > .x-btn-small > :nth-child(2) > .x-btn-mc').click();

    // search
    cy.get('#ext-comp-1306').type('cashless');
    cy.get('#ext-gen271').click();

    // refresh
    cy.get('#ext-gen264').click();
    
  });
});