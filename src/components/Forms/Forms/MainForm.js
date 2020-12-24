import React from "react";
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";

import { getContactInfo } from "../../../reducers/contactSlice";
import { getShippingInfo } from "../../../reducers/shippingSlice";
import { getPaymentDetails } from "../../../reducers/paymentSlice";

import {
  Checkbox,
  initialValues,
  TextInput,
  SelectCountry,
  validationSchemaForms,
} from "../common";

import {
  BannerStyles,
  BillingOptionsStyles,
  ButtonStyles,
  CardStyles,
  FooterStyles,
  FormStyles,
  PaymentMethodsStyles,
} from "../../styles";

import { PrimaryButton, SecondaryButton } from "../../ui/Buttons";

import group from "../../../assets/group.png";

const MainForm = () => {
  const dispatch = useDispatch();
  return (
    <>
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
        }}
      >
        <Form>
          {/* Contact Information */}
          <FormStyles>
            <TextInput id="email" label="Email" name="email" type="text" />
            <TextInput
              id="phoneNumber"
              label="Phone Number"
              name="phoneNumber"
              type="text"
            />
            <TextInput
              id="firstName"
              label="First Name"
              name="firstName"
              type="text"
            />
            <TextInput
              id="lastName"
              label="Last Name"
              name="lastName"
              type="text"
            />
          </FormStyles>

          {/* Shipping Information */}
          <FormStyles>
            <TextInput
              id="streetAddress"
              label="Street Address"
              name="streetAddress"
              type="text"
            />
            <TextInput
              id="otherInfo"
              label="Other Information (optional)"
              name="otherInfo"
              type="text"
            />
            <TextInput
              label="Postal Code"
              id="postalCode"
              name="postalCode"
              type="text"
            />
            <SelectCountry label="Country" id="country" name="country">
              <option value="">Select Country</option>
              <option id="italy" value="italy">
                Italy
              </option>
              <option id="greece" value="greece">
                Greece
              </option>
            </SelectCountry>
            <TextInput label="City" id="city" name="city" type="text" />
            <TextInput
              label="State/Region"
              id="state"
              name="state"
              type="text"
            />
          </FormStyles>

          {/* Shipping Options */}
          <BillingOptionsStyles>
            <Checkbox
              id="shippingAddress"
              name="picked1"
              type="radio"
              value="shippingAddress"
            >
              Use my shipping address
            </Checkbox>
            <Checkbox
              id="shippingDifAddress"
              name="picked2"
              type="radio"
              value="shippingDifAddress"
            >
              Use a different address
            </Checkbox>
          </BillingOptionsStyles>

          {/* Payment Methods */}

          <>
            <BannerStyles>
              <p>Pay with Credit Card</p>
              <CardStyles>
                <img src={group} alt="creditCards" />
              </CardStyles>
            </BannerStyles>
            <PaymentMethodsStyles>
              <TextInput label="Card Holder" name="cardHolder" type="string" />
              <TextInput
                id="cardNumber"
                name="cardNumber"
                label="Card Number"
                type="text"
              />
              <TextInput
                id="expirationDate"
                name="expirationDate"
                label="Expiration Date"
                type="text"
              />
              <TextInput id="cvv" name="cvv" label="CVV" type="text" />
            </PaymentMethodsStyles>
            <BannerStyles />
          </>

          {/* Terms & Buttons */}

          <FooterStyles>
            <ButtonStyles>
              <SecondaryButton modifiers="small">Back</SecondaryButton>
              <PrimaryButton modifiers="large" type="submit">
                Buy Now
              </PrimaryButton>
            </ButtonStyles>
            <Checkbox name="terms" type="checkbox">
              By clicking the button 'Buy Now', I agree to the{" "}
              <span>Terms and Conditions</span> and the{" "}
              <span>Privacy Policy</span>
            </Checkbox>
          </FooterStyles>
        </Form>
      </Formik>
    </>
  );
};

export default MainForm;
