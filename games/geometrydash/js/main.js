let gameState, background, floor, newFloor, roof;
let maxX = 0;
const physicsTPS = 240;
let levelInfo = document.getElementById("level-info");
let levelInfoName = document.getElementById("level-info-name");
let levelInfoDiff = document.getElementById("level-info-diff");
let levelInfoDiffIcon = document.getElementById("level-info-difficon");
let gamePaused = false;
let pauseVisible = true;
let lastUpdate = performance.now();
let deltaTime = 0;
let levelTime = 0;
let activeTriggers = [];
let collectedCoins = [];
let levelStartPos = [];
let song;
let mirror = false;
let gameObjs = [];
let player;

function initialize() {
    document.getElementById("pause-box").style.display = "block";
    document.getElementById("pause-balance").style.display = "block";
    player = {
        mode: "cube",
        x: 0,
        y: 0,
        w: 30,
        h: 30,
        bluehbx: 10,
        bluehby: 10,
        bluehbw: 8,
        bluehbh: 8,
        xVel: 311.576, // units per second, 30 units is a block
        gravity: -2851.5625, // units per second squared
        gravityStatus: 1,
        yVel: 0,
        grounded: false,
        dead: false,
        win: false,
        angle: 0,
        touchingOrb: [],
        ballRotStatus: 1,
        deathTime: -1,
        winTime: -1
    }
    for (let i = 0; i < gameObjs.length; i++) {
        gameObjs[i].activated = false;
    }
    for (let i = 0; i < collectedCoins.length; i++) {
        let index = collectedCoins[i];
        gameObjs[index].x = gameObjs[index].oldx;
        gameObjs[index].y = gameObjs[index].oldy;
        gameObjs[index].xVel = 0;
        gameObjs[index].yVel = 0;
    }
    collectedCoins = [];
    gameState = "gameLoop"; 
    activeTriggers = [];
    gamePaused = false;
    mirror = false;
    camera = {
        x: 0,
        y: 0,
        easing: false,
        easeId: 0
    };
    background = {
        colour: levelJSON.bgCol,
        x: 0,
        y: 0,
        fadeStart: 0
    }
    floor = {
        colour: levelJSON.floorCol,
        y: 0
    }
    newFloor = {
        canCollide: false,
        y: 0,
        hby: 0,
        easeId: 0
    }
    roof = {
        canCollide: false,
        h: 90,
        y: 390,
        hby: 390,
        easeId: 0,
        fadeStart: 0
    };
    if (practice && checkpoints.length > 0) {
        let lastCheckpoint = checkpoints[checkpoints.length - 1];
        levelTime = lastCheckpoint.levelTime;
        player.x = lastCheckpoint.x;
        player.y = lastCheckpoint.y;
        player.angle = lastCheckpoint.angle;
        player.yVel = lastCheckpoint.yVel;
        player.gravityStatus = lastCheckpoint.gravityStatus;
        player.ballRotStatus = lastCheckpoint.ballRotStatus;
        keyHeld = false;
        bufferAvailable = false;
        player.mode = lastCheckpoint.mode;
        camera.y = lastCheckpoint.cameray;
        newFloor.y = lastCheckpoint.newFloory;
        roof.y = lastCheckpoint.roofy;
        newFloor.hby = lastCheckpoint.newFloory;
        roof.hby = lastCheckpoint.roofy;
        if (player.mode == "ship" || player.mode == "ball") {
            newFloor.canCollide = true;
            roof.canCollide = true;
        }
        mirror = lastCheckpoint.mirror;
    } else if (levelStartPos.length > 0) {
        let lastStartPos = levelStartPos[levelStartPos.length - 1];
        levelTime = lastStartPos.x * (1000/311.576);
        player.x = lastStartPos.x;
        player.y = lastStartPos.y;
        switchGamemode(lastStartPos.mode, lastStartPos.y, 90)
        if (lastStartPos.flipGravity) {
            player.gravityStatus = -1;
        }
    } else {
        levelTime = 0;
        switchGamemode(levelJSON.mode, 0, 0)
    }
    song.currentTime = levelTime / 1000;
    song.play();
}

setInterval(gameLoop, 1000/physicsTPS)
function gameLoop() {
    let now = performance.now();
    deltaTime = now - lastUpdate;
    lastUpdate = now;
    if (gameState == "gameLoop" && !gamePaused) {
        levelTime += deltaTime;
        if (!player.dead) {
            player.oldx = player.x;
            player.oldy = player.y;
            tickObjects();
            movePlayer();
            if (keyHeld) {jump()}
            applyGravity();
            checkCollision();
            rotatePlayer();
            checkEnding();
        } else if (levelTime - player.deathTime >= 500 && player.deathTime > -1) {
            initialize();
        }
    } else if (gameState == "editor") {
        swipe();
        moveEditorCam();
    }
}

