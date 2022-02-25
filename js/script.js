// Event Pada Link Di Klik
$('.page-scroll').on('click', function(e) {
   // console.log('ok') 
   // console.log(href);
   // console.log(elementTujuan.offset().top);
   // console.log($('body').scrollTop());
   
   // Ambil Isi href
   var tujuan = $(this).attr('href');
   // Tangkap Elemen Yang Bersangkutan
   var elementTujuan = $(tujuan);

    // Pindahkan Scroll
    $('html, body').animate({
        scrollTop: elementTujuan.offset().top - 100
    }, 1000, 'easeInOutExpo');

   e.preventDefault();
});

$(function () {
    $(window).scroll(function () {
      var $nav = $(".navbar, .tombol, .nav-custom, .navbar-brand");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

$(".navbar-toggler").click(function(){
    $(".navbar").toggleClass("activated");
})