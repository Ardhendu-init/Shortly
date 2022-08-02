import { css } from "@emotion/react";
import styled from "@emotion/styled";
import logo from "../public/logo-top.svg";
import Image from "next/image";
import mobile from "./responsive";

const containerStyles = css`
  display: flex;
  margin-top: 20px;
  ${mobile({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  })}
`;
const Container = styled.div`
  ${containerStyles};
`;
const logoStyles = css`
  margin-left: 150px;
  margin-top: 18px;
  ${mobile({
    marginLeft: "20px",
  })}
`;

const Logo = styled.div`
  ${logoStyles};
`;
const imgStyles = css``;
const StyledImage = styled(Image)`
  ${imgStyles};
`;
const itemStyles = css`
  list-style-type: none;
  display: flex;
  ${mobile({ display: "none" })}
`;
const Item = styled.ul`
  ${itemStyles};
`;
const menuStyles = css`
  font-size: 18px;
  font-weight: 600;
  color: #bfbfbf;
  margin-left: 20px;
  cursor: pointer;
  :hover {
    color: black;
  }
`;
const Menu = styled.li`
  ${menuStyles};
`;
const sideBtnStyles = css`
  width: 60px;
  height: 40px;
  background: none;
  border: none;
  color: #bfbfbf;
  font-size: 45px;

  cursor: pointer;
  margin-bottom: 20px;
  @media (min-width: 376px) {
    display: none;
  }
`;
const SideBtn = styled.button`
  ${sideBtnStyles};
`;

const Navbar = () => {
  return (
    <Container>
      <Logo>
        <StyledImage alt="Logo" src={logo} />
      </Logo>

      <Item>
        <Menu>Features</Menu>
        <Menu>Pricing</Menu>
        <Menu>Resources</Menu>
      </Item>
      <SideBtn>&#x2261;</SideBtn>
    </Container>
  );
};

export default Navbar;
