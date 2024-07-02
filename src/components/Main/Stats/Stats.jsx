import React from "react";
import {
  StatsSection,
  StatsItem,
  StatsNumber,
  StatsDescription,
} from "./styles";

const Stats = () => {
  return (
    <StatsSection>
      <StatsItem>
        <StatsNumber>15K</StatsNumber>
        <StatsDescription>Happy Customers</StatsDescription>
      </StatsItem>
      <StatsItem>
        <StatsNumber>150K</StatsNumber>
        <StatsDescription>Monthly Visitors</StatsDescription>
      </StatsItem>
      <StatsItem>
        <StatsNumber>15</StatsNumber>
        <StatsDescription>Countries Worldwide</StatsDescription>
      </StatsItem>
      <StatsItem>
        <StatsNumber>100+</StatsNumber>
        <StatsDescription>Top Partners</StatsDescription>
      </StatsItem>
    </StatsSection>
  );
};

export default Stats;
