$('.owl-carousel').owlCarousel({
    stagePadding: 100,
    loop: false,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        },
        1100: {
            items: 4
        }
    },
    navText: ['<i class="fa fa-arrow-left fa-3x" aria-hidden="true"></i>', '<i class="fa fa-arrow-right fa-3x" aria-hidden="true"></i>']

})