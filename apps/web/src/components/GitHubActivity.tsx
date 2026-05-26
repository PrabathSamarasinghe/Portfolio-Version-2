import { Github, GitCommitVertical as GitCommit, Star, FolderGit2, Flame } from 'lucide-react';
import { githubStats } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useAnimations';
import { GitHubActivityConsts } from '../constants/constants';

export default function GitHubActivity() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="github" className="py-24 relative" style={{ backgroundColor: 'var(--color-primary-light)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="section-heading" ref={ref}>
          <h2>
            <span className="section-number">06.</span>
            {GitHubActivityConsts.githubActivity}
          </h2>
        </div>

        <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
          {/* Stats cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { icon: FolderGit2, label: 'Repositories', value: githubStats.totalRepos },
              { icon: Star, label: 'Total Stars', value: githubStats.totalStars.toLocaleString() },
              { icon: GitCommit, label: 'Contributions', value: githubStats.totalContributions.toLocaleString() },
              { icon: Flame, label: 'Day Streak', value: githubStats.streak },
            ].map(stat => (
              <div key={stat.label} className="glass-card p-5 text-center">
                <stat.icon size={24} className="text-accent mx-auto mb-2" />
                <p className="text-2xl font-bold text-highlight">{stat.value}</p>
                <p className="text-secondary text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contribution graph */}
            <div className="lg:col-span-2 glass-card p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-highlight flex items-center gap-2">
                  <Github size={18} className="text-accent" />
                  {GitHubActivityConsts.contributionGraph}
                </h3>
                <span className="text-xs text-secondary font-mono">{GitHubActivityConsts.last12Months}</span>
              </div>
              <div className="overflow-x-auto pb-2">
                <div className="flex gap-[3px] min-w-[720px]">
                  {githubStats.contributionData.map((week, wi) => (
                    <div key={wi} className="flex flex-col gap-[3px]">
                      {week.map((day, di) => (
                        <div
                          key={di}
                          className="w-[12px] h-[12px] rounded-sm transition-colors duration-300"
                          style={{
                            backgroundColor: GitHubActivityConsts.contributionColors[day],
                            transitionDelay: `${(wi * 7 + di) * 2}ms`,
                          }}
                          title={`${day} contributions`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2 mt-3 text-xs text-secondary">
                <span>{GitHubActivityConsts.less}</span>
                {GitHubActivityConsts.contributionColors.map((color, i) => (
                  <div key={i} className="w-[12px] h-[12px] rounded-sm" style={{ backgroundColor: color }} />
                ))}
                <span>{GitHubActivityConsts.more}</span>
              </div>
            </div>

            {/* Language distribution */}
            <div className="glass-card p-6">
              <h3 className="font-semibold text-highlight mb-4">{GitHubActivityConsts.topLanguages}</h3>
              <div className="space-y-4">
                {githubStats.topLanguages.map(lang => (
                  <div key={lang.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-highlight">{lang.name}</span>
                      <span className="font-mono text-accent text-xs">{lang.percentage}%</span>
                    </div>
                    <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--color-border)' }}>
                      <div
                        className="h-full rounded-full transition-all duration-1000"
                        style={{
                          width: isVisible ? `${lang.percentage}%` : '0%',
                          background: 'linear-gradient(90deg, var(--color-accent), var(--color-accent-blue))',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* GitHub profile link */}
              <a
                href={`https://github.com/${githubStats.username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center mt-6 text-sm"
              >
                <Github size={16} />
                {GitHubActivityConsts.viewProfile}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
