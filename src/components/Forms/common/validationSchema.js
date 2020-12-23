import * as Yup from "yup";
import valid from "card-validator";

import { expirationDate } from "./expirationDate";

export const validationSchemaForms = Yup.object({
  email: Yup.string()
    .email("It needs to be a valid email")
    .matches(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    )
    .required("This field is mandatory"),
  phoneNumber: Yup.number()
    .min(
      12,
      "Needs to be at least 12 numbers. Be sure to add your country code in front."
    )
    .integer()
    .required("This field is mandatory"),
  firstName: Yup.string().required("This field is mandatory"),
  lastName: Yup.string().required("This field is mandatory"),
  streetAddress: Yup.string().required("This field is mandatory"),
  otherInfo: Yup.string(),
  postalCode: Yup.string().required("This field is mandatory"),
  country: Yup.string().required("This field is mandatory"),
  city: Yup.string().required("This field is mandatory"),
  state: Yup.string().required("This field is mandatory"),
  cardHolder: Yup.string().required(),
  cardNumber: Yup.string()
    .test(
      "test-number",
      "Credit Card Number is invalid",
      (value) => valid.number(value).isValid
    )
    .required(),
  expirationData: expirationDate,
  CVV: Yup.string().min(3).max(3).required("This field is mandatory"),
});
