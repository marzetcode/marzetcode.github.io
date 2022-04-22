//parallax
const paralax = document.getElementById('parallax');
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