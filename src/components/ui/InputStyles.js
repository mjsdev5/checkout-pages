import styled from "styled-components";

import * as theme from "../../utils";

const { defaultTheme } = theme;

const InputStyles = styled.input`
  width: 80%;
  margin: 0 auto;
  border: 5px solid ${defaultTheme.primaryColor};
`;

export { InputStyles };
