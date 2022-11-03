import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Form from './Form';

test('renders name input', () => {
  render(<Form />);
  const nameLabel = screen.getByLabelText(/Name/i);
  expect(nameLabel).toBeInTheDocument();
});

test('dont submit if data is missing', () => {
  const mockSetState = jest.fn();
  const mockUseState: any = (useState: any) => [useState, mockSetState];

  const result: unknown = async () => await Promise.resolve('hello');
  const fetchMock = jest.spyOn(global, 'fetch').mockImplementation(
    async () => await Promise.resolve(result) as Promise<Response>
  );

  jest.spyOn(React, 'useState').mockImplementation(mockUseState);

  render(<Form />);

  fireEvent.click(screen.getByTestId('submit'))

  expect(fetchMock).toBeCalledTimes(0);
});
