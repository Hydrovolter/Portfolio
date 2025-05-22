export function mainKanaTheme() {
    const canvas = document.createElement("canvas");
    canvas.id = "canvas-bg";
    canvas.style.position = "fixed";
    canvas.style.inset = "0";
    canvas.style.zIndex = "-1"; 
    canvas.style.display = "block";
    canvas.style.background = "#11111b";
    document.body.appendChild(canvas);

const ctx = canvas.getContext("2d", { alpha: false });
  let chars = [];
  let cursor = { x: 0, y: 0 };
  let animationFrame;

  class Char {
    constructor(x, y, char) {
      this.x = x;
      this.y = y;
      this.char = char;
      this.speed = 1.2 + Math.random() * 1.8;
      this.opacity = 0.05 + Math.random() * 0.15;
      this.actualY = y;
    }

    draw() {
      const distToCursor = Math.hypot(this.x - cursor.x, this.y - cursor.y);
      const highlight = Math.max(0, 0.5 - distToCursor / 250);
      ctx.fillStyle = `rgba(205, 214, 244, ${this.opacity + highlight})`;
      ctx.fillText(this.char, this.x, this.y);
    }

    update() {
      this.actualY += this.speed;
      this.y = this.actualY % window.innerHeight;

      if (this.y < this.speed) {
        this.char = String.fromCharCode(0x30a0 + Math.random() * 96);
        this.opacity = 0.05 + Math.random() * 0.15;
      }
    }
  }

  function calculateFontSize() {
    const baseSize = 16;
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      return Math.max(18, baseSize * (screenWidth / 768));
    }
    return Math.min(22, Math.max(18, baseSize * (screenWidth / 1920)));
  }

  function init() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fontSize = calculateFontSize();
    const columnSpacing = fontSize * 1.5;
    const rowSpacing = fontSize * 2;

    const minColumns = 15;
    const minRows = 15;
    const maxRows = 25;

    const columns = Math.max(minColumns, Math.floor(window.innerWidth / columnSpacing));
    const rows = Math.min(maxRows, Math.max(minRows, Math.floor(window.innerHeight / rowSpacing)));

    chars = [];
    for (let i = 0; i < columns; i++) {
      for (let j = 0; j < rows; j++) {
        const x = i * (window.innerWidth / columns);
        const y = j * rowSpacing - Math.random() * window.innerHeight;
        const char = String.fromCharCode(0x30a0 + Math.random() * 96);
        chars.push(new Char(x, y, char));
      }
    }

    ctx.font = `${fontSize}px monospace`;
  }

  function animate() {
    ctx.fillStyle = "rgb(17, 17, 27)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

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
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    }, 250);
  }


    let resizeTimeout;
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);
  
  
    
    init();
    animate();
  }
