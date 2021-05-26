import * as React from 'react';
import { cleanup, screen, render } from '@testing-library/react';
import HtsSummaryPage from '../hts/summary-page/hts-summary-page';

afterEach(cleanup);

it('Test HTS Summary Page Is loaded', () => {
  render(<HtsSummaryPage />);
  const summaryElement = screen.getByTestId('summary-1');
  expect(summaryElement).toBeInTheDocument();
});
