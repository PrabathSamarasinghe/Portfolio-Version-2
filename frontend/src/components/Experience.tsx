import { Briefcase, MapPin } from 'lucide-react';
import { experience } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useAnimations';

export default function Experience() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className="py-24 relative" style={{ backgroundColor: 'var(--color-primary-light)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="section-heading" ref={ref}>
          <h2>
            <span className="section-number">04.</span>
            Experience
          </h2>
        </div>

        <div className={`max-w-4xl mx-auto fade-in ${isVisible ? 'visible' : ''}`}>
          <div className="relative">
            <div className="timeline-line" />

            {experience.map((job, index) => (
              <div key={index} className="relative pl-16 pb-12 last:pb-0">
                <div className="timeline-dot" style={{ top: '4px' }} />

                <div className="glass-card p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-highlight">{job.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Briefcase size={16} className="text-accent" />
                        <span className="text-accent font-medium">{job.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1">
                      <span className="font-mono text-sm text-accent">{job.duration}</span>
                      <div className="flex items-center gap-1 text-secondary text-sm">
                        <MapPin size={14} />
                        {job.location}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {job.description.map((desc, i) => (
                      <li key={i} className="flex items-start gap-2 text-secondary text-sm leading-relaxed">
                        <span className="text-accent mt-1.5 shrink-0">&#9656;</span>
                        {desc}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {job.tech.map(t => (
                      <span key={t} className="font-mono text-xs px-2 py-1 rounded bg-accent/5 text-accent border border-accent/20">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
