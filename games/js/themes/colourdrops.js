import { registerAnimationFrame, registerEventListener } from '../settings.js';

export function colourdropsTheme() {
  const canvas = document.createElement("canvas");
  canvas.id = "canvas-bg";
  canvas.style.position = "fixed";
  canvas.style.inset = "0";
  canvas.style.zIndex = "-1";
  canvas.style.background = "black";
  document.body.appendChild(canvas);

  const ctx = canvas.getContext("2d");
  let width, height;

  const total = 144;
  const time = 4;
  const dropHeight = 400;
  const dropWidthPercent = 0.69444;
  const dotSizeVW = 0.8;

  function vwToPx(vw) {
    return (window.innerWidth * vw) / 100;
  }
  const dotSize = vwToPx(dotSizeVW);

  class Drop {
    constructor(i) {
      this.index = i;
      this.hue = (300 / total) * i;
      this.x = (width * (dropWidthPercent / 100)) * i + (width * (dropWidthPercent / 100)) / 2;
      this.y = -Math.random() * dropHeight;
      this.speed = (dropHeight + height) / (time * 60) * (0.5 + Math.random());
      this.opacity = 1;
      this.animationDelay = Math.random() * time * 60;
    }

    update(frameCount) {
      if (this.animationDelay > 0) {
        this.animationDelay--;
        return;
      }
      this.y += this.speed;

      const fadeStart = height * 0.8;
      if (this.y > fadeStart) {
        this.opacity = 1 - (this.y - fadeStart) / (height - fadeStart);
      }

      if (this.y > height || this.opacity <= 0) {
        this.y = -dropHeight;
        this.opacity = 1;
        this.speed = (dropHeight + height) / (time * 60) * (0.5 + Math.random());
        this.animationDelay = Math.random() * time * 60;
      }
    }

    draw() {
      const grad = ctx.createLinearGradient(this.x, this.y, this.x, this.y + dropHeight);
      grad.addColorStop(0, "black");
      grad.addColorStop(1, `hsla(${this.hue}, 100%, 50%, 0.8)`);

      const dropWidthPx = (width * (dropWidthPercent / 100)) * 0.8;

      ctx.fillStyle = grad;
      ctx.globalAlpha = this.opacity;
      ctx.fillRect(this.x - dropWidthPx / 2, this.y, dropWidthPx, dropHeight);

      ctx.beginPath();
      ctx.arc(this.x, this.y + dropHeight + dotSize / 2, dotSize / 2, 0, 2 * Math.PI);
      ctx.fillStyle = `hsla(${this.hue}, 100%, 50%, 1)`;
      ctx.fill();
      ctx.globalAlpha = 1;
    }
  }

  let drops = [];
  let frameCount = 0;

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    drops = [];
    for (let i = 0; i < total; i++) {
      drops.push(new Drop(i));
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    frameCount++;

    for (const drop of drops) {
      drop.update(frameCount);
      drop.draw();
    }

    const id = requestAnimationFrame(animate);
    registerAnimationFrame(id); // <-- Register the animation frame so we can cancel later
  }

  // Register the resize event listener so we can remove it later
  registerEventListener(window, "resize", resize);

  // Initialize
  resize();
  animate();
}
