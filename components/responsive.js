import { css } from "@emotion/react";

const mobile = (props) => {
  return css`
    @media only screen and (max-width: 375px) {
      ${props}
    }
  `;
};

export default mobile;
