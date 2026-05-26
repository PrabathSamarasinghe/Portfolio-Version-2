import { Github, ExternalLink, ChevronRight } from 'lucide-react';
import { projects } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useAnimations';
import { ProjectConsts } from '../constants/constants';

export default function Projects() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="section-heading" ref={ref}>
          <h2>
            <span className="section-number">03.</span>
            {ProjectConsts.featuredProject}s
          </h2>
        </div>

        <div className={`space-y-16 fade-in ${isVisible ? 'visible' : ''}`}>
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:direction-rtl' : ''
              }`}
            >
              {/* Project image */}
              <div className={`group relative overflow-hidden rounded-2xl border border-theme ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-lg bg-white/10 backdrop-blur-sm text-white hover:bg-accent hover:text-primary transition-all"
                        aria-label="View source"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-lg bg-white/10 backdrop-blur-sm text-white hover:bg-accent hover:text-primary transition-all"
                        aria-label="Live demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-mono font-medium bg-accent/20 text-accent backdrop-blur-sm border border-accent/30">
                  {project.category}
                </div>
              </div>

              {/* Project details */}
              <div className={`space-y-4 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <p className="font-mono text-accent text-sm">{ProjectConsts.featuredProject}</p>
                <h3 className="text-2xl font-bold text-highlight">{project.title}</h3>
                <div className="glass-card p-5">
                  <p className="text-secondary leading-relaxed">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="font-mono text-xs px-3 py-1 rounded-md bg-accent/5 text-accent border border-accent/20">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="space-y-2 pt-2">
                  {project.features.map(feature => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-secondary">
                      <ChevronRight size={14} className="text-accent shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                <p className="text-sm text-accent font-mono pt-2">
                  {project.highlights}
                </p>

                <div className="flex gap-4 pt-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-secondary hover:text-accent transition-colors"
                    >
                      <Github size={16} />
                      {ProjectConsts.sourceCode}
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-secondary hover:text-accent transition-colors"
                    >
                      <ExternalLink size={16} />
                      {ProjectConsts.liveDemo}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
