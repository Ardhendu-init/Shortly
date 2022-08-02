import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Image from "next/image";
import fb from "../public/icon-facebook.svg";
import insta from "../public/icon-instagram.svg";
import pinterest from "../public/icon-pinterest.svg";
import twitter from "../public/icon-twitter.svg";
import logo from "../public/logo.svg";
import mobile from "./responsive";
const containerStyles = css`
  display: flex;
  background-color: #232027;
  padding-bottom: 50px;
  padding-left: 100px;
  ${mobile({
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: "0px",
    paddingBottom: "50px",
  })}
`;
const Container = styled.div`
  ${containerStyles};
`;
const leftStyles = css`
  display: flex;
  padding: 4.5rem;
  flex-direction: column;
  ${mobile({
    padding: "50px ",
    justifyContent: "center",
    alignItems: "center",
  })}
`;
const Left = styled.div`
  ${leftStyles};
`;
const logoStyles = css``;
const Logo = styled.div`
  ${logoStyles};
`;

const socialContainerStyles = css`
  display: flex;
  margin-right: 100px;
  ${mobile({
    margin: "0px",
    position: "relative",
    top: "580px",
    left: "10px",
  })}
`;
const SocialContainer = styled.div`
  ${socialContainerStyles};
`;
const socialIconsStyles = css`
  width: 2rem;
  height: 2rem;

  border-radius: 50%;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-right: 1.5em;
  margin-top: 1.5em;
  margin-left: -5px;
  :hover {
    background-color: #2acfcf;
  }
`;
const SocialIcons = styled.div`
  ${socialIconsStyles};
`;

const centerStyles = css`
  margin-top: 3.2rem;
  margin-right: -20px;
  width: 250px;
  ${mobile({
    margin: "0px",
    textAlign: "center",
    position: "relative",
    bottom: "90px",
  })}
`;
const Center = styled.div`
  ${centerStyles};
`;
const titleStyles = css`
  margin-bottom: 2rem;
  color: #fff;
`;
const Title = styled.h4`
  ${titleStyles};
`;
const listStyles = css`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  ${mobile({
    justifyContent: "center",
    alignItems: "center",
  })}
`;
const List = styled.ul`
  ${listStyles};
`;
const listItemStyles = css`
  width: 50%;
  margin-bottom: 8px;
  color: #bfbfbf;
  cursor: pointer;
  :hover {
    color: #2acfcf;
  }
`;
const ListItem = styled.li`
  ${listItemStyles};
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>
          <Image alt="Logo" src={logo} />
        </Logo>

        <SocialContainer>
          <SocialIcons>
            <Image alt="Facebook" src={fb} />
          </SocialIcons>
          <SocialIcons>
            <Image alt="Twitter" src={twitter} />
          </SocialIcons>
          <SocialIcons>
            <Image alt="Pinterest" src={pinterest} />
          </SocialIcons>
          <SocialIcons>
            <Image alt="Instagram" src={insta} />
          </SocialIcons>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Features</Title>
        <List>
          <ListItem>Link Shortening</ListItem>
          <ListItem>Brand Links</ListItem>
          <ListItem>Analytics</ListItem>
        </List>
      </Center>
      <Center>
        <Title>Resourses</Title>
        <List>
          <ListItem>Blog</ListItem>
          <ListItem>Developers</ListItem>
          <ListItem>Support</ListItem>
        </List>
      </Center>
      <Center>
        <Title>Company</Title>
        <List>
          <ListItem>About</ListItem>
          <ListItem>Our Team</ListItem>
          <ListItem>Careers</ListItem>
          <ListItem>Contact</ListItem>
        </List>
      </Center>
    </Container>
  );
};

export default Footer;
