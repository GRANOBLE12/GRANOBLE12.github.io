onload = () =>{
    document.body.classList.remove("container");
    document.body.classList.add("container-reset"); // Agrega una nueva clase
};


var audio = document.getElementById("audio");
var playButton = document.getElementById("playButton");

playButton.addEventListener("click", function () {
    if (audio.paused) {
        audio.play().catch(error => console.log("Error al reproducir:", error));
    } else {
        audio.pause();
    }
});
