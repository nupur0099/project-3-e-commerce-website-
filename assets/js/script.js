// Product Carousel Initialization
$(document).ready(function() {
    $('.product-carousel').owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        dots: false,
        responsive: {
            0: { items: 1 },
            576: { items: 2 },
            768: { items: 3 },
            992: { items: 4 },
            1200: { items: 5 }
        },
        navText: [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>'
        ]
    });
});
 