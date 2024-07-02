import React from "react";
import {
  CardWrapper,
  CardImage,
  CardTitle,
  CardDivider,
  CardDescription,
} from "./styles";
const Card = ({ imgSrc, title, description }) => {
  return (
    <CardWrapper>
      <CardImage src={imgSrc} title={title} />
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardWrapper>
  );
};

export default Card;
