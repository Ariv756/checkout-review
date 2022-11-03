import { createContext, useContext } from 'react';

/**
 * Context created to display the forms submition.
 * reviewData  @Object  Object used to provide new review.
 * setReviewData  @Function  Callback to update the reviewData value.
 */
export type reviewContextType = {
    reviewData: object,
    setReviewData: (reviewData: object) => void
};

export const ReviewContext = createContext<reviewContextType>({
    reviewData:  {}, 
    setReviewData: (reviewData: object) => {}
});

export const UseReviewContext = () => useContext(ReviewContext);
