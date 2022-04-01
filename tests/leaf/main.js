window.onload = function () {
	document.querySelector('.preloader').classList.add('preloaderHidden');
};

const swiper = new Swiper('.swiper', {
	navigation: {
		nextEl: '.next',
		prevEl: '.prev',
	 },
});

let nextBtn = document.querySelector('.next');
let prevBtn = document.querySelector('.prev');

swiper.on('slideChange', function () {

	if (swiper.activeIndex == 0) {
		prevBtn.style.display = 'none';
		nextBtn.style.display = 'block';
	}
	if (swiper.activeIndex == 1) {
		prevBtn.style.display = 'block';
	}
	if (swiper.activeIndex == 2) {
		nextBtn.style.display = 'none';
	}

});