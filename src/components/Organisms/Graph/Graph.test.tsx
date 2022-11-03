import { render, screen } from '@testing-library/react';
import Graph from './Graph';

test('renders graph', () => {
  render(<Graph />);
  // TODO: Mock SWR and create test.

  // const exampleInput = screen.getByText('Greta');
  // expect(exampleInput).toBeInTheDocument();
});
