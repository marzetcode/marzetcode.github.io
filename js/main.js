const parallax = document.getElementById("parallax");
window.addEventListener("scroll", function() {
	let offset = window.pageYOffset;
	console.log("offset:" + offset);
	console.log(parallax.style);
	parallax.style.backgroundPositionY = offset * 0.8 + "px";
});

console.log(parallax);

/* function functionName() {
	console.log("Hello World");
}
functionName(); */