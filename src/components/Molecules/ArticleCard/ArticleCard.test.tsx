import { render, screen } from '@testing-library/react';
import ArticleCard from './ArticleCard';

const dummyData = {
    id: '0',
    rating: 5,
    email: 'dummy@email.com',
}

test('renders name in article card', () => {
    const name = {name:'testing'};
    render(<ArticleCard {...{...dummyData, ...name}} />);

    const nameContent = screen.getByText(name.name).innerHTML;

    expect(nameContent).toBe(name.name);
});

test('renders comment in article card', () => {
    const comment = {comment:'testing'};
    render(<ArticleCard {...{...dummyData, ...comment}} />);

    const commentContent = screen.getByText(comment.comment).innerHTML;

    expect(commentContent).toBe(comment.comment);
});
