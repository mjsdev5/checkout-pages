import React from "react";
import styled from "styled-components";

import logo from "../../assets/logo.svg";

const Steps = styled.span`
  position: absolute;
  width: 36px;
  height: 36px;
  left: 423px;
  top: 100px;

  background: #009eff;
  border: 2px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 2px;
`;

const HeaderContainer = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: red;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo} alt="logo_image" />
      <Steps>1</Steps>
    </HeaderContainer>
  );
};

export default Header;
