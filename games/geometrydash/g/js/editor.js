let buildCategory = "build"; // The current category selected
let currentObj = "block_standard"; // The Object selected in the build menu
let curIndex = -1; // The object selected in canvas
let editObjs = [];
let initMouseX = 0;
let initMouseY = 0;
let initCamX = 0;
let initCamY = 0;
let movedCam = false;
let inputs = document.getElementsByTagName("input");
let swipeEnabled = false;
let swipeObjs = [];
let editSwipeActive = false;
let savedAngle = 0;

for (let i = 0; i < editorTabBtns.length; i++) {
    editorTabBtns[i].addEventListener("click", () => {
        switchCategory(editorTabBtns[i].innerHTML.toLowerCase());
    })
}
for (let i = 0; i < buildObjs.length; i++) {
    buildObjs[i].addEventListener("click", () => {
        buildObjSelect(i);
    })
}

function moveEditorCam() {
    movedCam = false;
    if (mouseInBounds() && mouseHeld && !swipeEnabled) {
        if ((initMouseX - mouseX) > 5 || (initMouseX - mouseX) < -5 || (initMouseY - mouseY) > 5 || (initMouseY - mouseY) < -5) {
            camera.x = initCamX + initMouseX - mouseX;
            camera.y = initCamY - (initMouseY - mouseY);
            movedCam = true;
        }
        updateHTML();
    }
    if (camera.y < -30) {
        camera.y = -30;
        updateHTML();
    }
    if (camera.x < 0) {
        camera.x = 0;
        updateHTML();
    }
}

function swipe() {
    if (mouseInBounds() && mouseHeld && swipeEnabled) {
        if (buildCategory == "build") {
            let objProps = objectList.find((element) => currentObj == element.id);
            if (!swipeObjAlreadyExists(snappedX + (objProps.editorOffsetx ?? fallback.editorOffsetx), snappedY + (objProps.editorOffsety ?? fallback.editorOffsety))) {
                buildObject(currentObj, snappedX, snappedY, savedAngle, true);
                swipeObjs.push([snappedX + (objProps.editorOffsetx ?? fallback.editorOffsetx), snappedY + (objProps.editorOffsety ?? fallback.editorOffsety)]);
            }
        } else if (buildCategory == "delete") {
            for (let i = 0; i < editObjs.length; i++) {
                if (coordX >= editObjs[i].x && coordX <= editObjs[i].x + editObjs[i].w && coordY >= editObjs[i].y && coordY <= editObjs[i].y + editObjs[i].h) {
                    deleteObject(i)
                }
            }
            updateHTML();
        }
    }
}

function swipeObjAlreadyExists(x, y) {
    for (let i = 0; i < swipeObjs.length; i++) {
        if (x === swipeObjs[i][0] && y === swipeObjs[i][1]) {
            return true;
        }
    }
    return false;
}

function buildObject(id, x, y, angle, offset) {
    let objProps = objectList.find((element) => id == element.id);
    let offsetX = 0;
    let offsetY = 0;
    if (offset) {
        offsetX = objProps.editorOffsetx ?? fallback.editorOffsetx;
        offsetY = objProps.editorOffsety ?? fallback.editorOffsety;
    }

    editObjs.push({
        id: id,
        x: x + offsetX,
        y: y + offsetY,
        angle: angle,
        h: objProps.h ?? fallback.h,
        w: objProps.w ?? fallback.w,
        hbType: objProps.hbType ?? fallback.hbType,
        type: objProps.type ?? fallback.type
    })

    curIndex = editObjs.length - 1;
    if (editObjs[curIndex].w < 30 || editObjs[curIndex].h < 30) {
        editObjs[curIndex].rotCenter = [editObjs[curIndex].x + 15 - offsetX, editObjs[curIndex].y + 15 - offsetY];
    } else {
        editObjs[curIndex].rotCenter = [editObjs[curIndex].x + editObjs[curIndex].w / 2, editObjs[curIndex].y + editObjs[curIndex].h / 2];
    }
    if (editObjs[curIndex].type == "portal") {
        editObjs[curIndex].portalType = objProps.portalType ?? fallback.portalType;
    } else if (editObjs[curIndex].type == "trigger") {
        editObjs[curIndex].colour = "#000000";
        editObjs[curIndex].fadeTime = 0;
        editObjs[curIndex].target = "background";
        editObjs[curIndex].touchActivated = false;
    } else if (editObjs[curIndex].id == "startpos") {
        editObjs[curIndex].mode = "cube";
        editObjs[curIndex].flipGravity = false;
    }
    if (editObjs[curIndex].angle !== 0) {
        rotateObject(editObjs[curIndex]);
    }
    updateHTML();
}

