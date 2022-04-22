//preloader
window.onload = function () {
	document.querySelector('.preloader').classList.add('preloaderHidden');
};
//preloader

const swiper = new Swiper('.swiper', {
	navigation: {
		nextEl: '.next',
		prevEl: '.prev',
	},

	loop: true,
	mousewheel: true,
	simulateTouch: true,
	speed: 0,
	effect: 'fade',
	fadeEffect: {
		crossFade: true
	},
});

let slides = document.querySelectorAll('.swiper-slide');
console.log(slides);

swiper.on('slideChangeTransitionStart', function () {
	let z = swiper.getTranslate();
	console.log(z);

	// document.querySelector('.swiper-slide-active').style.opacity = '1 !important';
});
