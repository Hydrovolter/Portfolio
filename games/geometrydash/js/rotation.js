function calculateRotatedPoint(centerX = 0, centerY = 0, x, y, angle) {
    let rad = angle * Math.PI / 180;
    let xPrime = (x - centerX) * Math.cos(rad) - (y - centerY) * Math.sin(rad);
    let yPrime = (x - centerX) * Math.sin(rad) + (y - centerY) * Math.cos(rad);
    let newCoords = [Math.round(centerX + xPrime), Math.round(centerY + yPrime)];
    return newCoords;
}

function rotateObject(obj, oldAngle = 0, rotateHitbox = false) {
    let botLeftPrime = calculateRotatedPoint(obj.rotCenter[0], obj.rotCenter[1], obj.x, obj.y, oldAngle - obj.angle);
    let topRightPrime = calculateRotatedPoint(obj.rotCenter[0], obj.rotCenter[1], obj.x + obj.w, obj.y + obj.h, oldAngle - obj.angle);
    obj.x = Math.min(botLeftPrime[0], topRightPrime[0]);
    obj.y = Math.min(botLeftPrime[1], topRightPrime[1]);
    obj.w = Math.max(botLeftPrime[0], topRightPrime[0]) - obj.x;
    obj.h = Math.max(botLeftPrime[1], topRightPrime[1]) - obj.y;
    if (rotateHitbox) {
        botLeftPrime = calculateRotatedPoint(obj.rotCenter[0], obj.rotCenter[1], obj.hbx, obj.hby, oldAngle - obj.angle);
        topRightPrime = calculateRotatedPoint(obj.rotCenter[0], obj.rotCenter[1], obj.hbx + obj.hbw, obj.hby + obj.hbh, oldAngle - obj.angle);
        obj.hbx = Math.min(botLeftPrime[0], topRightPrime[0]);
        obj.hby = Math.min(botLeftPrime[1], topRightPrime[1]);
        obj.hbw = Math.max(botLeftPrime[0], topRightPrime[0]) - obj.hbx;
        obj.hbh = Math.max(botLeftPrime[1], topRightPrime[1]) - obj.hby;
    }
}

function translateAfterRotation(newobj, oldobj) {
    let xDiff = newobj.x - oldobj.x;
    let yDiff = newobj.y - oldobj.y;
    newobj.x -= xDiff;
    newobj.y -= yDiff;
    newobj.hbx -= xDiff;
    newobj.hby -= yDiff;
}