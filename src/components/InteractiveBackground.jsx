import React, { useEffect, useRef } from 'react';

function InteractiveBackground() {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.originalSize = this.size;
      }

      update(mouseX, mouseY) {
        // Move particle
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        // Mouse interaction
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          // Attract particles to mouse
          const force = (150 - distance) / 150;
          this.vx += dx * force * 0.001;
          this.vy += dy * force * 0.001;
          
          // Increase size and opacity when near mouse
          this.size = this.originalSize + force * 3;
          this.opacity = Math.min(0.8, this.opacity + force * 0.1);
        } else {
          // Return to normal
          this.size = this.originalSize;
          this.opacity = Math.max(0.2, this.opacity - 0.01);
        }

        // Limit velocity
        this.vx = Math.max(-1, Math.min(1, this.vx));
        this.vy = Math.max(-1, Math.min(1, this.vy));
      }

      draw(ctx) {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = 'var(--accent)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // Create particles - reduced count for better performance on Windows
    const particleCount = Math.min(30, Math.floor(canvas.width * canvas.height / 30000));
    particlesRef.current = Array.from({ length: particleCount }, () => new Particle());

    // Mouse move handler
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    // Animation loop with performance optimizations
    let lastTime = 0;
    const targetFPS = 30; // Reduce from 60fps to 30fps for better performance
    const frameInterval = 1000 / targetFPS;
    
    const animate = (currentTime) => {
      if (currentTime - lastTime >= frameInterval) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Update and draw particles
        particlesRef.current.forEach(particle => {
          particle.update(mouseRef.current.x, mouseRef.current.y);
          particle.draw(ctx);
        });

        // Draw connections between nearby particles (simplified for performance)
        ctx.strokeStyle = 'var(--accent)';
        ctx.lineWidth = 0.5;
        
        // Only draw connections for every other particle to reduce calculations
        for (let i = 0; i < particlesRef.current.length; i += 2) {
          for (let j = i + 2; j < particlesRef.current.length; j += 2) {
            const p1 = particlesRef.current[i];
            const p2 = particlesRef.current[j];
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 80) { // Reduced connection distance
              ctx.globalAlpha = (80 - distance) / 80 * 0.2; // Reduced opacity
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }
        
        ctx.globalAlpha = 1;
        lastTime = currentTime;
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="interactive-background"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: -2,
          opacity: 0.6
        }}
      />
      <div className="interactive-background-overlay" />
    </>
  );
}

export default InteractiveBackground;
