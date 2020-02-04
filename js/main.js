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


//fade in by scroll
const blockrowfade = document.getElementsByClassName("blockrow");
let browserH = document.documentElement.clientHeight;
console.log(blockrowfade[0].style);
console.log(browserH);
document.addEventListener("DOMContentLoaded", function () {
	window.addEventListener("scroll", function () {
		let h = 300;
		let blockrowY = window.pageYOffset;
		console.log(blockrowY);
		for (let i = 0; i < blockrowfade.length; i++) {
			if ((blockrowY < h) && (blockrowY > h - 50)) {
				blockrowfade[i].classList.add("animated", "fadeIn");
			};
			h = h + 400;
		};
	});
})

//hello world
function functionName() {
	console.log("Hello World");
}
functionName();