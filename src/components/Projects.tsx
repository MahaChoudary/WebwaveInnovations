import React, { useState } from 'react';
import { ExternalLink, Github, Code, Smartphone, Globe } from 'lucide-react';
import ecommerceImage from '../assets/project-ecommerce.jpg';
import aiDashboardImage from '../assets/project-ai-dashboard.jpg';
import socialAppImage from '../assets/project-social-app.jpg';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce platform built with Next.js, featuring real-time inventory, payment processing, and admin dashboard.',
      image: ecommerceImage,
      tech: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Full-Stack',
      features: ['Real-time inventory', 'Payment processing', 'Admin dashboard', 'Mobile responsive'],
    },
    {
      title: 'AI Dashboard',
      description: 'An intelligent analytics dashboard with machine learning insights, data visualization, and predictive analytics.',
      image: aiDashboardImage,
      tech: ['React', 'D3.js', 'Python', 'TensorFlow', 'FastAPI'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Data Visualization',
      features: ['ML insights', 'Interactive charts', 'Real-time data', 'Predictive analytics'],
    },
    {
      title: 'Social Media App',
      description: 'A social networking platform with real-time chat, media sharing, and advanced privacy controls.',
      image: socialAppImage,
      tech: ['React Native', 'GraphQL', 'Node.js', 'MongoDB', 'Socket.io'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Mobile App',
      features: ['Real-time chat', 'Media sharing', 'Privacy controls', 'Cross-platform'],
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
                      className="w-full h-64 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
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