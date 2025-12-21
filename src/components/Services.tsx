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
  Layers,
  Shield,
  Gauge,
  Workflow,
  GitBranch,
} from 'lucide-react';

const Services = () => {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  const skills = [
    {
      icon: Layers,
      title: 'Frontend Architecture & UI Engineering',
      description: 'Building scalable, maintainable, and performance-driven user interfaces for production-grade applications.',
      level: 95,
      color: 'from-cyan-400 to-blue-500',
    },
    {
      icon: Globe,
      title: 'React & Next.js Ecosystem',
      description: 'Developing enterprise-ready applications using React, Next.js (SSR/SSG), and modern rendering strategies.',
      level: 92,
      color: 'from-indigo-500 to-sky-500',
    },
    {
      icon: Code,
      title: 'TypeScript-First Development',
      description: 'Designing robust systems with strong typing, interfaces, generics, and predictable application behavior.',
      level: 90,
      color: 'from-blue-500 to-cyan-400',
    },
    {
      icon: Database,
      title: 'Backend API Engineering',
      description: 'Developing secure and scalable REST APIs, handling business logic, authentication, and integrations.',
      level: 70,
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: Database,
      title: 'Database Design & Data Modeling',
      description: 'Designing relational schemas, managing queries, and ensuring data consistency and integrity.',
      level: 68,
      color: 'from-amber-500 to-orange-500',
    },
    {
      icon: Zap,
      title: 'AI Integration & Intelligent Systems',
      description: 'Embedding AI capabilities into applications using API-based models for automation and insights.',
      level: 72,
      color: 'from-fuchsia-500 to-purple-500',
    },
    {
      icon: Shield,
      title: 'Security & Access Control',
      description: 'Implementing authentication, role-based access control, and secure data handling practices.',
      level: 70,
      color: 'from-rose-500 to-red-500',
    },
    {
      icon: Gauge,
      title: 'Performance Optimization & Scalability',
      description: 'Optimizing rendering, APIs, and database interactions for speed, reliability, and growth.',
      level: 78,
      color: 'from-lime-400 to-emerald-500',
    },
    {
      icon: Smartphone,
      title: 'Responsive & Cross-Platform Systems',
      description: 'Ensuring consistent behavior and usability across devices, browsers, and screen sizes.',
      level: 90,
      color: 'from-cyan-500 to-sky-400',
    },
    {
      icon: Monitor,
      title: 'SEO & Production Readiness',
      description: 'Building SEO-friendly, indexable, and production-ready web applications.',
      level: 82,
      color: 'from-slate-500 to-gray-700',
    },
    {
      icon: Workflow,
      title: 'System Integration & SaaS Architecture',
      description: 'Connecting multiple services, APIs, and modules into a cohesive SaaS platform.',
      level: 75,
      color: 'from-teal-500 to-cyan-500',
    },
    {
      icon: GitBranch,
      title: 'Professional Development Workflow',
      description: 'Using Git, structured workflows, debugging strategies, and deployment pipelines for real-world teams.',
      level: 85,
      color: 'from-purple-500 to-indigo-500',
    },
  ];

  const services = [
    {
      icon: Layers,
      title: 'Full-Stack Application Engineering',
      description: 'Designing and building scalable, secure, and high-performance web applications by combining modern frontend frameworks with robust backend systems.',
      features: [
        'React / Next.js application architecture',
        'TypeScript-driven development',
        'Backend API integration & logic',
        'Performance optimization & scalability',
        'Secure authentication & authorization',
      ],
    },
    {
      icon: Zap,
      title: 'AI-Powered Feature Development',
      description: 'Integrating artificial intelligence into real-world applications to deliver intelligent, context-aware, and automation-driven user experiences.',
      features: [
        'AI-driven chat & recommendation systems',
        'Document analysis & intelligent search',
        'API-based AI / LLM integration',
        'Prompt engineering & workflow design',
        'Data-aware UI experiences',
      ],
    },
    {
      icon: Globe,
      title: 'Responsive & Cross-Platform Systems',
      description: 'Creating seamless, device-agnostic experiences with mobile-first design principles and consistent behavior across platforms.',
      features: [
        'Responsive layouts & adaptive UI',
        'Cross-browser & cross-device testing',
        'Progressive Web App foundations',
        'Performance-optimized rendering',
        'SEO-friendly application structure',
      ],
    },
    {
      icon: Palette,
      title: 'UI/UX & System Integration',
      description: 'Transforming complex system logic and designs into intuitive, accessible, and production-ready user interfaces.',
      features: [
        'Design-to-code implementation',
        'Component-driven architecture',
        'Animation & micro-interactions',
        'Accessibility & usability compliance',
        'Scalable design system integration',
      ],
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
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