function tickObjects() {
    // Triggers
    for (let i = 0; i < activeTriggers.length; i++) {
        let timePassed = (levelTime - activeTriggers[i].startTime) / 1000;
        let fadeTime = activeTriggers[i].fadeTime;
        if (timePassed >= fadeTime) {
            if (activeTriggers[i].target == "floor") {
                floor.colour = activeTriggers[i].colour;
            } else {
                background.colour = activeTriggers[i].colour;
            }
            activeTriggers.splice(i, 1);
            break;
        }

        let oldCol = activeTriggers[i].oldCol;
        let newCol = activeTriggers[i].newCol;
        let setCol = [];
        for (let i = 0; i < 3; i++) {
            setCol[i] = Math.round(oldCol[i] + (newCol[i] - oldCol[i]) * (timePassed/fadeTime));
        }
        
        if (activeTriggers[i].target == "floor") {
            changeColour(floor, `rgb(${setCol[0]}, ${setCol[1]}, ${setCol[2]})`);
        } else {
            changeColour(background, `rgb(${setCol[0]}, ${setCol[1]}, ${setCol[2]})`);
        }
    }

    // Activated Coins
    for (let i = 0; i < collectedCoins.length; i++) {
        let index = collectedCoins[i];
        if (onScreen(gameObjs[index])) {
            gameObjs[index].y += gameObjs[index].yVel / (1000/deltaTime);
            gameObjs[index].x += gameObjs[index].xVel / (1000/deltaTime);
            gameObjs[index].yVel += -2793.528 / (1000/deltaTime);
        }
    }
}

function changeColour(target, colour) {
    let rgb = colour.match(/\d+/g).map(Number);
    target.colour = rgbToHex(rgb[0], rgb[1], rgb[2]);
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function applyGravity() {
    // Apply velocity
    player.y += player.yVel / (1000/deltaTime);
    player.bluehby = player.y + 11;

    // Kill player if too high
    if (player.y > 2790) {
        playerDeath();
    }

    // Set Gravity
    if (player.mode == "cube") {
        player.gravity = -2793.528 * player.gravityStatus;
    } else if (player.mode == "ship") {
        if (keyHeld) {
            player.gravity = 0;
        } else if (player.yVel > 110 && player.gravityStatus == 1 || player.yVel < -110 && player.gravityStatus == -1) {
            player.gravity = -1419.584 * player.gravityStatus;
        } else {
            player.gravity = -894.11526 * player.gravityStatus;
        }
    } else { // ball
        player.gravity = -1676.4651 * player.gravityStatus;
    }

    // Apply Gravity
    player.yVel += player.gravity / (1000/deltaTime);

    // Max Velocity
    if ((player.mode == "cube" || player.mode == "ball") && 
    ((player.yVel < -810 && player.gravityStatus == 1) || 
    (player.yVel > 810 && player.gravityStatus == -1))) {
        player.yVel = -810 * player.gravityStatus;
    } else if (player.mode == "ship" && 
        (player.yVel >= 432 && player.gravityStatus == 1 ||
        player.yVel <= -432 && player.gravityStatus == -1)) {
        player.yVel = 432 * player.gravityStatus;
    } else if (player.mode == "ship" && 
        (player.yVel <= -345.6 && player.gravityStatus == 1 || 
        player.yVel >= 345.6 && player.gravityStatus == -1)) {
        player.yVel = -345.6 * player.gravityStatus;
    }
}

function rotatePlayer() {
    if (player.mode == "cube") {
        if (player.grounded) {
            let angleDiff = roundToNearest(player.angle, 90) - player.angle;
            if (player.gravityStatus == 1) {
                player.angle += Math.min(angleDiff, 0.72 * deltaTime);
            } else {
                player.angle += Math.max(angleDiff, -0.72 * deltaTime);
            }
        } else {
            player.angle += 420/(1000/deltaTime) * player.gravityStatus;
        }
    } else if (player.mode == "ship") {
        let dy = player.y - player.oldy;
        let dx = player.x - player.oldx;
        let newAngle = Math.atan(dy/dx) * -180 / Math.PI
        player.angle += (newAngle - player.angle) * 0.008 * deltaTime;
    } else { // Ball
        if (player.grounded) {
            player.ballRotStatus = player.gravityStatus;
        }
        player.angle += 600/(1000/deltaTime) * player.ballRotStatus;
    }
    player.angle %= 360;
}

function jump() {
    for (let i = 0; i < player.touchingOrb.length; i++) {
        if (bufferAvailable) {
            if (gameObjs[player.touchingOrb[i]].orbType == "yellow") {
                if (player.mode == "ball") {
                    player.yVel = 417.94812 * player.gravityStatus;
                } else {
                    player.yVel = 595.9602 * player.gravityStatus;
                }
                bufferAvailable = false;
                gameObjs[player.touchingOrb[i]].activated = true;
                break;
            }
        }
    }
    if (player.mode == "cube" && player.grounded) {
        player.yVel = 595.9602 * player.gravityStatus;
        bufferAvailable = false;
        // To convert from GD velocity to my velocity, multiply by 54
    } else if (player.mode == "ship") {
        if (player.yVel > 120 && player.gravityStatus == 1 || player.yVel < 120 && player.gravityStatus == -1) {
            player.yVel += 1180.5102 / (1000/deltaTime) * player.gravityStatus;
        } else {
            player.yVel += 1341.1656 / (1000/deltaTime) * player.gravityStatus;
        }
        bufferAvailable = false;
    } else if (player.mode == "ball" && (player.grounded || player.roofed) && bufferAvailable) {
        player.gravityStatus *= -1;
        player.yVel = -185.7735 * player.gravityStatus;
        bufferAvailable = false;
    }
}

function movePlayer() {
    player.x += player.xVel / (1000/deltaTime);
    player.bluehbx = player.x + 11;
}

function checkEnding() {
    if (player.x > maxX + 480 && !player.win) {
        player.win = true;
        player.winTime = levelTime;
    } else if (levelTime > player.winTime + 2000 && player.winTime > -1) {
        initializeMenu();
    }
}