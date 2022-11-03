
import { render, screen } from '@testing-library/react';
import RatingStars from './RatingStars';

const dummyData = {
    name: '',
    email: '',
    comment: '',
};

test('render 0 of 5 stars', () => {
    const data = {rating: 0}
    render(<RatingStars {...{...dummyData, ...data}} />);

    const greyRatingElements = screen.getAllByTestId('grey-star');
      
    expect(greyRatingElements.length).toBe(5);
});

test('render 1 of 5 stars', () => {
    const data = {rating: 1}
    render(<RatingStars {...{...dummyData, ...data}} />);

    const goldRatingElements = screen.getAllByTestId('gold-star');
    const greyRatingElements = screen.getAllByTestId('grey-star');
      
    expect(goldRatingElements.length).toBe(1);
    expect(greyRatingElements.length).toBe(4);
});

test('render 5 of 5 stars', () => {
    const data = {rating: 5}
    render(<RatingStars {...{...dummyData, ...data}} />);

    const goldRatingElements = screen.getAllByTestId('gold-star');

    expect(goldRatingElements.length).toBe(5);
});
