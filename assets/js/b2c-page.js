//slider init
var swiper = new Swiper(".review-init-slider", {
    slidesPerView: 1,
    spaceBetween: 5,
    loop: true,
    breakpoints: {
        768: {
            slidesPerView: 3,
        },
        992: {
            spaceBetween: 30,
            slidesPerView: 3,
        },
    },
});
//slider init:END

//Changed position block
const reviewSection = document.querySelector('.review-section');
const videoSection = document.querySelector('.video-section');

if(window.innerWidth <= 767){
    videoSection.after(reviewSection);
}
//Changed position block:END

//Show video Top block
const btnShowVideoTop = document.querySelector('.btn-play');
btnShowVideoTop.addEventListener('click', function (event){
    this.closest('.video').classList.toggle('watch-video');
});
//Show video:END

//Show video video section
const btnShowVideo = document.querySelector('.show-video');
btnShowVideo.addEventListener('click', function (event){
   this.closest('.video-wrapper').classList.toggle('show');
});
//Show video:END