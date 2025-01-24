let practice = false;
let checkpoints = [];
function togglePractice(toggle) {
    practice = toggle;
    if (practice) {
        document.getElementById("practice-box").style.display = "flex";
    } else {
        document.getElementById("practice-box").style.display = "none";
        checkpoints = [];
    }
    unpauseGame();
}

function addCheckpoint() {
    if (!gamePaused) {
        checkpoints.push({
            levelTime: levelTime,
            x: player.x,
            y: player.y,
            mode: player.mode,
            yVel: player.yVel,
            gravityStatus: player.gravityStatus,
            angle: player.angle,
            ballRotStatus: player.ballRotStatus,
            newFloory: newFloor.hby,
            roofy: roof.hby,
            cameray: camera.y,
            mirror: mirror
        })
    }
}

function removeCheckpoint() {
    checkpoints.pop();
}

document.getElementById("checkpoint-add").addEventListener("touchstart", addCheckpoint);
document.getElementById("checkpoint-remove").addEventListener("touchend", removeCheckpoint);