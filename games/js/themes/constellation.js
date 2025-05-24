import { registerAnimationFrame, registerEventListener } from '../settings.js';

export function constellationTheme() {
  const canvas = document.createElement("canvas");
  canvas.id = "canvas-bg";
  canvas.style.position = "fixed";
  canvas.style.inset = "0";
  canvas.style.zIndex = "-1";
  canvas.style.background = "#0e0f1c";
  document.body.appendChild(canvas);

  const ctx = canvas.getContext("2d");
  const DPR = window.devicePixelRatio || 1;
  let width, height, particles = [];

  const PARTICLE_COUNT = 100;
  const MAX_DISTANCE = 120;
  const MAX_DISTANCE_SQ = MAX_DISTANCE * MAX_DISTANCE;

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.size = 1.5 + Math.random() * 1.5;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
      ctx.fill();
    }
  }

  function connectParticles() {
    for (let i = 0; i < particles.length; i++) {
      const p1 = particles[i];
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const distSq = dx * dx + dy * dy;

        if (distSq < MAX_DISTANCE_SQ) {
          const opacity = 1 - distSq / MAX_DISTANCE_SQ;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  }

  function resizeCanvas() {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;

    if (newWidth === width && newHeight === height) return;

    width = newWidth;
    height = newHeight;
    canvas.width = width * DPR;
    canvas.height = height * DPR;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(DPR, DPR);

    if (!particles.length) {
      particles = Array.from({ length: PARTICLE_COUNT }, () => new Particle());
    } else {
      // just reposition existing ones to avoid garbage collection
      particles.forEach(p => p.reset());
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }
    connectParticles();
    const animationFrame = requestAnimationFrame(animate);
    registerAnimationFrame(animationFrame);
  }

  registerEventListener(window, "resize", resizeCanvas);
  resizeCanvas();
  animate();
}
