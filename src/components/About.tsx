import React, { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, Code, Award, Users, Zap } from 'lucide-react';

const About = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const timelineRef = useRef<HTMLDivElement>(null);

  const timelineItems = [
    {
      year: '2024 – Present (2025)',
      title: 'Senior Full-Stack & AI Engineer',
      company: 'LegalTech SaaS Project (Enterprise-Scale)',
      description:
        'Leading the end-to-end development of an AI-powered LegalTech SaaS platform with a focus on scalable architecture, secure systems, and intelligent automation. Responsible for full-stack development, AI/ML feature integration, performance optimization, and maintaining enterprise-grade engineering standards.',
      icon: Award,
    },
    {
      year: '2022 – 2024',
      title: 'Full-Stack Developer | AI/ML Engineer',
      company: 'SaaS & Web Solutions (Client & Product-Based Projects)',
      description:
        'Delivered 40+ client projects and SaaS-style products, managing complete front-end and back-end development lifecycles. Built scalable web applications, integrated APIs and databases, implemented AI-assisted features, and ensured production-ready performance and reliability.',
      icon: Code,
    },
    {
      year: '2021 – 2022',
      title: 'Junior Full-Stack Developer',
      company: 'WebWave Innovations',
      description:
        'Worked on multiple client projects by building responsive user interfaces, integrating APIs and backend services, and gaining hands-on experience with real-world development workflows and deployment practices.',
      icon: Zap,
    },

    
    {
      year: '2022 – 2025 (In Progress)',
      title: 'Bachelor of Computer Science (BSCS)',
      company: 'University of Sialkot',
      description:
        'Currently pursuing a Bachelor’s degree in Computer Science with a focus on software engineering, full-stack development, AI/ML concepts, and SaaS product design. Actively applying academic learning through real-world client projects and enterprise-level systems. Expected graduation: 2026.',
      icon: Users,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const timelineElements = timelineRef.current?.querySelectorAll('.timeline-item');
    timelineElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            About Me
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Passionate about creating digital experiences that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Story & Profile */}
          <div className="space-y-8">
            {/* Profile Image */}
            <div className="relative w-64 h-64 mx-auto lg:mx-0">
              <div className="relative w-full h-full rounded-full overflow-hidden glass">
                <img
                  src="profile.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-20"></div>
              </div>
              <div className="absolute inset-0 rounded-full border-2 border-primary animate-pulse-glow"></div>
            </div>

            {/* Story */}
            <div className="space-y-6">
              <div className="glass p-6 rounded-xl">
                <h3 className="text-2xl font-semibold mb-4 text-accent">My Journey</h3>
                <p className="text-muted leading-relaxed mb-4">
                  Hello! I’m Maheen Hamid, a Full-Stack & AI-focused Developer with a strong foundation in modern web technologies. My journey into development began during my computer science studies, where I discovered a deep interest in building clean, functional, and user-focused digital experiences.

I enjoy transforming complex ideas into simple, intuitive, and scalable solutions—whether it’s crafting responsive interfaces, designing backend logic, or integrating intelligent features into web applications. I’m continuously learning and experimenting with new technologies, improving performance, and working on real-world, project-driven solutions, especially in SaaS and AI-powered platforms.

Outside of coding, I enjoy exploring emerging tech trends, refining my problem-solving skills, and working on projects that challenge me to grow as an engineer.
                </p>
                <p className="text-muted leading-relaxed">
                  I enjoy turning complex problems into simple, beautiful, and intuitive solutions. 
                  When I'm not coding, you can find me exploring new technologies, contributing to 
                  open-source projects, or hiking in the beautiful California mountains.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Calendar, label: '1.5+ Years Experience', value: '35+ Projects' },
                  { icon: MapPin, label: 'Pakistan, Sialkot', value: 'Remote Ready' },
                ].map((stat, index) => (
                  <div key={index} className="glass p-4 rounded-lg text-center hover:glow-accent transition-all">
                    <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="font-semibold">{stat.label}</p>
                    <p className="text-sm text-muted">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-12">
            {/* Timeline */}
            <div ref={timelineRef} className="relative">
              <h3 className="text-2xl font-semibold mb-8 text-accent">Experience Timeline</h3>
              
              {/* Timeline Line */}
              <div className="absolute left-4 top-16 bottom-0 w-0.5 bg-gradient-primary opacity-50"></div>

              <div className="space-y-8">
                {timelineItems.map((item, index) => (
                  <div
                    key={index}
                    data-index={index}
                    className={`timeline-item relative pl-12 transition-all duration-700 ${
                      visibleItems.includes(index) ? 'animate-fade-in' : 'opacity-0 translate-x-4'
                    }`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-0 top-0 w-8 h-8 glass rounded-full flex items-center justify-center glow-primary">
                      <item.icon className="h-4 w-4 text-primary" />
                    </div>

                    <div className="glass p-4 rounded-lg hover:glow-accent transition-all">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-mono text-accent">{item.year}</span>
                        <span className="text-sm text-muted">•</span>
                        <span className="text-sm text-muted">{item.company}</span>
                      </div>
                      <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                      <p className="text-sm text-muted">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;