import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const skillGroups = [
  {
    title: '🔹 Frontend & UI Engineering',
    subtitle: '(Perfect match with your strength)',
    items: [
      { name: 'HTML5 & Semantic Markup', level: 95 },
      { name: 'CSS3 / Modern Layouts (Flexbox, Grid)', level: 92 },
      { name: 'Responsive Design & Accessibility (a11y)', level: 85 },
      { name: 'UI/UX Implementation (Design → Code)', level: 85 },
      { name: 'Framer Motion / UI Animations', level: 75 },
    ],
  },
  {
    title: '🔹 Backend & Full-Stack Skills',
    subtitle: '(Keep percentages realistic, not inflated)',
    items: [
      { name: 'RESTful API Development', level: 70 },
      { name: 'Express.js', level: 65 },
      { name: 'ASP.NET Core (MVC / APIs)', level: 60 },
      { name: 'Authentication & Authorization (JWT, Roles)', level: 65 },
      { name: 'Database Design (SQL basics)', level: 65 },
    ],
  },
  {
    title: '🔹 AI / Engineering Foundations',
    subtitle: '(Enough to justify AI projects without overclaiming)',
    items: [
      { name: 'API-based AI Integration (LLMs, AI services)', level: 70 },
      { name: 'Data Handling & Preprocessing', level: 65 },
      { name: 'Prompt Engineering', level: 75 },
      { name: 'AI-powered Web Features', level: 65 },
    ],
  },
  {
    title: '🔹 Tools & Professional Workflow',
    subtitle: '(Recruiters LOVE this)',
    items: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'VS Code', level: 90 },
      { name: 'Agile / Project-Based Development', level: 75 },
      { name: 'Debugging & Performance Optimization', level: 80 },
      { name: 'Deployment (Vercel, Render)', level: 70 },
    ],
  },
];

const Skills = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <section id="skills" className="pt-28 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-accent font-mono">Capabilities</p>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-3">Skill Matrix</h1>
            <p className="text-muted max-w-2xl mx-auto">
              Depth where it matters, breadth to ship end-to-end, and realistic percentages grounded in hands-on work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillGroups.map((group) => (
              <div key={group.title} className="glass p-6 rounded-xl space-y-4 hover:glow-accent transition-all">
                <div>
                  <p className="font-semibold text-lg">{group.title}</p>
                  {group.subtitle && (
                    <p className="text-sm text-muted">{group.subtitle}</p>
                  )}
                </div>
                <div className="space-y-3">
                  {group.items.map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex justify-between items-center">
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
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Skills;
