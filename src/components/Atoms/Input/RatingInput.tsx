import {useState, useRef, MouseEvent, useEffect} from 'react';
import {InputInt, Rating, RatingInputInt} from './Input.model';
import { UseFormContext, UseResetRating } from '../../../context/formContext';

const RatingInput = ({name, label, type } : RatingInputInt) => {
    const {setFormData} = UseFormContext();
    const {resetRating} = UseResetRating();
    const [rating, setRating] = useState<Rating>(0);
    const hiddenInput = useRef<HTMLInputElement>(null);
    const stars = Array.from(Array(5).keys());

    useEffect(() => {
        if(resetRating) setRating(0);
    }, [resetRating]);

    const handleStarClick = (event: MouseEvent<HTMLButtonElement>, index: number) => {
        event.preventDefault();
        const name = hiddenInput.current?.name as string;
        const result = {
            [name]: index
        };

        setRating(index);
        setFormData((values: InputInt) => ({ ...values, ...result }));
    };

    return <>
        <div className="flex items-center flex-row-reverse justify-end">
            {stars.map((star, index) => {
                return (
                <button
                    key={star}
                    className={`${
                    5 - rating <= index
                        ? "text-yellow-400"
                        : "text-gray-500"
                    } peer peer-hover:text-yellow-400 peer-focus:text-yellow-400 hover:text-yellow-400 focus:text-yellow-400`}
                    onClick={(event) => handleStarClick(event, 5 - index)}
                    data-testid="star-button"
                >
                    <svg className="pointer-events-none w-7 h-7" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" >
                        <title>Star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                </button>
                );
            })}
        </div>
        <input
            id={name}
            aria-labelledby={label}
            type={type}
            name={name}
            ref={hiddenInput}
        />
    </>
}

export default RatingInput;