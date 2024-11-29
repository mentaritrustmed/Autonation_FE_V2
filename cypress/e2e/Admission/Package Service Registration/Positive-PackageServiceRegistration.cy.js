describe('Admission Module Test', () => {
  // Setup before each test
  beforeEach(() => {
    cy.visit('https://his-test.trustmedis.net/');

    // Login
    const username = Cypress.env('USERNAME');
    const password = Cypress.env('PASSWORD');

    cy.get('#login-username').type(username);
    cy.get('#login-password').type(password);
    cy.get('#submit').click();

    // Masuk ke modul admission
    cy.wait(1000);
    cy.get(':nth-child(4) > #MENU_ADMISI')
      .should('be.visible') // Pastikan elemen terlihat
      .click();

    // Navigasi ke Package Service Registration
    cy.get('#ext-comp-1155 > .x-btn-large > :nth-child(2) > .x-btn-mc > .x-btn-arrow')
      .should('be.visible') // Pastikan elemen terlihat
      .click();
    cy.get('#ext-comp-1135')
      .should('be.visible') // Pastikan elemen terlihat
      .click();

  });

  // it('Positive Test Case - Adding Patient Data Who Has Visited Before', () => {
  //     // Menambah data
  //     cy.get('#ext-comp-1244 > .x-btn-small > :nth-child(1) > .x-btn-tc', { timeout: 10000 })
  //         .should('be.visible') // Tunggu hingga elemen terlihat
  //         .click();

  //     // Tab Patient
  //     cy.get('#ext-comp-1286 > .x-btn-small > :nth-child(1) > .x-btn-tc')
  //         .should('be.visible') // Pastikan elemen terlihat
  //         .click();

  //     // Cari patient menggunakan Name
  //     cy.get('#ext-comp-1583')
  //         .type('afifa')
  //         .should('have.value', 'afifa'); // Validasi input berhasil

  //     cy.get('#ext-comp-1587 > .x-btn-small > :nth-child(2) > .x-btn-mc')
  //         .should('be.visible') // Pastikan tombol terlihat
  //         .click(); // Klik Search

  //     cy.get('#ext-gen902 > .x-grid3-row-first > .x-grid3-row-table > tbody > tr > .x-grid3-td-1 > .x-grid3-cell-inner')
  //         .should('be.visible') // Pastikan hasil pencarian terlihat
  //         .click();

  //     // Tab Payment
  //     cy.get('#mcuregistration-navbtn1 > .x-btn-small > :nth-child(1) > .x-btn-tc')
  //         .should('be.visible') // Pastikan tombol terlihat
  //         .click();

  //     // Tab Service 
  //     cy.get('#mcuregistration-navbtn2 > .x-btn-small > :nth-child(1) > .x-btn-tc')
  //         .should('be.visible') // Pastikan tombol terlihat
  //         .click();

  //     // Pilih Package Category
  //     cy.get('#ext-comp-1342')
  //         .type('PACKAGE ALLACARTE')
  //         .should('have.value', 'PACKAGE ALLACARTE'); // Validasi input berhasil
  //     cy.get('.x-combo-list-item')
  //         .contains('PACKAGE ALLACARTE')
  //         .should('be.visible') // Pastikan elemen terlihat
  //         .click();

  //     // Pilih Package
  //     cy.get('#ext-comp-1341')
  //         .click();
  //     cy.get('#ext-gen972 > .x-combo-list-item')
  //         .should('be.visible') // Pastikan elemen terlihat
  //         .click();

  //     // Tab Cashier
  //     cy.get('#mcuregistration-navbtn3 > .x-btn-small > :nth-child(3) > .x-btn-bc').click();
  //     cy.get('#ext-comp-1172 > .x-btn-small > :nth-child(1) > .x-btn-tc')
  //         .should('be.visible') // Pastikan tombol terlihat
  //         .click();
  //     cy.get('#ext-gen1016').click();
  //     cy.get('#ext-gen1046 > :nth-child(3)').click();
  //     cy.get('#ext-comp-1190 > .x-btn-small > :nth-child(2) > .x-btn-mc').click();

  //     // Save Data
  //     cy.get('#ext-comp-1280 > .x-btn-small > :nth-child(3) > .x-btn-bc').click();

  //     // Confirmation
  //     cy.get('#ext-gen29')
  //         .should('be.visible')
  //         .and('contain', 'Confirmation');
  //     cy.get('#ext-comp-1033 > .x-btn-small > :nth-child(2) > .x-btn-mc').click();

  //     cy.get('#ext-gen29')
  //         .should('be.visible')
  //         .and('contain', 'Queue Confirmation');
  //     cy.get('#ext-comp-1033 > .x-btn-small > :nth-child(2) > .x-btn-mc').click();

  // });
  // it('Positive Test Case - Filtering and Managing Patient Data', () => {
  //     // Melakukan pencarian
  //     cy.get('#ext-comp-1263').type('27A6.000097'); // Mencari menggunakan Registration Number

  //     // Memulihkan kembali data
  //     cy.get('#ext-gen528').click();

  //     // Mencari data menggunakan filter (case ini menggunakan tanggal)
  //     cy.get('#ext-comp-1247 > .x-btn-small > :nth-child(1) > .x-btn-tc').click();
  //     cy.get('#ext-gen810').click();
  //     cy.get(':nth-child(1) > :nth-child(6) > .x-date-date > em > span').click();
  //     // Mencari data menggunakan filter (case ini menggunakan gender)
  //     cy.get('#ext-gen834').click();
  //     cy.get('#ext-gen868 > :nth-child(3)').click();

  //     // Apply
  //     cy.get('#ext-comp-1459 > .x-btn-small > :nth-child(1) > .x-btn-tc').click();

  //     // Reset Filter
  //     cy.get('#ext-comp-1460 > .x-btn-small > :nth-child(1) > .x-btn-tc').click();

  //     // Hapus Data (data yang dapat di hapus adalah data yang belum melakukan transaksi)
  //     cy.get('.x-grid3-row-last > .x-grid3-row-table > tbody > tr > .x-grid3-td-0 > .x-grid3-cell-inner > .x-action-col-1').click();
  //     cy.get('#ext-gen29')
  //         .should('be.visible')
  //         .and('contain', 'Confirmation');
  //     cy.get('#ext-comp-1033 > .x-btn-small > :nth-child(2) > .x-btn-mc').click();
  //     cy.get('#ext-gen42').type('Delete data');
  //     cy.get('#ext-comp-1032 > .x-btn-small > :nth-child(2) > .x-btn-mc').click();
  // });

  it('Positive Test Case ', () => {
    // List Patient Booking
    cy.get('#ext-comp-1264 > .x-btn-small > :nth-child(1) > .x-btn-tc')
      .click();
    cy.wait(1000);
    cy.get('.x-grid3-row-first > .x-grid3-row-table > tbody > tr > .x-grid3-td-1 > .x-grid3-cell-inner > .x-action-col-icon')
      .click();
    // Save
    cy.get('#ext-comp-1280 > .x-btn-small > :nth-child(1) > .x-btn-tc').click();
    cy.get('#ext-gen29')
      .should('be.visible')
      .and('contain', 'Confirmation');
    cy.get('#ext-comp-1033 > .x-btn-small > :nth-child(2) > .x-btn-mc').click();
    cy.get('#ext-gen29')
      .should('be.visible')
      .and('contain', 'Queue Confirmation');
    cy.get('#ext-comp-1033 > .x-btn-small > :nth-child(2) > .x-btn-mc').click();
  });
});
