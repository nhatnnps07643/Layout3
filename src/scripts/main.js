// Main
console.log('FullStack Vietnam!')
$(window).ready(() => {

    $('.home-slide .owl-carousel').owlCarousel({
        loop: false,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 3000,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    $('.home-client .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 0,
        nav: true,
        autoplayTimeout: 3000,
        // navText: ['text', 'hehe'],
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 4
            },
            1000: {
                items: 6
            }
        }
    })

})