import { render, screen } from '@/test-utils';
import { Component } from './Test';

describe('Component component', () => {
  it('has correct Next.js theming section link', () => {
    render(<Component />);
    expect(screen.getByText('this guide')).toHaveAttribute(
      'href',
      'https://mantine.dev/guides/next/'
    );
  });
});
