function drawEditor() {
    drawBG();
    drawGrid();
    drawFloorRoof(floor);
    draweditObjs();
}

function draweditObjs() {
    ctx.globalAlpha = 1;
    for (let i = 0; i < editObjs.length; i++) {
        let imgName = editObjs[i].id;
        let objProps = objectList.find((element) => editObjs[i].id == element.id)
        let xOffset = objProps.visualOffsetx ?? fallback.visualOffsetx;
        let yOffset = objProps.visualOffsety ?? fallback.visualOffsety;
        if (editObjs[i].type == "portal") {
            imgName = `portal_${editObjs[i].portalType}_over`;
        }
        if (onScreen(editObjs[i])) {
            drawImgCamRotate(imgName, editObjs[i].x, editObjs[i].y, editObjs[i].h, editObjs[i].w, editObjs[i].angle, (objProps.w ?? fallback.w), (objProps.h ?? fallback.h), xOffset, yOffset);
        }
    }
    ctx.globalAlpha = 0.5;
    ctx.fillStyle = "lime";
    if (curIndex > -1) {
        fillRectCam(editObjs[curIndex].x, editObjs[curIndex].y, editObjs[curIndex].w, editObjs[curIndex].h);
    }
}

function drawGrid() {
    ctx.globalAlpha = 1;
    ctx.fillStyle = "black";
    for (let i = 0; i < 30; i++) {
        ctx.fillRect(i * 30 - camera.x % 30 - 0.25, 0, 0.5, 330);
        ctx.fillRect(0, i*30 + camera.y % 30 - 0.25, 480, 0.5);
    }
    ctx.globalAlpha = 1;
}