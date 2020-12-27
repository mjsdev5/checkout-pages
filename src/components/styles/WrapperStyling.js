import styled from "styled-components";

export const WrapperStyling = styled.div`
  width: 100%;
  display: grid;
  justify-self: end;
  grid-area: forms;

  @media screen and (max-width: 1080px) {
    width: 90%;
  }
  @media screen and (min-width: 375px) and (max-width: 750px) {
    width: 100%;
    margin: 0;
  }
`;
