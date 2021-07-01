//menu
let menuOpen = document.querySelector('.menuOpen');
let menuClose = document.querySelector('.menuClose');
let menuWrapp = document.querySelector('.menuWrapp');

menuOpen.addEventListener('click', function () {
	menuWrapp.classList.add('menuAnimOpen');
	menuWrapp.classList.remove('menuAnimClose');

	menuOpen.classList.add('openAnim');
	menuOpen.classList.remove('openAnim2');

	menuClose.classList.add('closeAnim');
	menuClose.classList.remove('closeAnim2');
});

menuClose.addEventListener('click', function () {
	menuWrapp.classList.add('menuAnimClose');
	menuWrapp.classList.remove('menuAnimOpen');

	menuOpen.classList.add('openAnim2');
	menuOpen.classList.remove('openAnim');

	menuClose.classList.add('closeAnim2');
	menuClose.classList.remove('closeAnim');
});
//menu