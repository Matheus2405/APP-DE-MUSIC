document.addEventListener('DOMContentLoaded', () => {
    const audios = document.querySelectorAll('audio');

    audios.forEach(audio => {
        audio.addEventListener('play', () => {
            audios.forEach(otherAudio => {
                if (otherAudio !== audio && !otherAudio.paused) {
                    otherAudio.pause();
                }
            });
        });
    });
});