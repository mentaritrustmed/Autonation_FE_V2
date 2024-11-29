describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://his-test.trustmedis.net/');

    cy.get('#login-username').type('nusadua');
    cy.get('#login-password').type('password');
    cy.get('#submit').click();

    cy.get(':nth-child(2) > #MENU_SETTING').click();
    cy.get('#ext-comp-1295 > .x-btn-large > :nth-child(2) > .x-btn-mc > .x-btn-arrow').click();
    cy.get('#ext-comp-1192').click();
    
    // // menambah data
    // cy.get('#ext-gen262').click();

    // // mengisi data
    // cy.get('#ext-comp-1335').type('nusa dua');
    // cy.get('.search-item > span > b').click();

    // cy.get('#ext-gen326').click();
    // cy.get('#ext-gen380 > .x-combo-selected > span > b').click();

    // cy.get('#ext-comp-1338').type('12D34');

    // cy.get('#ext-comp-1339').type('3D41');

    // cy.get('#ext-comp-1340').type('TESTING');

    // cy.get('#ext-comp-1348 > .x-btn-small > :nth-child(2) > .x-btn-mc').click();

    // cy.get('#ext-comp-1032 > .x-btn-small > :nth-child(2) > .x-btn-mc').click();

    // // delet data
    // cy.get('.x-grid3-row-first > .x-grid3-row-table > tbody > tr > .x-grid3-td-0 > .x-grid3-cell-inner > .x-action-col-1').click();
    // cy.get('#ext-comp-1033 > .x-btn-small > :nth-child(2) > .x-btn-mc').click();

    // search
    cy.get('#ext-comp-1306').type('test');
    cy.get('#ext-gen271').click();

    // resfresh
    cy.get('#ext-gen264').click();

  });
});