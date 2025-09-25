import React, { useEffect, useRef } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    // Create subtle floating particles
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: Math.random() * 0.3 - 0.15,
        speedY: Math.random() * 0.3 - 0.15,
        opacity: Math.random() * 0.3 + 0.1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        ctx.fillStyle = `rgba(0, 255, 255, ${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dark Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-black" />
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      
      {/* Subtle Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-20"
      />

      {/* Animated Gradient Waves */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-gradient-wave" />
        <div className="absolute bottom-1/3 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/20 to-transparent animate-gradient-wave" style={{ animationDelay: '2s' }} />
      </div>

      {/* Glassmorphism Panels */}
      <div className="absolute top-20 right-20 w-32 h-32 glass rounded-2xl opacity-30 animate-floating" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-16 w-24 h-40 glass rounded-2xl opacity-20 animate-floating" style={{ animationDelay: '3s' }} />

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Brand Introduction */}
        <div className="mb-8 fade-in-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-accent font-mono text-lg mb-4 opacity-80">
            Welcome to the future of web development
          </p>
        </div>

        {/* Main Brand Name */}
        <div className="mb-8 fade-in-up" style={{ animationDelay: '0.4s' }}>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 leading-tight">
            <span className="animated-gradient-text font-black">
              Webwave
            </span>
            <br />
            <span className="glow-text text-foreground font-light">
              Innovations
            </span>
          </h1>
        </div>

        {/* Tagline */}
        <div className="mb-12 fade-in-up" style={{ animationDelay: '0.6s' }}>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-light text-muted max-w-4xl mx-auto leading-relaxed">
            Crafting digital experiences that 
            <span className="gradient-text font-semibold"> push boundaries </span>
            and inspire innovation.
          </h2>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 fade-in-up" style={{ animationDelay: '0.8s' }}>
          <Button 
            size="lg"
            onClick={scrollToAbout}
            className="glass px-12 py-6 text-lg font-semibold rounded-2xl hover:glow-primary hover:scale-105 transition-all duration-300 group border-primary/20 border"
          >
            <span className="flex items-center gap-3">
              Start a Project
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
          
          <Button 
            variant="outline"
            size="lg"
            onClick={scrollToProjects}
            className="px-12 py-6 text-lg font-semibold rounded-2xl hover:glow-accent hover:scale-105 transition-all duration-300 group bg-transparent border-accent/30 hover:bg-accent/5"
          >
            <span className="flex items-center gap-3">
              <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
              View Portfolio
            </span>
          </Button>
        </div>

        {/* Metrics/Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto fade-in-up" style={{ animationDelay: '1s' }}>
          {[
            { number: '100+', label: 'Projects Delivered' },
            { number: '50+', label: 'Happy Clients' },
            { number: '3+', label: 'Years Experience' },
            { number: '24/7', label: 'Support Available' },
          ].map(({ number, label }, index) => (
            <div key={label} className="text-center group">
              <div className="text-2xl md:text-3xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">
                {number}
              </div>
              <div className="text-sm text-muted font-mono">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Ambient Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
    </section>
  );
};

export default Hero;