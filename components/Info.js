import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Image from "next/image";
import logo from "../public/icon-brand-recognition.svg";
const containerStyles = css`
  background-color: #f0f1f6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  ${containerStyles};
`;
const headingStyles = css`
  margin: 0;
  padding-top: 25px;
  font-size: 50px;
  color: #35323e;
`;
const Heading = styled.h1`
  ${headingStyles};
`;
const statDescriptionStyles = css`
  text-align: center;
  line-height: 1.6;
  padding-top: 25px;
  font-size: 24px;
  font-weight: 500;
  margin-top: 0px;
  color: #a3a3ad;
`;
const StatDescription = styled.p`
  ${statDescriptionStyles};
`;
const brandStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const Brand = styled.div`
  ${brandStyles};
`;
const brandLeftStyles = css`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  height: 320px;
  width: 400px;
  margin-bottom: 25px;
  margin-top: 150px;
  margin-right: 150px;
  z-index: 2;
`;
const BrandLeft = styled.div`
  ${brandLeftStyles};
`;
const brandMiddleStyles = css`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  height: 320px;
  width: 400px;
  margin-bottom: 25px;
  margin-top: 150px;
  margin-right: 150px;
  z-index: 2;
`;
const BrandMiddle = styled.div`
  ${brandMiddleStyles};
`;
const brandRightStyles = css`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  height: 320px;
  width: 400px;
  margin-bottom: 25px;
  margin-top: 150px;
  z-index: 2;
`;
const BrandRight = styled.div`
  ${brandRightStyles};
`;

const brandLogoStyles = css`
  border-radius: 50%;
  height: 100px;
  width: 100px;
  background-color: #35323e;
  position: relative;
  bottom: 50px;
  left: 30px;
`;
const BrandLogo = styled.div`
  ${brandLogoStyles};
`;
const brandHeadingStyles = css`
  margin: 0;
  padding-left: 30px;
  color: #35323e;
`;
const BrandHeading = styled.h2`
  ${brandHeadingStyles};
`;
const branddecsStyles = css`
  padding: 5px 30px 30px 30px;
  font-size: 18px;
  color: #a3a3ad;
  font-weight: 500;
`;
const BrandDesc = styled.p`
  ${branddecsStyles};
`;
const brandimgStyles = css`
  padding: 5px 30px;
  margin-top: 25px;
`;
const BrandImage = styled.div`
  ${brandimgStyles};
`;
const hLineStyles = css`
  border: 6px solid;
  color: #2acfcf;
  width: 60%;
  position: relative;
  bottom: 210px;
`;
const HLine = styled.hr`
  ${hLineStyles};
`;

const Info = () => {
  return (
    <Container>
      <Heading>Advanced Statistics</Heading>
      <StatDescription>
        Track how your links are performing across the web with<br></br>our
        advanced statistics dashboard.
      </StatDescription>
      <Brand>
        <BrandLeft>
          <BrandLogo>
            <BrandImage>
              <Image src={logo} />
            </BrandImage>
          </BrandLogo>
          <BrandHeading>Brand Recognition</BrandHeading>
          <BrandDesc>
            Boost your brand recognition with each click.Generic links don't
            mean a thing . Branded links help instil confidence in your content.
          </BrandDesc>
        </BrandLeft>
        <BrandMiddle>
          <BrandLogo>
            <BrandImage>
              <Image src={logo} />
            </BrandImage>
          </BrandLogo>
          <BrandHeading>Brand Recognition</BrandHeading>
          <BrandDesc>
            Boost your brand recognition with each click.Generic links don't
            mean a thing . Branded links help instil confidence in your content.
          </BrandDesc>
        </BrandMiddle>
        <BrandRight>
          <BrandLogo>
            <BrandImage>
              <Image src={logo} />
            </BrandImage>
          </BrandLogo>
          <BrandHeading>Brand Recognition</BrandHeading>
          <BrandDesc>
            Boost your brand recognition with each click.Generic links don't
            mean a thing . Branded links help instil confidence in your content.
          </BrandDesc>
        </BrandRight>
      </Brand>
      <HLine></HLine>
    </Container>
  );
};

export default Info;
