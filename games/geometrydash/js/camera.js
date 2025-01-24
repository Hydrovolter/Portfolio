// Camera
function moveCamera() {
    if (player.x - 140 > maxX && !player.dead) {
        camera.x = maxX + 50;
        return;
    } else if (player.x < 90) {
        camera.x = 0;
    } else {
        camera.x = player.x - 90;
    }
    if (player.y - camera.y > 155 && player.mode == "cube") {
        camera.y = player.y - 155;
    } else if (player.y - camera.y < 40 && player.mode == "cube") {
        camera.y = player.y - 40;
    }
    if (camera.y < 0 && player.mode == "cube") {
        camera.y = 0;
    }
}

function fillRectCam(x, y, w, h) {
    if (x - camera.x >= -30 && x - camera.x <= 480) {
        ctx.fillRect(x - camera.x, camera.y - y - h + 270, w, h);
    }
}

function fillRectCamRotate(x, y, w, h, angle) {
    ctx.save();
    ctx.translate(x - camera.x + w/2, camera.y - y - h + h/2 + 270);
    ctx.rotate(angle * Math.PI / 180);
    ctx.fillRect(w/-2, h/-2, w, h);
    ctx.restore();
}

function drawImgCamRotate(imgName, x, y, h, w = 0, angle = 0, ogw, ogh, xOffset = 0, yOffset = 0) {
    let objImg = document.getElementById(imgName);
    if (angle !== 0) {
        ctx.save();
        ctx.translate(x - camera.x + w/2, camera.y - y - h + h/2 + 270);
        ctx.rotate(angle * Math.PI / 180);
        ctx.drawImage(objImg, ogw/-2 - xOffset, ogh/-2 - yOffset);
        ctx.restore();
    } else {
        ctx.drawImage(objImg, x - camera.x - xOffset, camera.y - y - h + 270 - yOffset)
    }
}