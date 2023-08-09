import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import { Link as ReactRouterDomLink, useLocation } from "react-router-dom";
import { Toggle } from "../Toggle/Toggle";

interface IMenu {
  open: boolean;
}

interface ILink {
  isActive: boolean;
  children: React.ReactNode;
  link: string;
}

interface IStyledLink {
  isActive: boolean;
  link: string;
}

const HeaderWrapper = styled.header`
  height: 70px;
  width: 100%;
  background: rgb(135, 99, 207);
  background: linear-gradient(
    180deg,
    rgba(135, 99, 207, 1) 21%,
    rgba(61, 146, 156, 1) 85%,
    rgba(2, 0, 36, 1) 030235%
  );
  display: flex;
  align-items: center;
  padding: 0 16px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 5;
`;

const Menu = styled.nav<IMenu>`
  display: ${(p) => (p.open ? "block" : "none")};
  position: absolute;
  width: 100%;
  top: 70px;
  left: 0;
  padding: 8px;
  background: #3d929c;
  font-family: "Open Sans";

  @media screen and (min-width: 768px) {
    display: flex;
    width: initial;
    background: none;
    left: initial;
    top: initial;
    margin-left: auto;
    position: relative;
    border-bottom: none;
  }
`;

const Link: React.FC<ILink> = ({ isActive, children, link, ...props }) => {
  return (
    <ReactRouterDomLink to={link} {...props}>
      {children}
    </ReactRouterDomLink>
  );
};

const StyledLink = styled(Link)<IStyledLink>`
  padding: 4px 8px;
  display: block;
  text-align: center;
  margin: auto 0;
  color: #fff;
  text-decoration: none;
  font-weight: ${(p) => (p.isActive ? "bold" : "normal")};
`;

const MobileBurger = styled.div`
  margin-left: 20px;
  width: 40px;
  padding: 5px;
  > div {
    height: 3px;
    background: #fff;
    margin: 5px 0;
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Header = () => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const theme = useTheme();

  return (
    <HeaderWrapper>
      <h3>Cool Stories</h3>
      <Menu open={menuOpen}>
        <StyledLink isActive={pathname === "/"} link={"/"}>
          Home
        </StyledLink>
        <StyledLink isActive={pathname === "/login"} link={"/login"}>
          Login
        </StyledLink>
      </Menu>
      <Toggle
        toggled={theme.id === "dark" ? "true" : "false"}
        onToggle={theme.setTheme}
      />
      <MobileBurger onClick={() => setMenuOpen((prev) => !prev)}>
        <div></div>
        <div></div>
        <div></div>
      </MobileBurger>
    </HeaderWrapper>
  );
};

export default Header;
