function playerDeath() {
    song.pause();
    player.dead = true;
    player.deathTime = levelTime;
}