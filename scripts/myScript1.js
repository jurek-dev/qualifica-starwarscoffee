// Declaração de variáveis
var button = document.getElementById("play-theme").addEventListener("click", playMusic);
var playingSound = false;
var audio = new Audio('musics/imperialmarch.mp3')

/*
 * Função de tocar/parar música.
*/
function playMusic() {
    if(playingSound == false){
        playingSound = true;
        audio.play();
        document.getElementById("onoff-text").textContent = "Parar música";
        document.getElementById("play-theme").className = "btn btn-danger";
    }
    else if(playingSound == true){
        playingSound = false;
        audio.pause();
        document.getElementById("onoff-text").textContent = "Tocar música";
        document.getElementById("play-theme").className = "btn btn-warning";
    }
}