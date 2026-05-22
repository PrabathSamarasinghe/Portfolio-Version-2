import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from '../../components/Hero';
import { personalInfo } from '../../data/portfolio';

describe('Hero component', () => {
  test('renders name, tagline and social links', () => {
    render(<Hero />);

    // Name and tagline
    expect(screen.getByText(personalInfo.firstName)).toBeInTheDocument();
    expect(screen.getByText(personalInfo.tagline)).toBeInTheDocument();

    // Social links
    const github = screen.getByLabelText('GitHub');
    expect(github).toHaveAttribute('href', personalInfo.github);

    const linkedin = screen.getByLabelText('LinkedIn');
    expect(linkedin).toHaveAttribute('href', personalInfo.linkedin);

    const leetcode = screen.getByLabelText('LeetCode');
    expect(leetcode).toHaveAttribute('href', personalInfo.leetcode);
  });
});
