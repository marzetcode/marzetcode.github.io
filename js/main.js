const parallax = document.getElementById("parallax");
window.addEventListener("scroll", function a () {
	let offset = window.pageYOffset;
	console.log("offset:" + offset);
	console.log("offset * 08:" + offset * 0.8)
	parallax.style.backgroundPositionY = offset * 0.8 + "px";
});

a();

/* function functionName() {
	console.log("Hello World");
}
functionName(); */