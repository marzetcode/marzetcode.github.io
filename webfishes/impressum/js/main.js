//menu swiper
let pagOpen = document.querySelector('.menuOpen');
let pagClose = document.querySelector('.menuClose');
let paginationWrapp = document.querySelector('.menuWrapp');

pagOpen.addEventListener('click', function () {
	paginationWrapp.classList.remove('menuAnimClose');
	paginationWrapp.classList.add('menuAnimOpen');

	pagOpen.classList.remove('openAnim2');
	pagOpen.classList.add('openAnim');

	pagClose.classList.remove('closeAnim2');
	pagClose.classList.add('closeAnim');
});

pagClose.addEventListener('click', function () {
	paginationWrapp.classList.remove('menuAnimOpen');
	paginationWrapp.classList.add('menuAnimClose');

	pagOpen.classList.remove('openAnim');
	pagOpen.classList.add('openAnim2');

	pagClose.classList.remove('closeAnim');
	pagClose.classList.add('closeAnim2');
});
//menu swiper