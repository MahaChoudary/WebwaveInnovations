import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Terminal } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#services', label: 'Services' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass py-2' : 'bg-transparent py-4'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2 group cursor-pointer">
              <div className="relative">
                <Terminal className="h-8 w-8 text-primary group-hover:animate-pulse-glow transition-all" />
                <div className="absolute inset-0 bg-primary opacity-20 rounded-full blur-lg group-hover:opacity-40 transition-opacity" />
              </div>
              <span className="text-xl font-bold font-mono gradient-text">
                &lt;DevFolio/&gt;
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="relative text-muted-foreground hover:text-foreground glow-underline transition-all duration-300 font-medium"
                >
                  {item.label}
                </button>
              ))}
              <button className="glass px-4 py-2 rounded-lg hover:glow-primary transition-all duration-300 font-medium">
                Resume
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative z-50 p-2 glass rounded-lg hover:glow-primary transition-all"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        <div className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item, index) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`text-2xl font-semibold glow-underline hover:text-primary transition-all duration-500 ${
                  isOpen ? 'animate-fade-in' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
              </button>
            ))}
            <button className="glass px-6 py-3 rounded-lg hover:glow-primary transition-all duration-300 font-semibold text-lg">
              Resume
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;