;(() => {
    var supportsVideo = !!document.createElement('video').canPlayType;
    if (supportsVideo) {
        var video = document.getElementById('video');
        var video1 = document.getElementById('video1');
        var video2 = document.getElementById('video2');
        var videoControls = document.getElementById('video-controls');
        var videoControls1 = document.getElementById('video-controls1');
        var videoControls2 = document.getElementById('video-controls2');

        video.muted = true;
        video.controls = false;
        video1.muted = true;
        video1.controls = false;
        video2.muted = true;
        video2.controls = false;

        videoControls.setAttribute('data-state', 'visible');
        videoControls1.setAttribute('data-state', 'visible');
        videoControls2.setAttribute('data-state', 'visible');

        var playpause = document.getElementById('playpause');
        var playpause1 = document.getElementById('playpause1');
        var playpause2 = document.getElementById('playpause2');

        if (document.addEventListener) {
            var changeButtonState = function(type) {
                switch (type) {
                    case 'playpause':
                        video.paused || video.ended ? playpause.setAttribute('data-state', 'play')
                                                    : playpause.setAttribute('data-state', 'pause');
                        break;
                    case 'playpause1':
                        video1.paused || video1.ended ? playpause1.setAttribute('data-state', 'play')
                                                      : playpause1.setAttribute('data-state', 'pause');
                        break;
                    case 'playpause2':
                        video2.paused || video2.ended ? playpause2.setAttribute('data-state', 'play')
                                                      : playpause2.setAttribute('data-state', 'pause');
                }
            };

            video.addEventListener('play', function() {
                changeButtonState('playpause');
            }, false);
            video.addEventListener('pause', function() {
                changeButtonState('playpause');
            }, false);
            video1.addEventListener('play', function() {
                changeButtonState('playpause1');
            }, false);
            video1.addEventListener('pause', function() {
                changeButtonState('playpause1');
            }, false);
            video2.addEventListener('play', function() {
                changeButtonState('playpause2');
            }, false);
            video2.addEventListener('pause', function() {
                changeButtonState('playpause2');
            }, false);
            playpause.addEventListener('click', function() {
                if (video.paused || video.ended) video.play();
                else video.pause();
            });

            playpause1.addEventListener('click', function() {
                if (video1.paused || video1.ended) video1.play();
                else video1.pause();
            });

            playpause2.addEventListener('click', function() {
                if (video2.paused || video2.ended) video2.play();
                else video2.pause();
            });
        }
    }
})();
