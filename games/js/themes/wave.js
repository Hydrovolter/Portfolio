export function waveTheme() {
  const canvas = document.createElement("canvas");
  canvas.id = "canvas-bg";
  canvas.style.position = "fixed";
  canvas.style.inset = "0";
  canvas.style.zIndex = "-1";
  canvas.style.background = "#0e0f1c";
  document.body.appendChild(canvas);

  const ctx = canvas.getContext("2d");
  const DPR = window.devicePixelRatio || 1;
  let width, height, time = 0, raf;

  const lineCount = 155;
  const spacing = 25;
  const amplitude = 40; // More dramatic wave
  const wavelength = 100; // Tighter wave cycles
  const speed = 0.03;

  function resizeCanvas() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * DPR;
    canvas.height = height * DPR;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(DPR, DPR);
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    ctx.strokeStyle = "#2b4a5b";
    ctx.lineWidth = 1;

    // Offset diagonally so lines are centered
    const diagLength = Math.sqrt(width * width + height * height);

    for (let i = 0; i < lineCount; i++) {
      const offset = i * spacing - (lineCount * spacing) / 2;
      ctx.beginPath();
      for (let t = -100; t < diagLength + 100; t += 10) {
        const wave = Math.sin((t / wavelength) + time + i * 0.2) * amplitude;
        const x = width - t + offset;
        const y = height - t + wave;
        ctx.lineTo(x, y);
      }
      ctx.stroke();
    }
  }

  function animate() {
    time += speed;
    draw();
    raf = requestAnimationFrame(animate);
  }

  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();
  animate();
}
