import { fireEvent, render, screen } from '@testing-library/react';
import Textarea from './Textarea';

const dummyData = {
    name: 'input',
    label: 'DummyInput'
}

test('renders dummy textarea', () => {
    render(<Textarea {...dummyData} />);
    const textareaElement = screen.getByRole('DummyInput');
    expect(textareaElement).toBeInTheDocument();
});

test('onchange textarea value updates', async () => {
    render(<Textarea {...dummyData} />);
    const textareaElement = screen.getByRole('DummyInput');
    const textareaValue = (textareaElement as HTMLInputElement | null)?.value;

    expect(textareaValue).toBe("");

    fireEvent.change(textareaElement, { target: { value: 'This is my textarea.' } })
    const updatedValue = (textareaElement as HTMLInputElement | null)?.value;

    expect(updatedValue).toBe("This is my textarea.");
});
