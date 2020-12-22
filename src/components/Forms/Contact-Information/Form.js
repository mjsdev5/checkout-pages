import React from "react";
import { useFormik } from "formik";

import * as common from "../common";

const {
  ErrorMessage,
  FormField,
  initialValuesContact,
  MultipleInputStyles,
  validationSchemaContact,
} = common;

const Form = ({ onSubmit }) => {
  const formik = useFormik({
    initialValuesContact,
    validationSchemaContact,
    onSubmit,
  });

  const emailProps = formik.getFieldProps("email");
  const phoneNumberProps = formik.getFieldProps("phoneNumber");
  const firstNameProps = formik.getFieldProps("firstName");
  const lastNameProps = formik.getFieldProps("lastName");

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormField label="Email" type="email" {...emailProps} />
      {formik.touched.email && formik.errors.email ? (
        <ErrorMessage>{formik.errors.email}</ErrorMessage>
      ) : null}

      <FormField label="Phone Number" type="text" {...phoneNumberProps} />
      {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
        <ErrorMessage>{formik.errors.phoneNumber}</ErrorMessage>
      ) : null}

      <MultipleInputStyles>
        <FormField label="First Name" type="text" {...firstNameProps} />
        {formik.touched.firstName && formik.errors.firstName ? (
          <ErrorMessage>{formik.errors.firstName}</ErrorMessage>
        ) : null}

        <FormField label="LastfName" type="text" {...lastNameProps} />
        {formik.touched.lastName && formik.errors.lastName ? (
          <ErrorMessage>{formik.errors.lastName}</ErrorMessage>
        ) : null}
      </MultipleInputStyles>
    </form>
  );
};

export default Form;
