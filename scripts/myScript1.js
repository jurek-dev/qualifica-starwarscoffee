var button = document.getElementById("play-theme").addEventListener("click", playMusic);
var playingSound = false;

function playMusic() {
    if(playingSound == false){
        playingSound = true;
        document.getElementById("onoff-text").textContent = "Parar música";
        document.getElementById("play-theme").className = "btn btn-danger";
    }
    else if(playingSound == true){
        playingSound = false;
        document.getElementById("onoff-text").textContent = "Tocar música";
        document.getElementById("play-theme").className = "btn btn-warning";
    }
}