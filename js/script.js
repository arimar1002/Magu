$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    responsive: {
        0:{
            items: 2.2,
        },
        768:{
            items: 3.2,
        },
        1100:{
            items: 4.2,
        },
        1400:{
            items: 5.2,
            loop: false,
        }
    }
});