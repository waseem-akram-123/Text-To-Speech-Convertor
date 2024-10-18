let speech = new SpeechSynthesisUtterance();

let btn = document.querySelector (".button");

// let voices = [];

// let voiceSelect = document.querySelector ("select");

// window.speechSynthesis.onvoiceschanged = () => {
//     voices = window.speechSynthesis.getVoices();
//     speech.voice = voices[0];

//     voices.forEach((voice, i) => (voiceSelect.options[i] = new option (voice.name, i)));
// };

let voices = [];
let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0]; // Set default voice

    // Clear previous options
    voiceSelect.innerHTML = "";

    // Populate voice options in the dropdown
    voices.forEach((voice, i) => {
        let option = new Option(voice.name, i);
        voiceSelect.add(option);
    });
};

// Optional: Event listener to change voice when the user selects a different option
voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});


btn.addEventListener ("click", ()=>{
    speech.text = document.querySelector ("textarea").value;
    window.speechSynthesis.speak (speech);
});