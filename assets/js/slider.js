document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if(hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // 2. Hero Slider (Hanya untuk index.html)
    const slides = document.querySelectorAll('.slide');
    if (slides.length > 0) {
        let currentSlide = 0;
        const slideInterval = 5000; // 5 detik

        function nextSlide() {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }

        setInterval(nextSlide, slideInterval);
    }

    // 3. Product Image Gallery (Hanya untuk detail-produk.html)
    const mainImg = document.getElementById('main-product-image');
    const thumbnails = document.querySelectorAll('.thumb');

    if (thumbnails.length > 0 && mainImg) {
        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', function() {
                // Hapus class active dari semua
                thumbnails.forEach(t => t.classList.remove('active'));
                // Tambah class active ke yang diklik
                this.classList.add('active');
                // Ganti src gambar utama
                mainImg.src = this.src;
            });
        });
    }
});
