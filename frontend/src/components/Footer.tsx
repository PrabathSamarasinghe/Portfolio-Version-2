import { Terminal, Github, Linkedin, Twitter, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="py-12 border-t border-theme" style={{ backgroundColor: 'var(--color-primary)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-3">
            <a href="#hero" className="flex items-center gap-2">
              <Terminal size={20} className="text-accent" />
              <span className="font-mono text-lg font-bold text-highlight">alex.dev</span>
            </a>
            <p className="text-secondary text-sm leading-relaxed max-w-xs">
              Building scalable, modern software with clean architecture and efficient performance.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-highlight text-sm mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {footerLinks.map(link => (
                <a key={link.href} href={link.href} className="text-secondary text-sm hover:text-accent transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Tech stack used */}
          <div>
            <h4 className="font-semibold text-highlight text-sm mb-4">Built With</h4>
            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Lucide'].map(tech => (
                <span key={tech} className="font-mono text-xs px-2 py-1 rounded bg-accent/5 text-accent border border-accent/20">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-theme flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-secondary text-sm">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-secondary text-sm flex items-center gap-1">
            Built with <Heart size={14} className="text-error" /> by {personalInfo.firstName}
          </p>
          <div className="flex gap-3">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent transition-colors" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent transition-colors" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href={personalInfo.twitter} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent transition-colors" aria-label="Twitter">
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
