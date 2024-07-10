const musica = document.getElementById("musica");
const audio = document.getElementById("audio");
const play = document.getElementById("play");

musica.innerText = "As You Here";

function playmusica(){
    audio.play();
}
play.addEventListener('click', playmusica)