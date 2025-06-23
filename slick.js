$(".slide-section").slick({
    arrows: false,
    dots: true,
    autoplay: true,
});

$(".our-clients-logos-group").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1300,
            settings: {
            slidesToShow: 4,

            }
        },
        {
            breakpoint: 1100,
            settings: {
            slidesToShow: 3,
            }
        },
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        },
    ]
});


$(".about-members-mobile").slick();