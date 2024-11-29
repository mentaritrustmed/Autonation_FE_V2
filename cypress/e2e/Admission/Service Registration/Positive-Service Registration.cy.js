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
    // it('Positive Test Case - Adding New Data', () => {
    //     // Klik tombol tambah data baru
    //     cy.wait(1000); // Tunggu 1 detik untuk memastikan elemen sudah termuat
    //     cy.get('#ext-comp-1242 > .x-btn-small > :nth-child(1) > .x-btn-tc')
    //         .should('be.visible') // Pastikan tombol tambah data baru terlihat
    //         .click(); // Klik tombol tambah data baru

    //     // Navigasi ke tab Patient
    //     cy.get('#ext-comp-1282 > .x-btn-small > :nth-child(1) > .x-btn-tc').click(); // Klik tab Patient

    //     // Klik tombol tambah ID baru
    //     cy.get('#ext-comp-1461 > .x-btn-small > :nth-child(1) > .x-btn-tc')
    //         .should('exist') // Pastikan tombol ada
    //         .click(); // Klik tombol

    //     // Centang pilihan Primary
    //     cy.get('#ext-comp-1459').click(); // Centang kotak Primary

    //     // Memilih tipe ID
    //     cy.get('#ext-comp-1455').type('ID CARD NUMBER'); // Input tipe ID
    //     cy.get('.x-combo-list-item')
    //         .contains('ID CARD NUMBER') // Pilih opsi ID CARD NUMBER dari daftar
    //         .click(); // Klik opsi

    //     // Memasukkan ID Number salah
    //     cy.get('#ext-comp-1456').type('7273909267839102'); // Input ID Number benar

    //     // Memilih negara penerbit ID
    //     cy.get('#ext-comp-1458').type('INDONESIA'); // Input nama negara
    //     cy.get('.x-combo-list-item')
    //         .contains('INDONESIA') // Pilih opsi INDONESIA
    //         .click(); // Klik opsi

    //     // Klik tombol Save untuk menyimpan
    //     cy.get('#ext-comp-1645 > .x-btn-small > :nth-child(2) > .x-btn-mc').click();

    //     // Mengisi informasi pasien
    //     cy.get('#ext-comp-1479').type('Dian'); // Input nama
    //     cy.get('#ext-comp-1485').type('FEMALE'); // Input gender
    //     cy.get('.x-combo-list-item')
    //         .contains('FEMALE') // Pilih gender FEMALE
    //         .should('be.visible') // Pastikan opsi terlihat
    //         .click(); // Klik opsi

    //     cy.get('#ext-comp-1478').type('Mba'); // Input panggilan
    //     cy.get('.x-combo-selected')
    //         .contains('Mba') // Pilih panggilan Mba
    //         .should('be.visible') // Pastikan opsi terlihat
    //         .click(); // Klik opsi

    //     cy.get('#ext-comp-1481').type('20 Aug 2003'); // Input tanggal lahir
    //     cy.get('#ext-comp-1483').type('Palu'); // Input tempat lahir

    //     cy.get('#ext-comp-1484').type('INDONESIA'); // Input negara
    //     cy.get('#ext-gen1100 > .x-combo-list-item')
    //         .contains('INDONESIA') // Pilih opsi INDONESIA
    //         .should('be.visible') // Pastikan opsi terlihat
    //         .click(); // Klik opsi

    //     cy.get('#ext-comp-1487').type('Indonesia'); // Input kebangsaan
    //     cy.get('#ext-gen1123 > .x-combo-list-item')
    //         .contains('INDONESIA') // Pilih opsi INDONESIA
    //         .should('be.visible') // Pastikan opsi terlihat
    //         .click(); // Klik opsi
    //     cy.get('#ext-comp-1488').type('081233030142'); // Input nomor telepon

    //     cy.get('#ext-comp-1490').type('hijraotji@gmail.com'); // Input email

    //     cy.get('#ext-comp-1491').type('O+'); // Input golongan darah
    //     cy.get('.x-combo-list-item')
    //         .contains('O+') // Pilih golongan darah O+
    //         .should('be.visible') // Pastikan opsi terlihat
    //         .click(); // Klik opsi

    //     cy.get('#ext-comp-1497').type('jl. kalukubula'); // Input alamat

    //     cy.get('#ext-comp-1516').type('SUB OKINHHH'); // Input sub-distrik
    //     cy.get('.search-item')
    //         .should('be.visible') // Pastikan hasil pencarian terlihat
    //         .click(); // Klik hasil pencarian

    //     cy.get('#ext-comp-1535 > .x-btn-small > :nth-child(2) > .x-btn-mc').click(); // Klik tombol Save

    //     // Verifikasi pop-up 
    //     cy.get('#ext-gen29')
    //         .should('be.visible')
    //         .and('contain', 'ATTENTION!'); 

    //     // Klik tombol close pada pop-up
    //     cy.get('#ext-comp-1033 > .x-btn-small > :nth-child(2) > .x-btn-mc').click();
    // });

    // it('Positive Test Case - Adding Patient Data Who Has Visited Before', () => {
    //     cy.get('#ext-comp-1242 > .x-btn-small > :nth-child(1) > .x-btn-tc', { timeout: 10000 })
    //         .should('be.visible')
    //         .click();

    //     // Tab Patient
    //     cy.get('#ext-comp-1285 > .x-btn-small > :nth-child(1) > .x-btn-tc')
    //         .should('be.visible')
    //         .click(); // Klik Search untuk menambah data pasien yang pernah datang

    //     // cy.get('#ext-comp-1566').type(''); // Mencari psien dengan ID Number
    //     cy.get('#ext-comp-1562')
    //         .type('Dian'); // Mencari psien dengan Name
    //     // cy.get('#ext-comp-1563').type('081233030142'); // Mencari psien dengan Phone Number
    //     cy.get('#ext-comp-1564')
    //         .type('hijraotji@gmail.com'); // Mencari psien dengan Email
    //     // cy.get('#ext-comp-1565').type(''); // Mencari pasien dengan Date Of Birth
    //     // cy.get('#ext-comp-1567').type(''); // Mencari psien dengan Address

    //     cy.get('#ext-comp-1570 > .x-btn-small > :nth-child(2) > .x-btn-mc')
    //         .should('be.visible')
    //         .click();

    //     cy.get('#ext-gen909 > .x-grid3-row-first > .x-grid3-row-table > tbody > tr > .x-grid3-td-1 > .x-grid3-cell-inner > .x-action-col-icon')
    //         .should('be.visible')
    //         .click();

    //     // Tab Payment
    //     cy.wait(1000);
    //     cy.get('#medicalsupportregistration-navbtn1 > .x-btn-small > :nth-child(1) > .x-btn-tc')
    //         .should('be.visible')
    //         .click();

    //     // Tab Service
    //     cy.wait(1000);
    //     cy.get('#medicalsupportregistration-navbtn2 > .x-btn-small > :nth-child(1) > .x-btn-tc')
    //         .should('be.visible')
    //         .click();

    //     // Menambahakan produk
    //     cy.get('#ext-gen630')
    //         .type('Audiometri');
    //     cy.get('#ext-gen974')
    //         .contains('AUDIOMETRI')
    //         .should('be.visible')
    //         .click();
    //     cy.get('#ext-comp-1640 > .x-btn-small > :nth-child(2) > .x-btn-mc').click();

    //     // Tab Cashier
    //     cy.get('#medicalsupportregistration-navbtn3 > .x-btn-small > :nth-child(1) > .x-btn-tc').click();
    //     cy.get('#ext-comp-1170 > .x-btn-small > :nth-child(1) > .x-btn-tc')
    //         .should('be.visible')
    //         .click();
    //     cy.get('#ext-gen1019').click();
    //     cy.get('#ext-gen1049 > :nth-child(3)').click();
    //     cy.get('#ext-comp-1189 > .x-btn-small > :nth-child(2) > .x-btn-mc').click();

    //     // Save & Print
    //     cy.get('#ext-comp-1280 > .x-btn-small > :nth-child(3) > .x-btn-bc').click();

    //     // confirmation
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
    //     cy.get('#ext-comp-1259').type('27A6.000226'); // Mencari menggunakan Registration Number

    //     // Memulihkan kembali data
    //     cy.get('#ext-gen517').click();

    //     // Mencari data menggunakan filter (case ini menggunakan tanggal)
    //     cy.get('#ext-comp-1243 > .x-btn-small > :nth-child(1) > .x-btn-tc').click();
    //     cy.get('#ext-gen817').click();
    //     cy.get(':nth-child(1) > :nth-child(6) > .x-date-date > em > span').click();

    //     // Apply
    //     cy.get('#ext-comp-1438 > .x-btn-small > :nth-child(2) > .x-btn-mc').click();

    //     // Reset Filter
    //     cy.get('#ext-comp-1439 > .x-btn-small > :nth-child(2) > .x-btn-ml').click();

    //     // Hapus Data (data yang dapat di hapus adalah data yang belum melakukan transaksi)
    //     cy.get(':nth-child(3) > .x-grid3-row-table > tbody > tr > .x-grid3-td-1 > .x-grid3-cell-inner > .x-action-col-1').click();
    //     cy.get('#ext-gen29')
    //         .should('be.visible') 
    //         .and('contain', 'Confirmation');
    //     cy.get('#ext-comp-1033 > .x-btn-small > :nth-child(2) > .x-btn-mc').click();
    //     cy.get('#ext-gen42').type('Delete data');
    //     cy.get('#ext-comp-1032 > .x-btn-small > :nth-child(2) > .x-btn-mc').click();

    // });
    it('Positive Test Case ', () => {
        // List Patient Booking 
        // cy.get('#ext-comp-1260 > .x-btn-small > :nth-child(1) > .x-btn-tc')
        //     .click();
        // cy.get('#ext-gen903 > .x-grid3-row > .x-grid3-row-table > tbody > tr > .x-grid3-td-1 > .x-grid3-cell-inner')
        //     .click();
        // cy.get('#medicalsupportregistration-navbtn2 > .x-btn-small > :nth-child(1) > .x-btn-tc')
        //     .click();

        // // Tambah Admission Method
        // cy.get('#ext-comp-1334')
        //     .type('DATANG SENDIRI');
        // cy.get('.x-combo-list-item')
        //     .should('be.visible')
        //     .click();

        // // Save Data
        // cy.get('#ext-comp-1280 > .x-btn-small > :nth-child(1) > .x-btn-tc').click();

        // cy.get('#ext-gen29')
        //     .should('be.visible')
        //     .and('contain', 'Confirmation');
        // cy.get('#ext-comp-1033 > .x-btn-small > :nth-child(2) > .x-btn-mc').click();

        // cy.get('#ext-gen990')
        //     .should('be.visible')
        //     .and('contain', 'Queue');

        // cy.get('#ext-gen1003 > .x-grid3-row-last > .x-grid3-row-table > tbody > tr > .x-grid3-td-1 > .x-grid3-cell-inner')
        //     .click();
        // cy.get('#ext-comp-1614 > .x-btn-small > :nth-child(1) > .x-btn-tc')
        //     .click();

        // List Clinical Treatment   
        cy.get('#ext-comp-1261 > .x-btn-small > :nth-child(1) > .x-btn-tc')
            .click();
        cy.get('#ext-gen903 > .x-grid3-row > .x-grid3-row-table > tbody > tr > .x-grid3-td-1 > .x-grid3-cell-inner')
            .click();
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
