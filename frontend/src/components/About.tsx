import { GraduationCap, Target, Lightbulb, Coffee } from 'lucide-react';
import { aboutData, personalInfo } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useAnimations';

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="section-heading" ref={ref}>
          <h2>
            <span className="section-number">01.</span>
            About Me
          </h2>
        </div>

        <div className={`grid lg:grid-cols-5 gap-12 fade-in ${isVisible ? 'visible' : ''}`}>
          {/* Bio */}
          <div className="lg:col-span-3 space-y-6">
            <p className="text-secondary leading-relaxed text-lg">
              {aboutData.bio}
            </p>
            <p className="text-secondary leading-relaxed text-lg">
              {aboutData.bio2}
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-surface border border-theme">
                <GraduationCap size={24} className="text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-highlight text-sm">{aboutData.education.degree}</p>
                  <p className="text-secondary text-sm">{aboutData.education.school} - {aboutData.education.year}</p>
                  <p className="text-accent text-xs font-mono mt-1">GPA: {aboutData.education.gpa}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-surface border border-theme">
                <Target size={24} className="text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-highlight text-sm">Problem Solver</p>
                  <p className="text-secondary text-sm">1,500+ LeetCode problems solved</p>
                  <p className="text-accent text-xs font-mono mt-1">Top 1% Global</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interests & Quick Facts */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-card p-6 space-y-4">
              <div className="flex items-center gap-2">
                <Lightbulb size={20} className="text-accent" />
                <h3 className="font-semibold text-highlight">Interests</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {aboutData.interests.map(interest => (
                  <span key={interest} className="skill-badge text-xs">
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card p-6 space-y-4">
              <div className="flex items-center gap-2">
                <Coffee size={20} className="text-accent" />
                <h3 className="font-semibold text-highlight">Quick Facts</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-secondary">Location</span>
                  <span className="text-highlight font-mono">{personalInfo.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary">Experience</span>
                  <span className="text-highlight font-mono">5+ Years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary">Availability</span>
                  <span className="text-accent font-mono">{personalInfo.availability}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary">Freelance</span>
                  <span className={`font-mono ${personalInfo.freelance ? 'text-accent' : 'text-secondary'}`}>
                    {personalInfo.freelance ? 'Available' : 'Unavailable'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
