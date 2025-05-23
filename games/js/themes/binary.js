export function binaryTheme() {
    const canvas = document.createElement("canvas");
    canvas.id = "canvas-bg";
    canvas.style.position = "fixed";
    canvas.style.inset = "0";
    canvas.style.zIndex = "-1";
    canvas.style.display = "block";
    canvas.style.background = "#000";
    document.body.appendChild(canvas);
  
    const ctx = canvas.getContext("2d", { alpha: false });
    let chars = [];
    let cursor = { x: 0, y: 0 };
    let animationFrame;
  
    const DPR = window.devicePixelRatio || 1;
  
    class Char {
      constructor(x, y, char) {
        this.x = x;
        this.y = y;
        this.char = char;
        this.speed = 1 + Math.random() * 2;
        this.opacity = 0.05 + Math.random() * 0.2;
        this.actualY = y;
      }
  
      draw() {
        const distToCursor = Math.hypot(this.x - cursor.x, this.y - cursor.y);
        const highlight = Math.max(0, 0.6 - distToCursor / 200);
        ctx.fillStyle = `rgba(0, 255, 70, ${this.opacity + highlight})`;
        ctx.fillText(this.char, this.x, this.y);
      }
  
      update() {
        this.actualY += this.speed;
        this.y = this.actualY % (canvas.height / DPR);
  
        if (this.y < this.speed) {
          this.char = Math.random() < 0.5 ? "0" : "1";
          this.opacity = 0.05 + Math.random() * 0.2;
        }
      }
    }
  
    function calculateFontSize() {
      const baseSize = 16;
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        return Math.max(16, baseSize * (screenWidth / 768));
      }
      return Math.min(24, Math.max(16, baseSize * (screenWidth / 1920)));
    }
  
    function init() {
      const logicalWidth = window.innerWidth;
      const logicalHeight = window.innerHeight;
      canvas.width = logicalWidth * DPR;
      canvas.height = logicalHeight * DPR;
      canvas.style.width = `${logicalWidth}px`;
      canvas.style.height = `${logicalHeight}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(DPR, DPR);
  
      const fontSize = calculateFontSize();
      const columnSpacing = fontSize * 1.4;
      const rowSpacing = fontSize * 1.8;
  
      const columns = Math.floor(logicalWidth / columnSpacing);
      const rows = Math.floor(logicalHeight / rowSpacing);
  
      chars = [];
      for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * columnSpacing;
          const y = j * rowSpacing - Math.random() * logicalHeight;
          const char = Math.random() < 0.5 ? "0" : "1";
          chars.push(new Char(x, y, char));
        }
      }
  
      ctx.font = `${fontSize}px monospace`;
      ctx.textBaseline = "top";
    }
  
    function animate() {
      ctx.fillStyle = "#000"; // Solid black for crisp background
      ctx.fillRect(0, 0, canvas.width / DPR, canvas.height / DPR);
  
      chars.forEach(char => {
        char.draw();
        char.update();
      });
  
      animationFrame = requestAnimationFrame(animate);
    }
  
    function handleMouseMove(e) {
      cursor = { x: e.clientX, y: e.clientY };
    }
  
    function handleResize() {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        init();
      }, 250);
    }
  
    let resizeTimeout;
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);
  
    init();
    animate();
  }
  