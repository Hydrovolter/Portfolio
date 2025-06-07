function checkCollision() {
    player.touchingOrb = [];
    let blockCollisionResults = false;
    let floorRoofCollisionResults = checkFloorRoofCollision();
    // Object collision
    for (let i = 0; i < gameObjs.length; i++) {
        // Triggers
        if (gameObjs[i].type == "trigger") {
            checkTriggerCollision(gameObjs[i]);
        } 
        // Everything else
        else if (gameObjs[i].hasHitbox && onScreen(gameObjs[i])) {
            // Blue Player + Blue Obj (Running into blocks)
            if (gameObjs[i].hbType == "blue" && collides(player.bluehbx, player.bluehby, player.bluehbw, player.bluehbh, gameObjs[i].hbx, gameObjs[i].hby, gameObjs[i].hbw, gameObjs[i].hbh)) {
                playerDeath();
            } 
            else if (collides(player.x, player.y, player.w, player.h, gameObjs[i].hbx, gameObjs[i].hby, gameObjs[i].hbw, gameObjs[i].hbh)) {
            // Red Player + Blue Obj (Landing on blocks)
                if (gameObjs[i].hbType == "blue" && checkBlockCollision(gameObjs[i])) {
                    blockCollisionResults = true;
                }
                // Red Player + Green Obj
                else if (gameObjs[i].hbType == "green") {
                    // Portal
                    if (gameObjs[i].type == "portal" && !gameObjs[i].activated) {
                        if (gameObjs[i].portalType != "ball" && gameObjs[i].portalType != "mirror" && gameObjs[i].portalType != "unmirror") {
                            player.yVel /= 1.96;
                        }
                        if (gameObjs[i].portalType == "ship" || gameObjs[i].portalType == "cube" || gameObjs[i].portalType == "ball") {
                            switchGamemode(gameObjs[i].portalType, gameObjs[i].y, gameObjs[i].h);
                        } else if (gameObjs[i].portalType == "upsidedown") {
                            player.gravityStatus = -1;
                        } else if (gameObjs[i].portalType == "rightsideup") {
                            player.gravityStatus = 1;
                        } else if (gameObjs[i].portalType == "mirror") {
                            mirror = true;
                        } else if (gameObjs[i].portalType == "unmirror") {
                            mirror = false;
                        }
                        gameObjs[i].activated = true;
                    } 
                    // Pad
                    else if (gameObjs[i].type == "pad" && !gameObjs[i].activated) {
                        gameObjs[i].activated = true;
                        if (gameObjs[i].padType == "yellow") {
                            if (player.mode == "ball") {
                                player.yVel = 514.90728 * player.gravityStatus;
                            } else {
                                player.yVel = 862.0614 * player.gravityStatus;
                            }
                        }
                        return;
                    } 
                    // Orb
                    else if (gameObjs[i].type == "orb" && !gameObjs[i].activated) {
                        player.touchingOrb.push(i)
                    }
                    // Secret Coin
                    else if (gameObjs[i].id == "coin" && !gameObjs[i].activated) {
                        gameObjs[i].activated = true;
                        gameObjs[i].yVel = 600;
                        gameObjs[i].xVel = (Math.random() - 0.5) * 300;
                        collectedCoins.push(i);
                    }
                }
                // Red Player + Red Obj (Kill Objects)
                else if (gameObjs[i].hbType == "red") {
                    playerDeath();
                }
            }
        }
    }
    if (blockCollisionResults || floorRoofCollisionResults) {
        player.grounded = true;
    } else {
        player.grounded = false;
    }
    if (player.grounded) {
        player.yVel = 0;
    }
}

function checkTriggerCollision(obj) {
    if (((player.x + player.w >= obj.x && !obj.touchActivated) || 
    (collides(player.x, player.y, player.w, player.h, obj.hbx, obj.hby, obj.hbw, obj.hbh) && obj.touchActivated)) && !obj.activated) {
        obj.activated = true;
        obj.startTime = levelTime;
        if (obj.target == "floor") {
            obj.oldColour = floor.colour;
        } else {
            obj.oldColour = background.colour;
        }

        obj.newCol = [];
        obj.oldCol = [];
        for (let i = 0; i < 3; i++) {
            obj.newCol[i] = parseInt(obj.colour.slice(i*2+1, i*2+3), 16);
            obj.oldCol[i] = parseInt(obj.oldColour.slice(i*2+1, i*2+3), 16);
        }
        
        for (let i = 0; i < activeTriggers.length; i++) {
            if (obj.target == activeTriggers[i].target) {
                activeTriggers.splice(i, 1);
            }
        }
        activeTriggers.push(obj);
    }
}

function checkBlockCollision(obj) {
    if (player.gravityStatus == 1) {
        if (player.y <= obj.y + obj.h && player.y + 10 >= obj.y + obj.h && player.yVel <= 0) {
            player.y = obj.y + obj.hbh;
            player.bluehby = player.y + 11;
            return true;
        } else if (player.mode == "ship" && player.y + player.h - 10 <= obj.y && player.y + player.h >= obj.y && player.yVel >= 0) {
            player.y = obj.y - player.h;
            player.bluehby = player.y + 11;
            return true;
        }
    } else {
        if (player.y + player.h >= obj.y && player.y + player.h - 10 <= obj.y && player.yVel >= 0) {
            player.y = obj.y - player.h;
            player.bluehby = player.y + 11;
            return true;
        } else if (player.mode == "ship" && player.y <= obj.y + obj.h && player.y + 10 >= obj.y + obj.h && player.yVel <= 0) {
            player.y = obj.y + obj.hbh;
            player.bluehby = player.y + 11;
            return true;
        }
    }
}

function checkFloorRoofCollision() {
    // Ground, roof collision
    if (player.y <= newFloor.hby && newFloor.canCollide) {
        player.y = newFloor.y;
        player.bluehby = player.y + 11;
        return true;
    } else if (player.y <= 0 && player.gravityStatus == 1) {
        player.y = 0;
        player.bluehby = player.y + 11;
        return true;
    } else if (player.y + player.h > roof.hby - roof.h && roof.canCollide) {
        player.y = roof.y - roof.h - player.h;
        return true;
    }
}

function collides(Ax, Ay, Aw, Ah, Bx, By, Bw, Bh) {
    if (Ax <= Bx + Bw &&
        Ax + Aw >= Bx &&
        Ay <= By + Bh &&
        Ay + Ah >= By) {
            return true;
    }
    return false;
}