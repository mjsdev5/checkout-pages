import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import FormField from "../common/FormField";
import selectCountry from "./selectCountry";

const initialValues = {
  streetAddress: "",
  otherInfo: "",
  postalCode: "",
  country: "",
  city: "",
  state: "",
};

const validationSchema = Yup.object().shape({
  streetAddress: Yup.string().required("Cannot be empty"),
  otherInfo: Yup.string(),
  postalCode: Yup.string().required("Cannot be empty"),
  country: Yup.string().required("Cannot be empty"),
  city: Yup.string().required("Cannot be empty"),
  state: Yup.string().required("Cannot be empty"),
});

const Form = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const streetAddressProps = formik.getFieldProps("streeAddress");
  const otherInfoProps = formik.getFieldProps("otherInfo");
  const postalCodeProps = formik.getFieldProps("postalCode");
  const countryProps = formik.getFieldProps("country");
  const cityProps = formik.getFieldProps("city");
  const stateProps = formik.getFieldProps("state");
  return (
    <form onSubmit={formik.handleSubmit}>
      <FormField label="Street Address" type="text" {...streetAddressProps} />
      {formik.touched.streetAddress && formik.errors.streetAddress ? (
        <div>{formik.errors.streetAddress}</div>
      ) : null}

      <FormField
        label="Other Information (optional)"
        type="text"
        {...otherInfoProps}
      />
      {formik.touched.otherInfo && formik.errors.otherInfo ? (
        <div>{formik.errors.otherInfo}</div>
      ) : null}

      <FormField label="Postal Code" type="text" {...postalCodeProps} />
      {formik.touched.postalCode && formik.errors.postalCode ? (
        <div>{formik.errors.postalCode}</div>
      ) : null}

      <FormField label="Country" type="text" name="country" {...countryProps} />
      {formik.touched.postalCode && formik.errors.postalCode ? (
        <div>{formik.errors.postalCode}</div>
      ) : null}

      <FormField label="City" type="text" {...cityProps} />
      {formik.touched.city && formik.errors.city ? (
        <div>{formik.errors.city}</div>
      ) : null}

      <FormField label="State/Region/Province" type="text" {...stateProps} />
      {formik.touched.state && formik.errors.state ? (
        <div>{formik.errors.state}</div>
      ) : null}
    </form>
  );
};

export default Form;
