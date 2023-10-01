$('.ref-slider').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    dots: true,
    navText: ["<img src='./assets/images/prev-img.png'>", "<img src='./assets/images/next-img.png'>"],
    responsive:{
        0:{
            items:1.4
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
$('.opacity-ref-slider').owlCarousel({
    loop:true,
    margin:10,
    stagePadding: 0,
    center: true,
    nav:true,
    dots: true,
    navText: ["<img src='./assets/images/prev-img.png'>", "<img src='./assets/images/next-img.png'>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        },
        1120:{
            margin:50,
            stagePadding: 200,
            items:1,
        },
    }
})

$(() => {
    $('#search-btn').click(() => {
        $('.hide-on-search').addClass('d-none')
        $('.hide-on-search').removeClass('d-flex')
        $('.show-on-search').addClass('d-flex')
        $('.show-on-search').removeClass('d-none')
        $('.logo-link-part').css('background', 'transparent')
    })

    $('#cancel-search').click(() => {
        $('.hide-on-search').addClass('d-flex')
        $('.hide-on-search').removeClass('d-none')
        $('.show-on-search').addClass('d-none')
        $('.show-on-search').removeClass('d-flex')
        $('.logo-link-part').css('background', 'white')
    })
})
