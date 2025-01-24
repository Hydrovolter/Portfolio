let editorTabs = document.getElementsByClassName("editor-tab");
let editorTabBtns = document.getElementsByClassName("editor-tab-btn");
let setDifficulty = document.getElementById("difficulty");
let levelDiff = document.getElementById("level-diff");
let levelDiffIcon = document.getElementById("level-difficon");
let camXEl = document.getElementById("cam-x");
let camYEl = document.getElementById("cam-y");
let objXEl = document.getElementById("obj-x");
let objYEl = document.getElementById("obj-y");
let objAngleEl = document.getElementById("obj-angle");
let triggerColColourEl = document.getElementById("col-colour");
let triggerColTimeEl = document.getElementById("fade-time");
let triggerColTargetEl = document.getElementById("col-target");
let triggerColTouchEl = document.getElementById("touch-trigger");
let editorDivs = document.getElementsByClassName("editor-div");
let buildObjs = document.getElementsByClassName("build-object");
let levelBGColEl = document.getElementById("level-bg-col");
levelBGColEl.value = "#287DFF";
let levelFloorColEl = document.getElementById("level-floor-col");
levelFloorColEl.value = "#0066FF";
let editorImport = document.createElement('input');
editorImport.type = 'file';
editorImport.accept = '.json';
let songSelectEl = document.getElementById("select-song");
let customSongURL = document.getElementById("song-url");
let startposFlipGravEl = document.getElementById("startpos-flipgravity");

setDifficulty.addEventListener("change", changeDifficulty)
function changeDifficulty() {
    levelDiff.innerHTML = getDifficulty(setDifficulty.value);
    levelDiffIcon.style.backgroundImage = `url(img/difficulty${getDifficulty(setDifficulty.value)}.png)`;
}

function switchCategory(newCat) {
    buildCategory = newCat;
    for (let i = 0; i < editorTabs.length; i++) {
        editorTabs[i].style.display = "none";
        editorTabBtns[i].style.backgroundImage = `url("img/editorselectbtn.png")`;
    }
    document.getElementById(`${newCat}-box`).style.display = "flex";
    document.getElementById(`${newCat}-btn`).style.backgroundImage = `url("img/editorselectbtnon.png")`;
}

function buildObjSelect(i) {
    for (let j = 0; j < buildObjs.length; j++) {
        buildObjs[j].style.backgroundImage = `url("img/buttongray.png")`
    }
    buildObjs[i].style.backgroundImage = `url("img/buttoncyan.png")`
    currentObj = buildObjs[i].title;
    savedAngle = 0;
}

document.getElementById("delete-obj-btn").addEventListener("click", () => {
    deleteObject(curIndex)
})
function deleteObject(index) {
    curIndex = -1;
    editObjs.splice(index, 1)
}

document.getElementById("deselect-btn").addEventListener("click", deselect)
function deselect() {
    curIndex = -1;
}

document.getElementById("swipe-btn").addEventListener("click", toggleSwipe);
function toggleSwipe() {
    swipeEnabled = !swipeEnabled;
    if (swipeEnabled) {
        document.getElementById("swipe-btn").style.backgroundImage = `url("img/swipe-btnon.png")`;
    } else {
        document.getElementById("swipe-btn").style.backgroundImage = `url("img/swipe-btn.png")`;
    }
}

document.getElementById("level-settings-btn").addEventListener("click", toggleSettings)
function toggleSettings() {
    if (document.getElementById("level-settings-box").style.display != "flex") {
        document.getElementById("level-settings-box").style.display = "flex";
    } else {
        document.getElementById("level-settings-box").style.display = "none";
    }
}

function updateHTML() {
    camXEl.value = camera.x;
    camYEl.value = camera.y;
    if (curIndex > -1) {
        objXEl.value = editObjs[curIndex].x;
        objYEl.value = editObjs[curIndex].y;
        objAngleEl.innerHTML = editObjs[curIndex].angle;
    } else {
        objXEl.value = 0;
        objYEl.value = 0;
        objAngleEl.innerHTML = 0;
        triggerColTimeEl.value = 0;
    }
    if (curIndex > -1 && editObjs[curIndex].type == "trigger") {
        document.getElementById("trigger-col-edit").style.display = "flex";
        triggerColColourEl.value = editObjs[curIndex].colour;
        triggerColTimeEl.value = editObjs[curIndex].fadeTime;
        triggerColTargetEl.value = editObjs[curIndex].target;
        triggerColTouchEl.checked = editObjs[curIndex].touchActivated;
    } else if (curIndex > -1 && editObjs[curIndex].id == "startpos") {
        document.getElementById("startpos-edit").style.display = "flex";
        let modeSelectBtns = document.getElementsByClassName("mode-select-startpos");
        for (let i = 0; i < modeSelectBtns.length; i++) {
            if (modeSelectBtns[i].id == `${editObjs[curIndex].mode}-radio-startpos`) {
                modeSelectBtns[i].checked = true;
            } else {
                modeSelectBtns[i].checked = false;
            }
        }
        startposFlipGravEl.checked = editObjs[curIndex].flipGravity;
    } else {
        document.getElementById("trigger-col-edit").style.display = "none";
        document.getElementById("startpos-edit").style.display = "none";
    }
}

