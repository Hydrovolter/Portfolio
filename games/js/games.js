// ../js/games.js

document.addEventListener('DOMContentLoaded', () => {
    const fullscreenBtn = document.getElementById('fullscreen-btn');
    const gameIframe = document.getElementById('game-iframe');

    // Ensure both the button and the iframe exist before adding the event listener
    if (fullscreenBtn && gameIframe) {
        fullscreenBtn.addEventListener('click', () => {
            // Request fullscreen on the iframe element
            // Includes fallbacks for different browser vendors
            if (gameIframe.requestFullscreen) {
                gameIframe.requestFullscreen();
            } else if (gameIframe.mozRequestFullScreen) { // Firefox
                gameIframe.mozRequestFullScreen();
            } else if (gameIframe.webkitRequestFullscreen) { // Chrome, Safari and Opera
                gameIframe.webkitRequestFullscreen();
            } else if (gameIframe.msRequestFullscreen) { // IE/Edge
                gameIframe.msRequestFullscreen();
            }
        });
    }
});