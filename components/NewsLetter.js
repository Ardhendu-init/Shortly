import { css } from "@emotion/react";
import styled from "@emotion/styled";
import mobile from "./responsive";

const containerStyles = css`
  background-image: url("/Meteor.png");
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 30px;
  ${mobile({
    height: "40vh",
  })}
`;
const Container = styled.div`
  ${containerStyles};
`;
const titleStyles = css`
  font-size: 45px;
  margin-bottom: 20px;
  color: #f0f1f6;
  font-weight: 900;
  ${mobile({
    fontSize: "25px",
    marginBottom: "0px",
    paddingBottom: "15px",
    textTransform: "uppercase",
  })}
`;
const Title = styled.h1`
  ${titleStyles};
`;
const buttonStyles = css`
  border: none;
  background-color: #2bd1d1;
  color: #f0f1f6;
  font-size: 20px;
  font-weight: bold;
  padding: 18px 50px;
  border-radius: 30px;
  cursor: pointer;
  letter-spacing: 1px;
  ${mobile({
    letterSpacing: "0px",
    padding: "18px 40px",
  })}
`;
const Button = styled.button`
  ${buttonStyles};
`;

const NewsLetter = () => {
  return (
    <Container>
      <Title>Boosts your links today</Title>
      <Button>Get Started</Button>
    </Container>
  );
};

export default NewsLetter;
