// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
var dialects =[];
var dialect_selection = document.getElementById('voice-select');
var faceimage = document.querySelector('img');
var play_button = document.querySelector('button');
var synthesis = window.speechSynthesis;
var text = document.querySelector('textarea');

function populateVoices() {
    dialects = synthesis.getVoices();
    for(var i = 0; i < dialects.length ; i++) {
      var option = document.createElement('option');
      option.textContent = dialects[i].name + ' (' + dialects[i].lang + ')';
      if(dialects[i].default) {
        option.textContent += ' -- DEFAULT';
      }
  
      option.setAttribute('data-lang', dialects[i].lang);
      option.setAttribute('data-name', dialects[i].name);
      dialect_selection.appendChild(option);
    }
  };
  populateVoices();

  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoices;
  };
  
  play_button.addEventListener('click', (event) => {
    var speech = new SpeechSynthesisUtterance(text.value);
    var selected_option = dialect_selection.selectedOptions[0].getAttribute('data-name');
    for (var i = 0; i < dialects.length; i++) {
      if(dialects[i].name === selected_option) {
        speech.voice = dialects[i];
      }
    }
    
    speech.addEventListener('start', (event) =>{
      faceimage.src = 'assets/images/smiling-open.png';
    });
    speech.addEventListener('end', (event) => {
      faceimage.src = 'assets/images/smiling.png';
    });

    synthesis.speak(speech);
  });
}