import React from "react";

import { InputStyles } from "./InputStyles";

const FormField = ({ name, label, ...rest }) => {
  return (
    <InputStyles>
      <label className="label" htmlFor={name}>
        {label}
      </label>
      <input id={name} name={name} {...rest} />
    </InputStyles>
  );
};

export default FormField;
