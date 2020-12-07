$(function () {
	$('.slider').slick({
		infinite: true,
		draggable: true,
		slidesPerRow: 1,
		slidesToShow: 1,
		slidesToScroll: 1,
		waitForAnimate: true,
		swipeToSlide: true,
		touchThreshold: 100,
		speed: 500,
		pauseOnHover: true,
		autoplaySpeed: 3000,
		arrows: true,
		prevArrow: $(".pre"),
		nextArrow: $(".next"),
	});
});