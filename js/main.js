$(document).ready(function () {
    $(".choose_city span").on("click", function () {
        $(".choose_city ul").slideToggle();
    });

    /* slider */

    var spa_slider = new Swiper(".spa_slider", {
        slidesPerView: 5,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        navigation: {
            nextEl: ".spa-next",
            prevEl: ".spa-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 10,
                loop: true,
            },
            620: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            991: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
    });
});
