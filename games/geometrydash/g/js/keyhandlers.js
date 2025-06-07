let keyHeld = false;
let mouseHeld = false;
let mouseX = 0;
let mouseY = 0;
let coordX = 0;
let coordY = 0;
let snappedX = 0;
let snappedY = 0;
let K = 1;
let keyPressTIme = 0;

document.addEventListener("keydown", (e) => {keyDown(e)});
document.addEventListener("keyup", (e) => {keyUp(e)});
document.addEventListener("mousedown", mouseDown);
document.addEventListener("mouseup", mouseUp);
document.addEventListener("touchstart", touchstart);
document.addEventListener("touchend", mouseUp);
document.addEventListener("click", clicked);
document.addEventListener("mousemove", mousemoveHandler);

function mousemoveHandler(e) {
    // Get rectangle info about canvas location
    let cnvRect = cnv.getBoundingClientRect();
    K = cnvRect.width / cnv.width;

    // Calc mouse coordinates using mouse event and canvas location info
    mouseX = Math.round(e.clientX - cnvRect.left) / K;
    mouseY = Math.round(e.clientY - cnvRect.top) / K;
    coordX = mouseX + camera.x;
    coordY = camera.y - mouseY + 270;
    snappedX = floorToNearest(coordX, 30);
    snappedY = floorToNearest(coordY, 30);
}

function mouseDown() {
    if (gameState == "gameLoop" && !gamePaused) {
        bufferAvailable = true;
        keyHeld = true;
        keyPressTIme = levelTime;
    } else if (gameState == "gameLoop" && gamePaused) {
        clickInPause();
    } else if (gameState == "menu") {
        clickInMenu();
    } else if (gameState == "editor") {
        mouseHeld = true;
        initMouseX = mouseX;
        initMouseY = mouseY;
        initCamX = camera.x;
        initCamY = camera.y;
    }
}
function mouseUp() {
    keyHeld = false;
    bufferAvailable = false;
    mouseHeld = false;
    swipeObjs = [];
}

function touchstart() {
    if (gameState == "gameLoop" && !gamePaused) {
        bufferAvailable = true;
        keyHeld = true;
        keyPressTIme = levelTime;
    } else if (gameState == "gameLoop" && gamePaused) {
        clickInPause();
    }
}

function keyDown(e) {
    if (e.key === "Escape") {
        escapePressed();
    } else if (gameState == "editor") {
        editorKeys(e);
    } else if (practice && (e.key === "z" || e.key === "x")) {
        if (e.key === "z") {
            addCheckpoint();
        } else if (e.key === "x") {
            removeCheckpoint();
        }
    } else {
        bufferAvailable = true;
        keyHeld = true;
        keyPressTIme = levelTime;
    }
}

function escapePressed() {
    if (gameState == "menu") {
        if (menuState == "mainLevels" || menuState == "editorMenu") {
            menuState = "top";
        }
    } else if (gameState == "editor") {
        initializeMenu();
    } else if (gameState == "gameLoop") {
        if (!gamePaused) {
            pauseGame();
        } else {
            unpauseGame();
        }
    }
}
function keyUp(e) {
    if (!(practice && (e.key === "z" || e.key === "x"))) {
        keyHeld = false;
        bufferAvailable = false;
    }
}

function clicked() {
    if (gameState == "editor") {
        clickInEditor();
    }
}