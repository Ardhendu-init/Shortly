import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";

const maincontainerStyles = css`
  background-color: #f0f1f6;
  display: flex;

  flex-direction: column;
  align-items: center;
`;
const MainContainer = styled.div`
  ${maincontainerStyles};
`;

const inputContainerStyles = css`
  background-image: url("/Meteor.png");
  height: 160px;
  width: 80%;
  display: flex;
  position: relative;
  bottom: 80px;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;
const InputContainer = styled.div`
  ${inputContainerStyles};
`;
const inputStyles = css`
  width: 70%;
  border-radius: 8px;
  border: none;
  padding: 20px;
  ::placeholder {
    color: #efbcc0;
    font-weight: 600;
    font-size: 18px;
  }
`;
const Input = styled.input`
  ${inputStyles};
`;
const buttonStyles = css`
  border-radius: 8px;
  border: none;
  padding: 20px 40px;
  margin-left: 32px;
  font-weight: 900;
  font-size: 18px;
  background-color: #2acfcf;
  color: white;
  cursor: pointer;
`;
const Button = styled.button`
  ${buttonStyles};
`;
const linkContainerStyles = css`
  width: 78%;
  position: relative;
  bottom: 40px;
  margin-bottom: 20px;
`;
const LinkContainer = styled.div`
  ${linkContainerStyles};
`;
const containerInfoStyles = css`
  display: flex;
  justify-content: space-between;
  border-radius: 8px;
  border: none;
  background-color: #fff;
`;
const ContainerInfo = styled.div`
  ${containerInfoStyles};
`;
const actualLinkStyles = css`
  padding-left: 5px;
  margin-left: 20px;
  font-size: 18px;
`;
const ActualLink = styled.p`
  ${actualLinkStyles};
`;
const shortenLinkContainerStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ShortenLinkContainer = styled.div`
  ${shortenLinkContainerStyles};
`;
const shortenLinkStyles = css`
  font-size: 18px;
  color: #2acfcf;
`;
const ShortenLink = styled.p`
  ${shortenLinkStyles};
`;
const copyButtonStyles = css`
  padding: 12px 40px;
  margin-left: 20px;
  margin-right: 40px;
  border-radius: 8px;
  border: none;
  background-color: #2acfcf;
  color: white;
  cursor: pointer;
  font-weight: 900;
  font-size: 15px;
  &:hover {
    background-color: #3a3053;
    font-size: 16px;
  }
`;
const CopyButton = styled.button`
  ${copyButtonStyles};
`;

const Converter = () => {
  const [url, setUrl] = useState("");
  const handleChange = (e) => {
    setUrl(e.target.value);
  };
  return (
    <MainContainer>
      <InputContainer>
        <Input
          placeholder="Shorten a link here..."
          value={url}
          onChange={handleChange}
        ></Input>
        <Button>Shorten it!</Button>
      </InputContainer>
      <LinkContainer>
        <ContainerInfo>
          <ActualLink>
            https://www.w3schools.com/cssref/css_units.asp
          </ActualLink>
          <ShortenLinkContainer>
            <ShortenLink>Needtoshortthelink</ShortenLink>
            <CopyButton>Copy</CopyButton>
          </ShortenLinkContainer>
        </ContainerInfo>
      </LinkContainer>
      <LinkContainer>
        <ContainerInfo>
          <ActualLink>
            https://www.w3schools.com/cssref/css_units.asp
          </ActualLink>
          <ShortenLinkContainer>
            <ShortenLink>Needtoshortthelink</ShortenLink>
            <CopyButton>Copy</CopyButton>
          </ShortenLinkContainer>
        </ContainerInfo>
      </LinkContainer>
      <LinkContainer>
        <ContainerInfo>
          <ActualLink>
            https://www.w3schools.com/cssref/css_units.asp
          </ActualLink>
          <ShortenLinkContainer>
            <ShortenLink>Needtoshortthelink</ShortenLink>
            <CopyButton>Copy</CopyButton>
          </ShortenLinkContainer>
        </ContainerInfo>
      </LinkContainer>
    </MainContainer>
  );
};

export default Converter;
