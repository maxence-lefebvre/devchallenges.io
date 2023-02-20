import { render } from '@testing-library/react';

import ImageUploaderCard from './ImageUploaderCard';
import { beforeEach } from 'vitest';

describe('FeaturesImageUploaderCard', () => {
  let baseElement, getByText;

  beforeEach(() => {
    const result = ({ getByText, baseElement } = render(<ImageUploaderCard />));
    baseElement = result.baseElement;
    getByText = result.getByText;
  });

  it('should render successfully', () => {
    expect(baseElement).toBeTruthy();
  });

  it('should invite to upload an image', () => {
    expect(getByText(/Upload your image/i)).toBeTruthy();
  });

  it('should limit possible uploads', () => {
    expect(getByText(/File should be Jpeg, Png,.../i)).toBeTruthy();
  });
});
