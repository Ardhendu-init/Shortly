import { css } from "@emotion/react";
import styled from "@emotion/styled";

const containerStyles = css`
  height: 30vh;
  background-image: url("/Meteor.png");
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Container = styled.div`
  ${containerStyles};
`;
const titleStyles = css`
  font-size: 45px;
  margin-bottom: 20px;
  color: #f0f1f6;
  font-weight: 600;
`;
const Title = styled.h1`
  ${titleStyles};
`;
const buttonStyles = css`
  border: none;
  background-color: #9be3e2;
  color: white;
  font-size: 20px;
  font-weight: 1000;
  padding: 18px 50px;
  border-radius: 30px;
  cursor: pointer;
  letter-spacing: 1px;
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

// const Container = styled.div`
//   height: 50vh;
//   background-color: #fcf5f5;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
// `;
// const Title = styled.h1`
//   font-size: 4.4rem;
//   margin-bottom: 20px;
//   ${mobile({ fontSize: "3.3rem" })}
// `;
// const Desc = styled.div`
//   font-size: 24px;
//   font-weight: 300;
//   margin-bottom: 20px;
//   ${mobile({ textAlign: "center" })}
// `;
// const InputContainer = styled.div`
//   width: 50%;
//   height: 40px;
//   background-color: white;
//   display: flex;
//   justify-content: space-between;
//   border: 1px solid lightgray;
//   ${mobile({ width: "80%" })}
// `;
// const Button = styled.button`
//   flex: 1;
//   border: none;
//   background-color: teal;
//   color: white;
// `;
// const Input = styled.input`
//   border: none;
//   flex: 8;
//   padding-left: 20px;
// `;
// const Newsletter = () => {
//   return (
//     <Container>
//       <Title>Newsletter</Title>
//       <Desc>Get timely updates from your favorite products.</Desc>
//       <InputContainer>
//         <Input placeholder="Your email" />
//         <Button>
//           <SendIcon />
//         </Button>
//       </InputContainer>
//     </Container>
//   );
// };
