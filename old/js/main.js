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


//fade in by scroll
const blockRowFade = document.getElementsByClassName('blockrow');
let browserH = document.documentElement.clientHeight;
console.log(blockRowFade[0].style);
console.log('clientHeight: ', browserH);
document.addEventListener('DOMContentLoaded', function() {
	window.addEventListener('scroll', function() {
		let h = 1000;
		let blockRowY = window.pageYOffset;
		//console.log(blockRowY);
		// если высота окна браузера меньше 700 или если страница перезагружена
		if ((browserH < 700) || (event.currentTarget.performance.navigation.type == 1)) {
			for (let i = 0; i < blockRowFade.length; i++) {
				blockRowFade[i].classList.add('animated', 'fadeIn');
			};
		} else
			for (let i = 0; i < blockRowFade.length; i++) {
				if ((blockRowY < h) && (blockRowY > h - 100)) {
					blockRowFade[i].classList.add('animated', 'fadeIn');
				};
				h = h + 400;
			};
	});
});
//fade in by scroll