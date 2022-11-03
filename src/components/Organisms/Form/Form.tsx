import { useState } from "react";
import { v4 as uuid } from "uuid";
import { MessageInt, FormInputs, InputsInt} from "./Form.model";
import Input from "../../Atoms/Input";
import Textarea from "../../Atoms/Textarea";

import { UseReviewContext } from "../../../context/reviewContext";
import { FormContext, RatingContext } from "../../../context/formContext";

const Form = () => {
  const [formData, setFormData] = useState<InputsInt | object>({});
  const [resetRating, setResetRating] = useState(false);
  const {setReviewData} = UseReviewContext();
  const [message, setMessage] = useState<MessageInt>();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const data = Object.keys(formData).length
      ? { id: uuid(), ...formData }
      : {} as InputsInt;

    if (data?.rating && data?.name && data?.comment) {
      setReviewData(data);

      try {
        fetch('http://localhost:3030/comment', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-type': 'application/json'
          }
        })
        .then((res) => res.json())
        .then((post) => setMessage(post));

        setResetRating(true);
        e.target.reset();
      } catch(err) {
        console.log("err: ", err);
      }
    }
  };

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
    <RatingContext.Provider value={{ resetRating, setResetRating }}>
      <section>
        <form onSubmit={handleSubmit}>
          {FormInputs.map((input) => {
            return (
              <div key={input.name} className="flex flex-col">
                <label id={input.label} htmlFor={input.name}>
                  {input.label}
                </label>

                {input.inputType === "textarea" ? (
                  <Textarea {...input} />
                ) : (
                  <Input {...input} />
                )}
              </div>
            );
          })}
          <input
            type="submit"
            data-testid="submit"
            className="px-4 py-2 my-4 bg-cyan-900 text-white rounded-sm cursor-pointer"
          />
        </form>
        {message?.name && (
          <p>Thank you for submiting your review {message?.name}</p>
        )}
      </section>
    </RatingContext.Provider>
    </FormContext.Provider>
  );
};

export default Form;
