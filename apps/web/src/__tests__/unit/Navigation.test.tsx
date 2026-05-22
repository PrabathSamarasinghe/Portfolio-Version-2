import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navigation from '../../components/Navigation';
import { ThemeProvider } from '../../context/ThemeContext';

describe('Navigation component', () => {
  test('toggles theme correctly', () => {
    render(
      <ThemeProvider>
        <Navigation />
      </ThemeProvider>
    );

    const toggleThemeBtn = screen.getByLabelText('Toggle theme');
    // initial theme set by ThemeProvider defaults to 'dark' in the test environment
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');

    fireEvent.click(toggleThemeBtn);
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');

    fireEvent.click(toggleThemeBtn);
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });

  test('toggles mobile menu correctly', () => {
    render(
      <ThemeProvider>
        <Navigation />
      </ThemeProvider>
    );

    const toggleMenuBtn = screen.getByLabelText('Toggle menu');
    fireEvent.click(toggleMenuBtn);

    // Mobile menu should render links - get all and verify at least one exists
    const aboutLinks = screen.getAllByText('About');
    expect(aboutLinks.length).toBeGreaterThan(0);

    // Find and click the Close menu button
    const closeBtn = screen.getByLabelText('Close menu');
    fireEvent.click(closeBtn);
    
    // After closing, verify document body overflow is reset
    expect(document.body.style.overflow).toBe('');
  });

  test('renders logo and navigation links', () => {
    render(
      <ThemeProvider>
        <Navigation />
      </ThemeProvider>
    );

    // Check logo is rendered
    expect(screen.getByText('alex.dev')).toBeInTheDocument();

    // Check nav links exist
    const aboutLink = screen.getAllByText('About');
    expect(aboutLink.length).toBeGreaterThan(0);
  });
});
