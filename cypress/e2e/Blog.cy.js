
describe('Blog.Higo.id', () => {
  it('Blog Higo', () => {
    cy.visit('https://blog.higo.id/');
    cy.wait(3000);
    //cy.contains('Artikel Terbaru').should('be.visible'); 
    // cy.get('img[alt="Manusela Angkat Mitologi Maluku Jadi Animasi yang Rilis Tahun Depan"]').should('be.visible').click();
    // cy.contains('Tech & Social Media').should('be.visible');
    // cy.contains('h6', 'Manusela Angkat Mitologi Maluku Jadi Animasi yang Rilis Tahun Depan').click();
    // cy.get(':nth-child(1) > .gap-6 > .group\/item > .gap-4 > .\@2xl\/item\:gap-4 > .gap-1').click();
    // cy.wait(3000)
    // cy.get('img[alt="Manusela Angkat Mitologi Maluku Jadi Animasi yang Rilis Tahun Depan"]').scrollIntoView().should('be.visible').click();

    cy.contains('All').scrollIntoView().should('be.visible');
  })

})