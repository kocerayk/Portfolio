$(document).ready(function() {
    $('a[href^="#"]').on("click", function(event) {
        event.preventDefault();
        var target = $($(this).attr("href"));
        if (target.length) {
            $("html, body").animate({
                scrollTop: target.offset().top - 15,
            }, 1000);
        }
    });

    $(window).on("scroll", function() {
        var scrollPos = $(document).scrollTop();
        $(".nav-link").each(function() {
            var currLink = $(this);
            var refElement = $($(this).attr("href"));
            var targetOffset = refElement.offset().top;
    
            if (targetOffset - 50 <= scrollPos && targetOffset + refElement.outerHeight() > scrollPos) {
                if (refElement.attr('id') === 'footer') {
                    $(".nav-link").removeClass("active");
                } else {
                    $(".nav-link").removeClass("active");
                    currLink.addClass("active");
                }
            } else {
                currLink.removeClass("active");
            }
        });
    
        if (scrollPos + $(window).height() >= $(document).height()) {
            $(".nav-link").removeClass("active");
        }
    });    

    $(".work-experience-container").slick({
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
        }],
    });

    $(".menu-btn").click(function() {
        $(".navbar").toggleClass("mobile");
        $(".menu-btn").toggleClass("active");
    });
});
