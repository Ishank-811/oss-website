
        var mySwiper = new Swiper('.swiper-container', {
            // Optional parameters

            slidesPerView: 3,

            allowTouchMove: true,
            loop: true,
            centeredSlides: true,
            slideToclickedslide: true,
            effect: "coverflow",
            grabcursor: true,
            autoplay: false,
            direction: 'horizontal',
            loop: true,

            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
            },

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            coverflow:
            {
                rotate: 0,
                stretch: 100,
                depth: 200,
                modifier: 1,
                slideShadows: false
            },



            // And if we need scrollbar
            scrollbar: {
                el: '.swiper-scrollbar',
            },
        });
        $("#work").magnificPopup
            ({
                delegate: 'a',
                type: 'image',
                gallery: {
                    enabled: true
                }
            });