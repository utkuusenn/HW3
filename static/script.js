fetch('./partials/header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;
    });


fetch('./partials/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    });

const books = [
    {
        imgSrc: 'static/img/1.jpg',
        author: 'J.R.R. TOLKIEN',
        description: "John Ronald Reuel Tolkien'in yazdığı Yüzüklerin Efendisi adlı bir fantastik edebiyat üçlemesinin ilk kısmıdır. Bu üçlemeden önce okunması faydalı olabilen Hobbit adlı kitapta Tolkien, Hobbitlerin yaşayışlarını ve Gandalf'ın Bilbo'yla ilk tanışmasını anlatmaktadır."
    },
    {
        imgSrc: 'static/img/2.jpg',
        author: 'J.R.R. TOLKIEN',
        description: "Oxford Dilbilim Profesörü John Ronald Reuel Tolkien'in yazdığı Yüzüklerin Efendisi adlı fantastik edebiyat üçlemesinin ikinci kitabıdır. Ak büyücü Saruman, Sauron'un tarafına geçer ve orklarla dağlı adamlardan oluşan bir melez ırk yaratıp Rohan'ın üzerine gönderir."
    },
    {
        imgSrc: 'static/img/3.jpg',
        author: 'J.R.R. TOLKIEN',
        description: "John Ronald Reuel Tolkien'in yazdığı Yüzüklerin Efendisi adlı bir fantastik edebiyat üçlemesinin üçüncü kitabıdır. Kitap iyilik ve kötülük arasındaki mücadaleyi konu alan üçlemenin çözümlendiği son kitaptır. Kitap kapağını resmeden ünlü ressam Alan Lee'dir."
    },
    {
        imgSrc: 'static/img/4.jpg',
        author: 'J.R.R. TOLKIEN',
        description: "Silmarillion, J. R. R. Tolkien¹in ölümünden sonra oğlu Christopher Tolkien tarafından, daha sonra ünlü bir fantastik hikâye yazarı olacak olan Guy Gavriel Kay yardımı ile İngiliz yazar J. R. R. Tolkien'in epik Orta Dünya hikâyelerinin birleştirilmesi ile oluşturulmuş 1977'de yayımlanmış epik kitap."
    },
    {
        imgSrc: 'static/img/5.jpg',
        author: 'J.R.R. TOLKIEN',
        description: "Húrin'in Çocukları, J. R. R. Tolkien'in kurgusal Orta Dünya evreninin tarihinden bir bölümü anlatan epik fantastik romandır. Yazar, kitabı 1910'larda yazmaya başlamıştır, daha sonraları birkaç defa kitabı gözden geçirmişse de 1973'te öldüğünde kitap taslak halinde kalmıştır."
    },
    {
        imgSrc: 'static/img/6.jpg',
        author: 'J.R.R. TOLKIEN',
        description: "Bitmemiş Öyküler fantastik kurgu yazarı İngiliz dilbilimci J. R. R. Tolkien'in ömrü zarfında tamamlayamadığı, oğlu Christopher Tolkien'in düzenleyip 1980'de yayımladığı hikâyeler ve notlardan oluşan kitaptır. Kitap, baba Tolkien'in kurguladığı Orta Dünya evreni hakkında detaylı bilgiler içerir."
    },
    {
        imgSrc: 'static/img/7.jpg',
        author: 'J.R.R. TOLKIEN',
        description: "Tom Bombadil'in Maceraları, J. R. R. Tolkien tarafından yazılan ve 1962'de yayınlanan bir şiir koleksiyonudur. İkisi Yüzük Kardeşliği'nde Frodo Baggins ile karşılaştığı vakit söylediği şiir olmak üzere toplam 16 şiirden oluşmaktadır."
    },
    {
        imgSrc: 'static/img/8.jpg',
        author: 'J.R.R. TOLKIEN',
        description: "Hobbit, İngiliz filolog ve yazar J. R. R. Tolkien'ın mitopya ve epik fantazya türlerinde yazdığı bir çocuk romanıdır. İlk baskısı 21 Eylül 1937 yılında yapıldı ve dönem eleştirmenlerinden büyük övgü aldı."
    }
];

function createCard(book) {
    const card = document.createElement('div');
    card.classList.add('card');

    const img = document.createElement('img');
    img.src = book.imgSrc;
    img.alt = book.author;

    const author = document.createElement('h3');
    author.textContent = `Yazar: ${book.author}`;

    const description = document.createElement('p');
    description.textContent = book.description;

    card.append(img);
    card.append(author);
    card.append(description);

    return card;
}
