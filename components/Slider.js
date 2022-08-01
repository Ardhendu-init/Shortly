import { css } from "@emotion/react";
import styled from "@emotion/styled";
import people from "../public/people working.png";
import Image from "next/image";
const containerStyles = css`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  ${containerStyles};
`;
const headingStyles = css`
  margin: 0;

  font-size: 100px;
  color: #35323e;
  letter-spacing: 0.25rem;
`;
const Heading = styled.h1`
  ${headingStyles};
`;
const imageStyles = css`
  width: 400px;
  margin-top: -10px;
`;
const ImageContainer = styled.div`
  ${imageStyles};
`;

const Slider = () => {
  return (
    <Container>
      <Heading>MORE THAN JUST</Heading>
      <Heading>SHORTER LINKS</Heading>
      <ImageContainer>
        <Image alt="People-working" src={people} />
      </ImageContainer>
    </Container>
  );
};

export default Slider;
