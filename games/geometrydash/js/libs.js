// Easing
function ease(instance, vector, duration = 200, style = "linear", doAfter = "", ignoreX = false, ignoreY = false, ignoreAngle = false) {
    let instanceSave = Object.assign({}, instance);
    clearInterval(instance.easeId);
    instance.easeId = 0;
    if (style == "linear") {
        instance.easeId = setInterval(() => {
            if (!ignoreX) {
                instance.x += vector[0]/duration*(1000/physicsTPS);
            }
            if (!ignoreY) {
                instance.y += vector[1]/duration*(1000/physicsTPS);
            }
            if (!ignoreAngle) {
                instance.angle += vector[2]/duration*(1000/physicsTPS);
            }
        }, (1000/physicsTPS))
    }
    setTimeout(() => {
        clearInterval(instance.easeId);
        if (instance.easeId > 0 && !ignoreX) {
            instance.x = instanceSave.x + vector[0];
        }
        if (instance.easeId > 0 && !ignoreY) {
            instance.y = instanceSave.y + vector[1];
        }
        if (instance.easeId > 0 && !ignoreAngle) {
            instance.angle = instanceSave.angle + vector[2];
        }
        if (doAfter !== "") {
            doAfter();
        }
    }, duration)
}

function clearEase(instance) {
    instance.easing = false;
    clearInterval(instance.easeId);
    instance.easeId = 0;
}

// Other
function getDifficulty(n) {
    if (n == 10) {
        return "Demon";
    } else if (n >= 8) {
        return "Insane";
    } else if (n >= 6) {
        return "Harder";
    } else if (n >= 4) {
        return "Hard";
    } else if (n == 3) {
        return "Normal";
    } else {
        return "Easy";
    }
}

function roundToNearest(num, roundTo) {
    return Math.round((num)/roundTo) * roundTo;
}

function floorToNearest(num, roundTo) {
    return Math.floor((num)/roundTo) * roundTo;
}

function onScreen(obj) {
    if (obj.x + obj.w - camera.x >= -30 && obj.x - camera.x <= cnv.width + 30 && camera.y - obj.y - obj.h + 270 >= -60 && camera.y - obj.y - obj.h + 270 <= cnv.height + 60) {
        return true;
    }
    return false;
}