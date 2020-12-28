import styled from "styled-components";

const HeaderContainer = styled.header`
  grid-area: header;
  grid-column: 2/3;
  width: 50%;
  margin: 0 auto;
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    width: 20%;
  }

  @media screen and (min-width: 375px) and (max-width: 750px) {
    grid-column: 1/2;
  }
`;

const StepsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 1rem;
  position: relative;

  img {
    width: 90%;
  }
`;

export { HeaderContainer, StepsContainer };
