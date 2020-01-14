//parallax for header
const parallax = document.getElementById("parallax");
console.log(parallax.style);
document.addEventListener("DOMContentLoaded", function () {
	window.addEventListener("scroll", function () {
		let offset = window.pageYOffset;
		parallax.style.backgroundPositionY = offset * 0.8 + "px";
	});
});

/* function functionName() {
	console.log("Hello World");
}
functionName(); */