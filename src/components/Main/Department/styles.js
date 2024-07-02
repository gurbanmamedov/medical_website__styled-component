import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const DepartmentSection = styled.section`
  width: 100%;
  padding-top: 160px;
`;

export const DepartmentContentTop = styled.div`
  position: relative;
`;

export const DepartmentSubtitle = styled.p`
  color: #96bb7c;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.2px;
  text-align: left;
  margin-bottom: 10px;
`;

export const DepartmentTitle = styled.h2`
  color: rgb(255, 255, 255);
  font-family: Montserrat;
  font-size: 40px;
  font-weight: 700;
  line-height: 50px;
  letter-spacing: 0.2px;
  text-align: left;
  margin-bottom: 10px;
`;

export const DepartmentDescription = styled.p`
  width: 470px;
  color: rgb(255, 255, 255);
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.2px;
  text-align: left;
  margin-bottom: 80px;
`;

export const DepartmentContentBottom = styled.div``;

export const DepartmentCards = styled.ul`
  display: flex;
  gap: 50px;
`;

export const DepartmentCard = styled.li`
  background: #ffffff;
  max-width: 348px;
  width: 100%;
`;

export const DepartmentCardTop = styled.div`
  position: relative;
`;

export const DepartmentCardLabel = styled.p`
  position: absolute;
  top: 20px;
  left: 15px;
  background-color: #e74040;
  padding: 0px 10px;
  color: #ffffff;
  border-radius: 4px;
`;

export const DepartmentCardImg = styled.img``;

export const DepartmentCardButtons = styled.div`
  display: flex;
  gap: 4px;
  position: absolute;
  bottom: 24px;
  left: 105px;
`;

export const DepartmentCardBottom = styled.div`
  padding: 25px;
`;

export const DepartmentBottomTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DepartmentCardSubtitle = styled.p`
  color: rgb(150, 187, 124);
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.2px;
  text-align: left;
  margin-bottom: 12px;
`;

export const DepartmentRating = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  background-color: #2d4059;
  padding: 8px;
  border-radius: 20px;
  width: 50px;
  height: 26px;
`;

export const RatingStar = styled.img`
  width: 12px;
`;

export const Rating = styled.p`
  color: rgb(255, 255, 255);
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.2px;
  text-align: left;
`;

export const DepartmentCardTitle = styled.p`
  color: rgb(37, 43, 66);
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.1px;
  text-align: left;
  margin-bottom: 10px;
`;

export const DepartmentCardDescription = styled.p`
  color: rgb(115, 115, 115);
  width: 280px;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.2px;
  text-align: left;
  margin-bottom: 10px;
`;

export const DepartmentCardSales = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 10px;
`;

export const SalesImg = styled.img``;

export const SalesText = styled.p`
  color: rgb(115, 115, 115);
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.2px;
  text-align: left;
`;

export const DepartmentCardPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 3px;
`;

export const DepartmentCardPriceOld = styled.p`
  color: rgb(189, 189, 189);
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.1px;
  text-align: center;
`;

export const DepartmentCardPriceNew = styled.p`
  color: rgb(255, 171, 113);
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.1px;
  text-align: center;
`;

export const DepartmentCardLink = styled.a`
  width: 130px;
  display: flex;
  align-items: center;
  padding: 10px 20px 10px 20px;
  border: 1px solid rgb(150, 187, 124);
  border-radius: 37px;
  color: rgb(150, 187, 124);
  white-space: nowrap;
`;
