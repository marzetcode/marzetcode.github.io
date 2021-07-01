//swiper
const menu1 = ['Wer wir sind', 'Unsere Kunden', 'Was wir machen', 'Kontakt'];

let swiper1 = new Swiper('.swiper-main', {
	direction: 'horizontal',
	loop: false,
	speed: 2000,
	centeredSlides: true,
	nested: false,
	keyboard: true,
	mousewheel: {
		eventsTarget: '.swiper-main',
		invert: false,
	},
	swipeHandler: '.swiper-main',
	touchEventsTarget: '.swiper-main',
	hashNavigation: true,
	hashNavigation: {
		replaceState: true,
		watchState: true
	},
	pagination: {
		el: '.menu',
		clickable: true,
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + (menu1[index]) + '</span>';
		},
	},
});

const menu2 = ['Web Banner', 'Landing Pages', 'Web-Animation'];
const menu2Class = ['dot1', 'dot2', 'dot3'];
let swiper2 = new Swiper('.swiper-machen', {
	direction: 'vertical',
	loop: true,
	speed: 1500,
	centeredSlides: true,
	nested: true,
	//grabCursor: true,
	effect: 'flip',
	flipEffect: {
		slideShadows: false,
		limitRotation: true
	},
	//mousewheel: {
	//	eventsTarget: '.swiper-machen',
	//	invert: false,
	//	forceToAxis: true,
	//	releaseOnEdges: false
	//},
	swipeHandler: '.swiper-machen',
	touchEventsTarget: '.swiper-machen',
	touchStartPreventDefault: false,
	hashNavigation: {
		replaceState: true,
	},
	pagination: {
		el: '.pagination-machen',
		clickable: true,
		type: 'bullets',
		renderBullet: function (index, className) {
			return '<span class="' + className + ' ' + menu2Class[index] + '">' + (menu2[index]) + '</span>';
		},
	},
});

let swiper3 = new Swiper('.example1', {
	direction: 'horizontal',
	loop: true,
	speed: 1500,
	centeredSlides: true,
	slidesPerView: 'auto',
	spaceBetween: '3%',
	nested: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: '.example1Next',
		prevEl: '.example1Prev',
	},
});
//swiper3.loopFix();

//let swiper4 = new Swiper('.example2', {
//	direction: 'horizontal',
//	loop: true,
//	speed: 1500,
//	centeredSlides: true,
//	slidesPerView: 3,
//	spaceBetween: '5%',
//	nested: true,
//	//swipeHandler: '.example2',
//	//touchEventsTarget: '.example2',
//	//touchStartPreventDefault: false,
//	autoplay: {
//		delay: 2000,
//		disableOnInteraction: false,
//	 },
//	navigation: {
//		nextEl: '.example2Next',
//		prevEl: '.example2Prev',
//	 },
//});

//let swiper5 = new Swiper('.example3', {
//	direction: 'horizontal',
//	loop: true,
//	speed: 1500,
//	//centeredSlides: true,
//	slidesPerView: 3,
//	spaceBetween: '5%',
//	nested: true,
//	//swipeHandler: '.example3',
//	//touchEventsTarget: '.example3',
//	//touchStartPreventDefault: false,
//	autoplay: {
//		delay: 2000,
//		disableOnInteraction: false,
//	 },
//	navigation: {
//		nextEl: '.example3Next',
//		prevEl: '.example3Prev',
//	 },
//});
//swiper

//menu swiper
let menuOpen = document.querySelector('.menuOpen');
let menuClose = document.querySelector('.menuClose');
let menuWrapp = document.querySelector('.menuWrapp');

menuOpen.addEventListener('click', function () {
	menuWrapp.classList.add('menuAnimOpen');
	menuWrapp.classList.remove('menuAnimClose');

	menuOpen.classList.add('openAnim');
	menuOpen.classList.remove('openAnim2');

	menuClose.classList.add('closeAnim');
	menuClose.classList.remove('closeAnim2');
});

menuClose.addEventListener('click', function () {
	menuWrapp.classList.add('menuAnimClose');
	menuWrapp.classList.remove('menuAnimOpen');

	menuOpen.classList.add('openAnim2');
	menuOpen.classList.remove('openAnim');

	menuClose.classList.add('closeAnim2');
	menuClose.classList.remove('closeAnim');
});

