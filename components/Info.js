import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Image from "next/image";
import logo from "../public/icon-brand-recognition.svg";
import mobile from "./responsive";
const containerStyles = css`
  background-color: #f0f1f6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;
  ${mobile({
    paddingBottom: "0px",
  })}
`;
const Container = styled.div`
  ${containerStyles};
`;
const headingStyles = css`
  margin: 0;
  padding-top: 25px;
  font-size: 50px;
  color: #35323e;
  ${mobile({
    fontSize: "28px",
  })}
`;
const Heading = styled.h1`
  ${headingStyles};
`;
const statDescriptionStyles = css`
  text-align: center;
  line-height: 1.6;
  font-size: 24px;
  font-weight: 500;
  color: #a3a3ad;

  width: 48%;
  ${mobile({
    fontSize: "16px",
    width: "85%",
    paddingTop: "16px",
    paddingBottom: "50px",
  })}
`;
const StatDescription = styled.div`
  ${statDescriptionStyles};
`;
const brandStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 50px;
  ${mobile({
    flexDirection: "column",
    paddingLeft: "10px",
  })}
`;
const Brand = styled.div`
  ${brandStyles};
`;
const brandLeftStyles = css`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  height: 300px;
  width: 360px;
  margin: 50px;
  z-index: 2;
  ${mobile({
    height: "250px",
    width: "340px",
    alignItems: "center",
    margin: "50px  10px",
    marginLeft: "0px",
  })}
`;
const BrandLeft = styled.div`
  ${brandLeftStyles};
`;

const brandLogoStyles = css`
  border-radius: 50%;
  height: 90px;
  width: 90px;
  background-color: #3a3053;
  position: relative;
  bottom: 40px;
  left: 30px;
  ${mobile({
    bottom: "50px",
    left: "0px",
    height: "88px",
    width: "88px",
  })}
`;
const BrandLogo = styled.div`
  ${brandLogoStyles};
`;
const brandHeadingStyles = css`
  margin: 0;
  padding-left: 30px;
  color: #35323e;
  ${mobile({
    paddingLeft: "0px",
    fontSize: "22px",
    position: "relative",
    bottom: "20px",
  })}
`;
const BrandHeading = styled.h2`
  ${brandHeadingStyles};
`;
const branddecsStyles = css`
  padding: 5px 30px 30px 30px;
  font-size: 18px;
  color: #a3a3ad;
  font-weight: 500;
  ${mobile({
    fontSize: "16px",
    textAlign: "center",
    position: "relative",
    bottom: "20px",
  })}
`;
const BrandDesc = styled.p`
  ${branddecsStyles};
`;
const brandimgStyles = css`
  padding: 20px 25px;
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
  ${
    "" /* ${mobile({
    width: "0px",
    border: "4px solid",
    position: "relative",
    height: "300px",
    bottom: "400px",
  })} */
  }
`;
const HLine = styled.hr`
  ${hLineStyles};
`;

const Info = () => {
  return (
    <Container>
      <Heading>Advanced Statistics</Heading>
      <StatDescription>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </StatDescription>
      <Brand>
        <BrandLeft>
          <BrandLogo>
            <BrandImage>
              <Image alt="Logo" src={logo} />
            </BrandImage>
          </BrandLogo>
          <BrandHeading>Brand Recognition</BrandHeading>
          <BrandDesc>
            Boost your brand recognition with each click.Generic links do not
            mean a thing . Branded links help instil confidence in your content.
          </BrandDesc>
        </BrandLeft>

        <BrandLeft>
          <BrandLogo>
            <BrandImage>
              <Image alt="Logo" src={logo} />
            </BrandImage>
          </BrandLogo>
          <BrandHeading>Brand Recognition</BrandHeading>
          <BrandDesc>
            Boost your brand recognition with each click.Generic links do not
            mean a thing . Branded links help instil confidence in your content.
          </BrandDesc>
        </BrandLeft>
        <BrandLeft>
          <BrandLogo>
            <BrandImage>
              <Image alt="Logo" src={logo} />
            </BrandImage>
          </BrandLogo>
          <BrandHeading>Brand Recognition</BrandHeading>
          <BrandDesc>
            Boost your brand recognition with each click.Generic links do not
            mean a thing . Branded links help instil confidence in your content.
          </BrandDesc>
        </BrandLeft>
      </Brand>
      <HLine></HLine>
    </Container>
  );
};

export default Info;
