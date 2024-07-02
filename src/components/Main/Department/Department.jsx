import React from "react";
import {
  DepartmentSection,
  DepartmentContentTop,
  DepartmentSubtitle,
  DepartmentTitle,
  DepartmentDescription,
  DepartmentContentBottom,
  DepartmentCards,
  DepartmentCard,
  DepartmentCardTop,
  DepartmentCardLabel,
  DepartmentCardImg,
  DepartmentCardButtons,
  DepartmentCardBottom,
  DepartmentBottomTop,
  DepartmentCardSubtitle,
  DepartmentRating,
  RatingStar,
  Rating,
  DepartmentCardTitle,
  DepartmentCardDescription,
  DepartmentCardSales,
  SalesImg,
  SalesText,
  DepartmentCardPrice,
  DepartmentCardPriceOld,
  DepartmentCardPriceNew,
  DepartmentCardLink,
  Container,
} from "./styles";

import DepartmentImg1 from "../../../assets/product-cover-124 sec-.png";
import DepartmentImg2 from "../../../assets/product-cover-125 sec-.png";
import DepartmentImg3 from "../../../assets/product-cover-126 sec-.png";

import CardButton1 from "../../../assets/like.png";
import CardButton2 from "../../../assets/basket.png";
import CardButton3 from "../../../assets/like (1).png";

import RatingImg from "../../../assets/Vector.png";

import SaleArrow from "../../../assets/Frame sec-.png"

const Department = () => {
  return (
    <Container>
      <DepartmentSection>
        <DepartmentContentTop>
          <DepartmentSubtitle>Practice Advice</DepartmentSubtitle>
          <DepartmentTitle>Our Department</DepartmentTitle>
          <DepartmentDescription>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </DepartmentDescription>
        </DepartmentContentTop>
        <DepartmentContentBottom>
          <DepartmentCards>
            <DepartmentCard>
              <DepartmentCardTop>
                <DepartmentCardImg src={DepartmentImg1} alt="Cancer Care" />
                <DepartmentCardButtons>
                  <img src={CardButton1} alt="like" />
                  <img src={CardButton2} alt="basket" />
                  <img src={CardButton3} alt="like" />
                </DepartmentCardButtons>
                <DepartmentCardLabel>Sale</DepartmentCardLabel>
              </DepartmentCardTop>
              <DepartmentCardBottom>
                <DepartmentBottomTop>
                  <DepartmentCardSubtitle>Cancer Care</DepartmentCardSubtitle>
                  <DepartmentRating>
                    <RatingStar src={RatingImg} alt="star" />
                    <Rating>4.9</Rating>
                  </DepartmentRating>
                </DepartmentBottomTop>
                <DepartmentCardTitle>Best dental surgeons</DepartmentCardTitle>
                <DepartmentCardDescription>
                  We focus on ergonomics and meeting you where you work. It's
                  only a keystroke away.
                </DepartmentCardDescription>
                <DepartmentCardSales>
                  <SalesImg src={SaleArrow} alt="sales" />
                  <SalesText>15 Sales</SalesText>
                </DepartmentCardSales>
                <DepartmentCardPrice>
                  <DepartmentCardPriceOld>$16.48</DepartmentCardPriceOld>
                  <DepartmentCardPriceNew>$6.48</DepartmentCardPriceNew>
                </DepartmentCardPrice>
                <DepartmentCardLink href="#">Learn More</DepartmentCardLink>
              </DepartmentCardBottom>
            </DepartmentCard>
            <DepartmentCard>
              <DepartmentCardTop>
                <DepartmentCardImg src={DepartmentImg2} alt="Cancer Care" />
                <DepartmentCardButtons>
                  <img src={CardButton1} alt="like" />
                  <img src={CardButton2} alt="basket" />
                  <img src={CardButton3} alt="like" />
                </DepartmentCardButtons>
                <DepartmentCardLabel>Sale</DepartmentCardLabel>
              </DepartmentCardTop>
              <DepartmentCardBottom>
                <DepartmentBottomTop>
                  <DepartmentCardSubtitle>Cancer Care</DepartmentCardSubtitle>
                  <DepartmentRating>
                    <RatingStar src={RatingImg} alt="star" />
                    <Rating>4.9</Rating>
                  </DepartmentRating>
                </DepartmentBottomTop>
                <DepartmentCardTitle>Best dental surgeons</DepartmentCardTitle>
                <DepartmentCardDescription>
                  We focus on ergonomics and meeting you where you work. It's
                  only a keystroke away.
                </DepartmentCardDescription>
                <DepartmentCardSales>
                  <SalesImg src={SaleArrow} alt="sales" />
                  <SalesText>15 Sales</SalesText>
                </DepartmentCardSales>
                <DepartmentCardPrice>
                  <DepartmentCardPriceOld>$16.48</DepartmentCardPriceOld>
                  <DepartmentCardPriceNew>$6.48</DepartmentCardPriceNew>
                </DepartmentCardPrice>
                <DepartmentCardLink href="#">Learn More</DepartmentCardLink>
              </DepartmentCardBottom>
            </DepartmentCard>
            <DepartmentCard>
              <DepartmentCardTop>
                <DepartmentCardImg src={DepartmentImg3} alt="Cancer Care" />
                <DepartmentCardButtons>
                  <img src={CardButton1} alt="like" />
                  <img src={CardButton2} alt="basket" />
                  <img src={CardButton3} alt="like" />
                </DepartmentCardButtons>
                <DepartmentCardLabel>Sale</DepartmentCardLabel>
              </DepartmentCardTop>
              <DepartmentCardBottom>
                <DepartmentBottomTop>
                  <DepartmentCardSubtitle>Cancer Care</DepartmentCardSubtitle>
                  <DepartmentRating>
                    <RatingStar src={RatingImg} alt="star" />
                    <Rating>4.9</Rating>
                  </DepartmentRating>
                </DepartmentBottomTop>
                <DepartmentCardTitle>Best dental surgeons</DepartmentCardTitle>
                <DepartmentCardDescription>
                  We focus on ergonomics and meeting you where you work. It's
                  only a keystroke away.
                </DepartmentCardDescription>
                <DepartmentCardSales>
                  <SalesImg src={SaleArrow} alt="sales" />
                  <SalesText>15 Sales</SalesText>
                </DepartmentCardSales>
                <DepartmentCardPrice>
                  <DepartmentCardPriceOld>$16.48</DepartmentCardPriceOld>
                  <DepartmentCardPriceNew>$6.48</DepartmentCardPriceNew>
                </DepartmentCardPrice>
                <DepartmentCardLink href="#">Learn More</DepartmentCardLink>
              </DepartmentCardBottom>
            </DepartmentCard>
          </DepartmentCards>
        </DepartmentContentBottom>
      </DepartmentSection>
    </Container>
  );
};

export default Department;