function clickInEditor() {
    if (buildCategory == "build" && mouseInBounds() && !movedCam && !swipeEnabled) {
        buildObject(currentObj, snappedX, snappedY, savedAngle, true);
    } else if (buildCategory == "edit" && mouseInBounds() && !movedCam) {
        let indices = [];
        let selectedInIndices = false;
        for (let i = 0; i < editObjs.length; i++) {
            if (coordX >= editObjs[i].x && coordX <= editObjs[i].x + editObjs[i].w && coordY >= editObjs[i].y && coordY <= editObjs[i].y + editObjs[i].h) {
                indices.push(i);
            }
        }
        for (let i = 0; i < indices.length; i++) {
            if (curIndex == indices[i]) {
                selectedInIndices = true;
                curIndex = indices[i + 1];
                break;
            }
        }
        if (!selectedInIndices || curIndex === undefined) {
            curIndex = indices[0];
        }
        updateHTML();
    } else if (mouseInBounds() && !movedCam && !swipeEnabled) {
        for (let i = 0; i < editObjs.length; i++) {
            if (coordX >= editObjs[i].x && coordX <= editObjs[i].x + editObjs[i].w && coordY >= editObjs[i].y && coordY <= editObjs[i].y + editObjs[i].h) {
                deleteObject(i)
                break;
            }
        }
        updateHTML();
    }
}

function editorKeys(e) {
    let cursorInInput = false;
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i] === document.activeElement) {
            cursorInInput = true;
        }
    }
    if (curIndex > -1 && gameState == "editor" && !cursorInInput) {
        let validKeyPressed = true;
        if (e.key == "w") {
            editObjs[curIndex].y += 30;
            editObjs[curIndex].rotCenter[1] += 30;
        } else if (e.key == "a") {
            editObjs[curIndex].x -= 30;
            editObjs[curIndex].rotCenter[0] -= 30;
        } else if (e.key == "s") {
            editObjs[curIndex].y -= 30;
            editObjs[curIndex].rotCenter[1] -= 30;
        } else if (e.key == "d") {
            editObjs[curIndex].x += 30;
            editObjs[curIndex].rotCenter[0] += 30;
        } else if (e.key == "ArrowUp") {
            editObjs[curIndex].y++;
        } else if (e.key == "ArrowLeft") {
            editObjs[curIndex].x--;
        } else if (e.key == "ArrowDown") {
            editObjs[curIndex].y--;
        } else if (e.key == "ArrowRight") {
            editObjs[curIndex].x++;
        } else if (e.key == "r") {
            let oldAngle = editObjs[curIndex].angle;
            editObjs[curIndex].angle += 90;
            editObjs[curIndex].angle %= 360;
            savedAngle = editObjs[curIndex].angle;
            rotateObject(editObjs[curIndex], oldAngle);
        } else {
            validKeyPressed = false;
        }
        if (validKeyPressed) {
            updateHTML();
        }
    }
}

function mouseInBounds() {
    if (mouseX <= 480 && mouseX >= 0 && mouseY >= 0 && mouseY <= 330) {
        return true;
    }
    return false;
}