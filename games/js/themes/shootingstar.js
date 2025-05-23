export function shootingstarTheme() {
    const canvas = document.createElement("canvas");
    canvas.id = "canvas-bg";
    canvas.style.position = "fixed";
    canvas.style.inset = "0";
    canvas.style.zIndex = "-1";
    document.body.appendChild(canvas);
  
    const ctx = canvas.getContext("2d");
    let width, height;
  
    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }
  
    resize();
    window.addEventListener("resize", resize);
  
    const shootingStars = [];
    const starCount = 25; // Adjust based on performance
  
    class ShootingStar {
      constructor() {
        this.reset();
      }
  
      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.startX = this.x;
        this.startY = this.y;
        this.len = 80 + Math.random() * 100;
        this.speed = 6 + Math.random() * 4;
        this.angle = Math.PI / 4;
        this.opacity = 0;
        this.life = 0;
        this.fadeInDuration = 20; // frames
        this.fadeOutDuration = 30; // frames
        this.ttl = 100 + Math.floor(Math.random() * 60); // total life
      }
  
      update() {
        this.life++;
  
        // Fade in
        if (this.life < this.fadeInDuration) {
          this.opacity = this.life / this.fadeInDuration;
        }
        // Fade out
        else if (this.life > this.ttl - this.fadeOutDuration) {
          this.opacity = (this.ttl - this.life) / this.fadeOutDuration;
        } else {
          this.opacity = 1;
        }
  
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
  
        if (this.life > this.ttl) {
          this.reset();
        }
      }
  
      draw(ctx) {
        const tailX = this.x - Math.cos(this.angle) * this.len;
        const tailY = this.y - Math.sin(this.angle) * this.len;
  
        // Tail gradient
        const gradient = ctx.createLinearGradient(this.x, this.y, tailX, tailY);
        gradient.addColorStop(0, `rgba(95, 145, 255, ${this.opacity})`);
        gradient.addColorStop(1, `rgba(0, 0, 255, 0)`);
  
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(tailX, tailY);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.stroke();
  
        // Glowing comet head
        const headRadius = 1 + 3 * this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, headRadius, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(105, 155, 255, ${this.opacity})`;
        ctx.shadowColor = `rgba(105, 155, 255, ${this.opacity})`;
        ctx.shadowBlur = 8 * this.opacity;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }
  
    for (let i = 0; i < starCount; i++) {
      shootingStars.push(new ShootingStar());
    }
  
    function animate() {
      ctx.fillStyle = "rgba(9, 10, 15, 0.25)";
      ctx.fillRect(0, 0, width, height);
  
      for (const star of shootingStars) {
        star.update();
        star.draw(ctx);
      }
  
      requestAnimationFrame(animate);
    }
  
    animate();
  }
  