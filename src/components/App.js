import React from "react";
import { ThemeProvider } from "styled-components";

import { defaultTheme, GlobalStyle } from "../utils";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import {
  BillingInformation,
  ContactInformation,
  PaymentInformation,
  ShippingForm,
} from "./Forms";

import * as main from "./styles";
import MainPage from "./Forms/Forms/MainPage";

const { MainContainer } = main;

const App = () => (
  <ThemeProvider theme={defaultTheme}>
    <MainContainer>
      {/* <Header />
      <ContactInformation />
      <ShippingForm />
      <BillingInformation />
      <PaymentInformation />
      <Footer /> */}
      <MainPage />
    </MainContainer>
    <GlobalStyle />
  </ThemeProvider>
);

export default App;
