import React, { useState } from 'react';
import { 
  Code, 
  Smartphone, 
  Palette, 
  Zap, 
  Globe, 
  Database,
  Figma,
  Monitor,
  Layers
} from 'lucide-react';

const Services = () => {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  const skills = [
    {
      icon: Code,
      title: 'HTML/CSS',
      description: 'Semantic markup and modern CSS with Flexbox, Grid, and animations',
      level: 95,
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Code,
      title: 'JavaScript',
      description: 'ES6+ features, async/await, DOM manipulation, and modern JS patterns',
      level: 92,
      color: 'from-yellow-400 to-orange-500',
    },
    {
      icon: Layers,
      title: 'TypeScript',
      description: 'Type-safe JavaScript with interfaces, generics, and advanced typing',
      level: 88,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Zap,
      title: 'React',
      description: 'Hooks, Context API, state management, and component architecture',
      level: 94,
      color: 'from-cyan-400 to-blue-500',
    },
    {
      icon: Globe,
      title: 'Next.js',
      description: 'SSR, SSG, API routes, and performance optimization',
      level: 85,
      color: 'from-gray-700 to-black',
    },
    {
      icon: Palette,
      title: 'Tailwind CSS',
      description: 'Utility-first CSS framework with custom design systems',
      level: 96,
      color: 'from-teal-400 to-blue-600',
    },
    {
      icon: Monitor,
      title: 'ShadCN/UI',
      description: 'Modern component library with customizable, accessible components',
      level: 90,
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Figma,
      title: 'Figma',
      description: 'Design systems, prototyping, and design-to-code workflows',
      level: 82,
      color: 'from-pink-500 to-rose-500',
    },
  ];

  const services = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Building responsive, performant web applications with modern frameworks and best practices.',
      features: ['React/Next.js Apps', 'TypeScript Implementation', 'Performance Optimization', 'SEO-Friendly Code'],
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Creating seamless experiences across all devices with responsive design principles.',
      features: ['Responsive Layouts', 'Touch-Friendly Interfaces', 'Progressive Web Apps', 'Cross-Browser Testing'],
    },
    {
      icon: Palette,
      title: 'UI/UX Implementation',
      description: 'Transforming designs into pixel-perfect, interactive user interfaces.',
      features: ['Design System Implementation', 'Animation & Micro-interactions', 'Accessibility Compliance', 'Component Libraries'],
    },
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Services & Skills
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Technologies and services I use to bring your ideas to life
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass p-8 rounded-2xl hover:glow-accent transition-all duration-500 tilt-3d group"
            >
              <div className="relative mb-6">
                <service.icon className="h-12 w-12 text-primary group-hover:animate-pulse transition-all" />
                <div className="absolute inset-0 bg-primary opacity-20 rounded-full blur-lg group-hover:opacity-40 transition-opacity" />
              </div>
              
              <h3 className="text-xl font-semibold mb-4 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted leading-relaxed mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full pulse-glow flex-shrink-0" />
                    <span className="text-sm text-muted">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Skills Grid */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-accent">
            Technical Expertise
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredSkill(index)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className={`glass p-6 rounded-xl hover:glow-primary transition-all duration-500 ${
                  hoveredSkill === index ? 'transform scale-105' : ''
                }`}>
                  {/* Icon */}
                  <div className="relative mb-4">
                    <skill.icon className="h-10 w-10 text-primary group-hover:animate-pulse transition-all mx-auto" />
                    <div className="absolute inset-0 bg-primary opacity-20 rounded-full blur-lg group-hover:opacity-40 transition-opacity" />
                  </div>

                  {/* Title */}
                  <h4 className="font-semibold text-center mb-2 group-hover:text-accent transition-colors">
                    {skill.title}
                  </h4>

                  {/* Description */}
                  <p className="text-xs text-muted text-center leading-relaxed mb-4">
                    {skill.description}
                  </p>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-mono text-accent">Proficiency</span>
                      <span className="text-xs font-mono text-accent">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-card rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-2 bg-gradient-primary rounded-full transition-all duration-1000 ease-out ${
                          hoveredSkill === index ? 'animate-pulse-glow' : ''
                        }`}
                        style={{ 
                          width: hoveredSkill === index ? `${skill.level}%` : '0%',
                          transitionDelay: hoveredSkill === index ? '0ms' : '0ms'
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="glass p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-accent">
              Ready to start your project?
            </h3>
            <p className="text-muted mb-6">
              Let's work together to create something amazing that stands out from the crowd.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 glass px-8 py-4 rounded-lg hover:glow-intense transition-all font-semibold group"
            >
              <Zap className="h-5 w-5 group-hover:animate-pulse" />
              Let's Build Something Great
            </a>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-10 left-10 w-20 h-20 border border-primary/20 rounded-lg floating" />
      <div className="absolute bottom-10 right-10 w-16 h-16 border border-accent/20 rounded-full floating" style={{ animationDelay: '1s' }} />
    </section>
  );
};

export default Services;