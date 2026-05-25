import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Terminal } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useActiveSection } from '../hooks/useAnimations';
import { NavigationConsts } from '../constants/constants';

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const activeSection = useActiveSection(NavigationConsts.sectionIds);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3' : 'py-5'
      }`}
      style={{ backgroundColor: isScrolled ? undefined : 'transparent' }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 group">
          <Terminal size={24} className="text-accent" />
          <span className="font-mono text-lg font-bold text-highlight group-hover:text-accent transition-colors">
              { NavigationConsts.navTag }
          </span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {NavigationConsts.navLinks.map(link => {
            const sectionId = link.href.slice(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-accent bg-accent/10'
                    : 'text-secondary hover:text-accent hover:bg-accent/5'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-theme text-secondary hover:text-accent hover:border-accent transition-all"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href="#contact"
            className="hidden md:inline-flex btn-primary text-sm py-2 px-5"
          >
            {NavigationConsts.letsTalk}
          </a>

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden p-2 text-secondary hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileOpen && (
        <div className="md:hidden fixed inset-0 top-0 z-50" style={{ backgroundColor: 'var(--color-primary)' }}>
          <div className="flex items-center justify-between px-6 py-5">
            <a href="#hero" className="flex items-center gap-2">
              <Terminal size={24} className="text-accent" />
              <span className="font-mono text-lg font-bold text-highlight">{NavigationConsts.navTag}</span>
            </a>
            <button
              onClick={() => setIsMobileOpen(false)}
              className="p-2 text-secondary hover:text-accent transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col items-center gap-6 pt-20">
            {NavigationConsts.navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="text-2xl font-medium text-secondary hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileOpen(false)}
              className="btn-filled mt-4"
            >
              {NavigationConsts.letsTalk}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
