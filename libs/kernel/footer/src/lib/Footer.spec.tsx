import { render } from '@testing-library/react';

import Footer from './Footer';

describe('Footer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Footer />);
    expect(baseElement).toBeTruthy();
  });

  it('should specify my username in the footer', () => {
    const { getByText } = render(<Footer />);
    expect(getByText(/maxence-lefebvre/i)).toBeTruthy();
  });
});