let menuS = document.querySelector('.menu');
//console.log(menuS.firstChild);

menuS.childNodes[0].addEventListener('click', function () {
	if (menuWrapp.classList.contains('menuAnimOpen')) {
		menuWrapp.classList.add('menuAnimClose');
		menuWrapp.classList.remove('menuAnimOpen');

		menuOpen.classList.add('openAnim2');
		menuOpen.classList.remove('openAnim');

		menuClose.classList.add('closeAnim2');
		menuClose.classList.remove('closeAnim');
	}

});
menuS.childNodes[1].addEventListener('click', function () {
	if (menuWrapp.classList.contains('menuAnimOpen')) {
		menuWrapp.classList.add('menuAnimClose');
		menuWrapp.classList.remove('menuAnimOpen');

		menuOpen.classList.add('openAnim2');
		menuOpen.classList.remove('openAnim');

		menuClose.classList.add('closeAnim2');
		menuClose.classList.remove('closeAnim');
	}
});
menuS.childNodes[2].addEventListener('click', function () {
	if (menuWrapp.classList.contains('menuAnimOpen')) {
		menuWrapp.classList.add('menuAnimClose');
		menuWrapp.classList.remove('menuAnimOpen');

		menuOpen.classList.add('openAnim2');
		menuOpen.classList.remove('openAnim');

		menuClose.classList.add('closeAnim2');
		menuClose.classList.remove('closeAnim');
	}
});
menuS.childNodes[3].addEventListener('click', function () {
	if (menuWrapp.classList.contains('menuAnimOpen')) {
		menuWrapp.classList.add('menuAnimClose');
		menuWrapp.classList.remove('menuAnimOpen');

		menuOpen.classList.add('openAnim2');
		menuOpen.classList.remove('openAnim');

		menuClose.classList.add('closeAnim2');
		menuClose.classList.remove('closeAnim');
	}
});
//menu swiper

//logo animation
let logoSmall = document.querySelector('.logoSmall');
let logoMobile = document.querySelector('.logoMobile');
let cornerTop = document.querySelector('.cornerTop');
let cornerTopMobile = document.querySelector('.cornerTopMobile');
//console.log(logoSmall);

swiper1.on('slideChange', function () {
	if (swiper1.realIndex !== 0) {
		cornerTop.classList.add('cornerTopFadeOut');
		cornerTop.classList.remove('cornerTopFadeIn');

		cornerTopMobile.classList.add('cornerTopFadeOut');
		cornerTopMobile.classList.remove('cornerTopFadeIn');

		logoSmall.classList.add('logoSmallFadeIn');
		logoSmall.classList.remove('logoSmallFadeOut');

		logoMobile.classList.add('logoSmallFadeIn');
		logoMobile.classList.remove('logoSmallFadeOut');

	} else {
		cornerTop.classList.add('cornerTopFadeIn');
		cornerTop.classList.remove('cornerTopFadeOut');

		cornerTopMobile.classList.add('cornerTopFadeIn');
		cornerTopMobile.classList.remove('cornerTopFadeOut');

		logoSmall.classList.add('logoSmallFadeOut');
		logoSmall.classList.remove('logoSmallFadeIn');

		logoMobile.classList.add('logoSmallFadeOut');
		logoMobile.classList.remove('logoSmallFadeIn');
	}
});
//logo animation

//arrow animation
let btn = document.querySelector('.btn');
let arrow = document.querySelector('.arrow');

btn.addEventListener('mouseover', function () {
	arrow.classList.add('arrowAnim');
});
btn.addEventListener('mouseout', function () {
	arrow.classList.remove('arrowAnim');
});
//arrow animation

