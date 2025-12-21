import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Terminal } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { href: string; label: string; type: 'anchor' | 'route' }[] = [
    { href: '#about', label: 'About', type: 'anchor' },
    { href: '#projects', label: 'Projects', type: 'anchor' },
    { href: '#services', label: 'Services', type: 'anchor' },
    { href: '#skills', label: 'Skills', type: 'anchor' },
    { href: '#contact', label: 'Contact', type: 'anchor' },
  ];

  const handleNav = (item: { href: string; label: string; type: 'anchor' | 'route' }) => {
    if (item.type === 'route') {
      navigate(item.href);
      setIsOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const isHome = location.pathname === '/';
    if (!isHome) {
      navigate(`/${item.href}`);
      setIsOpen(false);
      return;
    }

    const element = document.querySelector(item.href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass border-b border-primary/10 backdrop-blur-2xl bg-background/70 py-2 shadow-[0_10px_40px_rgba(16,185,129,0.15)]'
          : 'bg-transparent py-4'
      }`}>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.08),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(34,197,94,0.08),transparent_30%)]" />
        <div className="container mx-auto px-6 relative">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2 group cursor-pointer transition-transform duration-500 hover:scale-105 hover:-translate-y-0.5">
              <div className="relative">
                
                <div className="absolute inset-0 bg-primary opacity-20 rounded-full blur-lg group-hover:opacity-40 transition-opacity" />
              </div>
              <span className="text-xl font-bold font-mono gradient-text drop-shadow-sm">
                &lt;Webwave Innovations/&gt;
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNav(item)}
                  className="relative text-muted-foreground hover:text-foreground glow-underline transition-all duration-300 font-medium group hover:-translate-y-0.5 hover:scale-105 drop-shadow-[0_0_12px_rgba(56,189,248,0.18)]"
                >
                  <span className="relative">
                    {item.label}
                    <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-gradient-to-r from-primary via-accent to-primary transition-all duration-300 group-hover:w-full drop-shadow-[0_0_10px_rgba(56,189,248,0.4)]" />
                  </span>
                </button>
              ))}
             
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
                onClick={() => handleNav(item)}
                className={`text-2xl font-semibold glow-underline hover:text-primary transition-all duration-500 ${
                  isOpen ? 'animate-fade-in' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
              </button>
            ))}
           
          </div>
        </div>

        {/* Scroll progress bar */}
        <div
          className="absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary transition-[width] duration-200 shadow-[0_0_12px_rgba(56,189,248,0.6)]"
          style={{ width: `${scrollProgress}%` }}
        />

        {/* Glow strips */}
        <div className="pointer-events-none absolute inset-x-0 top-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent blur-[2px]" />
      </nav>
    </>
  );
};

export default Navbar;