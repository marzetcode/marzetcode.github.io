let canvas;
let ctx;

let canvasW;
let canvasH;

let carWidth;
let carHeight;

let scrollSpeed = 0.0;
let posX = -1300.0;
let scaleRatio = 1;

let car = new Image();

let nn_path = "";

let scrollMin = 0;
let scrollMax = 0;

let n = 0;

let guide;

function preload(path) {
	nn_path = path;
	canvas = document.getElementById('car');
	guide = document.querySelector('.guide');
	ctx = canvas.getContext('2d');

	car.onload = loadDone;
	car.src = nn_path + "img/car.jpg";
};

function drawStuff(detectState) {
	ctx.drawImage(car, posX, 0, carWidth, carHeight);
	ctx.clearRect(0, 0, canvasW, canvasH);

	if (detectState != undefined) {
		scrollSpeed = 30.0 * Math.sin(Math.PI * detectState.x);
		guide.style.display = "none";
	}
	posX = posX + scrollSpeed;

	scrollMin = (435 * scaleRatio) - canvasW / 2;
	scrollMax = (1500 * scaleRatio) - canvasW / 2;

	if (posX > -scrollMin) posX = -scrollMin;
	if (posX < -scrollMax) posX = -scrollMax;
};

function redrawScene() {
	ctx.drawImage(car, posX, 0, carWidth, carHeight);
	ctx.save();

	//console.log(posX);

	ctx.restore();
	window.requestAnimationFrame(redrawScene);
};

function resizeCanvas() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	canvasW = canvas.width;
	canvasH = canvas.height;

	scaleRatio = canvasH / car.height;
	carWidth = car.width * scaleRatio;
	carHeight = canvasH;

	console.log("canvas width = " + canvasW, "canvas height = " + canvasH);
};

function loadDone() {
	window.addEventListener('resize', resizeCanvas, false);
	resizeCanvas();
	drawStuff();

	window.requestAnimationFrame(redrawScene);
};

let gyroBtn = document.querySelector('.gyro .icon');
let guideGyro = document.querySelector('.guideGyro');
let btn = document.querySelector('.btn');
let gama;

//if (location.protocol != "https:") {
//	location.href = "https:" + window.location.href.substring(window.location.protocol.length);
//}

function testDeviceOrientation() {
	if (typeof DeviceOrientationEvent !== 'function') {
		return setResult('DeviceOrientationEvent not detected')
	}
	if (typeof DeviceOrientationEvent.requestPermission !== 'function') {
		return setResult('DeviceOrientationEvent.requestPermission not detected')
	}
	DeviceOrientationEvent.requestPermission().then(function (result) {
		return setResult(result);
	});
};

function setResult(result, event) {
	console.log(result);
};

gyroBtn.addEventListener("click", function () {
	testDeviceOrientation();

	guide.style.display = 'none';
	//sessionStorage.setItem('sensor', 'on');
});

function drawStuffGyro(detectState) {
	if (detectState != undefined) {
		scrollSpeed = detectState;
	}
	posX = posX + scrollSpeed;

	scrollMin = (435 * scaleRatio) - canvasW / 2;
	scrollMax = (1500 * scaleRatio) - canvasW / 2;

	if (posX > -scrollMin) posX = -scrollMin;
	if (posX < -scrollMax) posX = -scrollMax;
};

window.addEventListener('deviceorientation', function (event) {
	gama = event.gamma;
	drawStuffGyro(gama);
});

//setInterval(() => {
//	if (sessionStorage.getItem('sensor') === 'on') {
//		guide.style.display = 'none';
//		//console.log('+++');
//	}
//}, 1);