//kontakt btn
$('.button--bubble').each(function () {
	var $circlesTopLeft = $(this).parent().find('.circle.top-left');
	var $circlesBottomRight = $(this).parent().find('.circle.bottom-right');
	var tl = new TimelineLite();
	var tl2 = new TimelineLite();
	var btTl = new TimelineLite({ paused: true });
	tl.to($circlesTopLeft, 1.2, { x: -25, y: -25, scaleY: 2, ease: SlowMo.ease.config(0.1, 0.7, false) });
	tl.to($circlesTopLeft.eq(0), 0.1, { scale: 0.2, x: '+=6', y: '-=2' });
	tl.to($circlesTopLeft.eq(1), 0.1, { scaleX: 1, scaleY: 0.8, x: '-=10', y: '-=7' }, '-=0.1');
	tl.to($circlesTopLeft.eq(2), 0.1, { scale: 0.2, x: '-=15', y: '+=6' }, '-=0.1');
	tl.to($circlesTopLeft.eq(0), 1, { scale: 0, x: '-=5', y: '-=15', opacity: 0 });
	tl.to($circlesTopLeft.eq(1), 1, { scaleX: 0.4, scaleY: 0.4, x: '-=10', y: '-=10', opacity: 0 }, '-=1');
	tl.to($circlesTopLeft.eq(2), 1, { scale: 0, x: '-=15', y: '+=5', opacity: 0 }, '-=1');
	var tlBt1 = new TimelineLite();
	var tlBt2 = new TimelineLite();
	tlBt1.set($circlesTopLeft, { x: 0, y: 0, rotation: -45 });
	tlBt1.add(tl);
	tl2.set($circlesBottomRight, { x: 0, y: 0 });
	tl2.to($circlesBottomRight, 1.1, { x: 30, y: 30, ease: SlowMo.ease.config(0.1, 0.7, false) });
	tl2.to($circlesBottomRight.eq(0), 0.1, { scale: 0.2, x: '-=6', y: '+=3' });
	tl2.to($circlesBottomRight.eq(1), 0.1, { scale: 0.8, x: '+=7', y: '+=3' }, '-=0.1');
	tl2.to($circlesBottomRight.eq(2), 0.1, { scale: 0.2, x: '+=15', y: '-=6' }, '-=0.2');
	tl2.to($circlesBottomRight.eq(0), 1, { scale: 0, x: '+=5', y: '+=15', opacity: 0 });
	tl2.to($circlesBottomRight.eq(1), 1, { scale: 0.4, x: '+=7', y: '+=7', opacity: 0 }, '-=1');
	tl2.to($circlesBottomRight.eq(2), 1, { scale: 0, x: '+=15', y: '-=5', opacity: 0 }, '-=1');
	tlBt2.set($circlesBottomRight, { x: 0, y: 0, rotation: 45 });
	tlBt2.add(tl2);
	btTl.add(tlBt1);
	btTl.to($(this).parent().find('.button.effect-button'), 0.8, { scaleY: 1.1 }, 0.1);
	btTl.add(tlBt2, 0.2);
	btTl.to($(this).parent().find('.button.effect-button'), 1.8, { scale: 1, ease: Elastic.easeOut.config(1.2, 0.4) }, 1.2);
	btTl.timeScale(2.6);
	$(this).on('mouseover', function () {
		btTl.restart();
	});
});
//kontakt btn

//kontakt menu active
let kont = document.getElementsByClassName('swiper-pagination-bullet');

setInterval(() => {
	if (kont[6].classList.contains('swiper-pagination-bullet-active')) {
		kont[6].classList.add('kont-active');
	} else {
		kont[6].classList.remove('kont-active');
	}
}, 1);
//kontakt menu active

//fishes
const fish_1 = document.querySelector('.fish_1');
const fish_2 = document.querySelector('.fish_2');
const fish_3 = document.querySelector('.fish_3');
const fish_4 = document.querySelector('.fish_4');
const fish_5 = document.querySelector('.fish_5');
const fish_6 = document.querySelector('.fish_6');

const fish1 = document.querySelector('.fish1');
const fish2 = document.querySelector('.fish2');
const fish3 = document.querySelector('.fish3');
const fish4 = document.querySelector('.fish4');
const fish5 = document.querySelector('.fish5');
const fish6 = document.querySelector('.fish6');

const eye1 = document.querySelector('.e1');
const eye2 = document.querySelector('.e2');
const eye3 = document.querySelector('.e3');
const eye4 = document.querySelector('.e4');
const eye5 = document.querySelector('.e5');
const eye6 = document.querySelector('.e6');

const widthMob = document.body.clientWidth;

//console.log(widthMob);
//console.log(eye3);

