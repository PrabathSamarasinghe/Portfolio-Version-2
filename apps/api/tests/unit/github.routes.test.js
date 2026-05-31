import { describe, it, expect } from '@jest/globals';
import githubRoutes from '../../routes/github.routes.js';

describe('GitHub Routes - Unit Tests', () => {
  it('should export a router', () => {
    expect(githubRoutes).toBeDefined();
  });

  it('should be an Express router', () => {
    // Check if it has router-like methods
    expect(typeof githubRoutes.get).toBe('function');
    expect(typeof githubRoutes.post).toBe('function');
  });

  it('should have routing methods available', () => {
    expect(githubRoutes.get).toBeDefined();
    expect(githubRoutes.post).toBeDefined();
    expect(githubRoutes.use).toBeDefined();
  });
});
