import React from "react";
import { HeaderWrapper, Container } from "./styles";
import Nav from "./Nav/Nav";
import Hero from "./Hero/Hero";


const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <Nav />
        <Hero />
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
