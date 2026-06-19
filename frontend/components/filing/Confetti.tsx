"use client";

interface ConfettiParticle {
  x: number;
  y: number;
  size: number;
  color: string;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
  shape: "circle" | "square" | "triangle";
}

const COLORS = [
  "#FFC107", "#FF5722", "#E91E63", "#9C27B0", "#3F51B5",
  "#00BCD4", "#4CAF50", "#8BC34A", "#FFEB3B", "#FF9800",
  "#e11d48", "#2563eb", "#059669", "#d97706", "#7c3aed"
];

export function triggerConfetti() {
  if (typeof window === "undefined") return;

  const canvas = document.createElement("canvas");
  canvas.style.position = "fixed";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style.width = "100vw";
  canvas.style.height = "100vh";
  canvas.style.pointerEvents = "none";
  canvas.style.zIndex = "99999";
  document.body.appendChild(canvas);

  const ctx = canvas.getContext("2d");
  if (!ctx) {
    document.body.removeChild(canvas);
    return;
  }

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const handleResize = () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  };
  window.addEventListener("resize", handleResize);

  const particles: ConfettiParticle[] = [];
  const particleCount = 180;

  for (let i = 0; i < particleCount; i++) {
    const x = width / 2 + (Math.random() - 0.5) * 80;
    const y = height * 0.7;
    const size = Math.random() * 8 + 6;
    const color = COLORS[Math.floor(Math.random() * COLORS.length)];
    const angle = Math.PI * 1.5 + (Math.random() - 0.5) * 1.2;
    const speed = Math.random() * 16 + 10;
    const speedX = Math.cos(angle) * speed;
    const speedY = Math.sin(angle) * speed;
    const rotation = Math.random() * Math.PI * 2;
    const rotationSpeed = (Math.random() - 0.5) * 0.25;
    const shape = ["circle", "square", "triangle"][Math.floor(Math.random() * 3)] as "circle" | "square" | "triangle";

    particles.push({
      x,
      y,
      size,
      color,
      speedX,
      speedY,
      rotation,
      rotationSpeed,
      shape,
    });
  }

  let opacity = 1.0;
  const gravity = 0.25;
  const wind = 0.05;
  const friction = 0.975;
  let frameId: number;

  function update() {
    ctx!.clearRect(0, 0, width, height);

    let active = false;

    for (const p of particles) {
      p.speedX *= friction;
      p.speedY += gravity;
      p.x += p.speedX + (Math.random() - 0.5) * wind;
      p.y += p.speedY;
      p.rotation += p.rotationSpeed;

      ctx!.save();
      ctx!.translate(p.x, p.y);
      ctx!.rotate(p.rotation);
      ctx!.fillStyle = p.color;
      ctx!.globalAlpha = opacity;

      ctx!.beginPath();
      if (p.shape === "circle") {
        ctx!.arc(0, 0, p.size / 2, 0, Math.PI * 2);
      } else if (p.shape === "triangle") {
        ctx!.moveTo(0, -p.size / 2);
        ctx!.lineTo(p.size / 2, p.size / 2);
        ctx!.lineTo(-p.size / 2, p.size / 2);
        ctx!.closePath();
      } else {
        ctx!.rect(-p.size / 2, -p.size / 2, p.size, p.size);
      }
      ctx!.fill();
      ctx!.restore();

      if (p.y < height + 50 && p.x > -50 && p.x < width + 50) {
        active = true;
      }
    }

    if (opacity > 0.01) {
      opacity -= 0.008;
      frameId = requestAnimationFrame(update);
    } else {
      ctx!.clearRect(0, 0, width, height);
      window.removeEventListener("resize", handleResize);
      if (document.body.contains(canvas)) {
        document.body.removeChild(canvas);
      }
    }
  }

  update();
}
