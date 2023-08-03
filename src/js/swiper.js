
new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    autoHeight: true,
    
    slideToClickedSlide: true,

    keyboard: {
        enabled: true,
        onlyInViewport: true, 
        pageUpDown: true,
    },

    mousewheel: {
        sensivity: 1,
    },

    autoplay: {
        delay: 1000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    }
});

