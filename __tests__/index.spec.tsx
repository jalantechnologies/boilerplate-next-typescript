import * as React from 'react';
import { mount } from 'enzyme';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

describe('Pages', () => {
  describe('Index', () => {
    it('should render without throwing an error', function () {
      render(<Home />);
      const main = screen.getByRole('main');
      expect(main).toBeInTheDocument();
    });
  });
});
