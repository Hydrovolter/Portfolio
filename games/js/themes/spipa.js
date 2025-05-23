import { registerAnimationFrame, registerEventListener } from '../settings.js';

export function spipaTheme() {
    const canvas = document.createElement("canvas");
    canvas.id = "canvas-bg";
    canvas.style.position = "fixed";
    canvas.style.inset = "0";
    canvas.style.zIndex = "-1";
    // Background black with slight fade handled by draw function, so just black here
    canvas.style.background = "black";
    document.body.appendChild(canvas);
  
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    const width = canvas.width;
    const height = canvas.height;
    const xC = width / 2;
    const yC = height / 2;
  
    const dataToImageRatio = 1;
    ctx.imageSmoothingEnabled = false;
    ctx.webkitImageSmoothingEnabled = false;
    ctx.msImageSmoothingEnabled = false;
  
    // Particle system parameters
    let stepCount = 0;
    const lifespan = 1000;
    const popPerBirth = 1;
    const maxPop = 300;
    const birthFreq = 2;
    const gridSize = 8;
    const gridSteps = Math.floor(1000 / gridSize);
    let deathCount = 0;
    let particles = [];
  
    // Build grid
    const grid = [];
    let i = 0;
    for (let xx = -500; xx < 500; xx += gridSize) {
      for (let yy = -500; yy < 500; yy += gridSize) {
        const r = Math.sqrt(xx * xx + yy * yy);
        const r0 = 100;
        let field;
        if (r < r0) field = (255 / r0) * r;
        else if (r > r0) field = 255 - Math.min(255, (r - r0) / 2);
  
        grid.push({
          x: xx,
          y: yy,
          busyAge: 0,
          spotIndex: i,
          isEdge:
            xx === -500
              ? "left"
              : xx === -500 + gridSize * (gridSteps - 1)
              ? "right"
              : yy === -500
              ? "top"
              : yy === -500 + gridSize * (gridSteps - 1)
              ? "bottom"
              : false,
          field,
        });
        i++;
      }
    }
    const gridMaxIndex = i;
  
    function dataXYtoCanvasXY(x, y) {
      const zoom = 1.6;
      const xx = xC + x * zoom * dataToImageRatio;
      const yy = yC + y * zoom * dataToImageRatio;
      return { x: xx, y: yy };
    }
  
    function birth() {
      const gridSpotIndex = Math.floor(Math.random() * gridMaxIndex);
      const gridSpot = grid[gridSpotIndex];
      const x = gridSpot.x,
        y = gridSpot.y;
  
      const particle = {
        hue: 200,
        sat: 95,
        lum: 20 + Math.floor(40 * Math.random()),
        x,
        y,
        xLast: x,
        yLast: y,
        xSpeed: 0,
        ySpeed: 0,
        age: 0,
        ageSinceStuck: 0,
        attractor: {
          oldIndex: gridSpotIndex,
          gridSpotIndex: gridSpotIndex,
        },
        name: "seed-" + Math.ceil(10000000 * Math.random()),
      };
      particles.push(particle);
    }
  
    function kill(particleName) {
      particles = particles.filter((p) => p.name !== particleName);
    }
  
    function move() {
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
  
        p.xLast = p.x;
        p.yLast = p.y;
  
        const index = p.attractor.gridSpotIndex;
        let gridSpot = grid[index];
  
        if (Math.random() < 0.5) {
          if (!gridSpot.isEdge) {
            const topIndex = index - 1,
              bottomIndex = index + 1,
              leftIndex = index - gridSteps,
              rightIndex = index + gridSteps;
            const topSpot = grid[topIndex],
              bottomSpot = grid[bottomIndex],
              leftSpot = grid[leftIndex],
              rightSpot = grid[rightIndex];
  
            const chaos = 30;
            const neighbors = [topSpot, bottomSpot, leftSpot, rightSpot];
            const maxFieldSpot = neighbors.reduce((max, spot) => {
              if (!spot) return max;
              const val = spot.field + chaos * Math.random();
              return val > (max.val || 0) ? { spot, val } : max;
            }, {}).spot;
  
            const potentialNewGridSpot = maxFieldSpot;
            if (
              potentialNewGridSpot &&
              (potentialNewGridSpot.busyAge === 0 || potentialNewGridSpot.busyAge > 15)
            ) {
              p.ageSinceStuck = 0;
              p.attractor.oldIndex = index;
              p.attractor.gridSpotIndex = potentialNewGridSpot.spotIndex;
              gridSpot = potentialNewGridSpot;
              gridSpot.busyAge = 1;
            } else p.ageSinceStuck++;
          } else p.ageSinceStuck++;
  
          if (p.ageSinceStuck === 10) kill(p.name);
        }
  
        // Spring to attractor with viscosity
        const k = 8,
          visc = 0.4;
        const dx = p.x - gridSpot.x,
          dy = p.y - gridSpot.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
  
        const xAcc = -k * dx,
          yAcc = -k * dy;
  
        p.xSpeed += xAcc;
        p.ySpeed += yAcc;
  
        p.xSpeed *= visc;
        p.ySpeed *= visc;
  
        p.speed = Math.sqrt(p.xSpeed * p.xSpeed + p.ySpeed * p.ySpeed);
        p.dist = dist;
  
        p.x += 0.1 * p.xSpeed;
        p.y += 0.1 * p.ySpeed;
  
        p.age++;
  
        if (p.age > lifespan) {
          kill(p.name);
          deathCount++;
        }
      }
    }
  
    function initDraw() {
      ctx.beginPath();
      ctx.rect(0, 0, width, height);
      ctx.fillStyle = "black";
      ctx.fill();
      ctx.closePath();
    }
  
    function draw() {
      if (!particles.length) return;
  
      ctx.beginPath();
      ctx.rect(0, 0, width, height);
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fill();
      ctx.closePath();
  
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const h = p.hue + stepCount / 30;
        const s = p.sat;
        const l = p.lum;
        const a = 1;
  
        const last = dataXYtoCanvasXY(p.xLast, p.yLast);
        const now = dataXYtoCanvasXY(p.x, p.y);
        const attracSpot = grid[p.attractor.gridSpotIndex];
        const attracXY = dataXYtoCanvasXY(attracSpot.x, attracSpot.y);
        const oldAttracSpot = grid[p.attractor.oldIndex];
        const oldAttracXY = dataXYtoCanvasXY(oldAttracSpot.x, oldAttracSpot.y);
  
        ctx.beginPath();
        ctx.strokeStyle = `hsla(${h}, ${s}%, ${l}%, ${a})`;
        ctx.fillStyle = `hsla(${h}, ${s}%, ${l}%, ${a})`;
  
        // Particle trail
        ctx.moveTo(last.x, last.y);
        ctx.lineTo(now.x, now.y);
        ctx.lineWidth = 1.5 * dataToImageRatio;
        ctx.stroke();
        ctx.closePath();
  
        // Attractor positions
        ctx.beginPath();
        ctx.lineWidth = 1.5 * dataToImageRatio;
        ctx.moveTo(oldAttracXY.x, oldAttracXY.y);
        ctx.lineTo(attracXY.x, attracXY.y);
        ctx.arc(attracXY.x, attracXY.y, 1.5 * dataToImageRatio, 0, 2 * Math.PI, false);
        ctx.strokeStyle = `hsla(${h}, ${s}%, ${l}%, ${a})`;
        ctx.fillStyle = `hsla(${h}, ${s}%, ${l}%, ${a})`;
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
      }
    }
  
    function evolve() {
      stepCount++;
  
      grid.forEach((e) => {
        if (e.busyAge > 0) e.busyAge++;
      });
  
      if (stepCount % birthFreq === 0 && particles.length + popPerBirth < maxPop) {
        birth();
      }
      move();
      draw();
  
      // Could update UI here if needed
    }
  
    // Initialize drawing
    initDraw();
    
    function handleResize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
  
    registerEventListener(window, "resize", handleResize);
    // Animation loop
    function frame() {
      evolve();
      let animationFrame = requestAnimationFrame(frame);
      registerAnimationFrame(animationFrame);
    }
    frame();
  }
  