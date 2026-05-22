import React from 'react';
import { render, screen } from '@testing-library/react';

// Mock the scroll animation hook so the projects render as visible in tests
jest.mock('../../hooks/useAnimations', () => ({
  useScrollAnimation: () => ({ ref: { current: null }, isVisible: true }),
}));

import Projects from '../../components/Projects';
import { projects } from '../../data/portfolio';

describe('Projects component', () => {
  test('renders featured projects and links', () => {
    render(<Projects />);

    projects.forEach(p => {
      expect(screen.getByText(p.title)).toBeInTheDocument();
    });

    // verify that links for github/demo exist when provided
    projects.forEach(p => {
      if (p.github) {
        const found = screen.getAllByRole('link').some(a => a.getAttribute('href') === p.github);
        expect(found).toBe(true);
      }
      if (p.demo) {
        const foundDemo = screen.getAllByRole('link').some(a => a.getAttribute('href') === p.demo);
        expect(foundDemo).toBe(true);
      }
    });
  });
});
