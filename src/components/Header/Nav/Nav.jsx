import React from "react";
import {
  NavWrapper,
  NavItemsLeft,
  NavList,
  NavItemsRight,
  NavItem,
  NavLink,
  Logo,
  Button,
} from "./styles";

const Nav = () => {
  return (
    <NavWrapper>
      <NavItemsLeft>
        <Logo>MedicalGenuin</Logo>
        <NavList>
          <NavItem>
            <NavLink href="">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="">Product</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="">Pricing</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="">Contact</NavLink>
          </NavItem>
        </NavList>
      </NavItemsLeft>
      <NavItemsRight>
        <NavItem>
          <NavLink href="">Login</NavLink>
        </NavItem>
        <Button>Join Us</Button>
      </NavItemsRight>
    </NavWrapper>
  );
};

export default Nav;
