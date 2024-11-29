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
    cy.get('#ext-comp-1134')
      .should('be.visible') // Pastikan elemen terlihat
      .click();

  });
  // it('Positive Test Case - Adding Patient Data Who Has Visited Before', () => {
  //   // Menambah data
  //   cy.get('#ext-comp-1262 > .x-btn-small > :nth-child(1) > .x-btn-tc', { timeout: 10000 })
  //     .should('be.visible') // Tunggu hingga elemen terlihat
  //     .click();

  //   // Tab Patient
  //   cy.get('#ext-comp-1447 > .x-btn-small > :nth-child(3) > .x-btn-bc')
  //     .should('be.visible') // Pastikan elemen terlihat
  //     .click();

  //   // Cari patient menggunakan Name
  //   cy.get('#ext-comp-1414')
  //     .type('fika')
  //     .should('have.value', 'fika'); // Validasi input berhasil

  //   cy.get('#ext-comp-1421 > .x-btn-small > :nth-child(3) > .x-btn-bc')
  //     .should('be.visible') // Pastikan tombol terlihat
  //     .click(); // Klik Search

  //   cy.get('.x-grid3-row-first > .x-grid3-row-table > tbody > tr > .x-grid3-td-1 > .x-grid3-cell-inner > .x-action-col-icon')
  //     .should('be.visible') // Pastikan hasil pencarian terlihat
  //     .click();

  //   // Tab Payment
  //   cy.get('#medicalKitregistration-navbtn1 > .x-btn-small > :nth-child(1) > .x-btn-tc')
  //     .should('be.visible') // Pastikan tombol terlihat
  //     .click();

  //   // Tab Service 
  //   cy.get('#medicalKitregistration-navbtn2 > .x-btn-small > :nth-child(3) > .x-btn-bc')
  //     .should('be.visible') // Pastikan tombol terlihat
  //     .click();

  //   // Tambah produk
  //   cy.get('#ext-comp-1499 > .x-btn-small > :nth-child(3) > .x-btn-bc').click();
  //   cy.get('#medicalKitRegistrationObservationNameEditor')
  //     .type('BLOOD GROUP AND RHESUS');
  //   cy.get('.search-item > :nth-child(3)')
  //     .contains('BLOOD GROUP AND RHESUS')
  //     .should('be.visible')
  //     .click();
  //   cy.get('#ext-comp-1612 > .x-btn-small > :nth-child(2) > .x-btn-mc').click();

  //   // Tab Cashier
  //   cy.get('#medicalKitregistration-navbtn3 > .x-btn-small > :nth-child(1) > .x-btn-tc').click();
  //   cy.get('#ext-comp-1170 > .x-btn-small > :nth-child(3) > .x-btn-bc')
  //     .should('be.visible')
  //     .click();
  //   cy.get('#ext-gen1001').click();
  //   cy.get('#ext-gen1031 > :nth-child(3)').click();
  //   cy.get('#ext-comp-1189 > .x-btn-small > :nth-child(3) > .x-btn-bc').click();

  //   // Save Data
  //   cy.get('#ext-comp-1279 > .x-btn-small > :nth-child(3) > .x-btn-bc').click();

  //   // Confirmation
  //   cy.get('#ext-gen29')
  //     .should('be.visible')
  //     .and('contain', 'Confirmation');
  //   cy.get('#ext-comp-1033 > .x-btn-small > :nth-child(2) > .x-btn-mc').click();

  // });
  it('Positive Test Case ', () => {
    // List Patient Booking
    cy.get('#ext-comp-1263 > .x-btn-small > :nth-child(1) > .x-btn-tc')
      .click();
    cy.wait(1000);
    cy.get('#ext-gen886 > .x-grid3-row-first > .x-grid3-row-table > tbody > tr > .x-grid3-td-2 > .x-grid3-cell-inner')
      .click();
    cy.get('#medicalKitregistration-navbtn2 > .x-btn-small > :nth-child(1) > .x-btn-tc')
      .click();
    // Masukkan Admission Method
    cy.get('#ext-comp-1474')
      .type('DATANG SENDIRI');
    cy.get('.x-combo-list-item')
      .should('be.visible')
      .click();
    // Save
    cy.get('#ext-comp-1279 > .x-btn-small > :nth-child(1) > .x-btn-tc')
      .click();

    cy.get('#ext-gen29')
      .should('be.visible')
      .and('contain', 'Confirmation');
    cy.get('#ext-comp-1033 > .x-btn-small > :nth-child(2) > .x-btn-mc').click();
  });
});