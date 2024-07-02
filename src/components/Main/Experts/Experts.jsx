import React from "react";
import {
  ExpertsSection,
  ExpertsImage,
  ExpertsContent,
  ExpertsDivider,
  ExpertsTitle,
  ExpertsSubtitle,
  ExpertsLink,
  Container,
} from "./styles";

import ExpertImage from "../../../assets/thumb-concept-17.png";

const Experts = () => {
  return (
    <Container>
      <ExpertsSection>
        <ExpertsImage src={ExpertImage} alt="Experts" />
        <ExpertsContent>
          <ExpertsDivider />
          <ExpertsTitle>Meet Our Experts</ExpertsTitle>
          <ExpertsSubtitle>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </ExpertsSubtitle>
          <ExpertsLink href="#">Learn more</ExpertsLink>
        </ExpertsContent>
      </ExpertsSection>
    </Container>
  );
};

export default Experts;
