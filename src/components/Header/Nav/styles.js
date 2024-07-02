import styled from "styled-components";

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 0;
`;

export const NavItemsLeft = styled.div`
  display: flex;
  gap: 40px;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const NavItemsRight = styled.div`
  display: flex;
  align-items: center;
  gap: 45px;
`;

export const NavItem = styled.li``;

export const NavLink = styled.a`
  color: rgb(255, 255, 255);
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.2px;
  text-align: center;
`;

export const Logo = styled.h3`
  color: rgb(255, 255, 255);
  font-family: Montserrat;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0.1px;
  text-align: left;
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
