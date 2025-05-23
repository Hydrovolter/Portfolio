export function cometmouseTheme() {
    const canvas = document.createElement("canvas");
    canvas.id = "canvas-bg";
    canvas.style.position = "fixed";
    canvas.style.inset = "0";
    canvas.style.zIndex = "-1";
    canvas.style.background = "black";
    document.body.appendChild(canvas);
  
    const ctx = canvas.getContext("2d");
    let width, height;
  
    let mouseX = 0;
    let mouseY = 0;
    let trail = [];
    const maxTrail = 120;
    const particles = [];
  
    const cometColors = [
      "rgba(255, 255, 255, 1)",
      "rgba(0, 255, 255, 1)",
      "rgba(255, 0, 255, 1)",
      "rgba(255, 255, 0, 1)"
    ];
  
    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }
  
    window.addEventListener("resize", resize);
    resize();
  
    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      createParticles(mouseX, mouseY);
    });
  
    function createParticles(x, y) {
      for (let i = 0; i < 3; i++) {
        particles.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          alpha: 1,
          radius: Math.random() * 2 + 1,
          color: cometColors[Math.floor(Math.random() * cometColors.length)]
        });
      }
    }
  
    function updateParticles() {
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.02;
        if (p.alpha <= 0) particles.splice(i, 1);
      }
    }
  
    function drawParticles() {
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color.replace(")", ", " + p.alpha + ")");
        ctx.fill();
      }
    }
  
    function animate() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
      ctx.fillRect(0, 0, width, height);
  
      // Update trail
      trail.push({ x: mouseX, y: mouseY });
      if (trail.length > maxTrail) trail.shift();
  
      // Draw trail
      for (let i = 0; i < trail.length; i++) {
        const point = trail[i];
        const opacity = i / maxTrail;
        const color = cometColors[i % cometColors.length];
        ctx.beginPath();
        ctx.arc(point.x, point.y, 6, 0, Math.PI * 2);
        ctx.fillStyle = color.replace(")", ", " + (opacity * 0.4) + ")");
        ctx.fill();
      }
  
      // Draw comet head
      ctx.beginPath();
      ctx.arc(mouseX, mouseY, 12, 0, Math.PI * 2);
      ctx.fillStyle = "white";
      ctx.shadowColor = "white";
      ctx.shadowBlur = 30;
      ctx.fill();
      ctx.shadowBlur = 0;
  
      updateParticles();
      drawParticles();
  
      requestAnimationFrame(animate);
    }
  
    animate();
  }