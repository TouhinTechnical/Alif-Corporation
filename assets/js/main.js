// Scroll Top Buttom
$(document).ready(function() {
    $(window).scroll(function() {
        $(window).scrollTop() > 300 ? $(".scrollTop").css({
            opacity: "1",
            "pointer-events": "auto"
        }) : $(".scrollTop").css({
            opacity: "0",
            "pointer-events": "none"
        })
    }),
    $(".scrollTop").click(function() {
        $("html").animate({
            scrollTop: 0
        }, 500)
    })
}),
// Sticky Menu
$(document).ready(function() {
    var o = $(".main_menuArea").outerHeight()
      , e = $(".main_menuArea").offset().top + o;
    $(window).scroll(function() {
        $(window).width() > 991 && ($(window).scrollTop() >= e ? $(".main_menuArea").addClass("sticky") : $(".main_menuArea").removeClass("sticky"))
    })
}),
// Slider Plugin
$('.owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})