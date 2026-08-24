import { useEffect, useRef } from "react";

export default function Background3D() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle pool with 3D coordinates (x, y, z)
    const particleCount = Math.min(Math.floor((width * height) / 18000), 70);
    const particles = [];

    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      isHovered: false,
    };

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() - 0.5) * width * 1.5,
        y: (Math.random() - 0.5) * height * 1.5,
        z: Math.random() * 800 + 200,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        vz: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 1,
        color:
          i % 3 === 0
            ? "rgba(99, 102, 241, " // indigo
            : i % 3 === 1
            ? "rgba(34, 211, 238, " // cyan
            : "rgba(139, 92, 246, ", // violet
      });
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.isHovered = true;
    };

    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const fov = 400; // Field of view for 3D projection

    const render = () => {
      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const mouseOffsetX = (mouse.x - cx) * 0.15;
      const mouseOffsetY = (mouse.y - cy) * 0.15;

      // Update and project particles
      const projected = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;

        // Wrap around bounds
        if (p.x < -width) p.x = width;
        if (p.x > width) p.x = -width;
        if (p.y < -height) p.y = height;
        if (p.y > height) p.y = -height;
        if (p.z < 100) p.z = 1000;
        if (p.z > 1000) p.z = 100;

        // 3D Perspective Projection
        const scale = fov / (fov + p.z);
        const projX = (p.x - mouseOffsetX) * scale + cx;
        const projY = (p.y - mouseOffsetY) * scale + cy;
        const alpha = Math.max(0, Math.min(1, (1 - p.z / 1000) * 0.8));

        projected.push({
          x: projX,
          y: projY,
          scale,
          alpha,
          color: p.color,
          size: p.size * scale * 2.2,
        });

        // Draw particle node
        if (projX >= 0 && projX <= width && projY >= 0 && projY <= height) {
          ctx.beginPath();
          ctx.arc(projX, projY, Math.max(0.5, p.size * scale * 1.8), 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${alpha})`;
          ctx.fill();

          // Subtle glow on nearest particles
          if (scale > 0.6) {
            ctx.shadowBlur = 10;
            ctx.shadowColor = `${p.color}0.6)`;
          } else {
            ctx.shadowBlur = 0;
          }
        }
      }

      // Draw connection lines in 3D space
      ctx.lineWidth = 0.6;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const p1 = projected[i];
          const p2 = projected[j];

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const lineAlpha = (1 - dist / 110) * Math.min(p1.alpha, p2.alpha) * 0.35;
            ctx.strokeStyle = `rgba(99, 102, 241, ${lineAlpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 opacity-60"
    />
  );
}
