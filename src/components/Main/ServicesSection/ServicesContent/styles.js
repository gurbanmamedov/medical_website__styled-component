import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const ServicesWrapper = styled.section`
  width: 100%;
  display: flex;
  padding: 80px 0px; 
  align-items: center;
  gap: 340px;
`;

export const ServicesContentRight = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ServicesDivider = styled.div`
  width: 95px;
  height: 6px;
  background: rgb(255, 113, 113);
  margin-bottom: 35px;
`;

export const ServicesTitle = styled.h2`
  width: 370px;
  color: rgb(255, 255, 255);
  font-family: Montserrat;
  font-size: 40px;
  font-weight: 700;
  line-height: 50px;
  letter-spacing: 0.2px;
  text-align: left;
  margin-bottom: 35px;
`;

export const ServicesSubtitle = styled.p`
  width: 351px;
  color: rgb(255, 255, 255);
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.2px;
  text-align: left;
  margin-bottom: 35px;
`;

export const ServicesLink = styled.a`
  color: rgb(150, 187, 124);
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.2px;
  text-align: left;
`;

export const ServicesContentLeft = styled.div`
  display: flex;
`;

export const ServicesCards = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  position: relative;

  li:nth-child(3) {
    position: absolute;
    left: 260px;
    top: 160px;
  }
`;
