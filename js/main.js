//parallax for header
const parallax1 = document.getElementById('parallax');
//console.log(parallax1.style);
document.addEventListener('DOMContentLoaded', function() {
	window.addEventListener('scroll', function() {
		let offset = window.pageYOffset;
		parallax1.style.backgroundPositionY = offset * 0.8 + 'px';
	});
});
//parallax for header

//hidden horizontal scrollbar because css overflow-x: hidden doesn't work with window.pageYOffset
document.documentElement.style.overflowX = 'hidden';