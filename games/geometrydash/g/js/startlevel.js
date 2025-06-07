let levelJSON = [];
function startLevel(levelName) {
    fetch(`levels/${levelName}.json`)
        .then((res) => res.json())
        .then((data) => levelJSON = data)
        .then(createGameObjects)
        .then(initialize);
}

let importInput = document.createElement('input');
importInput.type = 'file';
importInput.accept = '.json';
importInput.addEventListener("change", importLevel)
function importLevel() {
    new Response(importInput.files[0]).json()
        .then(json => {levelJSON = json})
        .then(createGameObjects)
        .then(initialize);
}

function createGameObjects() {
    maxX = 0;
    levelStartPos = [];
    gameObjs = [];
    collectedCoins = [];
    activeTriggers = [];
    if (levelJSON.song === "URL") {
        song = new Audio(levelJSON.songURL);
    } else {
        song = new Audio(`songs/${levelJSON.song}`);
    }
    for (let i = 0; i < levelJSON.objects.length; i++) {
        let objProps = objectList.find((element) => levelJSON.objects[i].id == element.id)
        gameObjs.push({
            id: levelJSON.objects[i].id,
            x: levelJSON.objects[i].x,
            y: levelJSON.objects[i].y,
            angle: levelJSON.objects[i].angle,
            h: objProps.h ?? fallback.h,
            w: objProps.w ?? fallback.w,
            hasHitbox: objProps.hasHitbox ?? fallback.hasHitbox,
            type: objProps.type ?? fallback.type,
            activated: false,
            rotCenter: [this.x + this.w / 2, this.y + this.h / 2]
        })
        let obj = gameObjs[i];
        if (obj.w < 30 || obj.h < 30) {
            obj.rotCenter = [obj.x + 15, obj.y + 15];
        } else {
            obj.rotCenter = [obj.x + obj.w / 2, obj.y + obj.h / 2]
        }
        if (obj.type == "portal") {
            obj.portalType = objProps.portalType ?? fallback.portalType;
        } else if (obj.type == "pad") {
            obj.padType = objProps.padType ?? fallback.padType;
        } else if (obj.type == "orb") {
            obj.orbType = objProps.orbType ?? fallback.orbType;
        } else if (obj.type == "trigger") {
            obj.colour = levelJSON.objects[i].colour;
            obj.fadeTime = levelJSON.objects[i].fadeTime;
            obj.target = levelJSON.objects[i].target;
            obj.touchActivated = levelJSON.objects[i].touchActivated;
        } else if (obj.id == "coin") {
            obj.xVel = 0;
            obj.yVel = 0;
            obj.oldx = obj.x;
            obj.oldy = obj.y;
        } else if (obj.id == "startpos") {
            levelStartPos.push({
                x: levelJSON.objects[i].x,
                y: levelJSON.objects[i].y,
                mode: levelJSON.objects[i].mode,
                flipGravity: levelJSON.objects[i].flipGravity
            })
        }
        if (obj.hasHitbox) {
            obj.hbx = levelJSON.objects[i].x + (objProps.hbx ?? fallback.hbx);
            obj.hby = levelJSON.objects[i].y + (objProps.hby ?? fallback.hby);
            obj.hbw = (objProps.hbw ?? fallback.hbw);
            obj.hbh = (objProps.hbh ?? fallback.hbh);
            obj.hbType = (objProps.hbType ?? fallback.hbType);
        }
        if (obj.angle !== 0) {
            rotateObject(obj, 0, true);
            translateAfterRotation(obj, levelJSON.objects[i]);
        }
        if (obj.x > maxX) {
            maxX = obj.x;
        }
    }
    levelInfo.style.display = "flex";
    levelInfoName.innerHTML = levelJSON.name;
    levelInfoDiff.innerHTML = `${levelJSON.difficulty} ${getDifficulty(levelJSON.difficulty)}`;
    levelInfoDiffIcon.style.backgroundImage = `url(img/difficulty${getDifficulty(levelJSON.difficulty)}.png)`;
}