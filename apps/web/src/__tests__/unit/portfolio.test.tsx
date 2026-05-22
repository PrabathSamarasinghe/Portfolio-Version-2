import { personalInfo, projects, githubStats } from '../../data/portfolio';

describe('portfolio data', () => {
  test('personalInfo has required fields', () => {
    expect(personalInfo).toHaveProperty('name');
    expect(personalInfo).toHaveProperty('firstName');
    expect(personalInfo).toHaveProperty('github');
  });

  test('projects array is populated and each project has title and description', () => {
    expect(Array.isArray(projects)).toBe(true);
    expect(projects.length).toBeGreaterThan(0);
    projects.forEach(p => {
      expect(p).toHaveProperty('title');
      expect(p).toHaveProperty('description');
    });
  });

  test('githubStats contribution data has 52 weeks of 7 days', () => {
    const data = githubStats.contributionData;
    expect(Array.isArray(data)).toBe(true);
    expect(data.length).toBe(52);
    data.forEach(week => {
      expect(Array.isArray(week)).toBe(true);
      expect(week.length).toBe(7);
    });
  });
});
