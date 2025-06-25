describe('Higo.id', () => {
  it('Higo', () => {
    cy.visit('https://higo.id/')
    cy.wait(3000);
    cy.contains('Digital Report 2025').should('be.visible'); //  verify iklan digital report 2025 muncul
    cy.get('button.mt-1.self-start.rounded-full.bg-gray-200.p-1').click(); // Klik tombol "X" close banner Digital Report
    cy.contains('Digital Report 2025').should('not.exist'); // memastikan iklan sudah tertutup
    // verifikasi kalimat yang ada di thumnail
    cy.contains('Solusi Menyeluruh Pemasaran Digital dengan WiFi & Customer Insight').should('be.visible'); // verify muncul test "Solusi Menyeluruh Pemasaran Digital dengan WiFi & Customer Insight"
    cy.contains('HIGO hadir membawa dampak signifikan melalui WiFi dan Insights di masa kini dan nanti').scrollIntoView().should('be.visible');
    cy.wait(3000);
    cy.contains('Impresi bulanan').scrollIntoView().should('be.visible');
    cy.contains('Pengguna WiFi aktif bulanan').should('be.visible');
    cy.contains('Pengguna login kembali').should('be.visible');
    cy.wait(3000);
    cy.contains('Kota dan kawasan terjangkau').scrollIntoView().should('be.visible');
    cy.contains('Kampanye melalui iklan WiFi').should('be.visible');
    cy.contains('Kerja sama').should('be.visible');
    cy.wait(4000);
    // verifikasi kalimat HIGO hadir membawa dampak signifikan melalui WiFi dan Insights di masa kini dan nanti muncul
    cy.contains('Bagaimana HIGO Bisa Bantu Penuhi Kebutuhan Bisnis?').scrollIntoView().should('be.visible');
    cy.contains('HIGO menawarkan solusi inovatif dengan teknologi WiFi dan analisis data untuk membantu bisnis menjangkau segmented audience di era digital.').should('be.visible');
    cy.wait(4000);
    
    cy.contains('h6', 'WiFi Advertising').scrollIntoView().should('be.visible'); // verifikasi grid WiFi Advertising muncul
    //cy.contains('WiFi Advertising').click({ force: true }); // klik wifi advertising
    cy.contains('h2', 'Apa kata mereka').scrollIntoView().should('be.visible'); 
    cy.wait(6000)
    cy.get('.flex > :nth-child(5) > .grid').should('be.visible'); 
    cy.contains('h2', 'Partner & klien').scrollIntoView().should('be.visible'); 
    cy.wait(6000)
    cy.contains('p', 'dan masih banyak lagi').should('be.visible'); 

    cy.contains('h3', 'Pertanyaan seputar HIGO').scrollIntoView().should('be.visible');
    cy.contains('Apa itu HIGO?').scrollIntoView().click();
    cy.wait(2000)
    cy.contains('Apa saja layanan HIGO?').click();
    cy.wait(2000)
    cy.contains('Bagaimana caranya saya bisa bekerjasama dengan HIGO?').click();
    cy.wait(2000)
    cy.contains('Apakah saya bisa request target Audience serta lokasi yang saya inginkan?').click();
    cy.wait(2000)
    cy.contains('Apakah bisa menggunakan HIGO Tech untuk luar Jawa?').click();
    cy.wait(2000)
    cy.contains('Apakah HIGO bisa handle kebutuhan Social Media?').click();
    cy.wait(2000)

    cy.contains('h6', 'WiFi Advertising').scrollIntoView().should('be.visible'); // verifikasi grid WiFi Advertising muncul
    cy.contains('WiFi Advertising').click({ force: true }); // klik wifi advertising
    // Detail Wifi Advertising
    cy.contains('h1', 'WiFi Advertising').should('be.visible');
    cy.contains('p', 'Optimalkan performa iklan dengan strategi yang tepat, menjangkau target audiens yang spesifik dan sesuai kebutuhan untuk hasil yang lebih maksimal dengan WiFi Advertising.').should('be.visible');

    cy.contains('Footprint HIGO').scrollIntoView().should('be.visible');
    cy.contains('Layanan WiFi Advertising HIGO telah menjangkau audiens di lebih dari 2000+ titik lokasi.').should('be.visible');
    cy.contains('p', 'MRT Jakarta').scrollIntoView().should('be.visible');
    cy.contains('p', 'Transjakarta').should('be.visible');
    cy.contains('p', 'ASDP').should('be.visible');
    cy.contains('p', 'Airplane').should('be.visible');
    cy.contains('p', 'Food & Beverage').should('be.visible');
    cy.contains('p', 'Living Quarter').should('be.visible');
    cy.contains('p', 'LRT').should('be.visible');
    cy.contains('p', 'Office Location').should('be.visible');
    cy.contains('p', 'Shopping Destination').should('be.visible');


    cy.contains('H2', 'Kenali pengguna melalui 4 langkah pendekatan yang lebih personal').scrollIntoView().should('be.visible');
    cy.wait(2000);
    cy.contains('H6', 'Pembuatan profil').should('be.visible');
    cy.wait(2000);
    cy.contains('H2', 'Maksimalkan campaign dengan CTR & completed view ').scrollIntoView().should('be.visible');
   // cy.contains('p','HIGO membantu mendapatkan wawasan komprehensif tentang aktivitas iklan dengan "Estimated Completed View" dan "Estimated Click Through Rate"').should('be.visible');

    cy.contains('h3', '2% - 5%').should('be.visible');
    cy.contains('h4', 'Estimated click through rate').should('be.visible');
    cy.contains('p', 'Optimalkan strategi marketing dan tingkatkan interaksi user. Insight ini dapat membantu mengukur daya tarik iklan dengan metrik HIGO yang akurat').should('be.visible');
    
    cy.contains('h3', '25%').should('be.visible');
    cy.contains('h4', 'Estimated completed view').should('be.visible');
    cy.contains('p', 'Tingkatkan strategi iklan dengan metrik akurat dari HIGO. Insight ini dapat membantu menilai aktivitas campaign, mengoptimalkan konten, dan memastikan pesan diterima dengan maksimal.').should('be.visible');
    
    cy.contains('h2', 'Keuntungan menggunakan WiFi ads').scrollIntoView().should('be.visible');
    cy.contains('p','Jadikan setiap campaign lebih personalized dan wujudkan koneksi yang positif dan kuat dengan pelanggan.').should('be.visible');
    
    cy.get('img[alt="Menargetkan audiens secara terarah"]').should('be.visible');
    cy.contains('h6', 'Menargetkan audiens secara terarah').scrollIntoView().should('be.visible');
    cy.contains('p','Targetkan audiens secara spesifik baik digital ataupun offline di kota besar Indonesia.').should('be.visible');

    cy.get('img[alt="Audiens berkualitas"]').should('be.visible');
    cy.contains('h6', 'Audiens berkualitas').scrollIntoView().should('be.visible');
    cy.contains('p','Semua audiens yang terhubung melalui HIGO adalah nyata; tidak ada bot yang tercatat sebagai audiens.').should('be.visible');
    cy.wait(3000);
    cy.get('img[alt="Konten & tujuan terkustomisasi sepenuhnya"]').should('be.visible');
    cy.contains('h6', 'Konten & tujuan terkustomisasi sepenuhnya').scrollIntoView().should('be.visible');
    cy.contains('p','Sesuaikan tujuan WiFi dengan fitur interaktif seperti games dan quiz atau artikel.').should('be.visible');
    cy.wait(3000);
    cy.get('img[alt="Insight audiens mendalam"]').should('be.visible');
    cy.contains('h6', 'Insight audiens mendalam').scrollIntoView().should('be.visible');
    cy.contains('p','Dapatkan insight lebih dari sekadar perilaku digital, termasuk lokasi spesifik yang tidak terlihat di iklan digital biasa.').should('be.visible');

    cy.wait(3000);
    cy.contains('h2', 'Mitra kami').scrollIntoView().should('be.visible');
    cy.contains('h6', 'Capai hasil campaign lebih efektif dengan targeted audience dari HIGO.').scrollIntoView().should('be.visible');
    cy.contains('Beriklan sekarang').click();
 
    // Halaman hubungi Tim higo
    cy.contains('h1', 'Hubungi tim HIGO').scrollIntoView().should('be.visible');
    cy.contains('p', 'Kirimkan pesan atau pertanyaan dan tim HIGO siap membantu memberikan tanggapan.').should('be.visible');
    cy.contains('h6', 'Email').scrollIntoView().should('be.visible');
    cy.contains('p', 'info@higo.id').should('be.visible');
    cy.contains('h6', 'Phone').should('be.visible');
    cy.contains('p', '(021) 5806860').should('be.visible');
    cy.contains('h6', 'Lokasi').should('be.visible');
    cy.contains('p', 'Jl. Panjang Raya, Kedoya Elok Plaza, Blok DA No.3-4, RT.19/RW.4, South Kedoya, Kebon Jeruk, West Jakarta City, Jakarta 11520').should('be.visible');
    cy.contains('h6', 'Sampaikan kebutuhan/pertanyaan untuk HIGO').should('be.visible');

    cy.get('input[name="fullName"]').type('Test'); //input nama lengkap
    cy.get('input[name="email"]').type('test01@yopmail.com'); //input 
    cy.get('input[name="phoneNumber"]').type('+62812353555'); //input NoHP
    cy.get('input[name="companyName"]').type('PT.ABC');
    cy.get('select[name="service"]').select('Wifi Advertising');
    cy.get('textarea[name="message"]').type('Test Test');
    cy.get('.gap-4 > .place-self-end').click();
    // Verifikasi pesan sukses muncul
    cy.contains('Pesan Anda berhasil terkirim.').scrollIntoView().should('be.visible');

    
  })

})