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
  it('Positive Test Case - Filtering and Managing Patient Data', () => {
    // Melakukan pencarian
    cy.get('#ext-comp-1261').type('27A6.000097'); // Mencari menggunakan Registration Number

    // Memulihkan kembali data
    cy.get('#ext-gen508').click();

    // Mencari data menggunakan filter (case ini menggunakan tanggal)
    cy.get('#ext-comp-1245 > .x-btn-small > :nth-child(3) > .x-btn-bc').click();
    cy.get('#ext-gen800').click();
    cy.get(':nth-child(1) > :nth-child(6) > .x-date-date > em > span').click();

    // Apply
    cy.get('#ext-comp-1572 > .x-btn-small > :nth-child(1) > .x-btn-tc').click();

    // Reset Filter
    cy.get('#ext-comp-1573 > .x-btn-small > :nth-child(1) > .x-btn-tc').click();

    // Klik Delivery Complete untuk melanjutkan pemeriksaan
    cy.get('.x-action-col-1').click();

    // Confirmation
    cy.get('#ext-gen29')
      .should('be.visible')
      .and('contain', 'Confirmation');
    cy.get('#ext-comp-1033 > .x-btn-small > :nth-child(2) > .x-btn-mc').click();

    cy.get('#ext-gen29')
      .should('be.visible')
      .and('contain', 'Done');
    cy.get('#ext-comp-1032 > .x-btn-small > :nth-child(2) > .x-btn-mc').click();
  });
});