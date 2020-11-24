window.onload = function() {
    var lastSentProgress = -1
    function trackProgressInternal(progress){
        for(var i = lastSentProgress + 1; i <= progress; i++){
            track_vtr(i);
            lastSentProgress = i;
        }
    }
    video_game.load();
    video_game.addEventListener('loadedmetadata', function() {
        timeIndicator.style.strokeDashoffset = this.duration * 10;
        timeIndicator.style.strokeDasharray = this.duration * 10;
        this.play();
    });
    video_game.addEventListener('play', function() {

    });
    video_game.addEventListener('timeupdate', function() {
    	trackProgressInternal(this.currentTime * 100 / this.duration);
        timeIndicator.style.strokeDashoffset = ((this.duration - this.currentTime * 0.5) % this.duration) * 10;
    });
    video_game.addEventListener('volumechange', function() {
        if (this.muted) {
            sound.style.opacity = 1;
            mute.style.opacity = 0;
        } else {
            sound.style.opacity = 0;
            mute.style.opacity = 1;
        }
    });
    video_game.addEventListener('ended', function() {
        replay.style.opacity = 1;
        replay.style.visibility = 'visible';

    });
    var sound_change = document.getElementsByClassName('sound-change');
    for (var i = 0; i < sound_change.length; ++i) {
        sound_change[i].addEventListener('click', function() {
            video_game.muted = !video_game.muted;
        });
    }
    replay.addEventListener('click', function() {
        lastSentProgress = -1;
        video_game.play();
        replay.style.opacity = 0;
        replay.style.visibility = 'hidden';
    });
    fullscreen.addEventListener('click', function() {
        if (video_game.requestFullscreen) {
            video_game.requestFullscreen();
        } else if (video_game.mozRequestFullScreen) {
            video_game.mozRequestFullScreen();
        } else if (video_game.webkitRequestFullscreen) {
            video_game.webkitRequestFullscreen();
        } else if (video_game.msRequestFullscreen) {
            video_game.msRequestFullscreen();
        }
    });
};