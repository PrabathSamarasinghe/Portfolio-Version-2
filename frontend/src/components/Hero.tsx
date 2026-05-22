import { useState, useEffect } from 'react';
import { Download, ArrowDown, Github, Linkedin, ExternalLink, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = personalInfo.titles[titleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === currentTitle) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setTitleIndex(prev => (prev + 1) % personalInfo.titles.length);
    } else {
      timeout = setTimeout(
        () => setDisplayText(prev =>
          isDeleting ? prev.slice(0, -1) : currentTitle.slice(0, prev.length + 1)
        ),
        isDeleting ? 50 : 100
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, var(--color-accent), transparent 70%)' }}
        />
        <div
          className="absolute bottom-1/4 -left-1/4 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, var(--color-accent-blue), transparent 70%)' }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(var(--color-accent) 1px, transparent 1px), linear-gradient(90deg, var(--color-accent) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="font-mono text-accent text-sm tracking-wider">
                &gt; hello_world
              </p>
              <h1 className="text-5xl md:text-7xl font-bold text-highlight leading-tight">
                Hi, I'm{' '}
                <span className="text-gradient">{personalInfo.firstName}</span>
              </h1>
              <div className="h-12 flex items-center">
                <h2 className="text-2xl md:text-3xl font-semibold text-secondary">
                  I'm a{' '}
                  <span className="text-accent font-mono">
                    {displayText}
                    <span className="inline-block w-0.5 h-7 bg-accent ml-1 animate-pulse" />
                  </span>
                </h2>
              </div>
            </div>

            <p className="text-lg text-secondary max-w-xl leading-relaxed">
              {personalInfo.tagline}
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn-filled">
                <Code2 size={18} />
                View Projects
              </a>
              <a href="#" className="btn-primary">
                <Download size={18} />
                Download CV
              </a>
              <a href="#contact" className="btn-primary">
                Contact Me
              </a>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-theme text-secondary hover:text-accent hover:border-accent transition-all"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-theme text-secondary hover:text-accent hover:border-accent transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-theme text-secondary hover:text-accent hover:border-accent transition-all"
                aria-label="LeetCode"
              >
                <ExternalLink size={20} />
              </a>
            </div>
          </div>

          {/* Right - Terminal code block */}
          <div className="hidden lg:block">
            <div className="terminal animate-float">
              <div className="terminal-header">
                <div className="terminal-dot" style={{ background: '#ff5f57' }} />
                <div className="terminal-dot" style={{ background: '#febc2e' }} />
                <div className="terminal-dot" style={{ background: '#28c840' }} />
                <span className="ml-3 text-xs text-gray-500">about.ts</span>
              </div>
              <div className="terminal-body">
                <div>
                  <span className="code-keyword">const</span>{' '}
                  <span className="code-variable">developer</span>{' '}
                  <span className="code-keyword">=</span>{' '}
                  <span>{'{'}</span>
                </div>
                <div className="ml-4">
                  <span className="code-variable">name</span>
                  <span>: </span>
                  <span className="code-string">"{personalInfo.name}"</span>,
                </div>
                <div className="ml-4">
                  <span className="code-variable">role</span>
                  <span>: </span>
                  <span className="code-string">"Full Stack Developer"</span>,
                </div>
                <div className="ml-4">
                  <span className="code-variable">skills</span>
                  <span>: </span>
                  <span>[</span>
                  <span className="code-string">"React"</span>,{' '}
                  <span className="code-string">"Node.js"</span>,{' '}
                  <span className="code-string">"Python"</span>,
                </div>
                <div className="ml-8">
                  <span className="code-string">"AWS"</span>,{' '}
                  <span className="code-string">"Docker"</span>],
                </div>
                <div className="ml-4">
                  <span className="code-variable">passion</span>
                  <span>: </span>
                  <span className="code-string">"Building scalable systems"</span>,
                </div>
                <div className="ml-4">
                  <span className="code-variable">available</span>
                  <span>: </span>
                  <span className="code-keyword">true</span>,
                </div>
                <div>{'}'}</div>
                <br />
                <div>
                  <span className="code-keyword">export default</span>{' '}
                  <span className="code-function">developer</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-secondary font-mono">scroll</span>
          <ArrowDown size={16} className="text-accent" />
        </div>
      </div>
    </section>
  );
}
