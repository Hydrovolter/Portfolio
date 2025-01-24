// Canvas and graphics context
let cnv = document.getElementById("canvas");
let ctx = cnv.getContext("2d");
cnv.width = 480;
cnv.height = 330;
ctx.textAlign = "center";
let camera = {
    x: 0,
    y: 0
}

window.addEventListener("load", draw);
function draw() {
    if (gameState == "menu") {
        drawMenu();
    } else if (gameState == "gameLoop") {
        drawGame();
    } else if (gameState == "editor") {
        drawEditor();
    }
    requestAnimationFrame(draw);
}

// Drawing Common Elements
function drawBG() {
    background.x = camera.x * -0.05;
    background.y = camera.y * 0.05;
    ctx.globalAlpha = 1;
    ctx.drawImage(document.getElementById("gamebg"), background.x % 512, background.y % 512 - 175)
    ctx.globalCompositeOperation = "multiply"
    ctx.fillStyle = background.colour;
    ctx.fillRect(0, 0, cnv.width, cnv.height);
    ctx.globalCompositeOperation = "source-over"
    ctx.globalAlpha = 1;
}

function drawFloorRoof(type) {
    ctx.globalAlpha = 1;
    ctx.drawImage(document.getElementById("floor"), camera.x * -1 % 90 - 90, camera.y - type.y + 270)
    ctx.globalCompositeOperation = "multiply"
    ctx.fillStyle = type.colour;
    fillRectCam(camera.x, type.y, cnv.width, -90);
    ctx.globalCompositeOperation = "source-over"
    ctx.globalAlpha = 1;
}