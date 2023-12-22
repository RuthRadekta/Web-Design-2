$(document).ready(function() {
    // Mengaktifkan tab Bootstrap saat tab di-klik
    $('#myTabs a').click(function(e) {
        e.preventDefault();
        $(this).tab('show');
    });

    // Mengaktifkan carousel pada testimonial
    $('#testimonialsCarousel').carousel();

    // Memberikan efek transparan pada header saat scrolling
    var header = $("#header");
    var scrollPosition = $(window).scrollTop();

    // Cek posisi scroll saat di-scroll
    $(window).scroll(function() {
        scrollPosition = $(window).scrollTop();

        // Tambah atau hapus kelas 'scrolled' berdasarkan posisi scroll
        if (scrollPosition > 0) {
            header.addClass("scrolled");
        } else {
            header.removeClass("scrolled");
        }
    });
});

// Fungsi pencarian perjalanan
function cariPerjalanan() {
    // Mendapatkan nilai dari input kode booking dan nama belakang
    var kodeBooking = document.getElementById("kodeBooking").value;
    var namaBelakang = document.getElementById("namaBelakang").value;

    // Lakukan operasi pencarian atau tampilkan informasi perjalanan sesuai kebutuhan
    var hasilPencarian = "Hasil pencarian untuk Kode Booking: " + kodeBooking + ", Nama Belakang: " + namaBelakang;
    
    // Tampilkan hasil di dalam div dengan ID "hasilPerjalanan"
    document.getElementById("hasilPerjalanan").innerHTML = hasilPencarian;
}
