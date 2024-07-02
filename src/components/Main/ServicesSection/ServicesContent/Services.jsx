import React from "react";
import {
  ServicesWrapper,
  ServicesContentRight,
  ServicesDivider,
  ServicesTitle,
  ServicesSubtitle,
  ServicesLink,
  ServicesContentLeft,
  ServicesCards,
  Container,
} from "./styles";

import Card1 from "../../../../assets/fixed-width.png";
import Card2 from "../../../../assets/fixed-width (1).png";
import Card3 from "../../../../assets/fixed-width (2).png";
import Card from "../Card/Card";

const Services = () => {
  return (
    <Container>
      <ServicesWrapper>
        <ServicesContentRight>
          <ServicesDivider />
          <ServicesTitle>Our Doctors Specialize in you</ServicesTitle>
          <ServicesSubtitle>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </ServicesSubtitle>
          <ServicesLink href="#">Learn More</ServicesLink>
        </ServicesContentRight>
        <ServicesContentLeft>
          <ServicesCards>
            <Card
              imgSrc={Card1}
              title="Quick examination"
              description="The gradual accumulation of information about"
            />
            <Card
              imgSrc={Card2}
              title="Best dental surgeons"
              description="The gradual accumulation of information about"
            />
            <Card
              imgSrc={Card3}
              title="Emergency Case"
              description="The gradual accumulation of information about"
            />
          </ServicesCards>
        </ServicesContentLeft>
      </ServicesWrapper>
    </Container>
  );
};

export default Services;
