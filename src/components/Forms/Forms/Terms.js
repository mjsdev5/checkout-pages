import React from "react";

import { Checkbox } from "../common";
import { PrimaryButton, SecondaryButton } from "../../ui/Buttons";
import { ButtonStyles, FooterStyles } from "../../styles";

const Terms = ({ terms, isValid }) => {
  return (
    <FooterStyles>
      <Checkbox name={terms} type="checkbox">
        I agree to the <span>Terms and Conditions</span> and the
        <span>Privacy Policy</span>
      </Checkbox>
      <ButtonStyles>
        <SecondaryButton modifiers="small">Back</SecondaryButton>
        <PrimaryButton modifiers="large" type="submit">
          Buy Now
        </PrimaryButton>
      </ButtonStyles>
      {isValid ? (
        <p className="errorMessageFooter">Please correct the errors above.</p>
      ) : null}
      <p>
        By clicking the button 'Buy Now', I agree to the Terms and Conditions
        and the Privacy Policy
      </p>
    </FooterStyles>
  );
};

export default Terms;
