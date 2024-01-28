btn.onclick = () => {
    // 'Secure Payment' başlıklı yeni bir tarayıcı penceresi aç
    const win = window.open(
        'http://www.stackoverflow.com',
        'Secure Payment');
    
    // Belirli aralıklarla pencerenin kapatılıp kapatılmadığını kontrol etmek için bir zamanlayıcı ayarla
    const timer = setInterval(() => {
        if (win.closed) {
            // Zamanlayıcıyı temizle ve bir uyarı penceresi göster
            clearInterval(timer);
            alert('"Secure Payment" penceresi kapatıldı!');
        }
    }, 500);
}

window.addEventListener('DOMContentLoaded', event => {

    // Navbar küçültme fonksiyonu
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            // Eğer sayfa en üstteyse, navbar'ı küçültme sınıfını kaldır
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            // Aksi halde navbar'ı küçültme sınıfını ekle
            navbarCollapsible.classList.add('navbar-shrink')
        }
    };

    // Navbar'ı küçült
    navbarShrink();

    // Sayfa kaydırıldığında navbar'ı küçült
    document.addEventListener('scroll', navbarShrink);

    // Ana nav öğesinde Bootstrap scrollspy'ı etkinleştir
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Toggler görünür olduğunda duyarlı navbar'ı daralt
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            // Toggler görünürse, basıldığında duyarlı navbar'ı kapat
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
