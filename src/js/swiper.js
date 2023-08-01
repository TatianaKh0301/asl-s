new Swiper(".image-slider", {
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
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    }
});