camXEl.addEventListener("change", () => {
    camera.x = +camXEl.value;
})
camYEl.addEventListener("change", () => {
    camera.x = +camXEl.value;
})
objXEl.addEventListener("change", () => {
    editObjs[curIndex].x = +objXEl.value;
})
objYEl.addEventListener("change", () => {
    editObjs[curIndex].y = +objYEl.value;
})
triggerColColourEl.addEventListener("change", () => {
    editObjs[curIndex].colour = triggerColColourEl.value;
})
triggerColTimeEl.addEventListener("change", () => {
    editObjs[curIndex].fadeTime = triggerColTimeEl.value;
})
triggerColTargetEl.addEventListener("change", () => {
    editObjs[curIndex].target = triggerColTargetEl.value;
})
triggerColTouchEl.addEventListener("change", () => {
    editObjs[curIndex].touchActivated = triggerColTouchEl.checked;
})
startposFlipGravEl.addEventListener("change", () => {
    editObjs[curIndex].flipGravity = startposFlipGravEl.checked;
})

songSelectEl.addEventListener("change", () => {
    if (songSelectEl.value === "URL") {
        document.getElementById("url-info").style.display = "block";
    } else {
        document.getElementById("url-info").style.display = "none";
    }
})

document.getElementById("export-btn").addEventListener("click", exportLevel)
function exportLevel() {
    let exportArray = [];
    for (let i = 0; i < editObjs.length; i++) {
        exportArray.push({
            x: editObjs[i].x,
            y: editObjs[i].y,
            id: editObjs[i].id,
            angle: editObjs[i].angle
        })

        if (exportArray[i].id.split('_')[0] == "trigger") {
            exportArray[i].colour = editObjs[i].colour;
            exportArray[i].fadeTime = editObjs[i].fadeTime;
            exportArray[i].target = editObjs[i].target;
            exportArray[i].touchActivated = editObjs[i].touchActivated;
        } else if (exportArray[i].id == "startpos") {
            exportArray[i].mode = document.querySelector('input[name="mode-select-startpos"]:checked').value;
            exportArray[i].flipGravity = editObjs[i].flipGravity;
        }
    }
    selectedMode = document.querySelector('input[name="mode-select"]:checked').value;
    let exportObject = {
        name: document.getElementById("level-name").value,
        difficulty: setDifficulty.value,
        bgCol: levelBGColEl.value,
        floorCol: levelFloorColEl.value,
        mode: selectedMode,
        song: songSelectEl.value,
        songURL: customSongURL.value,
        objects: exportArray
    }
    let jsonExport = JSON.stringify(exportObject)
    let a = document.createElement("a");
    a.href = URL.createObjectURL(
        new Blob([jsonExport], {type:"application/json"})
    )
    a.download = `${exportObject.name}.json`
    a.click()
}

document.getElementById("load-btn").addEventListener("click", () => {editorImport.click()})
editorImport.addEventListener("change", loadLevel)
function loadLevel() {
    new Response(editorImport.files[0]).json()
        .then(json => {levelJSON = json})
        .then(createeditObjs)
}

function createeditObjs() {
    editObjs = [];
    for (let i = 0; i < levelJSON.objects.length; i++) {
        buildObject(levelJSON.objects[i].id, levelJSON.objects[i].x, levelJSON.objects[i].y, levelJSON.objects[i].angle, false)
        if (editObjs[i].type == "trigger") {
            editObjs[i].colour = levelJSON.objects[i].colour;
            editObjs[i].fadeTime = levelJSON.objects[i].fadeTime;
            editObjs[i].target = levelJSON.objects[i].target;
            editObjs[i].touchActivated = levelJSON.objects[i].touchActivated;
            if (levelJSON.objects[i].touchActivated) {
                editObjs[i].touchActivated = levelJSON.objects[i].touchActivated;
            } else {
                editObjs[i].touchActivated = false;
            }
            
            updateHTML();
        } else if (editObjs[i].id == "startpos") {
            editObjs[i].mode = levelJSON.objects[i].mode;
            editObjs[i].flipGravity = levelJSON.objects[i].flipGravity;
        }
        if (editObjs[i].angle !== 0) {
            editObjs[i].x = levelJSON.objects[i].x;
            editObjs[i].y = levelJSON.objects[i].y;
        }
    }
    setDifficulty.value = levelJSON.difficulty;
    levelBGColEl.value = levelJSON.bgCol;
    levelFloorColEl.value = levelJSON.floorCol;
    let modeSelectBtns = document.getElementsByClassName("mode-select");
    songSelectEl.value = levelJSON.song;
    if (songSelectEl.value === "URL") {
        document.getElementById("url-info").style.display = "block";
    } else {
        document.getElementById("url-info").style.display = "none";
    }
    customSongURL.value = levelJSON.songURL;
    for (let i = 0; i < modeSelectBtns.length; i++) {
        if (modeSelectBtns[i].id == `${levelJSON.mode}-radio`) {
            modeSelectBtns[i].checked = true;
        } else {
            modeSelectBtns[i].checked = false;
        }
    }

    document.getElementById("level-name").value = levelJSON.name;
    updateHTML();
}