//fish 1
eye1.style.transition = "0.1s";
fish_1.addEventListener('mouseenter', () => {
	//console.log('+++');
	fish_1.style.animationPlayState = "paused";
	eye1.style.transform = "scale(1.5)";
	setTimeout(() => {
		eye1.style.transform = "scale(1)";
	}, 100);
});

fish_1.addEventListener('mouseleave', () => {
	//console.log('---');
	fish_1.style.animationPlayState = "running";
});

fish_1.addEventListener('touchstart', () => {
	//console.log('+++');
	fish_1.style.animationPlayState = "paused";
	eye1.style.transform = "scale(1.5)";
	setTimeout(() => {
		eye1.style.transform = "scale(1)";
	}, 100);
	setTimeout(() => {
		fish_1.style.animationPlayState = "running";
	}, 1000);
});

fish_1.addEventListener('click', () => {
	eye1.style.transform = "scale(1.5)";
	setTimeout(() => {
		eye1.style.transform = "scale(1)";
	}, 100);
});

//fish 2
fish_2.addEventListener('mouseenter', () => {
	fish_2.style.animationPlayState = "paused";
	eye2.style.opacity = "0";
	setTimeout(() => {
		eye2.style.opacity = "1";
	}, 50);
});

fish_2.addEventListener('mouseleave', () => {
	fish_2.style.animationPlayState = "running";
});

fish_2.addEventListener('touchstart', () => {
	fish_2.style.animationPlayState = "paused";
	eye2.style.opacity = "0";
	setTimeout(() => {
		eye2.style.opacity = "1";
	}, 50);
	setTimeout(() => {
		fish_2.style.animationPlayState = "running";
	}, 1000);
});

fish_2.addEventListener('click', () => {
	eye2.style.opacity = "0";
	setTimeout(() => {
		eye2.style.opacity = "1";
	}, 50);
});

//fish 3
eye3.style.transition = "0.1s";
fish_3.addEventListener('mouseenter', () => {
	fish_3.style.animationPlayState = "paused";
	eye3.style.transform = "scale(1.5)";
	setTimeout(() => {
		eye3.style.transform = "scale(1)";
	}, 100);
});

fish_3.addEventListener('mouseleave', () => {
	fish_3.style.animationPlayState = "running";
});

fish_3.addEventListener('touchstart', () => {
	fish_3.style.animationPlayState = "paused";
	eye3.style.transform = "scale(1.5)";
	setTimeout(() => {
		eye3.style.transform = "scale(1)";
	}, 100);
	setTimeout(() => {
		fish_3.style.animationPlayState = "running";
	}, 1000);
});

fish_3.addEventListener('click', () => {
	if (widthMob < 416) {
		fish3.style.transform = "scale(0.7)";
		setTimeout(() => {
			fish3.style.transform = "scale(0.5)";
		}, 500);
	} else {
		fish3.style.transform = "scale(1.2)";
		setTimeout(() => {
			fish3.style.transform = "scale(1)";
		}, 500);
	}
});

//fish 4
fish_4.addEventListener('mouseenter', () => {
	fish_4.style.animationPlayState = "paused";
	eye4.style.opacity = "0";
	setTimeout(() => {
		eye4.style.opacity = "1";
	}, 50);
});

fish_4.addEventListener('mouseleave', () => {
	fish_4.style.animationPlayState = "running";
});

fish_4.addEventListener('touchstart', () => {
	fish_4.style.animationPlayState = "paused";
	eye4.style.opacity = "0";
	setTimeout(() => {
		eye4.style.opacity = "1";
	}, 50);
	setTimeout(() => {
		fish_4.style.animationPlayState = "running";
	}, 1000);
});

fish_4.addEventListener('click', () => {
	eye4.style.opacity = "0";
	setTimeout(() => {
		eye4.style.opacity = "1";
	}, 50);
});

//fish 5
eye5.style.transition = "0.1s";
fish_5.addEventListener('mouseenter', () => {
	fish_5.style.animationPlayState = "paused";
	eye5.style.transform = "scale(1.5)";
	setTimeout(() => {
		eye5.style.transform = "scale(1)";
	}, 100);
});

fish_5.addEventListener('mouseleave', () => {
	fish_5.style.animationPlayState = "running";
});

