import React from "react";

import { countryNames } from "../common/selectCountryFunc";
import { TextInput, SelectCountry } from "../common";
import { FormStyles2, MultipleInputStyles } from "../../styles";

const ShippingAddressForm = ({
  city,
  country,
  otherInfo,
  postalCode,
  state,
  streetAddress,
}) => {
  return (
    <FormStyles2>
      <TextInput
        id={streetAddress}
        label="Street Address"
        name={streetAddress}
        type="text"
      />
      <TextInput
        id={otherInfo}
        label="Other Information (Optional)"
        name={otherInfo}
        type="text"
      />
      <MultipleInputStyles>
        <div>
          <TextInput
            id={postalCode}
            label="Postal Code"
            name={postalCode}
            type="text"
          />
        </div>

        <SelectCountry id={country} label="Country" name="country">
          <option value="">Select Country</option>
          {countryNames.map((country) => (
            <option key={country.name} id={country.name} value={country.name}>
              {country.name}
            </option>
          ))}
        </SelectCountry>
      </MultipleInputStyles>
      <MultipleInputStyles>
        <div>
          <TextInput id={city} name={city} label="City" type="text" />
        </div>
        <div>
          <TextInput id={state} name={state} label="State/Region" type="text" />
        </div>
      </MultipleInputStyles>
    </FormStyles2>
  );
};

export default ShippingAddressForm;
