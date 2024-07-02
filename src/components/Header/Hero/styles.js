import styled from "styled-components";

export const HeroSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 160px 0px;
`;

export const HeroWrapper = styled.div`
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeroSubtitle = styled.p`
  margin-bottom: 40px;
  text-align: center;
  color: rgb(150, 187, 124);
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.1px;
`;

export const HeroTitle = styled.h1`
  width: 542px;
  margin-bottom: 40px;
  color: rgb(255, 255, 255);
  font-size: 58px;
  font-weight: 700;
  line-height: 80px;
  letter-spacing: 0.2px;
  text-align: center;
`;

export const HeroDescription = styled.p`
  width: 406px;
  margin-bottom: 40px;
  color: rgb(255, 255, 255);
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0.2px;
  text-align: center;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 15px 25px;
  border-radius: 5px;
  border: none;
  background: rgb(150, 187, 124);
  cursor: pointer;
  color: #fff;
  text-transform: uppercase;
`;
