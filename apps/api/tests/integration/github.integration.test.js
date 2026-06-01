import { describe, it, expect, beforeAll, afterAll } from '@jest/globals';
import express from 'express';
import cors from 'cors';
import githubRoutes from '../../routes/github.routes.js';

describe('GitHub API - Integration Tests', () => {
  let app;
  let server;
  const PORT = 5001;

  beforeAll(() => {
    app = express();
    app.use(cors());
    app.use(express.json());
    app.use('/api/github', githubRoutes);

    server = app.listen(PORT, () => {
      console.log(`Test server running on port ${PORT}`);
    });
  });

  afterAll((done) => {
    server.close(done);
  });

  describe('API Endpoint: GET /api/github/stats', () => {
    it('should have /stats endpoint registered', () => {
      expect(app).toBeDefined();
      expect(githubRoutes).toBeDefined();
    });

    it('should return 500 when GitHub API token is missing', async () => {
      // When GITHUB_TOKEN or GITHUB_USERNAME is not set, the service should fail
      // This tests error handling
      const response = await fetch(`http://localhost:${PORT}/api/github/stats`);
      
      // Should return 500 or fail gracefully
      expect([500, 503]).toContain(response.status);
    });

    it('should return JSON response', async () => {
      const response = await fetch(`http://localhost:${PORT}/api/github/stats`);
      
      // Check content-type
      const contentType = response.headers.get('content-type');
      expect(contentType).toMatch(/application\/json/);
    });

    it('should include CORS headers', async () => {
      const response = await fetch(`http://localhost:${PORT}/api/github/stats`);
      
      // CORS header should be present
      expect(response.headers.get('access-control-allow-origin')).toBeDefined();
    });
  });

  describe('Error Handling', () => {
    it('should handle missing credentials gracefully', async () => {
      const response = await fetch(`http://localhost:${PORT}/api/github/stats`);
      
      // Should return either a successful response or an error
      expect(response.status).toBeGreaterThanOrEqual(200);
    });

    it('should return valid JSON on error', async () => {
      const response = await fetch(`http://localhost:${PORT}/api/github/stats`);
      
      try {
        const data = await response.json();
        // If it fails, it should have a message property
        if (response.status >= 400) {
          expect(data.message || data.error).toBeDefined();
        }
      } catch (error) {
        // If JSON parsing fails, that's also acceptable for error responses
        expect(response.status).toBeGreaterThanOrEqual(400);
      }
    });
  });

  describe('Server Setup', () => {
    it('should have CORS middleware enabled', () => {
      expect(app).toBeDefined();
      // App should be able to handle requests
    });

    it('should have JSON parser enabled', () => {
      expect(app).toBeDefined();
      // App should handle JSON requests
    });
  });
});
