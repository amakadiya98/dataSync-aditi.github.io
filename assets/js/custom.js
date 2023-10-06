$('.ref-slider').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    dots: true,
    navText: ["<img src='./assets/images/prev-img.png'>", "<img src='./assets/images/next-img.png'>"],
    responsive:{
        0:{
            items:1
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
$('.bday-girl-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
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
        }
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

$(()=>{
    $('.drop-down-hover').hover(() => {
        $('.hover-show-dropdown').toggleClass('show')
    })
})
$(() => {
    $('.search-btn-mob').click(() => {
        $('.hide-on-search-mobile').addClass('d-none')
        $('.hide-on-search-mobile').removeClass('d-flex')
        $('.show-on-search-mobile').addClass('d-flex')
        $('.show-on-search-mobile').removeClass('d-none')
        $('.logo-link-part-mobile').css('background', 'transparent')

        
        if($(window).width() < 1024) {
            let classList = $('#open-serach')[0].classList
            
            let clsExists = false
            for(let cls of classList) {
                if(cls === 'collapsed') {
                    clsExists = true
                    break;
                }
            }
            if(!clsExists) {
                $('#open-serach')[0].click()
                $('#open-serach').click()
            }
        }

    })

    $('.close-btn-mob').click(() => {
        $('.hide-on-search-mobile').addClass('d-flex')
        $('.hide-on-search-mobile').removeClass('d-none')
        $('.show-on-search-mobile').addClass('d-none')
        $('.show-on-search-mobile').removeClass('d-flex')
        $('.logo-link-part-mobile').css('background', 'white')
    })
})

    

    // $('.owl-carousel').owlCarousel({
    //     items: 1,
    //     loop: false,
    //     nav: true,
    //     navText: ["<img src='./assets/images/prev-img.png'>", "<img src='./assets/images/next-img.png'>"],
    //     URLhashListener: true,
    //     autoplayHoverPause: true,
    //     startPosition: 'URLHash',
    //     smartSpeed: 750
    // });
    // $(document).ready(function () {
    //     // Get all the navigation links
    //     var navLinks = $('.navigation a');

    //     // Function to check if an element is in the viewport
    //     function isElementInViewport(elem) {
    //         var rect = elem.getBoundingClientRect();
    //         return (
    //             rect.top >= 0 &&
    //             rect.left >= 0 &&
    //             rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    //             rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    //         );
    //     }

    //     // Function to update the active link based on the visible section
    //     function updateActiveLink() {
    //         navLinks.removeClass('active');
    //         $('.owl-carousel div[data-hash]').each(function () {
    //             var section = this;
    //             if (isElementInViewport(section)) {
    //                 var dataHash = $(section).data('hash');
    //                 navLinks.filter('[href="#' + dataHash + '"]').addClass('active');

    //                 // Store the active link's state in localStorage
    //                 localStorage.setItem('activeLink', dataHash);
    //             }
    //         });
    //     }

    //     // Retrieve the active link's state from localStorage and set it
    //     var activeLink = localStorage.getItem('activeLink');
    //     if (activeLink) {
    //         navLinks.filter('[href="#' + activeLink + '"]').addClass('active');
    //     } else {
    //         // If no active link is stored, set a default active link here if needed.
    //     }

    //     // Call the updateActiveLink function when the user scrolls
    //     $(window).on('scroll', updateActiveLink);
    // });


    $(document).ready(function () {
        var owl = $(".owl-carousel.tab-image-slider");

        owl.owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            navText: ["<img src='./assets/images/prev-img.png'>", "<img src='./assets/images/next-img.png'>"],
            URLhashListener: true,
            autoplay: false,
            autoplayHoverPause: true,
            startPosition: 'URLHash',
            smartSpeed: 750
        });

        owl.on('changed.owl.carousel.tab-image-slider', function (event) {
            var currentItem = event.item.index;
            $('.navigation-slider .column').removeClass('active');
            $('.navigation-slider .column').eq(currentItem).addClass('active');
        });

        $('.navigation-slider .column').eq(0).addClass('active');
    });
    $(document).ready(function () {
        var mainSlider = $(".owl-carousel.tab-image-slider");
        mainSlider.owlCarousel({

            onChanged: syncNavigation
        });

        var navigationSlider = $(".navigation-slider");
        navigationSlider.owlCarousel({
            items: 5,
            loop: true,
            margin: 10,
            // center: true,
            URLhashListener: true,
            startPosition: 'URLHash',
            dots: false,
            nav: false,
            loop: true,
            responsive: {
                0: {
                    items: 3
                },
                768: {
                    items: 5
                }
            }
        });

        function syncNavigation(event) {
            var activeIndex = event.item.index;
            navigationSlider.trigger('to.owl.carousel', [activeIndex, 300]);
        }
    });

    let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


$(document).ready(function(){
	$(".hover-show-dropdown").hover(function(){
		$(this).addClass("show");
	});
});