import React, { useState } from "react";
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import Header from "../../Header/Header";

import {
  getContactInfo,
  getPaymentDetails,
  getShippingInfo,
} from "../../../reducers";

import { initialValues, validationSchemaForms } from "../common";

import {
  ContactInformationForm,
  PaymentMethodsForm,
  ShippingAddressForm,
  ShippingOptionsForm,
} from "./index";
import Terms from "./Terms";
import { WrapperStyling } from "../../styles";

const MainForm = () => {
  const [checked, setChecked] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.cartInfo);

  const handleCheck = (e) => {
    setChecked(true);
    e.target.value === "shippingDifAddress"
      ? setShowForm(true)
      : setShowForm(false);
  };

  return (
    <>
      {redirect ? <Redirect to="/thanks" /> : ""}
      <WrapperStyling>
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
              terms,
            } = values;

            const contactInfo = {
              email,
              phoneNumber,
              firstName,
              lastName,
              terms,
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
            console.log(
              getContactInfo(contactInfo),
              getShippingInfo(shippingInfo),
              getPaymentDetails(paymentInfo)
            );
            setRedirect(true);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              {/* Contact Information */}
              {Object.keys(errors).length ? (
                <p className="errorMessage">
                  There are some errors in the form, please correct them before
                  submiting the form.
                </p>
              ) : null}
              <h2>Contact Information</h2>
              <div>
                <ContactInformationForm
                  email="email"
                  phoneNumber="phoneNumber"
                  firstName="firstName"
                  lastName="lastName"
                />
              </div>

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

              {showForm && (
                <>
                  <h2>Billing Address</h2>
                  <ShippingAddressForm
                    city="city"
                    country="country"
                    otherInfo="otherInfo"
                    postalCode="postalCode"
                    state="state"
                    streetAddress="streetAddress"
                  />
                </>
              )}

              {/* Shipping Options */}
              <h2>Billing Information</h2>
              <ShippingOptionsForm
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
          )}
        </Formik>
      </WrapperStyling>
    </>
  );
};

export default MainForm;
