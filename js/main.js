const parallax = document.getElementById("parallax");
window.addEventListener("scroll", function () {
	let offset = window.pageYOffset;
	console.log("offset: " + offset);
	// console.log("offset * 07: " + offset * 0.7)
	parallax.style.backgroundPositionY = (offset * 0.7) + "px";
});

function functionName() {
	console.log("Hello World");
}
functionName();