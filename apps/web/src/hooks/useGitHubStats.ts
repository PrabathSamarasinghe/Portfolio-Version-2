import { useEffect, useState } from 'react';

interface TopLanguage {
  name: string;
  percentage: number;
}

interface ContributionDay {
  date: string;
  contributionCount: number;
}

interface FeaturedProject {
  title: string;
  description: string;
  github: string;
  demo: string;
  tech: string[];
  stars: number;
  forks: number;
}

interface GitHubStats {
  username: string;
  name: string;
  avatar: string;
  profileUrl: string;
  totalRepos: number;
  totalStars: number;
  totalContributions: number;
  streak: number;
  topLanguages: TopLanguage[];
  contributionData: ContributionDay[][];
  featuredProjects: FeaturedProject[];
}

const DEFAULT_STATS: GitHubStats = {
  username: '',
  name: '',
  avatar: '',
  profileUrl: '',
  totalRepos: 0,
  totalStars: 0,
  totalContributions: 0,
  streak: 0,
  topLanguages: [],
  contributionData: [],
  featuredProjects: [],
};

const CACHE_KEY = 'github_stats_cache';
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

export const useGitHubStats = () => {
  const [githubStats, setGithubStats] = useState<GitHubStats>(() => {
    // Try to load from localStorage on mount
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const { data, timestamp } = JSON.parse(cached);
        if (Date.now() - timestamp < CACHE_DURATION) {
          return data;
        }
      }
    } catch (e) {
      console.error('Failed to load from cache:', e);
    }
    return DEFAULT_STATS;
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        setLoading(true);
        const apiUrl = import.meta.env.VITE_API_URL;
        const response = await fetch(`${apiUrl}/api/github/stats`);
        
        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Transform contribution data to match expected format
        if (data.contributionData) {
          data.contributionData = data.contributionData.map((week: Array<{date: string; count: number}>) =>
            week.map((day: {date: string; count: number}) => ({
              date: day.date,
              contributionCount: day.count,
            }))
          );
        }
        
        setGithubStats(data);
        
        // Cache the data
        try {
          localStorage.setItem(CACHE_KEY, JSON.stringify({
            data,
            timestamp: Date.now(),
          }));
        } catch (e) {
          console.error('Failed to cache data:', e);
        }
        
        setError(null);
      } catch (err) {
        console.error('Error fetching GitHub stats:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch GitHub stats');
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubStats();
  }, []);

  return { githubStats, loading, error };
};
