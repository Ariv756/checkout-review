import { fireEvent, render, screen } from '@testing-library/react';
import Filters from './Filters';

test('calls callback when ASC filter is clicked', () => {
    const handleFilter = jest.fn()

    render(<Filters getButtonEvent={handleFilter} />);

    fireEvent.click(screen.getByTestId('filter-ASC'));
      
    expect(handleFilter).toHaveBeenCalledTimes(1);
});

test('calls callback when number 1 Button is clicked', () => {
    const handleFilter = jest.fn()

    render(<Filters getButtonEvent={handleFilter} />);

    fireEvent.click(screen.getByTestId('filter-1'));
      
    expect(handleFilter).toHaveBeenCalledTimes(1);
});
