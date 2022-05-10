//parallax
const paralax = document.querySelector('.parallax');
//console.log(paralax.style);

document.addEventListener('DOMContentLoaded', function() {
	window.addEventListener('scroll', function() {
		let offset = window.pageYOffset;
		paralax.style.backgroundPositionY = offset * 0.8 + 'px';
	});
});
//parallax

//hidden horizontal scrollbar because css overflow-x: hidden doesn't work with window.pageYOffset
document.documentElement.style.overflowX = 'hidden';


let hv = document.querySelector('.hv');
document.addEventListener('click', function(event) {
	let posX = event.pageX;
	let posY = event.pageY;
	// console.log(posX);

	hv.style.left = posX + 'px';
	hv.style.top = posY + 'px';
});

console.log(hv.style);