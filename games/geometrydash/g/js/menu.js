let menuState = "top";
let menuSelect = 0;
let levels = [];

fetch(`levels/levels.json`)
    .then((res) => res.json())
    .then((data) => levels = data);

function checkClick(x1, x2, y1, y2) {
    if (mouseX >= x1 && mouseX <= x2 && mouseY >= y1 && mouseY <= y2) {
        return true;
    }
    return false;
}

function clickInMenu() {
    if (menuState == "top") {
        if (checkClick(100, 250, 120, 270)) {
            menuState = "mainLevels";
            menuSelect = 0;
        } else if (checkClick(300, 380, 150, 230)) {
            menuState = "editorMenu";
        }
    } else if (menuState == "mainLevels") {
        if (checkClick(10, 60, 10, 65)) {
            menuState = "top";
        } else if (checkClick(10, 45, 130, 200)) {
            menuSelect -= 1;
        } else if (checkClick(440, 475, 130, 200)) {
            menuSelect += 1;
        } else if (checkClick(65, 410, 109, 221)) {
            startLevel(levels[menuSelect]);
        }
        if (menuSelect > levels.length - 1) {
            menuSelect = 0;
        } else if (menuSelect < 0) {
            menuSelect = levels.length - 1;
        }
    } else if (menuState == "editorMenu") {
        if (checkClick(10, 60, 10, 65)) {
            menuState = "top";
        } else if (checkClick(75, 215, 100, 240)) {
            initializeEditor();
        } else if (checkClick(275, 415, 100, 240)) {
            importInput.click();
        } else if (checkClick(275, 407, 240, 288) && importInput.files.length > 0) {
            initialize();
        }
    }
}

function initializeEditor() {
    gameState = "editor";
    for (let i = 0; i < editorDivs.length; i++) {
        editorDivs[i].style.display = "flex";
    }
    camera.x = 0;
    camera.y = 0;
    background = {
        colour: "#287DFF",
        x: 0,
        y: 0
    }
    floor = {
        colour: "#0066FF",
        y: 0
    }
    newFloor = {
        canCollide: false,
    }
    roof = {
        canCollide: false,
    };
    player = {
        x: 0
    };
    movedCam = true;
    updateHTML();
}

document.getElementById("editor-leave").addEventListener("click", initializeMenu)
initializeMenu();
function initializeMenu() {
    gameState = "menu";
    levelInfo.style.display = "none";
    camera.x = 0;
    camera.y = 500;
    background = {
        colour: "#4287f5",
        x: 0,
        y: 0
    };
    for (let i = 0; i < editorDivs.length; i++) {
        editorDivs[i].style.display = "none";
    }
    if (song) {
        togglePractice(false);
        song.pause();
    }
    document.getElementById("pause-box").style.display = "none";
    document.getElementById("pause-balance").style.display = "none";
    document.getElementById("level-settings-box").style.display = "none";
}