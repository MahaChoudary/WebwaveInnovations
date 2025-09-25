import React, { useState, useEffect } from 'react';
import { Terminal, Github, Linkedin, Mail, Heart, Code, Coffee, Zap } from 'lucide-react';

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [terminalCommand, setTerminalCommand] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const commands = [
      'status: online',
      'location: San Francisco',
      'coding: React + TypeScript',
      'listening: Lo-fi Hip Hop',
      'mood: creative',
    ];

    let index = 0;
    const commandInterval = setInterval(() => {
      setTerminalCommand(commands[index]);
      index = (index + 1) % commands.length;
    }, 3000);

    return () => clearInterval(commandInterval);
  }, []);

  const socialLinks = [
    { 
      icon: Github, 
      href: '#', 
      label: 'GitHub',
      hoverColor: 'hover:text-white hover:glow-primary'
    },
    { 
      icon: Linkedin, 
      href: '#', 
      label: 'LinkedIn',
      hoverColor: 'hover:text-blue-400 hover:glow-primary'
    },
    { 
      icon: Mail, 
      href: 'mailto:alex@example.com', 
      label: 'Email',
      hoverColor: 'hover:text-accent hover:glow-accent'
    },
  ];

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="relative bg-card border-t border-primary/20 overflow-hidden">
      {/* Terminal-style Header */}
      <div className="glass border-b border-primary/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <Terminal className="h-5 w-5 text-primary animate-pulse" />
              <span className="font-mono text-sm text-accent">
                portfolio_terminal v2.0.25
              </span>
            </div>
            
            <div className="flex items-center gap-6 text-sm font-mono">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-muted">{terminalCommand}</span>
              </div>
              <div className="text-muted">
                {currentTime.toLocaleTimeString()}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand & Description */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 group">
              <div className="relative">
                <Terminal className="h-8 w-8 text-primary group-hover:animate-pulse transition-all" />
                <div className="absolute inset-0 bg-primary opacity-20 rounded-full blur-lg group-hover:opacity-40 transition-opacity" />
              </div>
              <span className="text-xl font-bold font-mono gradient-text">
                &lt;DevFolio/&gt;
              </span>
            </div>
            
            <p className="text-muted leading-relaxed max-w-sm">
              Crafting digital experiences with passion, precision, and cutting-edge technology. 
              Let's build the future together, one line of code at a time.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 max-w-sm">
              <div className="glass p-3 rounded-lg text-center">
                <div className="text-lg font-bold text-primary">50+</div>
                <div className="text-xs text-muted">Projects</div>
              </div>
              <div className="glass p-3 rounded-lg text-center">
                <div className="text-lg font-bold text-accent">4+</div>
                <div className="text-xs text-muted">Years Exp</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-accent flex items-center gap-2">
              <Code className="h-5 w-5" />
              Quick Navigation
            </h3>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-muted hover:text-accent glow-underline transition-all font-medium"
                >
                  $ cd {link.label.toLowerCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Connect & Status */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-accent flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Let's Connect
            </h3>
            
            {/* Social Links */}
            <div className="flex gap-4 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={`glass p-3 rounded-full transition-all group ${social.hoverColor}`}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>

            {/* Status Terminal */}
            <div className="glass p-4 rounded-lg font-mono text-sm">
              <div className="text-accent mb-2">$ system_status</div>
              <div className="space-y-1 text-muted">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  Available for new projects
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  Currently learning: Next.js 15
                </div>
                <div className="flex items-center gap-2">
                  <Coffee className="w-3 h-3" />
                  Fueled by coffee & curiosity
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Terminal Bottom Bar */}
      <div className="glass border-t border-primary/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2 font-mono text-muted">
              <span className="text-accent">$</span>
              <span>© 2025 &gt; Portfolio executed successfully</span>
              <Zap className="h-4 w-4 text-primary animate-pulse ml-2" />
            </div>
            
            <div className="flex items-center gap-4 text-muted">
              <span className="flex items-center gap-1">
                Made with <Heart className="h-4 w-4 text-red-500 animate-pulse" fill="currentColor" /> 
                by Alex Johnson
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-0 left-1/4 w-16 h-16 border border-primary/10 rounded-full floating opacity-50" />
      <div className="absolute bottom-0 right-1/4 w-12 h-12 border border-accent/10 rounded-lg floating opacity-50" style={{ animationDelay: '1s' }} />
    </footer>
  );
};

export default Footer;