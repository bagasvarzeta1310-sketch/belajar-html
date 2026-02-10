// Inisialisasi Animasi AOS (Animate On Scroll)
document.addEventListener("DOMContentLoaded", function() {
    AOS.init({
        once: true,     // Animasi hanya terjadi sekali saat scroll ke bawah
        duration: 800,  // Durasi animasi dalam milidetik (0.8 detik)
        offset: 100,    // Jarak trigger animasi dari bawah layar
        easing: 'ease-out-cubic' // Gaya animasi (lebih smooth)
    });
});

// Contoh fungsi tambahan: Pesan di console browser
console.log("Website Jasa Editing Video Siap Digunakan!");
