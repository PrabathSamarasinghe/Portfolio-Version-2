import { describe, it, expect, beforeEach, afterEach, jest } from '@jest/globals';
import * as githubService from '../../services/github.service.js';

// Mock fetch globally
global.fetch = jest.fn();

describe('GitHub Service - Unit Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    process.env.GITHUB_USERNAME = 'testuser';
    process.env.GITHUB_TOKEN = 'test-token-123';
  });

  afterEach(() => {
    delete process.env.GITHUB_USERNAME;
    delete process.env.GITHUB_TOKEN;
  });

  describe('getGithubStats', () => {
    it('should fetch and parse GitHub stats successfully', async () => {
      const mockResponse = {
        data: {
          user: {
            login: 'testuser',
            name: 'Test User',
            avatarUrl: 'https://example.com/avatar.jpg',
            url: 'https://github.com/testuser',
            followers: { totalCount: 100 },
            repositories: {
              totalCount: 5,
              nodes: [
                {
                  name: 'test-repo',
                  description: 'A test repository',
                  url: 'https://github.com/testuser/test-repo',
                  homepageUrl: 'https://test-repo.com',
                  stargazerCount: 10,
                  forkCount: 5,
                  primaryLanguage: { name: 'JavaScript' },
                  languages: {
                    edges: [
                      { size: 1000, node: { name: 'JavaScript' } },
                      { size: 500, node: { name: 'CSS' } },
                    ],
                  },
                  repositoryTopics: {
                    nodes: [{ topic: { name: 'testing' } }],
                  },
                },
              ],
            },
            contributionsCollection: {
              contributionCalendar: {
                totalContributions: 500,
                weeks: [
                  {
                    contributionDays: [
                      { date: '2024-01-01', contributionCount: 5 },
                      { date: '2024-01-02', contributionCount: 3 },
                    ],
                  },
                ],
              },
            },
          },
        },
      };

      global.fetch.mockResolvedValueOnce({
        json: async () => mockResponse,
      });

      const result = await githubService.getGithubStats();

      expect(result).toBeDefined();
      expect(result.username).toBe('testuser');
      expect(result.name).toBe('Test User');
      expect(result.totalRepos).toBe(5);
      expect(result.totalStars).toBe(10);
      expect(result.totalContributions).toBe(500);
      expect(result.featuredProjects).toHaveLength(1);
      expect(result.topLanguages).toBeDefined();
      expect(result.contributionData).toBeDefined();
      expect(result.streak).toBeGreaterThanOrEqual(0);
    });

    it('should throw error when GitHub API returns errors', async () => {
      const mockResponse = {
        errors: [{ message: 'API Error' }],
      };

      global.fetch.mockResolvedValueOnce({
        json: async () => mockResponse,
      });

      await expect(githubService.getGithubStats()).rejects.toThrow();
    });

    it('should use correct GraphQL query and headers', async () => {
      const mockResponse = {
        data: {
          user: {
            login: 'testuser',
            name: 'Test User',
            avatarUrl: 'https://example.com/avatar.jpg',
            url: 'https://github.com/testuser',
            followers: { totalCount: 100 },
            repositories: { totalCount: 0, nodes: [] },
            contributionsCollection: {
              contributionCalendar: { totalContributions: 0, weeks: [] },
            },
          },
        },
      };

      global.fetch.mockResolvedValueOnce({
        json: async () => mockResponse,
      });

      await githubService.getGithubStats();

      expect(global.fetch).toHaveBeenCalledWith(
        'https://api.github.com/graphql',
        expect.objectContaining({
          method: 'POST',
          headers: expect.objectContaining({
            Authorization: 'Bearer test-token-123',
            'Content-Type': 'application/json',
          }),
        })
      );
    });

    it('should handle multiple repositories correctly', async () => {
      const mockResponse = {
        data: {
          user: {
            login: 'testuser',
            name: 'Test User',
            avatarUrl: 'https://example.com/avatar.jpg',
            url: 'https://github.com/testuser',
            followers: { totalCount: 100 },
            repositories: {
              totalCount: 3,
              nodes: [
                {
                  name: 'repo1',
                  description: 'Repository 1',
                  url: 'https://github.com/testuser/repo1',
                  homepageUrl: '',
                  stargazerCount: 20,
                  forkCount: 5,
                  primaryLanguage: { name: 'JavaScript' },
                  languages: { edges: [{ size: 1000, node: { name: 'JavaScript' } }] },
                  repositoryTopics: { nodes: [] },
                },
                {
                  name: 'repo2',
                  description: 'Repository 2',
                  url: 'https://github.com/testuser/repo2',
                  homepageUrl: 'https://demo.com',
                  stargazerCount: 15,
                  forkCount: 3,
                  primaryLanguage: { name: 'TypeScript' },
                  languages: { edges: [{ size: 800, node: { name: 'TypeScript' } }] },
                  repositoryTopics: { nodes: [{ topic: { name: 'web' } }] },
                },
                {
                  name: 'repo3',
                  description: null,
                  url: 'https://github.com/testuser/repo3',
                  homepageUrl: null,
                  stargazerCount: 5,
                  forkCount: 1,
                  primaryLanguage: null,
                  languages: { edges: [{ size: 500, node: { name: 'Python' } }] },
                  repositoryTopics: { nodes: [] },
                },
              ],
            },
            contributionsCollection: {
              contributionCalendar: { totalContributions: 0, weeks: [] },
            },
          },
        },
      };

      global.fetch.mockResolvedValueOnce({
        json: async () => mockResponse,
      });

      const result = await githubService.getGithubStats();

      expect(result.totalStars).toBe(40); // 20 + 15 + 5
      expect(result.featuredProjects).toHaveLength(3);
      expect(result.featuredProjects[0].title).toBe('repo1');
      expect(result.featuredProjects[1].title).toBe('repo2');
      expect(result.featuredProjects[2].title).toBe('repo3');
      expect(result.featuredProjects[2].description).toBe('No description provided');
    });

    it('should calculate contribution streak correctly', async () => {
      const mockResponse = {
        data: {
          user: {
            login: 'testuser',
            name: 'Test User',
            avatarUrl: 'https://example.com/avatar.jpg',
            url: 'https://github.com/testuser',
            followers: { totalCount: 100 },
            repositories: { totalCount: 0, nodes: [] },
            contributionsCollection: {
              contributionCalendar: {
                totalContributions: 5,
                weeks: [
                  {
                    contributionDays: [
                      { date: '2024-01-01', contributionCount: 1 },
                      { date: '2024-01-02', contributionCount: 2 },
                      { date: '2024-01-03', contributionCount: 3 },
                      { date: '2024-01-04', contributionCount: 0 },
                      { date: '2024-01-05', contributionCount: 1 },
                    ],
                  },
                ],
              },
            },
          },
        },
      };

      global.fetch.mockResolvedValueOnce({
        json: async () => mockResponse,
      });

      const result = await githubService.getGithubStats();

      // The streak should count from the most recent day (01-05 has 1 contribution)
      expect(result.streak).toBe(1);
    });

    it('should calculate top languages correctly', async () => {
      const mockResponse = {
        data: {
          user: {
            login: 'testuser',
            name: 'Test User',
            avatarUrl: 'https://example.com/avatar.jpg',
            url: 'https://github.com/testuser',
            followers: { totalCount: 100 },
            repositories: {
              totalCount: 2,
              nodes: [
                {
                  name: 'repo1',
                  description: 'Repo 1',
                  url: 'https://github.com/testuser/repo1',
                  homepageUrl: '',
                  stargazerCount: 0,
                  forkCount: 0,
                  primaryLanguage: null,
                  languages: {
                    edges: [
                      { size: 6000, node: { name: 'JavaScript' } },
                      { size: 2000, node: { name: 'CSS' } },
                    ],
                  },
                  repositoryTopics: { nodes: [] },
                },
                {
                  name: 'repo2',
                  description: 'Repo 2',
                  url: 'https://github.com/testuser/repo2',
                  homepageUrl: '',
                  stargazerCount: 0,
                  forkCount: 0,
                  primaryLanguage: null,
                  languages: {
                    edges: [
                      { size: 4000, node: { name: 'JavaScript' } },
                      { size: 3000, node: { name: 'Python' } },
                    ],
                  },
                  repositoryTopics: { nodes: [] },
                },
              ],
            },
            contributionsCollection: {
              contributionCalendar: { totalContributions: 0, weeks: [] },
            },
          },
        },
      };

      global.fetch.mockResolvedValueOnce({
        json: async () => mockResponse,
      });

      const result = await githubService.getGithubStats();

      expect(result.topLanguages).toHaveLength(3);
      expect(result.topLanguages[0].name).toBe('JavaScript');
      expect(result.topLanguages[0].percentage).toBe(67); // 10000/15000
      expect(result.topLanguages[1].name).toBe('Python');
      expect(result.topLanguages[2].name).toBe('CSS');
    });
  });
});
