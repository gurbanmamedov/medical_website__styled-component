import styled from "styled-components";

export const CardWrapper = styled.li`
  box-shadow: 0px 13px 19px 0px rgba(0, 0, 0, 0.07);
  background: rgb(255, 255, 255);
  padding: 35px 40px;
  max-width: 234px;
  width: 100%;
  border-radius: 5px;
`;

export const CardImage = styled.img`
  margin-bottom: 20px;
`;

export const CardTitle = styled.h3`
  margin-bottom: 20px;
  color: rgb(37, 43, 66);
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.1px;
  text-align: left;
`;

export const CardDivider = styled.div`
  width: 50px;
  height: 2px;
  background: #ff7171;
  margin-bottom: 20px;
`;

export const CardDescription = styled.p`
  color: rgb(115, 115, 115);
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.2px;
  text-align: left;
`;
