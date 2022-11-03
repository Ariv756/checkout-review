import { UseFormContext } from '../../../context/formContext';
import { handleInputChange } from "../../../utils/handleInputChange/handleInputChange";
import {TextareaInt, ValueInt} from './Textarea.model';

const Textarea = ({name, label} : TextareaInt) => {
    const {setFormData} = UseFormContext();
      
    const handleChange = (e: any) => {
        e.preventDefault();
        const result = (e) && handleInputChange(e.target);
    
        setFormData((values: ValueInt) => ({ ...values, ...result }));
    };

    return <textarea
        id={name}
        aria-labelledby={label}
        role={label}
        className="border p-2"
        name={name}
        onChange={handleChange}
    />
}

export default Textarea;
