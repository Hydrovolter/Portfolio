import { registerAnimationFrame, registerEventListener } from '../settings.js';

export function tritravellersTheme() {
    const canvas = document.createElement("canvas");
    canvas.id = "canvas-bg";
    canvas.style.position = "fixed";
    canvas.style.inset = "0";
    canvas.style.zIndex = "-1";
    canvas.style.background = "radial-gradient(circle at center, white 0%, #222 10%, black 60%)";
    document.body.appendChild(canvas);
  
    const ctx = canvas.getContext("2d");
    const DPR = window.devicePixelRatio || 1;
    let width, height;
  
    const TRIANGLE_COUNT = 100; // Reduced further
    const triangles = [];
  
    function resizeCanvas() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * DPR;
      canvas.height = height * DPR;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(DPR, DPR);
    }
  
    // Pre-create a Path2D for triangle shape to reuse (saves CPU path building)
    const trianglePath = new Path2D();
    trianglePath.moveTo(0, -0.5);
    trianglePath.lineTo(0.5, 0.5);
    trianglePath.lineTo(-0.5, 0.5);
    trianglePath.closePath();
  
    class Triangle {
      constructor() {
        this.reset();
      }
  
      reset() {
        const angle = Math.random() * 2 * Math.PI;
        const radius = Math.random() * Math.max(width, height);
        this.x = width / 2 + Math.cos(angle) * radius;
        this.y = height / 2 + Math.sin(angle) * radius;
        this.z = Math.random() * 1000 + 500;
        this.size = Math.random() * 40 + 10;
        this.rotation = Math.random() * Math.PI * 2;
        // Generate color and convert to grayscale approximation:
        const hue = Math.random() * 360;
        // HSL to lightness-based grayscale:
        const lightness = 50; // middle gray
        this.color = `hsla(${hue}, 0%, ${lightness}%, 0.7)`; // saturation 0% = grayscale
        this.speed = Math.random() * 2 + 0.5;
      }
  
      update() {
        this.z -= this.speed;
        if (this.z < 1) this.reset();
      }
  
      draw() {
        const scale = 800 / this.z;
        const x = (this.x - width / 2) * scale + width / 2;
        const y = (this.y - height / 2) * scale + height / 2;
        const size = this.size * scale;
  
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(this.rotation);
        ctx.scale(size, size);
        ctx.fillStyle = this.color;
        ctx.fill(trianglePath);
        ctx.restore();
      }
    }
  
    function init() {
      for (let i = 0; i < TRIANGLE_COUNT; i++) {
        triangles.push(new Triangle());
      }
    }
  
    // Throttle animation to ~30fps to reduce CPU load
    let lastTime = 0;
    const fpsInterval = 1000 / 30;
  
    function animate(time = 0) {
      if (time - lastTime > fpsInterval) {
        lastTime = time;
        ctx.clearRect(0, 0, width, height);
        triangles.forEach(t => {
          t.update();
          t.draw();
        });
      }
      let animationFrame = requestAnimationFrame(animate);
      registerAnimationFrame(animationFrame);
    }
  
    registerEventListener(window, "resize", resizeCanvas);
  
    resizeCanvas();
    init();
    animate();
  }
  