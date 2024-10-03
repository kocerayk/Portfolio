$(document).ready(function() {
    $('a[href^="#"]').on("click", function(event) {
        event.preventDefault();
        var target = $($(this).attr("href"));
        if (target.length) {
            $("html, body").animate({
                    scrollTop: target.offset().top - 15,
                },
                1000
            );
        }
    });

    $(window).on("scroll", function() {
        var scrollPos = $(document).scrollTop();
        $(".nav-link").each(function() {
            var currLink = $(this);
            var refElement = $($(this).attr("href"));
            if (refElement.position().top - 50 <= scrollPos &&
                refElement.position().top + refElement.height() > scrollPos) {
                $(".nav-link").removeClass("active");
                currLink.addClass("active");
            } else {
                currLink.removeClass("active");
            }
        });
    });

    $(".testimonials-container").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            },
        }, ],
    });

    $(".menu-btn").click(function() {
        $(".navbar").toggleClass("mobile");
        $(".menu-btn").toggleClass("active");
    });
});
