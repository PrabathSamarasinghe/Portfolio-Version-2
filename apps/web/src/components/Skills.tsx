import { useState } from 'react';
import { skills } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useAnimations';
import { SkillsConsts } from '../constants/constants';


type CategoryKey = typeof SkillsConsts.categories[number]['key'];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('languages');
  const { ref, isVisible } = useScrollAnimation();

  const currentSkills = skills[activeCategory as keyof typeof skills];

  return (
    <section id="skills" className="py-24 relative" style={{ backgroundColor: 'var(--color-primary-light)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="section-heading" ref={ref}>
          <h2>
            <span className="section-number">02.</span>
            {SkillsConsts.technicalSkills}
          </h2>
        </div>

        <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
          {/* Category tabs */}
          <div className="flex flex-wrap gap-3 mb-12">
            {SkillsConsts.categories.map(cat => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat.key
                    ? 'bg-accent/10 text-accent border border-accent'
                    : 'bg-surface text-secondary border border-theme hover:text-accent hover:border-accent/50'
                }`}
              >
                <span className="font-mono text-xs">{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>

          {/* Skills grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="glass-card p-5 group"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium text-highlight group-hover:text-accent transition-colors">
                    {skill.name}
                  </span>
                  <span className="font-mono text-xs text-accent">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--color-border)' }}>
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: isVisible ? `${skill.level}%` : '0%',
                      background: 'linear-gradient(90deg, var(--color-accent), var(--color-accent-blue))',
                      transitionDelay: `${index * 80 + 200}ms`,
                    }}
                  />
                </div>
                <div className="mt-2 text-xs text-secondary">
                  {skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Advanced' : skill.level >= 70 ? 'Proficient' : 'Intermediate'}
                </div>
              </div>
            ))}
          </div>

          {/* All skills overview */}
          <div className="mt-16 glass-card p-8">
            <h3 className="text-lg font-semibold text-highlight mb-6">{SkillsConsts.techStackOverview}</h3>
            <div className="flex flex-wrap gap-2">
              {[...skills.languages, ...skills.frontend, ...skills.backend, ...skills.databases, ...skills.tools].map((skill, i) => (
                <span key={`${skill.name}-${i}`} className="skill-badge">
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
