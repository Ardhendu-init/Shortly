import { css } from "@emotion/react";
import styled from "@emotion/styled";
import logo from "../public/image/logo.svg";
import Image from "next/image";

const containerStyles = css`
  display: flex;
  ${"" /* align-items: center; */}
  margin-top: 20px;
`;
const Container = styled.div`
  ${containerStyles};
`;
const logoStyles = css`
  margin-left: 150px;
  margin-top: 18px;
`;
const Logo = styled.div`
  ${logoStyles};
`;
const itemStyles = css`
  list-style-type: none;
  display: flex;
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

const Navbar = () => {
  return (
    <Container>
      <Logo>
        <Image src={logo} />
      </Logo>

      <Item>
        <Menu>Features</Menu>
        <Menu>Pricing</Menu>
        <Menu>Resources</Menu>
      </Item>
    </Container>
  );
};

export default Navbar;
