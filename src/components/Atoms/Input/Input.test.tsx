import { render, screen } from '@testing-library/react';
import Input from './Input';

test('renders dummy input', () => {
    const dummyData = {
        name: 'input',
        label: 'DummyInput',
        type: 'input',
        inputType: 'input',
    }
    render(<Input {...dummyData} />);

    const feedbackElement = screen.getByRole('DummyInput');
    expect(feedbackElement).toBeInTheDocument();
});

test('renders 5 star rating buttons', () => {
    const dummyData = {
        name: 'input',
        label: 'DummyInput',
        type: 'input',
        inputType: 'rating',
    }
    render(<Input {...dummyData} />);

    const element = screen.getAllByTestId('star-button');
    expect(element.length).toBe(5);
});
