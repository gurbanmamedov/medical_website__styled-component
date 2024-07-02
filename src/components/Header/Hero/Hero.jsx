import React from "react";
import {
  HeroSection,
  HeroWrapper,
  HeroSubtitle,
  HeroTitle,
  HeroDescription,
  Button,
} from "./styles";

const Hero = () => {
  return (
    <HeroSection>
      <HeroWrapper>
        <HeroSubtitle>Join Us</HeroSubtitle>
        <HeroTitle>Meet the Best Hospital</HeroTitle>
        <HeroDescription>
          We are always fully focused on helping your child and you
        </HeroDescription>
        <Button>Join Us</Button>
      </HeroWrapper>
    </HeroSection>
  );
};

export default Hero;
