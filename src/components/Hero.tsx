import React, { useEffect, useRef } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Code2, Terminal, Cpu } from 'lucide-react';

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

    // Create floating particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        opacity: Math.random() * 0.5 + 0.2,
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

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-30"
      />

      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary/30 rounded-full floating" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-20 w-24 h-24 border border-accent/30 rounded-lg floating" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-1/4 w-20 h-20 border border-primary/20 rounded-full floating" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-40 right-1/3 w-28 h-28 border border-accent/20 transform rotate-45 floating" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Glitch Text Effect */}
        <div className="mb-6">
          <p className="text-accent font-mono text-lg mb-2 animate-fade-in">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 glitch gradient-text" data-text="Alex Johnson">
            Alex Johnson
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-muted mb-6 glow-text">
            I build things for the web.
          </h2>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed mb-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          I'm a frontend developer specializing in creating exceptional digital experiences. 
          Currently focused on building accessible, human-centered products with modern technologies.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <button 
            onClick={scrollToAbout}
            className="glass px-8 py-4 rounded-lg hover:glow-primary transition-all duration-300 font-semibold group"
          >
            <span className="flex items-center justify-center gap-2">
              <Code2 className="h-5 w-5 group-hover:animate-pulse" />
              Check out my work!
            </span>
          </button>
          <a 
            href="#contact"
            className="border border-primary/50 px-8 py-4 rounded-lg hover:glow-accent transition-all duration-300 font-semibold hover:bg-primary/10"
          >
            Get In Touch
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-16 animate-fade-in" style={{ animationDelay: '0.9s' }}>
          {[
            { icon: Github, href: '#', label: 'GitHub' },
            { icon: Linkedin, href: '#', label: 'LinkedIn' },
            { icon: Mail, href: '#', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              className="group relative p-3 glass rounded-full hover:glow-accent transition-all duration-300"
              aria-label={label}
            >
              <Icon className="h-6 w-6 group-hover:scale-110 transition-transform" />
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-xs font-mono text-accent">{label}</span>
              </div>
            </a>
          ))}
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:glow-primary transition-all p-2 rounded-full"
        >
          <ChevronDown className="h-8 w-8 text-primary" />
        </button>
      </div>

      {/* Tech Icons Floating */}
      <div className="absolute top-1/4 right-8 space-y-8 opacity-20">
        <Terminal className="h-12 w-12 text-primary floating" />
        <Code2 className="h-10 w-10 text-accent floating" style={{ animationDelay: '1s' }} />
        <Cpu className="h-8 w-8 text-primary floating" style={{ animationDelay: '2s' }} />
      </div>
    </section>
  );
};

export default Hero;