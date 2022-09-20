let item = document.querySelector('.item');
let test = document.querySelector('.test');

document.addEventListener('scroll', function () {
	test.innerHTML = 'distanceScreen = ' + getDistanceScreen();

	console.log(item.getBoundingClientRect());
});

function getDistanceScreen() {
	let distanceScreen, distanceScreen_;
	let pageHeight = window.innerHeight;
	let itemTop = item.getBoundingClientRect().top;

	distanceScreen_ = parseInt((pageHeight - itemTop) * 100 / pageHeight);

	if (distanceScreen_ >= 0 && distanceScreen_ <= 100) {
		distanceScreen = distanceScreen_;
	} else if (distanceScreen_ < 0) {
		distanceScreen = 0;
	} else {
		distanceScreen = 100;
	};

	return distanceScreen;
};