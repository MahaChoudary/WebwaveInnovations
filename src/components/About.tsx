import React, { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, Code, Award, Users, Zap } from 'lucide-react';

const About = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const timelineRef = useRef<HTMLDivElement>(null);

  const timelineItems = [
    {
      year: '2024',
      title: 'Senior Frontend Developer',
      company: 'TechCorp Inc.',
      description: 'Leading frontend development for enterprise applications, mentoring junior developers.',
      icon: Award,
    },
    {
      year: '2022',
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      description: 'Built responsive web applications using React, TypeScript, and modern CSS frameworks.',
      icon: Code,
    },
    {
      year: '2021',
      title: 'Junior Developer',
      company: 'WebAgency',
      description: 'Started my journey in web development, learning modern JavaScript frameworks.',
      icon: Zap,
    },
    {
      year: '2020',
      title: 'Computer Science Graduate',
      company: 'University',
      description: 'Graduated with honors, specializing in software engineering and web technologies.',
      icon: Users,
    },
  ];

  const skills = [
    { name: 'React', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'Next.js', level: 85 },
    { name: 'Tailwind CSS', level: 92 },
    { name: 'Node.js', level: 80 },
    { name: 'GraphQL', level: 75 },
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
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
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
                  Hello! I'm Alex, a passionate frontend developer based in San Francisco. 
                  My journey into web development started during my computer science studies, 
                  where I discovered my love for creating beautiful, functional user interfaces.
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
                  { icon: Calendar, label: '4+ Years Experience', value: '50+ Projects' },
                  { icon: MapPin, label: 'San Francisco, CA', value: 'Remote Ready' },
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

          {/* Timeline & Skills */}
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

            {/* Skills */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-accent">Technical Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="glass p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-accent">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-card rounded-full h-2 overflow-hidden">
                      <div
                        className="h-2 bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
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