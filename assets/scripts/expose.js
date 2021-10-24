// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const horn     = document.getElementById('horn-select');
  const audio    = document.querySelector('audio');
  const image    = document.querySelector('img');

  horn.addEventListener('change', (event) => {
    const horn   = event.target.value;
    if(horn      == 'air-horn') {
      audio.src  = 'assets/audio/air-horn.mp3';
      image.src  = 'assets/images/air-horn.svg';
    }
    else if(horn == 'car-horn') {
      audio.src  = 'assets/audio/car-horn.mp3';
      image.src  = 'assets/images/car-horn.svg';
    }
    else if(horn == 'party-horn') {
      audio.src  = 'assets/audio/party-horn.mp3';
      image.src  = 'assets/images/party-horn.svg';
    }
  });

  const sound_slider    = document.getElementById('volume');
  const sound_icon      = document.querySelector('div>img');

  sound_slider.addEventListener('change', (event) => {
    const vol    = event.target.value;
    audio.volume = vol / 100;

    if(vol == 0) {
      sound_icon.src = 'assets/icons/volume-level-0.svg';
    }
    else if(vol  < 33) {
      sound_icon.src = 'assets/icons/volume-level-1.svg';
    }
    else if(vol  < 67 ) {
      sound_icon.src = 'assets/icons/volume-level-2.svg';
    }
    else {
      sound_icon.src = 'assets/icons/volume-level-3.svg';
    }
  });

const play = document.querySelector('button');
const jsConfetti = new JSConfetti();

play.addEventListener('click', (event) => {
  if (horn.value == 'party-horn') {
    jsConfetti.addConfetti();
  }
  audio.play();
});
}