fish_5.addEventListener('touchstart', () => {
	fish_5.style.animationPlayState = "paused";
	eye5.style.transform = "scale(1.5)";
	setTimeout(() => {
		eye5.style.transform = "scale(1)";
	}, 100);
	setTimeout(() => {
		fish_5.style.animationPlayState = "running";
	}, 1000);
});

fish_5.addEventListener('click', () => {
	eye5.style.transform = "scale(1.5)";
	setTimeout(() => {
		eye5.style.transform = "scale(1)";
	}, 100);
});

//fish 6
fish_6.addEventListener('mouseenter', () => {
	fish_6.style.animationPlayState = "paused";
	eye6.style.opacity = "0";
	setTimeout(() => {
		eye6.style.opacity = "1";
	}, 50);
});

fish_6.addEventListener('mouseleave', () => {
	fish_6.style.animationPlayState = "running";
});

fish_6.addEventListener('touchstart', () => {
	fish_6.style.animationPlayState = "paused";
	eye6.style.opacity = "0";
	setTimeout(() => {
		eye6.style.opacity = "1";
	}, 50);
	setTimeout(() => {
		fish_6.style.animationPlayState = "running";
	}, 1000);
});

fish_6.addEventListener('click', () => {
	if (widthMob < 416) {
		fish6.style.transform = "scale(0.7)";
		setTimeout(() => {
			fish6.style.transform = "scale(0.5)";
		}, 500);
	} else {
		fish6.style.transform = "scale(1.2)";
		setTimeout(() => {
			fish6.style.transform = "scale(1)";
		}, 500);
	}
});
//fishes

//crab
let crab = document.querySelector('.crab');
let claw1 = document.getElementById('claw1_part2');
let claw1_2 = document.getElementById('claw1_part1');
let claw2 = document.getElementById('claw2_part2');
let claw2_2 = document.getElementById('claw2_part1');

crab.addEventListener('mouseenter', function () {
	claw1.classList.add('claw1Anim');
	claw2.classList.add('claw2Anim');
	claw1_2.classList.add('claw1Anim_2');
	claw2_2.classList.add('claw2Anim_2');
});
crab.addEventListener('mouseleave', function () {
	claw1.classList.remove('claw1Anim');
	claw2.classList.remove('claw2Anim');
	claw1_2.classList.remove('claw1Anim_2');
	claw2_2.classList.remove('claw2Anim_2');
});

swiper1.on('sliderMove slideChange', function () {
	claw1.classList.add('claw1Anim');
	claw2.classList.add('claw2Anim');
	claw1_2.classList.add('claw1Anim_2');
	claw2_2.classList.add('claw2Anim_2');
});
swiper1.on('slideChangeTransitionEnd', function () {
	claw1.classList.remove('claw1Anim');
	claw2.classList.remove('claw2Anim');
	claw1_2.classList.remove('claw1Anim_2');
	claw2_2.classList.remove('claw2Anim_2');
});
//crab

//examples
let video = document.querySelectorAll('.examples video');
let example = document.querySelectorAll('.examples .swiper-slide');

//console.log(example);

video.forEach((el) => {
	el.addEventListener('mouseenter', function () {
		console.log('+++');
		el.play();
	});
});

//examples

//
let dot1 = $('.dot1');
let dot2 = $('.dot2');
let dot3 = $('.dot3');
let screenW = document.body.clientWidth;

window.addEventListener('resize', function () {
	let screenW = document.body.clientWidth;
	console.log(screenW);
	if (screenW <= 1025) {
		dot1.empty();
		dot2.empty();
		dot3.empty();
		example.forEach((el) => {
			if (el.classList.contains('swiper-slide-active')) {
				video.forEach((el) => {
					el.play();
				});
			};
		});
	};
	if (screenW > 1025) {
		dot1.text('Web Banner');
		dot2.text('Landing Pages');
		dot3.text('Web-Animation');
	}
});
if (screenW <= 1025) {
	dot1.empty();
	dot2.empty();
	dot3.empty();
	example.forEach((el) => {
		if (el.classList.contains('swiper-slide-active')) {
			video.forEach((el) => {
				el.play();
			});
		};
	});

};
if (screenW > 1025) {
	dot1.text('Web Banner');
	dot2.text('Landing Pages');
	dot3.text('Web-Animation');
};
//

//cookies
//let cks = Cookies.get();
//console.log(cks);
//cookies