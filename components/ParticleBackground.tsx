"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
  decay: number;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 45;
    
    // Soft, premium, calming HSL colors representing E-Self domains (Clarity, Emotion, Stability)
    const colors = [
      "hsla(180, 75%, 60%, ", // Cyan (Clarity)
      "hsla(250, 70%, 65%, ", // Indigo/Violet (Emotion/Reactivity)
      "hsla(150, 65%, 55%, ", // Emerald/Green (Stability/Adaptivity)
      "hsla(190, 80%, 55%, ", // Blue/Sky (Awareness)
    ];

    const resizeCanvas = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Initialize particles
    const createParticle = (init = false): Particle => {
      const radius = Math.random() * 3 + 1.2;
      return {
        x: Math.random() * canvas.width,
        y: init ? Math.random() * canvas.height : canvas.height + 10,
        vx: (Math.random() - 0.5) * 0.3,
        vy: -(Math.random() * 0.4 + 0.15), // Slow upward drift
        radius,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.4 + 0.1,
        decay: Math.random() * 0.0003 + 0.0001,
      };
    };

    for (let i = 0; i < particleCount; i++) {
      particles.push(createParticle(true));
    }

    // Mouse tracking
    const mouse = { x: -1000, y: -1000, radius: 130 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;

        // Interaction with mouse (gentle organic push-away)
        if (mouse.x > 0) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            p.x += (dx / dist) * force * 1.2;
            p.y += (dy / dist) * force * 1.2;
          }
        }

        // Slowly cycle opacity
        p.alpha -= p.decay;

        // Respawn if offscreen or fully faded
        if (p.y < -10 || p.x < -10 || p.x > canvas.width + 10 || p.alpha <= 0) {
          particles[idx] = createParticle(false);
          return;
        }

        // Draw glowing particle
        ctx.save();
        ctx.beginPath();
        
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 3.5);
        gradient.addColorStop(0, p.color + p.alpha + ")");
        gradient.addColorStop(0.3, p.color + p.alpha * 0.4 + ")");
        gradient.addColorStop(1, p.color + "0)");

        ctx.fillStyle = gradient;
        ctx.arc(p.x, p.y, p.radius * 3.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Draw faint connections representing mental connections / self-regulation networks
      ctx.strokeStyle = "rgba(255, 255, 255, 0.02)";
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            // Lines are more opaque the closer the particles are
            ctx.strokeStyle = `rgba(34, 211, 238, ${Math.max(0, (110 - dist) / 110) * 0.03})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
