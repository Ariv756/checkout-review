/**
 * Process a HTMLInputElement and return an object with a key and value.
 * @param element HTMLInputElement  
 * @returns an object with with a key and value.
 */
export const handleInputChange = (element: HTMLInputElement) => {
    const name = element.name;
    const value = element.value;
    
    return {
        [name]: value
    }
};
