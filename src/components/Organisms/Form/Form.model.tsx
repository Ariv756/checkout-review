export interface InputsInt {
  id?: null | string;
  name: null | string;
  email: null | string;
  comment: null | string;
  rating?: null | number;
}

export interface MessageInt {
  name: string;
}

export const FormInputs = [
  {
    label: "Name",
    type: "text",
    name: "name",
    inputType: "input",
  },
  {
    label: "Email",
    type: "email",
    name: "email",
    inputType: "input",
  },
  {
    label: "Rating",
    type: "hidden",
    name: "rating",
    inputType: "rating",
  },
  {
    label: "Comment",
    type: "textarea",
    name: "comment",
    inputType: "textarea",
  },
];
