import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: relative;
  width: 100%;
  background-image: url("./src/assets/hero-2-cover.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }

  & > * {
    position: relative;
    z-index: 2;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
