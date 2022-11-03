import {ChangeEvent} from 'react';
import RatingInput from "./RatingInput";
import {InputInt} from './Input.model';
import { UseFormContext } from '../../../context/formContext';
import { handleInputChange } from "../../../utils/handleInputChange/handleInputChange";

const Input = ({name, label, type, inputType } : InputInt) => {
    const {setFormData} = UseFormContext();
      
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const result = (event) && handleInputChange(event.target);
    
        setFormData((values: InputInt) => ({ ...values, ...result }));
    };

    return (
        <>
        {
        (inputType === 'rating')
            ? (<RatingInput {...{name, label, type}}/>) 
            : (
                <input
                    id={name}
                    role={label}
                    aria-labelledby={label}
                    className="border p-2"
                    type={type}
                    name={name}
                    onChange={handleChange}
                />
            )
        }
        </>
    )
}

export default Input;