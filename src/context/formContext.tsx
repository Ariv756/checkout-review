import { createContext, useContext } from 'react';

/**
 * Context created to store Form data until its ready to use.
 * formData  @Object  Object used to store forms data.
 * setFormData  @Function  Callback to update the formData value.
 */
export type formContextType = {
    formData: object,
    setFormData: (formData: object) => void
};

export const FormContext = createContext<formContextType>({
    formData:  {}, 
    setFormData: (formData: object) => {}
});

export const UseFormContext = () => useContext(FormContext);

/**
 * Context created to reset star rating input.
 * resetRating  @Boolean  Used to reset stars one form is submited.
 * setResetRating  @Function  Callback to update the Booleans value.
 */
export type ratingContext = {
    resetRating: boolean,
    setResetRating: (resetRating: boolean) => void
};

export const RatingContext = createContext<ratingContext>({
    resetRating:  false, 
    setResetRating: (resetRating: boolean) => {}
});

export const UseResetRating = () => useContext(RatingContext);
