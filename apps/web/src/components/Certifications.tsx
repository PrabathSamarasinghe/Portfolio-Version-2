import { Award, Trophy, Mic, Star, BookOpen, Flag } from 'lucide-react';
import { certifications, achievements } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useAnimations';
import { CertificationsConsts } from '../constants/constants';

const iconMap = [Trophy, Mic, Star, BookOpen, Flag, Award];

export default function Certifications() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="section-heading" ref={ref}>
          <h2>
            <span className="section-number">05.</span>
            {CertificationsConsts.certificationAndAchievements}
          </h2>
        </div>

        <div className={`grid lg:grid-cols-2 gap-12 fade-in ${isVisible ? 'visible' : ''}`}>
          {/* Certifications */}
          <div>
            <h3 className="text-lg font-semibold text-highlight mb-6 flex items-center gap-2">
              <Award size={20} className="text-accent" />
              {CertificationsConsts.certifications}
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="glass-card p-5 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                    <span className="font-mono text-sm font-bold text-accent">{cert.badge}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-highlight text-sm truncate">{cert.title}</h4>
                    <p className="text-secondary text-xs mt-0.5">{cert.issuer}</p>
                  </div>
                  <span className="font-mono text-xs text-accent shrink-0">{cert.year}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-lg font-semibold text-highlight mb-6 flex items-center gap-2">
              <Trophy size={20} className="text-accent" />
              {CertificationsConsts.achievements}
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => {
                const Icon = iconMap[index % iconMap.length];
                return (
                  <div key={index} className="glass-card p-5 text-center">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-3">
                      <Icon size={18} className="text-accent" />
                    </div>
                    <h4 className="font-semibold text-accent text-sm">{achievement.title}</h4>
                    <p className="text-highlight text-xs font-medium mt-1">{achievement.event}</p>
                    <p className="text-secondary text-xs mt-1">{achievement.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
