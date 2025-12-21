import React, { useState } from 'react';
import { ExternalLink, Github, Code, Smartphone, Globe } from 'lucide-react';
import codingoImage from '../assets/codingo.png';
import wukalaGptImage from '../assets/wukalagpt.png';
import cafeImage from '../assets/cafe.png';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'Codingo — AI-Powered Learning Platform',
      description: 'An intelligent, gamified coding-education platform designed to provide structured learning paths, interactive challenges, and AI-assisted guidance for students and aspiring developers.',
      image: codingoImage,
      imageFit: 'contain' as const,
      roundedImage: true,
      tech: [
        'Frontend: Next.js, React, TypeScript, Tailwind CSS',
        'Backend: Node.js, RESTful APIs, Auth (JWT / Session-based)',
        'Database: PostgreSQL / MongoDB',
        'AI Integration: API-based models for guidance & recommendations',
        'Deployment: Vercel (or similar) + Git-based CI/CD',
      ],
      liveUrl: '#',
      githubUrl: '#',
      category: 'EdTech / AI',
      features: [
        'AI-guided coding roadmaps and learning paths',
        'Interactive coding challenges and progress tracking',
        'Gamified experience with achievements and milestones',
        'User authentication and role-based access',
        'Fully responsive, student-friendly interface',
      ],
    },
    {
      title: 'Wukala-GPT — AI-Powered Legal Intelligence Platform',
      description: 'An intelligent legal assistance platform offering AI-driven legal guidance, document understanding, and access to verified legal professionals within Pakistan’s legal ecosystem.',
      image: wukalaGptImage,
      imageFit: 'contain' as const,
      roundedImage: true,
      tech: ['React / Next.js', 'TypeScript', 'Tailwind CSS', 'API-based AI (LLMs)', 'Backend APIs (Node.js / ASP.NET Core)'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'LegalTech / AI',
      features: [
        'AI-powered legal Q&A and case guidance',
        'Legal document analysis and summarization',
        'Lawyer discovery with specialization filters',
        'Secure user authentication and role-based access',
        'Responsive, user-focused interface',
      ],
    },
    {
      title: "LaLa's Cafe — Digital Cafe Experience Platform",
      description:
        'A modern cafe website designed to showcase the brand, highlight the menu, promote events, and engage customers through a clean, user-friendly digital experience.',
      image: cafeImage,
      imageFit: 'contain' as const,
      roundedImage: true,
      tech: [
        'React / Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Modern UI animations',
        'Optimized deployment & hosting',
      ],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Digital Experience',
      features: [
        'Modern responsive UI for all devices',
        'Interactive menu showcase',
        'Event & Qawwali nights highlights',
        'Contact & location information',
        'Newsletter / launch updates section',
        'Fast loading and smooth navigation',
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Some things I've built with passion and dedication
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-500 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="glass rounded-2xl overflow-hidden tilt-3d hover:glow-accent transition-all duration-500">
                <div className="lg:flex items-center">
                  {/* Project Image */}
                  <div className="lg:w-1/2 relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`transition-transform duration-500 group-hover:scale-105 ${
                        project.roundedImage
                          ? 'w-64 h-64 lg:w-80 lg:h-80 mx-auto my-10 rounded-full border border-primary/20 bg-background/80 p-6 object-contain'
                          : 'w-full h-64 lg:h-80'
                      } ${
                        project.imageFit === 'contain'
                          ? 'object-contain bg-card'
                          : 'object-cover'
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-primary opacity-20 group-hover:opacity-10 transition-opacity"></div>
                    
                    {/* Floating Category Badge */}
                    <div className="absolute top-4 left-4 glass px-3 py-1 rounded-full text-sm font-medium text-accent">
                      {project.category}
                    </div>

                    {/* Hover Overlay */}
                    <div className={`absolute inset-0 bg-background/90 backdrop-blur-sm flex items-center justify-center gap-4 transition-all duration-300 ${
                      hoveredProject === index ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <a
                        href={project.liveUrl}
                        className="glass p-3 rounded-full hover:glow-primary transition-all group/btn"
                      >
                        <ExternalLink className="h-6 w-6 group-hover/btn:scale-110 transition-transform" />
                      </a>
                      <a
                        href={project.githubUrl}
                        className="glass p-3 rounded-full hover:glow-accent transition-all group/btn"
                      >
                        <Github className="h-6 w-6 group-hover/btn:scale-110 transition-transform" />
                      </a>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="lg:w-1/2 p-8 space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="text-sm font-semibold text-accent mb-3 uppercase tracking-wider">
                        Key Features
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full pulse-glow"></div>
                            <span className="text-sm text-muted">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="text-sm font-semibold text-accent mb-3 uppercase tracking-wider">
                        Technology Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 text-sm glass-border rounded-full hover:glow-accent transition-all cursor-default"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-4">
                      <a
                        href={project.liveUrl}
                        className="flex items-center gap-2 glass px-6 py-3 rounded-lg hover:glow-primary transition-all font-medium group/btn"
                      >
                        <Globe className="h-4 w-4 group-hover/btn:animate-pulse" />
                        View Live
                      </a>
                      <a
                        href={project.githubUrl}
                        className="flex items-center gap-2 border border-primary/50 px-6 py-3 rounded-lg hover:glow-accent transition-all font-medium hover:bg-primary/10"
                      >
                        <Code className="h-4 w-4" />
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects */}
        <div className="text-center mt-16">
          <a
            href="#"
            className="inline-flex items-center gap-2 glass px-8 py-4 rounded-lg hover:glow-intense transition-all font-semibold text-lg group"
          >
            <Github className="h-5 w-5 group-hover:animate-pulse" />
            View All Projects on GitHub
          </a>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl floating" />
      <div className="absolute bottom-1/4 left-0 w-24 h-24 bg-accent/5 rounded-full blur-2xl floating" style={{ animationDelay: '1s' }} />
    </section>
  );
};

export default Projects;