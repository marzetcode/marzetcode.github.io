window.onload = function () {
	document.querySelector('.preloader').classList.add('preloaderHidden');
};


let audio = document.querySelector('audio');
let play = document.querySelector('.play');
let pause = document.querySelector('.pause');
let soundPurple = document.querySelector('.sound_purple');

let audioDuration, audioCurrentTime, percent;

audio.load();
audio.addEventListener('loadedmetadata', function () {
	audioDuration = audio.duration;
	console.log(audioDuration);
});

audio.addEventListener('timeupdate', function () {
	soundPurple.style.transition = 'clip-path 0.4s linear';
	audioCurrentTime = audio.currentTime;
	percent = audioCurrentTime / audioDuration * 100 + '%';
	console.log(percent);

	soundPurple.style.clipPath = 'polygon(0 0, ' + percent + ' 0, ' + percent + ' 100%, 0 100%)';

	if (audioCurrentTime === 0) {
		soundPurple.style.transition = 'none';
		soundPurple.style.clipPath = 'polygon(0 0, 0 0, 0 100%, 0% 100%)';
	}

	// let tween = gsap.to(soundPurple, { clipPath: 'polygon(0 0, ' + percent + ' 0, ' + percent + ' 100%, 0 100%)'});
	// tween.play();
});

audio.addEventListener('ended', function () {
	play.style.display = 'block';
	pause.style.display = 'none';
});

play.addEventListener('click', function () {
	audio.play();
	play.style.display = 'none';
	pause.style.display = 'block';
});

pause.addEventListener('click', function () {
	soundPurple.style.transition = 'none';
	audio.pause();
	play.style.display = 'block';
	pause.style.display = 'none';

	// tween.duration(0);
	// tween.pause();
});