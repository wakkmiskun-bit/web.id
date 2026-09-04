import { useEffect, useRef } from "react";

/**
 * Background3D — 3D Particle Constellation with responsive mouse tracking,
 * bi-directional scroll parallax, and dynamic scroll velocity inertia.
 */
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
    const particleCount = Math.min(Math.floor((width * height) / 16000), 85);
    const particles = [];

    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
    };

    const scrollState = {
      currentY: window.scrollY || 0,
      targetY: window.scrollY || 0,
      velocity: 0,
      lastY: window.scrollY || 0,
    };

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() - 0.5) * width * 1.6,
        y: (Math.random() - 0.5) * height * 2.2,
        baseY: (Math.random() - 0.5) * height * 2.2,
        z: Math.random() * 850 + 150,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        vz: (Math.random() - 0.5) * 0.25,
        size: Math.random() * 2 + 1.2,
        pulseOffset: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.02,
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
    };

    const handleScroll = () => {
      const currentScroll = window.scrollY || document.documentElement.scrollTop;
      scrollState.targetY = currentScroll;
      const delta = currentScroll - scrollState.lastY;
      scrollState.velocity = delta * 0.4;
      scrollState.lastY = currentScroll;
    };

    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    const fov = 420; // Field of view for 3D projection
    let time = 0;

    const render = () => {
      time += 0.015;

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.06;
      mouse.y += (mouse.targetY - mouse.y) * 0.06;

      // Smooth scroll interpolation and velocity decay
      scrollState.currentY += (scrollState.targetY - scrollState.currentY) * 0.08;
      scrollState.velocity *= 0.92; // smooth friction

      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const mouseOffsetX = (mouse.x - cx) * 0.12;
      const mouseOffsetY = (mouse.y - cy) * 0.12;

      // Subtle scroll parallax offset
      const scrollParallaxY = scrollState.currentY * 0.35;

      // Update and project particles
      const projected = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Organic continuous floating drift
        p.x += p.vx + Math.sin(time + p.pulseOffset) * 0.15;
        p.y += p.vy + Math.cos(time + p.pulseOffset) * 0.15 - scrollState.velocity * (p.z / 1000) * 0.15;
        p.z += p.vz;

        // Wrap around bounds seamlessly
        const boundX = width * 1.1;
        const boundY = height * 1.5;
        if (p.x < -boundX) p.x = boundX;
        if (p.x > boundX) p.x = -boundX;
        if (p.y < -boundY) p.y = boundY;
        if (p.y > boundY) p.y = -boundY;
        if (p.z < 100) p.z = 1000;
        if (p.z > 1000) p.z = 100;

        // 3D Perspective Projection with scroll parallax
        const effectiveY = p.y - (scrollParallaxY % boundY);
        const scale = fov / (fov + p.z);
        const projX = (p.x - mouseOffsetX) * scale + cx;
        const projY = (effectiveY - mouseOffsetY) * scale + cy;
        const alpha = Math.max(0, Math.min(1, (1 - p.z / 1000) * (0.65 + Math.sin(time * p.pulseSpeed + p.pulseOffset) * 0.2)));

        if (projX >= -50 && projX <= width + 50 && projY >= -50 && projY <= height + 50) {
          projected.push({
            x: projX,
            y: projY,
            scale,
            alpha,
            color: p.color,
            size: Math.max(0.6, p.size * scale * 1.9),
          });

          // Draw particle node
          ctx.beginPath();
          ctx.arc(projX, projY, Math.max(0.6, p.size * scale * 1.8), 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${alpha})`;
          ctx.fill();

          // Soft neon glow for front particles
          if (scale > 0.55) {
            ctx.shadowBlur = 12;
            ctx.shadowColor = `${p.color}0.7)`;
          } else {
            ctx.shadowBlur = 0;
          }
        }
      }

      // Draw dynamic constellation connection lines in 3D space
      ctx.lineWidth = 0.55;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const p1 = projected[i];
          const p2 = projected[j];

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 115) {
            const lineAlpha = (1 - dist / 115) * Math.min(p1.alpha, p2.alpha) * 0.32;
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
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 opacity-70 transition-opacity duration-700"
    />
  );
}
