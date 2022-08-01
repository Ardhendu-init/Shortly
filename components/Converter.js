import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";
import axios from "axios";
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
  position: relative;
  bottom: 80px;
  z-index: 10;
`;
const InputContainer = styled.div`
  ${inputContainerStyles};
`;
const inputFormStyles = css`
  width: 90%;
  display: flex;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
`;
const InputForm = styled.form`
  ${inputFormStyles};
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
  const [info, setInfo] = useState(null);
  const [copyText, setCopyText] = useState("");
  const [btnState, setBtnState] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUrl("");
    const API_Base = "https://api.shrtco.de/v2/";

    const fetchLink = async () => {
      try {
        const response = await axios.get(`${API_Base}shorten?url=${url}`);
        setInfo(response.data.result);
        setCopyText(response.data.result.full_short_link2);
      } catch (error) {
        alert("Invalid URL: " + url);
      }
    };
    fetchLink();
  };
  const handleClick = () => {
    navigator.clipboard.writeText(copyText);
    setBtnState(true);
  };

  return (
    <MainContainer>
      <InputContainer>
        <InputForm onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Shorten a link here..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          ></Input>
          <Button type="submit">Shorten it!</Button>
        </InputForm>
      </InputContainer>
      {info && (
        <LinkContainer>
          <ContainerInfo>
            <ActualLink>{info.original_link}</ActualLink>
            <ShortenLinkContainer>
              <ShortenLink>{info.full_short_link2}</ShortenLink>

              <CopyButton onClick={handleClick}>
                {btnState == true ? "Copied" : "Copy"}
              </CopyButton>
            </ShortenLinkContainer>
          </ContainerInfo>
        </LinkContainer>
      )}
    </MainContainer>
  );
};

export default Converter;
