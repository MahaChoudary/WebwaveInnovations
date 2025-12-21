import React, { useState, useEffect } from 'react';
import { Send, Mail, MapPin, Phone, Github, Linkedin, Twitter, Terminal, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [terminalOutput, setTerminalOutput] = useState<string[]>([
    '$ Initializing contact terminal...',
    '$ Ready to receive your message'
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch("http://localhost:5000/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (data.success) {
      setTerminalOutput(prev => [...prev, "$ Message sent successfully! ✓"]);
      setShowSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } else {
      setTerminalOutput(prev => [...prev, "$ Failed to send message ❌"]);
    }
  } catch (error) {
    console.error("Error:", error);
    setTerminalOutput(prev => [...prev, "$ Error: Could not send message"]);
  }

  setIsSubmitting(false);

  setTimeout(() => {
    setShowSuccess(false);
    setTerminalOutput([
      "$ Initializing contact terminal...",
      "$ Ready to receive your message",
    ]);
  }, 5000);
};

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'innovationswebwave@gmail.com',
      link: 'mailto:innovationswebwave@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+923311432480',
      link: 'tel:+923311432480'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Pakistan, Sialkot',
      link: '#'
    }
  ];

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/maheenhamidd/', label: 'LinkedIn' },
    
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Get In Touch
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Ready to start your next project? Let's build something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info & Social */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-accent">Let's Connect</h3>
              <p className="text-muted leading-relaxed mb-8">
                I'm always interested in hearing about new opportunities and interesting projects. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center gap-4 glass p-4 rounded-lg hover:glow-accent transition-all group"
                >
                  <div className="relative">
                    <info.icon className="h-6 w-6 text-primary group-hover:animate-pulse" />
                    <div className="absolute inset-0 bg-primary opacity-20 rounded-full blur-lg group-hover:opacity-40 transition-opacity" />
                  </div>
                  <div>
                    <p className="font-medium">{info.title}</p>
                    <p className="text-muted text-sm">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4 text-accent">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                     target="_blank"
                    rel="noopener noreferrer"
                    className="glass p-3 rounded-full hover:glow-primary transition-all group"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

            {/* Terminal Output */}
            <div className="glass p-6 rounded-lg font-mono text-sm">
              <div className="flex items-center gap-2 mb-4 text-accent">
                <Terminal className="h-4 w-4" />
                <span>contact_terminal</span>
              </div>
              <div className="space-y-1 min-h-[120px]">
                {terminalOutput.map((line, index) => (
                  <div key={index} className="text-muted">
                    {line}
                    {index === terminalOutput.length - 1 && !showSuccess && (
                      <span className="animate-pulse ml-1">|</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass p-8 rounded-2xl">
            <div className="flex items-center gap-2 mb-6">
              <Terminal className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-semibold text-accent">Send Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-medium mb-2 text-accent">
                  $ enter_name --required
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-card border border-primary/30 rounded-lg px-4 py-3 focus:border-primary focus:glow-primary transition-all outline-none font-mono placeholder:text-muted/50"
                  placeholder="Your full name..."
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium mb-2 text-accent">
                  $ enter_email --required
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-card border border-primary/30 rounded-lg px-4 py-3 focus:border-primary focus:glow-primary transition-all outline-none font-mono placeholder:text-muted/50"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-sm font-medium mb-2 text-accent">
                  $ enter_message --required
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full bg-card border border-primary/30 rounded-lg px-4 py-3 focus:border-primary focus:glow-primary transition-all outline-none font-mono placeholder:text-muted/50 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 glass py-4 rounded-lg hover:glow-intense transition-all font-semibold group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                    Processing...
                  </>
                ) : showSuccess ? (
                  <>
                    <CheckCircle className="h-5 w-5 text-accent" />
                    Message Sent Successfully!
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 group-hover:animate-pulse" />
                    &gt; Send Message
                  </>
                )}
              </button>
            </form>

            {/* Command Hint */}
          
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl floating" />
      <div className="absolute bottom-1/4 right-0 w-24 h-24 bg-accent/5 rounded-full blur-2xl floating" style={{ animationDelay: '1s' }} />
    </section>
  );
};

export default Contact;