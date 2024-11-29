describe('Login Page - Negative Test Case', () => {
  it('User cannot login with invalid credentials and sees an error message', () => {
    // 1. Buka halaman login
    cy.visit('https://his-test.trustmedis.net/');

    // 2. Masukkan username yang tidak valid
    cy.get('#login-username').type("nnanana");
    // 3. Masukkan password yang tidak valid
    cy.get('#login-password').type("12345678"); 
    // 4. Klik tombol login
    cy.get('#submit').click();

    // 5. Verifikasi bahwa muncul pesan error "Username & password didn't match"
    cy.contains("Username & password didn't match").should('be.visible');
  });
});