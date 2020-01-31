//parallax for header
const parallax = document.getElementById("parallax");
// console.log(parallax.style);
document.addEventListener("DOMContentLoaded", function () {
	window.addEventListener("scroll", function () {
		let offset = window.pageYOffset;
		parallax.style.backgroundPositionY = offset * 0.8 + "px";
	});
});

//hidden horizontal scrollbar because css overflow-x: hidden doesn't work with window.pageYOffset
document.documentElement.style.overflowX = 'hidden';


const mainblockfade = document.getElementsByClassName("main-block");
console.log(mainblockfade.style);
document.addEventListener("DOMContentLoaded", function() {
	window.addEventListener("scroll", function () {
		let mainblockY = window.pageYOffset;
		console.log(mainblockY);
		if (mainblockY = 200) {
			mainblockfade.classList.add("animated", "fadeIn");
		};
	});
})

//hello world
function functionName() {
	console.log("Hello World");
}
functionName();