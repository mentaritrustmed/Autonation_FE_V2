describe('Admission Module Test', () => {
    // Setup before each test
    beforeEach(() => {
        // Mengunjungi halaman utama aplikasi
        cy.visit('https://his-test.trustmedis.net/');

        // Login ke aplikasi
        const username = Cypress.env('USERNAME'); // Mendapatkan username dari environment variables
        const password = Cypress.env('PASSWORD'); // Mendapatkan password dari environment variables

        cy.get('#login-username').type(username); // Input username pada field login
        cy.get('#login-password').type(password); // Input password pada field login
        cy.get('#submit').click(); // Klik tombol login

        // Masuk ke modul admission
        cy.wait(1000); // Tunggu 1 detik untuk memastikan halaman sudah termuat
        cy.get(':nth-child(4) > #MENU_ADMISI') // Selektor menuju menu Admission
            .should('be.visible') // Pastikan menu terlihat
            .click(); // Klik menu Admission

        // Navigasi ke halaman Service Registration
        cy.get('#ext-comp-1155 > .x-btn-large > :nth-child(1) > .x-btn-tc')
            .as('serviceRegistrationButton'); // Alias untuk tombol Service Registration
        cy.get('@serviceRegistrationButton').should('be.visible').click(); // Klik tombol Service Registration
        cy.get('#ext-comp-1133') // Selektor menuju sub-menu dalam Service Registration
            .should('be.visible') // Pastikan sub-menu terlihat
            .click(); // Klik sub-menu tersebut

    });

    // Test case untuk memverifikasi validasi jika data tidak lengkap
    it('Negative Test Case - Missing Required Fields', () => {
        // Klik tombol tambah data baru
        cy.wait(1000); // Tunggu 1 detik untuk memastikan elemen sudah termuat
        cy.get('#ext-comp-1242 > .x-btn-small > :nth-child(1) > .x-btn-tc')
            .should('be.visible') // Pastikan tombol tambah data baru terlihat
            .click(); // Klik tombol tambah data baru

        // Navigasi ke tab Patient
        cy.get('#ext-comp-1282 > .x-btn-small > :nth-child(1) > .x-btn-tc').click(); // Klik tab Patient
        
        // Klik tombol tambah ID baru
        cy.get('#ext-comp-1461 > .x-btn-small > :nth-child(1) > .x-btn-tc')
            .should('exist') // Pastikan tombol ada
            .click(); // Klik tombol

        // Centang pilihan Primary
        cy.get('#ext-comp-1459').click(); // Centang kotak Primary

        // Memilih tipe ID
        cy.get('#ext-comp-1455').type('ID CARD NUMBER'); // Input tipe ID
        cy.get('.x-combo-list-item')
            .contains('ID CARD NUMBER') // Pilih opsi ID CARD NUMBER dari daftar
            .click(); // Klik opsi

        // Memasukkan ID Number salah
        cy.get('#ext-comp-1456').type('93r0k547l38'); // Input ID Number salah

        // Memilih negara penerbit ID
        cy.get('#ext-comp-1458').type('INDONESIA'); // Input nama negara
        cy.get('.x-combo-list-item')
            .contains('INDONESIA') // Pilih opsi INDONESIA
            .click(); // Klik opsi

        // Klik tombol Save untuk menyimpan
        cy.get('#ext-comp-1645 > .x-btn-small > :nth-child(2) > .x-btn-mc').click();

        // Mengisi informasi pasien
        cy.get('#ext-comp-1479').type('Dian'); // Input nama
        cy.get('#ext-comp-1485').type('FEMALE'); // Input gender
        cy.get('.x-combo-list-item')
            .contains('FEMALE') // Pilih gender FEMALE
            .should('be.visible') // Pastikan opsi terlihat
            .click(); // Klik opsi

        cy.get('#ext-comp-1478').type('Mba'); // Input panggilan
        cy.get('.x-combo-selected')
            .contains('Mba') // Pilih panggilan Mba
            .should('be.visible') // Pastikan opsi terlihat
            .click(); // Klik opsi

        cy.get('#ext-comp-1481').type('20 Aug 2003'); // Input tanggal lahir
        cy.get('#ext-comp-1483').type('Palu'); // Input tempat lahir

        cy.get('#ext-comp-1484').type('INDONESIA'); // Input negara
        cy.get('#ext-gen1100 > .x-combo-list-item')
            .contains('INDONESIA') // Pilih opsi INDONESIA
            .should('be.visible') // Pastikan opsi terlihat
            .click(); // Klik opsi

        cy.get('#ext-comp-1487').type('Indonesia'); // Input kebangsaan
        cy.get('#ext-gen1123 > .x-combo-list-item')
            .contains('INDONESIA') // Pilih opsi INDONESIA
            .should('be.visible') // Pastikan opsi terlihat
            .click(); // Klik opsi
        cy.get('#ext-comp-1488').type('081233030142'); // Input nomor telepon

        cy.get('#ext-comp-1490').type('hijraotji@gmail.com'); // Input email

        cy.get('#ext-comp-1491').type('O+'); // Input golongan darah
        cy.get('.x-combo-list-item')
            .contains('O+') // Pilih golongan darah O+
            .should('be.visible') // Pastikan opsi terlihat
            .click(); // Klik opsi

        cy.get('#ext-comp-1497').type('jl. kalukubula'); // Input alamat

        cy.get('#ext-comp-1516').type('SUB OKINHHH'); // Input sub-distrik
        cy.get('.search-item')
            .should('be.visible') // Pastikan hasil pencarian terlihat
            .click(); // Klik hasil pencarian

        cy.get('#ext-comp-1535 > .x-btn-small > :nth-child(2) > .x-btn-mc').click(); // Klik tombol Save

        // Verifikasi pop-up peringatan
        cy.get('#ext-gen17', { timeout: 10000 }) // Tunggu elemen pop-up muncul hingga 10 detik
            .should('be.visible') // Pastikan pop-up terlihat
            .and('contain', 'Warning'); // Verifikasi pop-up mengandung teks "Warning"

        // Klik tombol close pada pop-up
        cy.get('#ext-comp-1032 > .x-btn-small > :nth-child(2) > .x-btn-mc').click();
    });
});
