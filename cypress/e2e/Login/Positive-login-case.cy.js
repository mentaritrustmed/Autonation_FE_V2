describe('Login Page - Positive Test Case', () => {
  it('User can login with valid credentials and see the dashboard', () => {
    // Mengunjungi halaman utama aplikasi
    cy.visit('https://his-test.trustmedis.net/');

    // Login ke aplikasi
    const username = Cypress.env('USERNAME'); // Mendapatkan username dari environment variables
    const password = Cypress.env('PASSWORD'); // Mendapatkan password dari environment variables

    cy.get('#login-username').type(username); // Input username pada field login
    cy.get('#login-password').type(password); // Input password pada field login
    cy.get('#submit').click(); // Klik tombol login
  });
});