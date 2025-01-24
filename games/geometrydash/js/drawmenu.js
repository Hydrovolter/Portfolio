function drawMenu() {
    drawBG()
    if (menuState == "top") { 
        ctx.drawImage(document.getElementById("logo"), 106, 10, 268, 100);
        ctx.drawImage(document.getElementById("playbtn"), 100, 120);
        ctx.drawImage(document.getElementById("editorbtn"), 300, 150);
    } else if (menuState == "mainLevels") {
        ctx.drawImage(document.getElementById("greenarrow"), 10, 10);
        ctx.drawImage(document.getElementById("arrowleft"), 10, 130);
        ctx.drawImage(document.getElementById("arrowright"), 440, 130);
        ctx.drawImage(document.getElementById("levelbox"), 65, 109);
        ctx.fillStyle = "white";
        ctx.font = "30px Pusab";
        ctx.fillText(levels[menuSelect], 240, 177);
    } else if (menuState == "editorMenu") {
        ctx.drawImage(document.getElementById("greenarrow"), 10, 10);
        ctx.drawImage(document.getElementById("createbtn"), 75, 100);
        ctx.drawImage(document.getElementById("importbtn"), 275, 100);
        if (importInput.files.length > 0) {
            ctx.drawImage(document.getElementById("playlast"), 275, 240)
        }
    }
}