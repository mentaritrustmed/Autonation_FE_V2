describe('Admission Module Test', () => {
  // Setup before each test
  beforeEach(() => {
    // Mengunjungi halaman aplikasi
    cy.visit('https://his-test.trustmedis.net/');

    // Login ke aplikasi
    const username = Cypress.env('USERNAME'); // Mendapatkan username dari environment variables
    const password = Cypress.env('PASSWORD'); // Mendapatkan password dari environment variables

    cy.get('#login-username').type(username); // Input username pada field login
    cy.get('#login-password').type(password); // Input password pada field login
    cy.get('#submit').click(); // Klik tombol login

    // Masuk ke modul admission
    cy.wait(1000); // Tunggu selama 1 detik
    cy.get(':nth-child(4) > #MENU_ADMISI') // Selektor untuk menu Admission
      .should('be.visible') // Memastikan elemen terlihat
      .click(); // Klik menu Admission

    // Navigasi ke Package Service Registration
    cy.get('#ext-comp-1155 > .x-btn-large > :nth-child(2) > .x-btn-mc > .x-btn-arrow')
      .should('be.visible') // Pastikan elemen terlihat
      .click(); // Klik tombol dropdown
    cy.get('#ext-comp-1135') // Selektor menuju sub-menu
      .should('be.visible') // Memastikan elemen terlihat
      .click(); // Klik sub-menu Package Service Registration
  });

  // Test case untuk validasi data yang belum lengkap
  it('Negative Test Case - Missing Required Fields', () => {
    // Klik tombol untuk menambah data baru
    cy.get('#ext-comp-1244 > .x-btn-small > :nth-child(1) > .x-btn-tc')
      .should('be.visible') // Tunggu hingga elemen terlihat
      .click(); // Klik tombol tambah data

    // Navigasi ke tab Patient
    cy.get('#ext-comp-1282 > .x-btn-small > :nth-child(1) > .x-btn-tc')
      .should('be.visible') // Pastikan tab terlihat
      .click(); // Klik tab Patient

    // Klik tombol tambah ID baru
    cy.get('#ext-comp-1481 > .x-btn-small > :nth-child(1) > .x-btn-tc')
      .should('exist') // Pastikan elemen ada
      .click(); // Klik tombol

    // Centang checkbox Primary
    cy.get('#ext-comp-1479').click(); // Klik checkbox Primary

    // Memilih ID Type
    cy.get('#ext-gen1055').click(); // Klik dropdown ID Type
    cy.get('#ext-gen1059 > :nth-child(2)') // Pilih opsi ID CARD NUMBER
      .contains('ID CARD NUMBER') // Pastikan opsi ada
      .should('be.visible') // Pastikan elemen terlihat
      .click(); // Klik opsi ID CARD NUMBER

    // Mengisi ID Number salah
    cy.get('#ext-comp-1477').type('93r0k547l38'); // Input ID Number tidak valid

    // Memilih Issuer Country
    cy.get('#ext-comp-1478').type('INDONESIA'); // Input nama negara
    cy.get('.x-combo-list-item') // Pilih dari dropdown
      .contains('INDONESIA') // Pastikan opsi ada
      .click(); // Klik opsi INDONESIA

    // Klik tombol Save pada dialog
    cy.get('#ext-comp-1662 > .x-btn-small > :nth-child(2) > .x-btn-mc').click(); 

    // Mengisi data pasien
    cy.get('#ext-comp-1497').type('Dian'); // Input nama pasien
    cy.get('#ext-gen918').type('FEMALE'); // Input gender
    cy.get('.x-combo-list-item') // Pilih opsi FEMALE
      .contains('FEMALE') 
      .should('be.visible') // Pastikan opsi terlihat
      .click();

    cy.get('#ext-comp-1496').type('Mba'); // Input panggilan
    cy.get('.x-combo-selected') // Pilih panggilan Mba
      .contains('Mba') 
      .should('be.visible') // Pastikan opsi terlihat
      .click();

    cy.get('#ext-comp-1499').type('20 Aug 2003'); // Input tanggal lahir
    cy.get('#ext-comp-1501').type('Palu'); // Input tempat lahir

    cy.get('#ext-comp-1502').type('INDONESIA'); // Input negara asal
    cy.get('#ext-gen1091 > .x-combo-list-item') // Pilih dari dropdown
      .contains('INDONESIA') 
      .should('be.visible') // Pastikan opsi terlihat
      .click();

    cy.get('#ext-comp-1505').type('INDONESIA'); // Input kebangsaan
    cy.get('#ext-gen1114 > .x-combo-list-item') // Pilih dari dropdown
      .contains('INDONESIA') 
      .should('be.visible') // Pastikan opsi terlihat
      .click();
    cy.get('#ext-comp-1506').type('081233030142'); // Input nomor telepon

    cy.get('#ext-comp-1508').type('hijraotji@gmail.com'); // Input email
    cy.get('#ext-comp-1509').type('O+'); // Input golongan darah
    cy.get('.x-combo-list-item') // Pilih opsi golongan darah O+
      .contains('O+') 
      .should('be.visible') 
      .click();

    cy.get('#ext-comp-1515').type('jl. kalukubula'); // Input alamat
    cy.get('#ext-comp-1534').type('SUB OKINHHH'); // Input sub-distrik
    cy.get('.search-item') // Pilih dari hasil pencarian
      .should('be.visible') 
      .click();

    // Klik tombol Save
    cy.get('#ext-comp-1553 > .x-btn-small > :nth-child(2) > .x-btn-mc').click(); 

    // Verifikasi munculnya pop-up peringatan
    cy.get('#ext-gen29', { timeout: 10000 }) // Tunggu hingga elemen muncul selama 10 detik
      .should('be.visible') // Pastikan pop-up terlihat
      .and('contain', 'Warning'); // Pastikan pop-up mengandung teks "Warning"
    // Klik tombol Close pada pop-up
    cy.get('#ext-comp-1032 > .x-btn-small > :nth-child(2) > .x-btn-mc').click();
  });
});
