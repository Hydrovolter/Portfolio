function switchGamemode(mode, objY, objH) {
    let initMode = player.mode;
    player.mode = mode;
    if (mode == "ship") {
        newFloor.hby = Math.max(0, roundToNearest((objY + objH / 2) - 165, 30));
        if (initMode == "cube") {
            newFloor.y = Math.max(newFloor.hby - 15, newFloor.y);
            roof.y = newFloor.y + 360;
        }
        ease(newFloor, [0, Math.max(newFloor.y * -1, newFloor.hby - newFloor.y)], 200, "linear")
        ease(roof, [0, Math.max(roof.y * -1 + 390, newFloor.hby + 390 - roof.y)], 200, "linear")
        ease(camera, [0, Math.max(45 - camera.y, newFloor.hby + 45 - camera.y)], 200, "linear")
        roof.hby = newFloor.hby + 390;
        newFloor.canCollide = true;
        roof.canCollide = true;
    } else if (mode == "cube") {
        newFloor.canCollide = false;
        roof.canCollide = false;
    } else { // Ball
        newFloor.hby = Math.max(0, roundToNearest((objY + objH / 2) - 135, 30));
        if (initMode == "cube") {
            newFloor.y = Math.max(newFloor.hby - 45, newFloor.y);
            roof.y = newFloor.y + 360;
        }
        ease(newFloor, [0, Math.max(newFloor.y * -1, newFloor.hby - newFloor.y)], 200, "linear")
        ease(roof, [0, Math.max(roof.y * -1 + 330, newFloor.hby + 330 - roof.y)], 200, "linear")
        ease(camera, [0, Math.max(15 - camera.y, newFloor.hby + 15 - camera.y)], 200, "linear")
        roof.hby = newFloor.hby + 330;
        newFloor.canCollide = true;
        roof.canCollide = true;
    }
    player.angle = 0;
}