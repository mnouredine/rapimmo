// navbar background color change on scroll
$(document).ready(function () {
    // Handler for .ready() called.
    var scroll = $(document).scrollTop();
    if (scroll > 100) {
        $('.navbar.fixed-top').addClass('scrolling');
    } else {
        $('.navbar.fixed-top').removeClass('scrolling');
    }

    if (scroll > ($(window).height() - 100) && scroll < ($(document).height() - ($(window).height() + $('#footer').height()))) {
        $('.side-pan').addClass('fixed');
    } else if(scroll > ($(document).height() - ($(window).height() + $('#footer').height()))) {
        $('.side-pan').removeClass('fixed');
    } else {
        $('.side-pan').removeClass('fixed');
    }

    $(window).scroll(function () {
        scroll = $(window).scrollTop();
        if (scroll > 100) {
            $('.navbar.fixed-top').addClass('scrolling');
        } else {
            $('.navbar.fixed-top').removeClass('scrolling');
        }
        if (scroll > ($(window).height() - 100) && scroll < ($(document).height() - ($(window).height() + $('#footer').height()))) {
            $('.side-pan').addClass('fixed');
        } else if(scroll > ($(document).height() - ($(window).height() + $('#footer').height()))) {
            $('.side-pan').removeClass('fixed');
        } else {
            $('.side-pan').removeClass('fixed');
        }
    });
});