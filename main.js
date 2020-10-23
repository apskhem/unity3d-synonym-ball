const gameConteinerEl = document.getElementById("game-container");
const navbarControllerEl = document.getElementById("navbarcontroller");

let isFullscreen = false;

document.getElementById("fullscreen").addEventListener("click", function() {
    if (gameConteinerEl.requestFullscreen) {
        gameConteinerEl.requestFullscreen();
    } else if (gameConteinerEl.mozRequestFullScreen) { /* Firefox */
        gameConteinerEl.mozRequestFullScreen();
    } else if (gameConteinerEl.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        gameConteinerEl.webkitRequestFullscreen();
    } else if (gameConteinerEl.msRequestFullscreen) { /* IE/Edge */
        gameConteinerEl.msRequestFullscreen();
    }
});