document.getElementById("pause-btn").addEventListener("mousedown", pauseGame)
document.getElementById("pause-btn").addEventListener("touchstart", pauseGame)
function pauseGame() {
    song.pause();
    gamePaused = true;
    pauseVisible = true;
    document.getElementById("pause-box").style.display = "none";
    document.getElementById("pause-balance").style.display = "none";
}

function clickInPause() {
    if (pauseVisible) {
        if (checkClick(190, 290, 113, 217)) {
            unpauseGame();
        } else if (checkClick(26, 96, 129, 202)) {
            pauseVisible = false;
        } else if (checkClick(108, 178, 129, 202)) {
            togglePractice(!practice);
        } else if (checkClick(302, 372, 129, 202)) {
            initializeMenu();
        } else if (checkClick(384, 454, 129, 202)) {
            initialize();
        }
    } else if (checkClick(6, 46, 284, 344)) {
        pauseVisible = true;
    }
}

function unpauseGame() {
    gamePaused = false;
    document.getElementById("pause-box").style.display = "block";
    document.getElementById("pause-balance").style.display = "block";
    song.play();
}