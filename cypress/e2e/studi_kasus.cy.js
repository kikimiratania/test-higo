
describe('Studi kasus Higo.id', () => {
  it('Studi kasus Higo', () => {
  //klik tab Studi kasus Sub tab All
    cy.contains('span', 'Studi Kasus').click(); 
    cy.wait(1000);
    cy.get('.animate-delay-100').should('be.visible'); // Verify animate cerita dari kolaborasi HIGO
    cy.get('.group\\/item').should('have.length.at.least', 6); // pastikan minimal 6 card
    cy.wait(1000);

    //Klik Subtab HigoSpot
    cy.get('.flex > :nth-child(2)').click(); // HigoSpot
    cy.wait(1000);
    // Klik Subtab WebAdvertising
    cy.get('.flex > :nth-child(3)')
    cy.wait(1000);

    //Klik subtab All
    cy.get('.flex > :nth-child(2)').click();
    cy.wait(1000);

    //Klik Kintaro shusi
    cy.contains('Kintaro Sushi').click();
    cy.wait(1000)
    // Verifikasi judul utama
    cy.contains('Kintaro Sushi').scrollIntoView();

    // Verifikasi list layanan (Service)
    cy.contains('Service').should('be.visible');
    cy.contains('Data analytics customer support').should('be.visible');
    cy.contains('Digital Survey').should('be.visible');
    cy.contains('WiFi Promotional Page').should('be.visible');
    cy.contains('Email Blast').should('be.visible');

    // Verifikasi list feedback
    cy.contains('Feedback').scrollIntoView();
    cy.contains('Feedback').should('be.visible');
    cy.contains('Meningkatkan awareness lewat promosi harian').should('be.visible');
    cy.contains('Secara otomatis mengirimkan email untuk pelanggan').should('be.visible');

    // Verifikasi tampilan gambar mockup ponsel
    cy.get('img').should('be.visible');

    //verifikasi Total Respondent Survey Customer muncul
    cy.contains('Total Respondent Survey Customer').should('be.visible');

    //verifikasi Total Number Database Collected muncul
    cy.contains('Total Number Database Collected').should('be.visible');

    //verifikasi Conversion to Returning Visitor Rate muncul
    cy.contains('Conversion to Returning Visitor Rate').should('be.visible');


    // check button sebelum berfungsi
    cy.contains('Sebelumnya').click();

    cy.wait(3000);

    // check button Selanjutnya berfungsi
    cy.contains('Selanjutnya').click();
  })

})