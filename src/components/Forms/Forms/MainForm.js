import React, { useState } from "react";
import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

import { getContactInfo } from "../../../reducers/contactSlice";
import { getShippingInfo } from "../../../reducers/shippingSlice";
import { getPaymentDetails } from "../../../reducers/paymentSlice";

import { Checkbox, initialValues, validationSchemaForms } from "../common";

import { BillingOptionsStyles, ButtonStyles, FooterStyles } from "../../styles";

import { PrimaryButton, SecondaryButton } from "../../ui/Buttons";

import ContactInformationForm from "./ContactInformationForm";
import ShippingAddressForm from "./ShippingAddressForm";
import PaymentMethodsForm from "./PaymentMethodsForm";
import ShippingOptionsForm from "./ShippingOptionsForm";
import Terms from "./Terms";

const MainForm = () => {
  const [checked, setChecked] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const dispatch = useDispatch();

  const handleCheck = (e) => {
    setChecked(true);
  };

  return (
    <>
      {redirect ? <Redirect to="/thanks" /> : ""}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchemaForms}
        onSubmit={(values) => {
          const {
            email,
            phoneNumber,
            firstName,
            lastName,
            streetAddress,
            otherInfo,
            postalCode,
            city,
            state,
            cardHolder,
            cardNumber,
            expirationDate,
            cvv,
          } = values;

          const contactInfo = {
            email,
            phoneNumber,
            firstName,
            lastName,
          };

          const shippingInfo = {
            streetAddress,
            otherInfo,
            postalCode,
            city,
            state,
          };

          const paymentInfo = {
            cardHolder,
            cardNumber,
            expirationDate,
            cvv,
          };
          dispatch(getContactInfo(contactInfo));
          dispatch(getShippingInfo(shippingInfo));
          dispatch(getPaymentDetails(paymentInfo));
          setRedirect(true);
        }}
      >
        <Form>
          {/* Contact Information */}
          <h2>Contact Information</h2>

          <ContactInformationForm
            email="email"
            phoneNumber="phoneNumber"
            firstName="firstName"
            lastName="lastName"
          />

          {/* Shipping Information */}
          <h2>Shipping Address</h2>
          <ShippingAddressForm
            city="city"
            country="country"
            otherInfo="otherInfo"
            postalCode="postalCode"
            state="state"
            streetAddress="streetAddress"
          />

          {/* Shipping Options */}
          <h2>Billing Information</h2>
          <ShippingOptionsForm
            checked={checked}
            handleCheck={handleCheck}
            shippingAddress="shippingAddress"
            shippingDifAddress="shippingDifAddress"
            type="radio"
          />

          {/* Payment Methods */}

          <PaymentMethodsForm
            cardHolder="cardHolder"
            cardNumber="cardNumber"
            cvv="cvv"
            expirationDate="expirationDate"
          />

          {/* Terms & Buttons */}

          <Terms terms="terms" />
        </Form>
      </Formik>
    </>
  );
};

export default MainForm;
