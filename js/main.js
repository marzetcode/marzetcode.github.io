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
console.log(mainblockfade[0].style);
document.addEventListener("DOMContentLoaded", function () {
	window.addEventListener("scroll", function () {
		let h = 300;
		let mainblockY = window.pageYOffset;
		console.log(mainblockY);
		for (let i = 0; i < mainblockfade.length; i++) {
			console.log(mainblockfade[i]);
			if (mainblockY == h) {
				mainblockfade[i].classList.add("animated", "fadeIn");
			};
			if (i % 2 == 0) {
				h = h + 400;
			}
		};
	});
})

//hello world
function functionName() {
	console.log("Hello World");
}
functionName();