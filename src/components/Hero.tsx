import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Terminal, Code, Zap, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const hackerIntro = "console.log('Initializing system...');";
  const name = "Maheen Hamid";
  const title = "Frontend Developer & Digital Architect";

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Matrix-style particles with binary codes
    const particles: Array<{
      x: number;
      y: number;
      text: string;
      speed: number;
      opacity: number;
      size: number;
    }> = [];

    const binaryChars = ['0', '1', '{', '}', '<', '>', '/', '*'];
    
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        text: binaryChars[Math.floor(Math.random() * binaryChars.length)],
        speed: Math.random() * 0.5 + 0.1,
        opacity: Math.random() * 0.3 + 0.1,
        size: Math.random() * 12 + 8,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.y += particle.speed;
        
        if (particle.y > canvas.height) {
          particle.y = -20;
          particle.x = Math.random() * canvas.width;
        }

        ctx.fillStyle = `rgba(0, 255, 255, ${particle.opacity})`;
        ctx.font = `${particle.size}px 'JetBrains Mono', monospace`;
        ctx.fillText(particle.text, particle.x, particle.y);
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

  // Typing effect for hacker intro
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < hackerIntro.length) {
        setTypedText(hackerIntro.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  // Cursor blink effect
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
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
      {/* Dark Hacker Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/98 to-black" />
      
      {/* Matrix Rain Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-30"
      />

      {/* Circuit Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
      </div>

      {/* Animated Scanning Lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent animate-gradient-wave" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent animate-gradient-wave" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-gradient-wave" style={{ animationDelay: '2s' }} />
      </div>

      {/* Holographic Panels */}
      <div className="absolute top-20 right-20 w-32 h-32 terminal-effect rounded-lg opacity-20 animate-floating hologram" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-16 w-24 h-40 terminal-effect rounded-lg opacity-15 animate-floating" style={{ animationDelay: '3s' }} />

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Terminal Header */}
        <div className="mb-8 fade-in-up terminal-effect rounded-lg p-4 max-w-md mx-auto" style={{ animationDelay: '0.1s' }}>
          <div className="flex items-center gap-2 text-accent font-mono text-sm mb-2">
            <Terminal className="h-4 w-4" />
            <span>system@maheen:~$</span>
          </div>
          <div className="text-left text-primary font-mono text-sm">
            {typedText}
            {showCursor && <span className="text-primary">|</span>}
          </div>
        </div>

        {/* Status Indicator */}
        <div className="mb-6 fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 terminal-effect rounded-full">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-accent font-mono text-sm">SYSTEM ONLINE</span>
          </div>
        </div>

        {/* Main Identity */}
        <div className="mb-8 fade-in-up" style={{ animationDelay: '0.4s' }}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight">
            <span className="block text-foreground glow-text font-black mb-2">
              {name.split(' ').map((word, index) => (
                <span key={word} className={index === 0 ? "animated-gradient-text" : "text-foreground"}>
                  {word}{index === 0 && <br />}
                </span>
              ))}
            </span>
          </h1>
          <div className="circuit-line mb-6" />
          <h2 className="text-xl md:text-2xl lg:text-3xl font-mono text-accent glitch" data-text={title}>
            {title}
          </h2>
        </div>

        {/* Mission Statement */}
        <div className="mb-12 fade-in-up data-stream" style={{ animationDelay: '0.6s' }}>
          <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed font-mono">
            <span className="text-primary">[MISSION]</span> Crafting immersive digital experiences through 
            <span className="gradient-text font-semibold"> cutting-edge frontend technologies</span>, 
            transforming complex ideas into elegant, user-centric solutions.
          </p>
        </div>

        {/* System Specs */}
        <div className="mb-12 fade-in-up" style={{ animationDelay: '0.7s' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { icon: Code, label: 'Frontend Specialist', value: 'React, TypeScript, Next.js' },
              { icon: Zap, label: 'Performance Optimizer', value: 'Lightning-fast UX' },
              { icon: Terminal, label: 'Problem Solver', value: 'Clean, scalable code' },
            ].map(({ icon: Icon, label, value }, index) => (
              <div key={label} className="terminal-effect rounded-lg p-4 group hover:glow-primary transition-all duration-300">
                <Icon className="h-6 w-6 text-accent mb-2 mx-auto group-hover:scale-110 transition-transform" />
                <div className="text-primary font-mono text-sm mb-1">{label}</div>
                <div className="text-muted text-xs">{value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Commands */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 fade-in-up" style={{ animationDelay: '0.8s' }}>
          <Button 
            size="lg"
            onClick={scrollToAbout}
            className="terminal-effect px-8 py-4 text-lg font-mono rounded-lg hover:glow-primary hover:scale-105 transition-all duration-300 group border-primary/30 border bg-primary/10 hover:bg-primary/20"
          >
            <span className="flex items-center gap-3">
              <Terminal className="h-5 w-5" />
              ./initiate_project
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
          
          <Button 
            variant="outline"
            size="lg"
            onClick={scrollToProjects}
            className="px-8 py-4 text-lg font-mono rounded-lg hover:glow-accent hover:scale-105 transition-all duration-300 group terminal-effect border-accent/30 hover:bg-accent/10"
          >
            <span className="flex items-center gap-3">
              <Code className="h-5 w-5 group-hover:scale-110 transition-transform" />
              ./view_portfolio
            </span>
          </Button>
        </div>

        {/* System Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto fade-in-up" style={{ animationDelay: '1s' }}>
          {[
            { value: '50+', label: 'Projects Deployed', prefix: 'SYS_' },
            { value: '100%', label: 'Uptime Record', prefix: 'REL_' },
            { value: '3+', label: 'Years Active', prefix: 'EXP_' },
            { value: '24/7', label: 'Debug Mode', prefix: 'SUP_' },
          ].map(({ value, label, prefix }, index) => (
            <div key={label} className="text-center group">
              <div className="text-xs font-mono text-accent mb-1">{prefix}</div>
              <div className="text-2xl md:text-3xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform font-mono">
                {value}
              </div>
              <div className="text-xs text-muted font-mono">{label.toUpperCase()}</div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in-up" style={{ animationDelay: '1.2s' }}>
          <div className="flex flex-col items-center gap-2 text-accent">
            <span className="text-xs font-mono">SCROLL_TO_EXPLORE</span>
            <ChevronDown className="h-4 w-4 animate-bounce" />
          </div>
        </div>
      </div>

      {/* Ambient Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/3 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      
      {/* Corner Decorations */}
      <div className="absolute top-4 left-4 text-primary/30 font-mono text-xs">
        v2.1.3_PROD
      </div>
      <div className="absolute top-4 right-4 text-accent/30 font-mono text-xs">
        STATUS: ACTIVE
      </div>
    </section>
  );
};

export default Hero;